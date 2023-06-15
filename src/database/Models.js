import { model, Schema } from "mongoose";

const Task = model("tasks", (
    new Schema({ task: String })
));

export { Task };