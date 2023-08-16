class ProductManager {
  constructor() {
    this.products = [];
  }
  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock)
      return console.log("Must fill all fields");
    if (this.products.some((element) => element.code === code))
      return console.log(`This code ${code} already exists, try another one`);
    const newId = this.products.length + 1;
    const newProduct = {
      id: newId,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    this.products.push(newProduct);
  }
  getProducts() {
    console.log(this.products);
  }
  getProductById(id) {
    let product = this.products.find((element) => element.id == id);
    if (product) {
      return product;
    } else {
      return console.log("Product not found");
    }
  }
}

let stockProductos = new ProductManager();

stockProductos.addProduct(
  "Nike",
  "White Sneakers",
  120,
  "/sqwsdgg/image.jpg",
  "D1132",
  33
);

stockProductos.addProduct(
  "Adidas",
  "Blue Sneakers",
  110,
  "/sqsdfstttt/image.jpg",
  "D1155",
  14
);

stockProductos.addProduct(
  "Puma",
  "Black Sneakers",
  105,
  "/wetesdfstttt/image.jpg",
  "D13412",
  15
);

stockProductos.addProduct(
  "Crocs",
  "Pink sandals",
  15,
  "/wetes23ytttt/image.jpg",
  "D13tt2",
  25
);

stockProductos.addProduct(
  "Nike",
  "Black Sneakers",
  125,
  "/wettttttstttt/image.jpg",
  "D123523",
  33
);

stockProductos.getProducts();
