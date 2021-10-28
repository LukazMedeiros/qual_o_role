import { Request, Response } from "express";
import { IPlace } from "../@types/types";
import { createPlaceService } from "../services/createPlaceService";

const createPLaceController = async (request: Request, response: Response) => {
  const { name, category, address, district, description }: IPlace =
    request.body;

  try {
    const result = await createPlaceService({
      name,
      category,
      address,
      district,
      description,
    });

    return response.json({ message: "cadastrado com sucesso" });
  } catch (error) {
    return response.json(error);
  }
};

export { createPLaceController };
