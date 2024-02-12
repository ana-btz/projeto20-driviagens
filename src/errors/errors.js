function conflict(message) {
  return {
    type: "Conflict",
    message,
  };
}

function invalidData(message) {
  return {
    type: "InvalidData",
    message,
  };
}

function notFound(message) {
  return {
    type: "NotFound",
    message,
  };
}

function badRequest(message) {
  return {
    type: "BadRequest",
    message,
  };
}

function internalError(message) {
  return {
    type: "InternalError",
    message,
  };
}

export const errors = {
  conflict,
  invalidData,
  notFound,
  badRequest,
  internalError,
};
