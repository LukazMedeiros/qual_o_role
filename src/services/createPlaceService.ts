import { IPlace } from "../@types/types";
import { dbConnection } from "../database/databaseConfig";
import { v4 as uuid } from "uuid";

const createPlaceService = async (place: IPlace): Promise<Number[]> => {
  place.id = uuid();
  const result = await dbConnection("places").insert(place);
  return result;
};

export { createPlaceService };
