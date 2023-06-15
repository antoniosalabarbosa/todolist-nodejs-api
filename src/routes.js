import { Router } from "express";

const ROUTES = Router();

ROUTES.get("/", (req, res)=>{
    res.send("OK");
});

export default ROUTES;