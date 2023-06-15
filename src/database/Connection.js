import { connect } from "mongoose";

const Connection = async ()=>{

    // Modify the base url before deploy
    const BASE_URL = "mongodb://127.0.0.1:27017/tasks_todolist";

    try{
        await connect(BASE_URL)
        .then( ()=> console.log("DB: Ready"));
    }
    catch(error) { console.log(error, "DB: Not connected") };
};

export default Connection;