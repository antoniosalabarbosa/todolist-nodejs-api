import { Router } from "express";
import { Task } from "./database/Models.js";

const ROUTES = Router();
const BASE_ROUTE = "/tasks/";

ROUTES.get(`/`, (req, res)=>{
    res.json({ title: "NodeJS application ready" });
});

ROUTES.get(BASE_ROUTE, async (req, res)=>{
    const getTasks = await Task.find();
    res.header("Content-Type", "application/json");
    res.json(getTasks);
});

ROUTES.post(BASE_ROUTE, async(req, res)=>{
    const newTask = (new Task({
        value: req.body.value
    }));

    try{
        await newTask.save();
    }
    catch(error){ console.log(error, "DB: Error in 'post task' method") }
});

ROUTES.put(`${BASE_ROUTE}/:id`, async (req, res)=>{
    try{
        const { id } = req.params;
        const { task } = await req.body;

        await Task.updateOne(
            { _id: id },
            { $set: { task: task} }
        );
    }
    catch(error){ console.log(error, "DB: Error in 'put task' method") };
});

ROUTES.delete(`${BASE_ROUTE}/:id`, async (req, res)=>{
    try{
        const { id } = req.params;

        await Task.deleteOne( { _id: id } );
    }
    catch(error){ console.log(error, "DB: Error in 'delete task' method") };
});

export default ROUTES;