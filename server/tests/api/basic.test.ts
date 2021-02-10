import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../src/app";
import "mocha";

chai.use(chaiHttp);
const expect = chai.expect;

describe("Basic test", () => {
  it("gets without error", (done: Mocha.Done) => {
    const should = chai.should();
    chai
      .request(app)
      .get("/api/")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.be.an("object");
        res.body.should.have.property("payload").equal("Hello");
        done();
      });
  });
});
