import { connect } from "mongoose";

const Connection = async ()=>{

    // Modify the name database
    const database = "tasks_todolist";
    const BASE_URL = `mongodb://127.0.0.1:27017/${database}`;

    try{
        await connect(BASE_URL)
        .then( ()=> console.log("DB: Ready"));
    }
    catch(error) { console.log(error, "DB: Not connected") };
};

export default Connection;