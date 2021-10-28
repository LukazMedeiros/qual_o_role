import { Request, Response } from "express";
import { getById } from "../services/getPlaceService";

const renderById = async (request: Request, response: Response) => {
  const { id } = request.query;

  if (!id) {
    return response.status(400).send();
  }

  const result = await getById(id.toString());
  return response.render("result", { result: result });
};

export { renderById };
