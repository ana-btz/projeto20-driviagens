import { db } from "../database/database.connection.js";

async function create(name) {
  await db.query(`INSERT INTO cities (name) VALUES ($1);`, [name]);
}

async function findByName(name) {
  const cities = await db.query(`SELECT * FROM cities WHERE name=$1,`, [name]);
  console.log(cities);
  return cities.rows[0];
}

async function findById(id) {
  const cities = await db.query(`SELECT * FROM cities WHERE id=$1,`, [id]);
  return cities.rows[0];
}

export const cityRepository = { create, findByName, findById };
