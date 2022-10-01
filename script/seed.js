const {
  db,
  models: { User, Product },
} = require('../server/db');


const products = [
  {
    name: "PetAg KMR Kitten Milk Replacer Powder",
    imageURL: "https://i5.walmartimages.com/asr/1da6bd1c-21bc-4d7e-8b72-984018f71ee9.fbf0daf6093e0e1fd214bb81550b27ab.jpeg",
    price: 26.99,
    // description: "",
    brand: "PetAg",
    weight: "12 oz",
    category: "Cat",
  },
  {
    name: "Milk Bone Dog Snacks, Small",
    imageURL: "https://i5.walmartimages.com/asr/37b0d670-ec97-4e99-a6b9-db41d8c26345.2e0b4c699faa3ddb8259c90858bc557d.jpeg",
    price: 8.99,
    // description: "",
    brand: "Milk Bone",
    weight: "24 oz",
    category: "Dog",
  },
  {
    name: "Assorted Bird Toys",
    imageURL: "http://sc04.alicdn.com/kf/H47ee4ba91e2240549fb29c544db61145p.jpg",
    price: 24.99,
    // description: "",
    // brand: "",
    // weight: "",
    category: "Bird",
  },
  // {
  //   name: "",
  //   imageURL: "",
  //   price: "",
  //   // description: "",
  //   // brand: "",
  //   // weight: "",
  //   category: "",
  // },
  // {
  //   name: "",
  //   imageURL: "",
  //   price: ,
  //   // description: "",
  //   // brand: "",
  //   // weight: "",
  //   category: "",
  // },
  // {
  //   name: "",
  //   imageURL: "",
  //   price: ,
  //   // description: "",
  //   // brand: "",
  //   // weight: "",
  //   category: "",
  // },
  // {
  //   name: "",
  //   imageURL: "",
  //   price: ,
  //   // description: "",
  //   // brand: "",
  //   // weight: "",
  //   category: "",
  // },
  // {
  //   name: "",
  //   imageURL: "",
  //   price: ,
  //   // description: "",
  //   // brand: "",
  //   // weight: "",
  //   category: "",
  // },
  // {
  //   name: "",
  //   imageURL: "",
  //   price: ,
  //   // description: "",
  //   // brand: "",
  //   // weight: "",
  //   category: "",
  // },
];

const users = [
  {
    firstName: "admin",
    lastName: "admin",
    email: "admin@admin.com",
    username: "admin",
    password: "admin",
    address: "123 Admin Street",
    city: "Admin",
    state: "Admin",
    zip: "12345",
    isAdmin: true,
  },
  {
    firstName: "customer",
    lastName: "1",
    email: "customer1@customer1.com",
    username: "customer",
    password: "customer",
    address: "1 Customer Street",
    city: "Customer",
    state: "Customer",
    zip: "11111",
    isAdmin: false,
  },
  // {
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   username: "",
  //   password: "",
  //   address: "",
  //   city: "",
  //   state: "",
  //   zip: "",
  //   isAdmin: ,
  // },
]

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(
      products.map((product) => {
        return Product.create(product)
      })
    )
    await Promise.all(
      users.map((user) => {
        return User.create(user)
      })
    )
  } catch (err) {
    console.log(err)
  }
}

async function run() {
  try {
    await db.sync({ force: true })
    console.log("Connecting to Database")
    await seed();
  } catch (err) {
    console.error(err)
  } finally {
    console.log("Closing Database Connection")
    await db.close();
    console.log("Closed Database")
  }
}

run();

module.exports = seed;