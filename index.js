import express from "express";
import ROUTES from "./src/routes.js";

const APP = express();
const PORT = 3001;

APP.use(express.json());
APP.use(ROUTES);

APP.listen(PORT, ()=> console.log("Server: Ready"));