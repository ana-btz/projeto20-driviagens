import dayjs from "dayjs";
import { errors } from "../errors/errors.js";
import { cityRepository } from "../repositories/city.repository.js";
import { flightRepository } from "../repositories/flights.repository.js";

async function create(origin, destination, date) {
  const day = dayjs();
  const flightDate = dayjs(date, "DD-MM-YYYY");

  if (flightDate < day) throw errors.invalidData("This date is not valid");
  if (origin === destination)
    throw errors.conflict("Origin cannot be the same as destination");

  const city1 = await cityRepository.findById(origin);
  const city2 = await cityRepository.findById(destination);

  if (!city1 || !city2) throw errors.notFound("City not found");

  await flightRepository.create(origin, destination, date);
}

async function findAll(origin, destination, smallerDate, biggerDate) {
  if ((biggerDate && !smallerDate) || (smallerDate && !biggerDate)) {
    throw errors.badRequest("Both dates must be passed");
  }

  const smallerDateFormatted = dayjs(smallerDate, "DD-MM-YYYY").format(
    "YYYY-MM-DD"
  );
  const biggerDateFormatted = dayjs(biggerDate, "DD-MM-YYYY").format(
    "YYYY-MM-DD"
  );
  if (
    biggerDate &&
    smallerDate &&
    smallerDateFormatted >= biggerDateFormatted
  ) {
    throw errors.invalidData(
      "bigger-date needs to be greater than smaller-date"
    );
  }

  const flights = await flightRepository.findAll(
    origin,
    destination,
    smallerDateFormatted,
    biggerDateFormatted
  );
  return flights;
}

export const flightService = { create, findAll };
