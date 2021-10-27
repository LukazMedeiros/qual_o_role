import express from "express";
import path from "path";
import { route } from "./routes";

const server = express();
server.use(express.json());

server.set("view engine", "ejs");
server.use(express.static("public"));
server.set("views", path.resolve(__dirname, "views"));

server.use(express.urlencoded({ extended: true }));
server.use(route);

server.listen(3000, () => {
  console.log("server runnig");
});
