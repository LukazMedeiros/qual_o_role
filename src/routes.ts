import { Router } from "express";

const route = Router();

route.get("/", (request, response) => {
  const categories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return response.render("index", { categories: categories });
});

route.get("/result", (request, response) => {
  let { location, category } = request.query;

  if (!location) {
    return;
  }

  if (!category) {
    category = "macaco";
  }

  const random = Math.random() * 10;

  return response.render("result", {
    location: location,
    category: category,
    random: random,
  });
});

export { route };
