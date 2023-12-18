import { errors } from "../errors/errors.js";
import { passengerRepository } from "../repositories/passenger.repository.js";

async function create(firstName, lastName) {
  await passengerRepository.create(firstName, lastName);
}

async function findTravels(name) {
  const travels = await passengerRepository.findTravels(name);

  if (travels.length > 10)
    throw errors.internalError("Exceeded 10 travels limit");

  return travels;
}

export const passengerService = { create, findTravels };
