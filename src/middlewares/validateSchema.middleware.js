import { errors } from "../errors/errors.js";

export function validateSchema(schema) {
  return (req, _res, next) => {
    const validation = schema.validate(req.body);

    if (validation.error) {
      console.log(validation.error.details);
      throw errors.invalidData("Incorrect data");
    }

    next();
  };
}
