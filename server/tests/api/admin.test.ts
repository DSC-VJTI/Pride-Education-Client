import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";
import User from "../../src/models/User/User";
import IUser from "../../src/models/User/IUser";
import app from "../../src/app";
// import { generateOtpHash } from "../../src/utility/otp";
// import IProduct from "../../src/models/Product/IProduct";
import Product from "../../src/models/Product/Product";
import jwtHandler from "../../src/utility/jwt";

chai.use(chaiHttp);
const expect = chai.expect;

describe("Admin tests", () => {

    // let product: IProduct;
    // let user: IUser;
    let token: string, userId: string;
    const productToSave = {
        name: "Test product name",
        type: "CA",
        price: 768,
        discount: 50,
        courseDetails: {
            level: "Basic",
            subject: "Engineering Maths",
            faculty: "Test faculty",
            subtype: "Test subtype",
            language: "Any language",
            duration: 3600,
            validity: 2500,
            mode: "Online",
            date: new Date(),
        }
    };

    beforeEach((done) => {
        User.create({
            name: "test name",
            email: "test-emal@dsc.in",
            mobileNumber: 1236547890,
            address: "Test adress",
            isAdmin: true
        }).then((savedUser: IUser) => {
            // user = savedUser;
            userId = savedUser._id.toString();
            token = jwtHandler.setJwt(savedUser);
            done();
        });
    })

    afterEach((done) => {
        User.deleteMany().then(() => done());
    });

    afterEach((done) => {
        Product.deleteMany().then(() => done());
    });

    describe("POST /admin/createProduct/", () => {
        it("creates a product when all details are given", (done) => {
            chai
                .request(app)
                .post("/api/admin/createProduct")
                .set('Authorization', `Bearer ${token}`)
                .send({ userId, ...productToSave })
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.status).to.be.equal(201);
                    expect(res.body).to.be.an("object");
                    expect(res.body).to.have.property("product");
                    done();
                });
        });

        it("returns 500 when all details are not given", (done) => {
            const incompleteProduct = {
                name: "Test product name",
                type: "CA",
                discount: 50,
                courseDetails: {
                    level: "Basic",
                    subject: "Engineering Maths",
                    faculty: "Test faculty",
                    subtype: "Test subtype",
                    language: "Any language",
                    duration: 3600,
                    validity: 2500,
                    mode: "Online",
                    date: new Date(),
                }
            };
            chai
                .request(app)
                .post("/api/admin/createProduct")
                .set('Authorization', `Bearer ${token}`)
                .send({ userId, ...incompleteProduct })
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.status).to.be.equal(500);
                    expect(res.body).to.be.an("object");
                    expect(res.body).to.have.property("error").not.equal("");
                    done();
                });
        });
    })
});
