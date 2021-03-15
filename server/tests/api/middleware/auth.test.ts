import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";

chai.use(chaiHttp);
const expect = chai.expect;

import app from "../../../src/app";
import IUser from "../../../src/models/User/IUser";
import User from "../../../src/models/User/User";
import jwtHandler from "../../../src/utility/jwt";
import { generateOtpHash } from "../../../src/utility/otp";


describe("middleware/auth tests", () => {

    afterEach((done) => {
        User.deleteMany().then(() => done())
    })

    describe('verify OTP', () => {
        let otp: number;
        let hash: string;
        const email = "test@dsc.in";
        before(() => {
            [otp, hash] = generateOtpHash(email);
        })


        it("gives 401 if hash is incorrect", (done) => {
            chai
                .request(app)
                .post("/api/register")
                .send({ otp, hash: hash + "12345", email })
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.status).to.be.equal(401);
                    expect(res.body).to.be.an("object");
                    expect(res.body).to.have.property("error").equal("Incorrect OTP");
                    done();
                });
        });
    });

    describe('userExists', () => {

        it("returns 422 if user exists and wants to register again", (done) => {
            const user = new User({
                name: 'test user',
                email: 'test@dsc.in',
                mobileNumber: 9874563210,
                address: 'Chandni Chowk'
            });
            user.save().then((savedUser: IUser) => {
                chai.request(app)
                    .post("/api/sendOtpRegister")
                    .send({ email: savedUser.email })
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res.status).to.be.equal(422);
                        expect(res.body).to.be.an("object");
                        expect(res.body).to.have.property("error").equal("Email already exists");
                        done();
                    })
            })
        });

        it("returns 404 if user does not exist and wants to login", (done) => {
            const email = 'test@dsc.in';
            chai.request(app)
                .post("/api/sendOtpLogin")
                .send({ email })
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.status).to.be.equal(404);
                    expect(res.body).to.be.an("object");
                    expect(res.body).to.have.property("error").equal("Email not found");
                    done();
                })

        })
    });

    describe('isAuthenticated', () => {

        let expiredToken: string;
        const productId = "abc123";
        beforeEach((done) => {
            User.create({
                name: "test name",
                email: "test-emal@dsc.in",
                mobileNumber: 1236547890,
                address: "Test adress",
            }).then((savedUser: IUser) => {
                expiredToken = jwtHandler.setJwt(savedUser, 0);
                done();
            });
        });

        afterEach((done) => {
            User.deleteMany().then(() => done())
        })

        it("returns 400 if no authorization header is passed", (done) => {
            chai
                .request(app)
                .delete(`/api/admin/deleteProduct/${productId}`)
                .end((err, res) => {
                    expect(err).to.be.null; "veryScaryToken123"
                    expect(res.status).to.be.equal(400);
                    expect(res.body).to.be.an("object");
                    expect(res.body).to.have.property("error").equal("Bad request header")
                    done();
                });
        });

        it("returns 403 if fake token is passed", (done) => {
            const fakeToken = "veryScaryToken123";
            chai
                .request(app)
                .delete(`/api/admin/deleteProduct/${productId}`)
                .set('Authorization', `Bearer ${fakeToken}`)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.status).to.be.equal(403);
                    expect(res.body).to.be.an("object");
                    expect(res.body).to.have.property("success").equal(false)
                    expect(res.body).to.have.property("error").equal("User not authenticated")
                    done();
                });
        });

        it("returns 403 if expired token is passed", (done) => {
            chai
                .request(app)
                .delete(`/api/admin/deleteProduct/${productId}`)
                .set('Authorization', `Bearer ${expiredToken}`)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.status).to.be.equal(403);
                    expect(res.body).to.be.an("object");
                    expect(res.body).to.have.property("success").equal(false)
                    expect(res.body).to.have.property("error").equal("Access Token Expired")
                    done();
                });
        });
    })

});
