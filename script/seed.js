const {
  db,
  models: { User, Product },
} = require('../server/db');

async function run() {
  try {
    await db.sync({ force: true })
    console.log("Connecting to Database")
  } catch (err) {
    console.error(err)
  } finally {
    await db.close();
    console.log("Closed Database")
  }
}

run();