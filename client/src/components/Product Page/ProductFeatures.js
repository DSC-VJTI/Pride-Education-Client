const axios = require("axios").default;

const Products = axios({
  method: "GET",
  url: "http://localhost:8000/api/products"
})
  .then((res) => {
    res.data["data"];
  })
  .catch((err) => {
    console.log(err);
  });
export default Products;
