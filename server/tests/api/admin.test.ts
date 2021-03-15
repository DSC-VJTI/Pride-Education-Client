import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";
import mongoose from "mongoose";
import app from "../../src/app";
import IProduct from "../../src/models/Product/IProduct";
import Product from "../../src/models/Product/Product";
import IUser from "../../src/models/User/IUser";
import User from "../../src/models/User/User";
import jwtHandler from "../../src/utility/jwt";

chai.use(chaiHttp);
const expect = chai.expect;

describe("Admin tests", () => {

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
                    expect(res.body).to.have.property("message").not.equal("");
                    done();
                });
        });
    });

    describe("PUT /admin/editProduct/:productId", () => {
        it("edits a product when new details are given", (done) => {
            const updatedProduct = {
                name: "Test updated product name",
                courseDetails: {
                    level: "Intermediate",
                }
            }
            Product.create(productToSave)
                .then((value: IProduct) => {
                    chai
                        .request(app)
                        .put(`/api/admin/editProduct/${value._id.toString()}`)
                        .set('Authorization', `Bearer ${token}`)
                        .send({ userId, ...updatedProduct })
                        .end((err, res) => {
                            expect(err).to.be.null;
                            expect(res.status).to.be.equal(200);
                            expect(res.body).to.be.an("object");
                            expect(res.body).to.have.property("product");
                            expect(res.body.product).to.have.property("name").equal("Test updated product name");
                            expect(res.body.product.courseDetails).to.have.property("level").equal("Intermediate");
                            expect(res.body).to.have.property("message").equal("Product Updated Successfully");
                            done();
                        });
                })
        });

        it("returns 404 when invalid ProductID is given", (done) => {
            const nonExistentProductID = new mongoose.Types.ObjectId();
            chai
                .request(app)
                .put(`/api/admin/editProduct/${nonExistentProductID}`)
                .set('Authorization', `Bearer ${token}`)
                .send({ userId })
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.status).to.be.equal(404);
                    expect(res.body).to.be.an("object");
                    expect(res.body).to.have.property("message").equal("Invalid Product ID");
                    done();
                });
        });


    });

    describe("DELETE /admin/deleteProduct/:productId", () => {
        it("deletes a product when ID is given", (done) => {
            Product.create(productToSave)
                .then((value: IProduct) => {
                    chai
                        .request(app)
                        .delete(`/api/admin/deleteProduct/${value._id.toString()}`)
                        .set('Authorization', `Bearer ${token}`)
                        .send({ userId })
                        .end((err, res) => {
                            expect(err).to.be.null;
                            expect(res.status).to.be.equal(200);
                            expect(res.body).to.be.an("object");
                            expect(res.body).to.have.property("message").equal("Successfully Deleted");
                            done();
                        });
                })
        });

        it("returns 404 when invalid ProductID is given", (done) => {
            const nonExistentProductID = new mongoose.Types.ObjectId();
            chai
                .request(app)
                .delete(`/api/admin/deleteProduct/${nonExistentProductID}`)
                .set('Authorization', `Bearer ${token}`)
                .send({ userId })
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.status).to.be.equal(404);
                    expect(res.body).to.be.an("object");
                    expect(res.body).to.have.property("message").equal("Invalid Product ID");
                    done();
                });
        });
    });

    describe("POST /admin/getUsers/", () => {

        beforeEach(async () => {
            try {
                await User.collection.dropIndexes();
                let users: Array<IUser> = [];
                for (let i = 0; i < 10; i += 1) {
                    users.push(new User({
                        name: `test name ${i}`,
                        email: `test-email-${i}@dsc.in`,
                        mobileNumber: 1236247890 + i + 23,
                        address: `Test address ${i}`,
                        isAdmin: false,
                        _id: mongoose.Types.ObjectId()
                    }))
                }
                await User.insertMany(users);
            } catch (error) {
                console.log(error);
            }

        })

        afterEach((done) => {
            User.deleteMany().then(() => done()).catch(err => done(err))
        })

        it("returns 200 when everything is valid", (done) => {
            chai
                .request(app)
                .post("/api/admin/getUsers")
                .set('Authorization', `Bearer ${token}`)
                .send({ userId })
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.status).to.be.equal(200);
                    expect(res.body).to.be.an("object");
                    expect(res.body).to.have.property("allUsers");
                    expect(res.body.allUsers).to.be.an("array").of.length(11);
                    done();
                });
        });

        it("preserves user schema", (done) => {
            chai
                .request(app)
                .post("/api/admin/getUsers")
                .set('Authorization', `Bearer ${token}`)
                .send({ userId })
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.status).to.be.equal(200);
                    expect(res.body.allUsers[0]).to.be.an("object");
                    expect(res.body.allUsers[1]).to.have.property("name").equal("test name 0")
                    expect(res.body.allUsers[1]).to.have.property("email").equal("test-email-0@dsc.in")
                    expect(res.body.allUsers[1]).to.have.property("mobileNumber").equal(1236247890 + 23)
                    expect(res.body.allUsers[1]).to.have.property("address").equal("Test address 0")
                    expect(res.body.allUsers[1]).to.have.property("isAdmin").equal(false)
                    expect(res.body.allUsers[0]).to.have.property("isAdmin").equal(true)
                    done();
                });
        });
    });
});
