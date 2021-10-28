import { Request, Response } from "express";
import { getCategoriesService } from "../services/getCategoriesService";

const renderIndexController = async (request: Request, response: Response) => {
  const categories = await getCategoriesService();
  return response.render("index", { categories: categories });
};

export { renderIndexController };
