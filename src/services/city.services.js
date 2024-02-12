import { errors } from "../errors/errors.js";
import { cityRepository } from "../repositories/city.repository.js";

async function create(name) {
  const city = await cityRepository.findByName(name);
  if (city) throw errors.conflict("this city has already been added");

  await cityRepository.create(nome);
}

export const cityService = { create };
