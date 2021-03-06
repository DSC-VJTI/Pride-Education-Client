import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";
import User from "../../src/models/User/User";
import sinon from "sinon";
import auth from "../../src/middleware/auth.middleware";
import IUser from "../../src/models/User/IUser";

chai.use(chaiHttp);
const expect = chai.expect;

const fakeVerifyOTP = sinon.stub(auth, "verifyOTP");
sinon.stub(auth, "userExists").callsFake((_method) => async (_req, _res, next) => next());

import app from "../../src/app";


describe("Auth tests", () => {

    afterEach((done: Mocha.Done) => {
        User.remove().then(() => done());
    })

    describe('/POST register', () => {

        it("adds user on successful register", (done) => {
            let user = new User({
                name: 'test user',
                email: 'dummy@dsc.com',
                mobileNumber: 9874563210,
                address: 'Chandni Chowk'
            });
            fakeVerifyOTP.callsFake(async (_, __, next) => next());

            chai
                .request(app)
                .post("/api/register")
                .send(user)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.status).to.be.equal(201);
                    expect(res.body).to.be.an("object");
                    expect(res.body).to.have.property("name").equal(user.name);
                    expect(res.body).to.have.property("token").not.equal("");
                    done();
                });
        });

        it("sends 500 response on incomplete fields", (done) => {
            let user = new User({
                name: 'test user',
                email: 'dummy@dsc.com',
                address: 'Chandni Chowk'
            });
            fakeVerifyOTP.callsFake(async (_, __, next) => next());

            chai
                .request(app)
                .post("/api/register")
                .send(user)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.status).to.be.equal(500);
                    expect(res.body).to.be.an("object");
                    expect(res.body).to.have.property("error").not.equal("");
                    done();
                });
        });
    })

    describe('/POST login', () => {

        it("logs in user correctly if user email is there", (done) => {
            let user = new User({
                name: 'test user',
                email: 'dummy@dsc.com',
                mobileNumber: 9874563210,
                address: 'Chandni Chowk'
            });
            user.save().then((savedUser: IUser) => {
                chai
                    .request(app)
                    .post("/api/login")
                    .send(savedUser)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res.status).to.be.equal(201);
                        expect(res.body).to.be.an("object");
                        expect(res.body).to.have.property("user");
                        expect(res.body).to.have.property("token").not.equal("");
                        done();
                    });
            })

        });

        it("has all desired fields", (done) => {
            let user = new User({
                name: 'test user',
                email: 'dummy@dsc.com',
                mobileNumber: 9874563210,
                address: 'Chandni Chowk'
            });
            user.save().then((savedUser: IUser) => {
                chai
                    .request(app)
                    .post("/api/login")
                    .send(savedUser)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res.status).to.be.equal(201);
                        expect(res.body).to.be.an("object");
                        expect(res.body.user).to.have.property("_id").equal(savedUser._id.toString());
                        expect(res.body.user).to.have.property("name").equal(savedUser.name);
                        expect(res.body.user).to.have.property("email").equal(savedUser.email);
                        expect(res.body.user).to.have.property("mobileNumber").equal(savedUser.mobileNumber);
                        done();
                    });
            })

        });

        it("sends 404 response on email not found", (done) => {
            let compromisedUser = {
                email: "none@reply.com"
            }
            chai
                .request(app)
                .post("/api/login")
                .send(compromisedUser)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.status).to.be.equal(404);
                    expect(res.body).to.be.an("object");
                    expect(res.body).to.have.property("error").not.equal("");
                    done();
                });
        });


        it("sends 500 response on incomplete fields", (done) => {
            chai
                .request(app)
                .post("/api/register")
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.status).to.be.equal(500);
                    expect(res.body).to.be.an("object");
                    expect(res.body).to.have.property("error").not.equal("");
                    done();
                });
        });
    });

    describe('/POST sendOtpLogin', () => {

        it("sends OTP if user email is there", (done) => {
            let user = new User({
                name: 'test user',
                email: 'dummy@dsc.com',
                mobileNumber: 9874563210,
                address: 'Chandni Chowk'
            });
            user.save().then((savedUser: IUser) => {
                chai
                    .request(app)
                    .post("/api/sendOtpLogin")
                    .send(savedUser)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res.status).to.be.equal(200);
                        expect(res.body).to.be.an("object");
                        expect(res.body).to.have.property("hash").not.equal("");
                        expect(res.body).to.have.property("email").equal(savedUser.email);
                        done();
                    });
            })

        });

    });

    describe('/POST sendOtpRegister', () => {

        it("sends OTP if user email is not there", (done) => {
            let user = new User({
                name: 'test user',
                email: 'dummy@dsc.com',
                mobileNumber: 9874563210,
                address: 'Chandni Chowk'
            });
            user.save().then((savedUser: IUser) => {
                chai
                    .request(app)
                    .post("/api/sendOtpRegister")
                    .send(savedUser)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res.status).to.be.equal(200);
                        expect(res.body).to.be.an("object");
                        expect(res.body).to.have.property("hash").not.equal("");
                        expect(res.body).to.have.property("email").equal(savedUser.email);
                        done();
                    });
            })

        });

    });
});
