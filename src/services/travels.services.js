import { errors } from "../errors/errors.js";
import { flightRepository } from "../repositories/flight.repository.js";
import { travelRepository } from "../repositories/travels.repositry.js";
import { passengerRepository } from "../repositories/passengers.repository.js";

async function create(passengerId, flightId) {
  const passenger = await passengerRepository.findById(passengerId);
  if (!passenger) throw errors.notFound("Passenger not found");

  const flight = await flightRepository.findById(flightId);
  if (!flight) throw errors.notFound("Flight not found");

  await travelRepository.create(passengerId, flightId);
}

export const travelService = { create };
