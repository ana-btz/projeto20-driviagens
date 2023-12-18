import { errors } from "../errors/errors.js";
import { flightRepository } from "../repositories/flights.repository.js";
import { travelRepository } from "../repositories/travels.repository.js";
import { passengerRepository } from "../repositories/passenger.repository.js";

async function create(passengerId, flightId) {
  const passenger = await passengerRepository.findById(passengerId);
  if (!passenger) throw errors.notFound("Passenger not found");

  const flight = await flightRepository.findById(flightId);
  if (!flight) throw errors.notFound("Flight not found");

  await travelRepository.create(passengerId, flightId);
}

export const travelService = { create };
