import { Router } from "express";
import { createPLaceController } from "./controllers/createPlaceController";
import { renderIndexController } from "./controllers/renderIndexController";
import { renderResultController } from "./controllers/renderResultController";

const route = Router();

route.get("/", renderIndexController);
route.get("/result", renderResultController);

route.post("/createplaces", createPLaceController);

export { route };
