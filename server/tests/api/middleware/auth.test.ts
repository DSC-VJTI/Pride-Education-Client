import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";

chai.use(chaiHttp);
const expect = chai.expect;

import app from "../../../src/app";
import { generateOtpHash } from "../../../src/utility/otp";


describe("middleware/auth tests", () => {

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
                    done();
                });
        });
    })

});
