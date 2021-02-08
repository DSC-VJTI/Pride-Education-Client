import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../src/app";
import "mocha";

chai.use(chaiHttp);
const expect = chai.expect;

describe("Basic test", () => {
  it("gets without error", (done: Mocha.Done) => {
    chai
      .request(app)
      .get("/api/")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.be.an("object");
        expect(res.body).to.have.property("payload").equal("Hello");
        done();
      });
  });
});
