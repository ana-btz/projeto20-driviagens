import { passengerRepository } from "../repositories/passengers.repository.js";

async function create(firstName, lastName) {
  await passengerRepository.create(firstName, lastName);
}

export const passengerService = { create };
