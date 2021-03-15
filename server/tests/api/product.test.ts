import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";
import mongoose from "mongoose";
import app from "../../src/app";
import IProduct from "../../src/models/Product/IProduct";
import Product from "../../src/models/Product/Product";

chai.use(chaiHttp);
const expect = chai.expect;

describe("Product tests", () => {

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

    afterEach((done) => {
        Product.deleteMany().then(() => done());
    });

    describe("GET /products", () => {

        beforeEach(async () => {
            try {
                await Product.collection.dropIndexes();
                let products: Array<IProduct> = [];
                for (let i = 0; i < 10; i += 1) {
                    products.push(new Product({
                        name: "Test product name " + i,
                        type: "CA",
                        price: 768 + i,
                        discount: 50 + i,
                        courseDetails: {
                            level: "Basic",
                            subject: "Engineering Maths " + i,
                            faculty: "Test faculty",
                            subtype: "Test subtype",
                            language: "Any language",
                            duration: 3600 + i,
                            validity: 2500,
                            mode: "Online",
                        }
                    }))
                }
                await Product.insertMany(products);
            } catch (error) {
                console.log(error);
            }
        })

        it("gets all products", (done) => {
            chai
                .request(app)
                .get("/api/products")
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.status).to.be.equal(200);
                    expect(res.body).to.be.an("object");
                    expect(res.body).to.have.property("data");
                    expect(res.body.data).to.be.an("array");
                    expect(res.body.data).to.have.length(10);
                    done();
                });
        });

        it("retains shape of data", (done) => {
            chai
                .request(app)
                .get("/api/products")
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.status).to.be.equal(200);
                    expect(res.body.data[0]).to.be.an("object");
                    expect(res.body.data[0]).to.have.property("name").equal("Test product name 0");
                    expect(res.body.data[2]).to.have.property("price").equal(770);
                    expect(res.body.data[9].courseDetails).to.have.property("duration").equal(3609);
                    done();
                });
        });
    });

    describe("GET /products/:id", () => {
        it("gets a product when correct ID is given", (done) => {
            Product.create(productToSave)
                .then((value: IProduct) => {
                    chai
                        .request(app)
                        .get(`/api/products/${value._id.toString()}`)
                        .end((err, res) => {
                            expect(err).to.be.null;
                            expect(res.status).to.be.equal(200);
                            expect(res.body).to.be.an("object");
                            expect(res.body).to.have.property("data");
                            done();
                        });
                })
        });

        it("retains product shape correctly when correct ID is given", (done) => {
            Product.create(productToSave)
                .then((value: IProduct) => {
                    chai
                        .request(app)
                        .get(`/api/products/${value._id.toString()}`)
                        .end((err, res) => {
                            expect(err).to.be.null;
                            expect(res.status).to.be.equal(200);
                            expect(res.body.data).to.be.an("object");
                            expect(res.body.data).to.have.property("name").equal("Test product name");
                            expect(res.body.data).to.have.property("price").equal(768);
                            expect(res.body.data.courseDetails).to.have.property("subject").equal("Engineering Maths");
                            expect(res.body.data.courseDetails).to.have.property("validity").equal(2500);
                            done();
                        });
                })
        });

        it("returns 404 when invalid ID is given", (done) => {
            const nonExistentProductID = new mongoose.Types.ObjectId();
            chai
                .request(app)
                .get(`/api/products/${nonExistentProductID}`)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.status).to.be.equal(404);
                    expect(res.body).to.be.an("object");
                    expect(res.body).to.have.property("message").equal("Product doesn't exist");
                    done();
                });
        });
    });
});
