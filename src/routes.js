import { Router, application, request } from "express";
import { Task } from "./database/Models.js";

const ROUTES = Router();
const BASE_ROUTE = "/tasks/";

ROUTES.get(`/`, (req, res)=>{
    res.json({ title: "NodeJS application ready" });
    req.pause();
    res.end();
});

ROUTES.get(BASE_ROUTE, async (req, res)=>{
    const getTasks = await Task.find();
    res.header("Content-Type", "application/json");
    res.json(getTasks);

    req.pause();
    res.end();
});

ROUTES.get(`${BASE_ROUTE}/:id`, async (req, res) =>{
    try{
        const { id } = req.params;
        const task = await Task.findOne({ _id: id});
        res.header("Content-Type", "application/json");
        res.json(task);

        req.pause();
        res.end();
    }
    catch(err){ console.log(err) }
});

ROUTES.post(BASE_ROUTE, async(req, res)=>{
    const newTask = (new Task({
        value: req.body.value
    }));

    try{
        await newTask.save();

        req.pause();
        res.end();
    }
    catch(error){ console.log(error, "DB: Error in 'post task' method") }
});

ROUTES.put(`${BASE_ROUTE}`, async (req, res)=>{
    try{
        const { id, task } = req.body;

        await Task.findByIdAndUpdate(id, {task: task});

        req.pause();
        res.end();
    }
    catch(error){ console.log(error, "DB: Error in 'put task' method") };
});

ROUTES.delete(`${BASE_ROUTE}/:id`, async (req, res)=>{
    try{
        const { id } = req.params;

        await Task.deleteOne( { _id: id } );

        req.pause();
        res.end();
    }
    catch(error){ console.log(error, "DB: Error in 'delete task' method") };
});

export default ROUTES;