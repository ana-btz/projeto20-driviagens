import httpStatus from "http-status";

export default function handleApplicationErrors(error, _req, res, _next) {
  console.log(error);

  if (error.type === "Conflict") {
    return res.status(httpStatus.CONFLICT).send(error.message);
  }

  if (error.type === "InvalidData") {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
  }

  if (error.type === "NotFound") {
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }

  if (error.type === "BadRequest") {
    return res.status(httpStatus.BAD_REQUEST).send(error.message);
  }

  if (error.type === "InternalError") {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }

  return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
}
