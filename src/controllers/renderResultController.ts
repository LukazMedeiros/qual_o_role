import { Request, Response } from "express";
import { randomNumber } from "../services/generateRandomNumberService";
import { withCategory, withoutCategory } from "../services/getPlaceService";

const renderResultController = async (request: Request, response: Response) => {
  const { location, category } = request.query;

  if (!location) {
    return response.status(400).send();
  }

  let result;

  if (!category) {
    result = await withoutCategory(location.toString());
  } else {
    result = await withCategory(location.toString(), category.toString());
  }

  if (!result.length) {
    console.log("nao tem valor ai");
    return;
  }

  console.log(randomNumber(result.length));
  return response.json(result[randomNumber(result.length) - 1]);
};

export { renderResultController };
