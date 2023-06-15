import { model, Schema } from "mongoose";

const Task = model("tasks", (
    new Schema({ value: String })
));

export { Task };