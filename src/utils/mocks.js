import { faker } from '@faker-js/faker'

faker.setLocale('es')

export const generateUser = () => {
  const carrito = []
  for (let i = 0; i < 5; i++) {
    const product = generateProduct()
    carrito.push(product)
  }
  const user = {
    id: faker.database.mongodbObjectId(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    gender: faker.name.gender(),
    sex: faker.name.sex(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    address: faker.address.streetAddress(),
    carrito,
  }
  return user
}

const generateProduct = () => {
  const product = {
    id: faker.database.mongodbObjectId(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    category: faker.commerce.department(),
    stock: faker.random.numeric(),
    image: faker.image.image()
  }
  return product
}

export function verifyProducts(req, res, next) {
  const mockProducts = [];
  const numberOfProducts = 100;

  for (let i = 1; i <= numberOfProducts; i++) {
    const code = Math.floor(Math.random() * 100); // Generar número aleatorio entre 0 y 100
    const stock = Math.floor(Math.random() * 100); // Stock aleatorio entre 0 y 100
    const price = Math.random() * 1000; // Precio aleatorio entre 0 y 1000

    const mockProduct = {
      code: code,
      title: `Producto ${i}`,
      description: `Descripcion de producto ${i}`,
      stock: stock,
      id: i,
      status: true,
      price: price,
      thumbnail: `https://ejemplo/thumbnail_${i}.jpg`,
    }
    // Verificar si el producto está mal generado (código, stock o precio es igual a 0)
    if (code === 0) {
      const error = {
        index: i,
        product: mockProduct,
      };
      return next(error);
    }

    if (stock === 0) {
      const error = {
        index: i,
        product: mockProduct,
      };
      return next(error);
    }

    if (price === 0) {
      const error = {
        index: i,
        product: mockProduct,
      };
      return next(error);
    }

    mockProducts.push(mockProduct);
  }

  // Si todos los productos se generaron correctamente, continuamos 
  req.mockProducts = mockProducts;
  next();
}
