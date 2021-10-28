import { dbConnection } from "../database/databaseConfig";

const withoutCategory = async (district: string) => {
  const result = dbConnection("places").select("*").where({ district });
  return result;
};

const withCategory = async (district: string, category: string) => {
  const result = dbConnection("places")
    .select("*")
    .where({ district, category });
  return result;
};

export { withCategory, withoutCategory };
