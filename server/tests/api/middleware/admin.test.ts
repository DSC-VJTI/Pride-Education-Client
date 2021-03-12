import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";

chai.use(chaiHttp);
const expect = chai.expect;
import jwtHandler from "../../../src/utility/jwt";
import app from "../../../src/app";
import IUser from "../../../src/models/User/IUser";
import User from "../../../src/models/User/User";


describe("middleware/admin tests", () => {

    let token: string;
    let userId: string;

    afterEach((done) => {
        User.deleteMany().then(() => done())
    });

    beforeEach((done) => {
        User.create({
            name: "test name",
            email: "test-emal@dsc.in",
            mobileNumber: 1236547890,
            address: "Test adress",
        }).then((savedUser: IUser) => {
            userId = savedUser._id.toString();
            token = jwtHandler.setJwt(savedUser);
            done();
        });
    })

    it("returns 403 if user is not admin", (done) => {
        chai
            .request(app)
            .post("/api/admin/getUsers")
            .set('Authorization', `Bearer ${token}`)
            .send({ userId })
            .end((err, res) => {
                console.log(res.body)
                expect(err).to.be.null;
                expect(res.status).to.be.equal(403);
                expect(res.body).to.be.an("object");
                done();
            });
    })


});
