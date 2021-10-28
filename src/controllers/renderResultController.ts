import { Request, Response } from "express";
import { withCategory, withoutCategory } from "../services/getPlaceService";

const renderResultController = async (request: Request, response: Response) => {
  const { location, category } = request.query;

  if (!location) {
    return response.status(400).send();
  }

  let result;

  if (!category) {
    console.log("nao recebeu a categoria");
    result = await withoutCategory(location.toString());
  } else {
    result = await withCategory(location.toString(), category.toString());
  }

  console.log(result.length);
  result.forEach((element) => {
    console.log(element);
  });
};

export { renderResultController };
