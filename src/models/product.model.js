const fs = require("fs");
const path = require("path");

// const _filePath =  path.join(__dirname, '/data/products.json');
const _filePath = path.join(
  path.dirname(process.mainModule.filename),
  "../data",
  "products.json"
);

const getProducts = (cb) => {
  console.log("data file path ====> ", _filePath);

  fs.readFile(_filePath, (err, fileContent) => {
    console.log("data file path ====> ", fileContent);
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class ProductModel {
  constructor(t) {
    this.title = t;
  }

  save() {
    console.log("Product saved!");
  }

  static getAllProducts(cb) {
    getProducts(cb);
  }
};
