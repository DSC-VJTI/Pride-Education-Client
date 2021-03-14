import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";

chai.use(chaiHttp);
const expect = chai.expect;

import app from "../../../src/app";
import IUser from "../../../src/models/User/IUser";
import User from "../../../src/models/User/User";
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
                    console.log(res.body)
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
    })

});
