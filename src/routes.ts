import { Router } from "express";
import { createPLaceController } from "./controllers/createPlaceController";
import { renderById } from "./controllers/renderByIdController";
import { renderIndexController } from "./controllers/renderIndexController";
import { renderResultController } from "./controllers/renderResultController";

const route = Router();

route.get("/", renderIndexController);
route.get("/result", renderResultController);
route.get("/role", renderById);

route.post("/createplaces", createPLaceController);

export { route };
