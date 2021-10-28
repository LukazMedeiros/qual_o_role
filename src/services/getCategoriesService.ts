import { dbConnection } from "../database/databaseConfig";

const getCategoriesService = async () => {
  const result = await dbConnection("places").select("category");
  return result;
};

export { getCategoriesService };
