import express from "express";
import cors from "cors";
import Connection from "./src/database/Connection.js";
import ROUTES from "./src/routes.js";

const APP = express();
const PORT = 3001;

// Edit the Cors access
APP.use(cors());
APP.use(express.json());
APP.use(ROUTES);

APP.listen(PORT, ()=> {
    console.log("Server: Ready");
    Connection();
});