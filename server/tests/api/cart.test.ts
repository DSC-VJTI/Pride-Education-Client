import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";
import sinon from "sinon";
import app from "../../src/app";
import IProduct from "../../src/models/Product/IProduct";
import Product from "../../src/models/Product/Product";
import IUser from "../../src/models/User/IUser";
import User from "../../src/models/User/User";
import Cart from "../../src/models/Cart/Cart";

chai.use(chaiHttp);
const expect = chai.expect;

describe("Cart tests", () => {

    let userId: string;
    let productIdToDelete: string;

    const productToSave = {
        name: "Nice Product",
        type: "CA",
        price: 875,
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

    // Create the users first
    beforeEach((done) => {
        User.create({
            name: "test name",
            email: "test-emal@dsc.in",
            mobileNumber: 1236547890,
            address: "Test adress",
            isAdmin: true
        }).then((savedUser: IUser) => {
            userId = savedUser._id.toString();
            done();
        }).catch((err) => done(`Failed to add user: ${err.message}`));
    });

    // Create the products
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
                }));
            }
            productIdToDelete = products[7]._id.toString();
            await Product.insertMany(products);

            // Add user and product to cart;
            await Cart.create({
                user: userId,
                products
            });
        } catch (error) {
            console.log(error);
        }
    });

    afterEach((done) => {
        User.deleteMany().then(() => done());
    });

    afterEach((done) => {
        Product.deleteMany().then(() => done());
    });

    afterEach((done) => {
        Cart.deleteMany().then(() => done());
    })

    describe("POST /cart", () => {

        it("shows cart when userId is given", (done) => {
            const body = {
                user: {
                    _id: userId
                }
            }
            chai
                .request(app)
                .post("/api/cart")
                .send({ ...body })
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.status).to.be.equal(200);
                    expect(res.body).to.be.an("object");
                    expect(res.body).to.have.property("myCart");
                    done();
                });
        });

        it("shows products in cart when userId is given", (done) => {
            const body = {
                user: {
                    _id: userId
                }
            }
            chai
                .request(app)
                .post("/api/cart")
                .send({ ...body })
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.status).to.be.equal(200);
                    expect(res.body).to.be.an("object");
                    expect(res.body.myCart).to.be.an("array");
                    expect(res.body.myCart[0]).to.be.an("object");
                    expect(res.body.myCart[0]).to.have.property("products");
                    expect(res.body.myCart[0].products).to.be.an("array").of.length(10);
                    done();
                });
        });

        it("returns 500 if something bad happens", (done) => {
            const errorStatement = "Something bad happened"
            sinon.stub(Cart, "find").callsFake(() => { throw Error(errorStatement) });
            const body = {
                user: {
                    _id: userId
                }
            }
            chai
                .request(app)
                .post("/api/cart")
                .send({ ...body })
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.status).to.be.equal(500);
                    expect(res.body).to.be.an("object");
                    expect(res.body).to.have.property("error").equal(errorStatement);
                    sinon.restore();
                    done();
                });
        })
    });

    describe("POST /cart/:productId", () => {
        it("adds a product to cart when details are given", (done) => {
            const body = {
                user: {
                    _id: userId
                }
            }
            Product.create(productToSave)
                .then((value: IProduct) => {
                    chai
                        .request(app)
                        .post(`/api/cart/${value._id.toString()}`)
                        .send({ ...body })
                        .end((err, res) => {
                            expect(err).to.be.null;
                            expect(res.status).to.be.equal(201);
                            expect(res.body).to.be.an("object");
                            expect(res.body.myCart).to.be.an("object");
                            expect(res.body.myCart).to.have.property("products");
                            expect(res.body.myCart.products).to.be.an("array").of.length(11);
                            done();
                        });
                })
        });

        it("creates a new cart when details are given", (done) => {
            User.create({
                name: "test saved name",
                email: "test-saved-email@dsc.in",
                mobileNumber: 9876543210,
                address: "Test adress 12345",
            }).then((savedUser: IUser) => {
                const body = {
                    user: {
                        _id: savedUser._id.toString()
                    }
                }
                Product.create(productToSave)
                    .then((value: IProduct) => {
                        chai
                            .request(app)
                            .post(`/api/cart/${value._id.toString()}`)
                            .send({ ...body })
                            .end((err, res) => {
                                expect(err).to.be.null;
                                expect(res.status).to.be.equal(201);
                                expect(res.body).to.be.an("object");
                                expect(res.body.myCart).to.be.an("object");
                                expect(res.body.myCart).to.have.property("products");
                                expect(res.body.myCart.products).to.be.an("array").of.length(1);
                                done();
                            });
                    })
            })

        });

        it("returns 500 if something bad happens", (done) => {
            const errorStatement = "Something bad happened"
            sinon.stub(Cart, "findOne").callsFake(() => { throw Error(errorStatement) });
            const body = {
                user: {
                    _id: userId
                }
            }
            Product.create(productToSave)
                .then((value: IProduct) => {
                    chai
                        .request(app)
                        .post(`/api/cart/${value._id.toString()}`)
                        .send({ ...body })
                        .end((err, res) => {
                            expect(err).to.be.null;
                            expect(res.status).to.be.equal(500);
                            expect(res.body).to.be.an("object");
                            expect(res.body).to.have.property("error").equal(errorStatement);
                            sinon.restore();
                            done();
                        });
                })
        });
    });

    describe("DELETE /cart/:productId", () => {

        it("deletes a product when ID is given", (done) => {
            const body = {
                user: {
                    _id: userId
                }
            }
            chai
                .request(app)
                .delete(`/api/cart/${productIdToDelete}`)
                .send({ ...body })
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.status).to.be.equal(201);
                    expect(res.body).to.be.an("object");
                    expect(res.body).to.have.property("newCart");
                    expect(res.body.newCart).to.be.an("object");
                    expect(res.body.newCart).to.have.property("products");
                    expect(res.body.newCart.products).to.be.an("array").of.length(9);
                    done();
                });

        });

        it("returns 404 when invalid ProductID is given", (done) => {
            User.create({
                name: "test saved name",
                email: "test-saved-email@dsc.in",
                mobileNumber: 9876543210,
                address: "Test adress 12345",
            }).then((savedUser: IUser) => {
                const body = {
                    user: {
                        _id: savedUser._id.toString()
                    }
                }
                chai
                    .request(app)
                    .delete(`/api/cart/${productIdToDelete}`)
                    .send({ ...body })
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res.status).to.be.equal(404);
                        expect(res.body).to.be.an("object");
                        expect(res.body).to.have.property("message").equal("User cart doesn't exist");
                        done();
                    });

            })
        });

        it("returns 500 if something bad happens", (done) => {
            const body = {
                user: {
                    _id: userId
                }
            }
            const errorStatement = "Something bad happened"
            sinon.stub(Cart, "findByIdAndUpdate").callsFake(() => { throw Error(errorStatement) });
            chai
                .request(app)
                .delete(`/api/cart/${productIdToDelete}}`)
                .send({ ...body })
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.status).to.be.equal(500);
                    expect(res.body).to.be.an("object");
                    expect(res.body).to.have.property("message").equal(errorStatement);
                    sinon.restore();
                    done();
                });
        })
    });
});
