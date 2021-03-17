import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";
import sinon from "sinon";
import User from "../../src/models/User/User";
import IUser from "../../src/models/User/IUser";
import app from "../../src/app";
import { generateOtpHash } from "../../src/utility/otp";

chai.use(chaiHttp);
const expect = chai.expect;

describe("Auth tests", () => {

    afterEach((done) => {
        User.deleteMany().then(() => done());
    })

    describe("Bypassing VerifyOTP middleware", () => {
        const email = "test-email@test.in";

        let otp: number, hash: string;
        beforeEach(() => {
            [otp, hash] = generateOtpHash(email);
        })
        afterEach((done: Mocha.Done) => {
            User.deleteMany().then(() => done());
        })

        describe('/POST register', () => {

            it("adds user on successful register", (done) => {
                let user = {
                    name: 'test user',
                    email: email,
                    mobileNumber: 9874563210,
                    address: 'Chandni Chowk'
                };
                const body = { ...user, otp, hash };
                chai
                    .request(app)
                    .post("/api/register")
                    .send(body)
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
                const user = {
                    name: 'test user',
                    email,
                    address: 'Chandni Chowk'
                };
                const body = { ...user, otp, hash };
                chai
                    .request(app)
                    .post("/api/register")
                    .send(body)
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
                    email,
                    mobileNumber: 9874563210,
                    address: 'Chandni Chowk'
                });
                user.save().then((savedUser: IUser) => {
                    chai
                        .request(app)
                        .post("/api/login")
                        .send({ email: savedUser.email, otp, hash })
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
                    email,
                    mobileNumber: 9874563210,
                    address: 'Chandni Chowk'
                });
                user.save().then((savedUser: IUser) => {
                    chai
                        .request(app)
                        .post("/api/login")
                        .send({ email: savedUser.email, otp, hash })
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

            it("returns 500 if something bad happens", (done) => {
                const errorStatement = "Something bad happened"
                sinon.stub(User, "findOne").callsFake(() => { throw Error(errorStatement) });
                let user = new User({
                    name: 'test user',
                    email,
                    mobileNumber: 9874563210,
                    address: 'Chandni Chowk'
                });
                user.save().then((savedUser: IUser) => {
                    chai
                        .request(app)
                        .post("/api/login")
                        .send({ email: savedUser.email, otp, hash })
                        .end((err, res) => {
                            expect(err).to.be.null;
                            expect(res.status).to.be.equal(500);
                            expect(res.body).to.be.an("object");
                            expect(res.body).to.have.property("error").equal(errorStatement);
                            sinon.restore();
                            done();
                        });
                });
            });


        });

    })

    describe("Bypass userExists middleware", () => {

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
            it("does not send OTP if user email is there", (done) => {
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
                        .send({ email: savedUser.email })
                        .end((err, res) => {
                            expect(err).to.be.null;
                            expect(res.status).to.be.equal(422);
                            expect(res.body).to.be.an("object");
                            expect(res.body).to.have.property("error").not.equal("");
                            done();
                        });
                })

            });


            it("sends OTP if user email is not there", (done) => {
                const email = "test@dsc.in";
                chai
                    .request(app)
                    .post("/api/sendOtpRegister")
                    .send({ email })
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res.status).to.be.equal(200);
                        expect(res.body).to.be.an("object");
                        expect(res.body).to.have.property("hash").not.equal("");
                        expect(res.body).to.have.property("email").equal(email);
                        done();
                    });

            });

        });
    })

});
