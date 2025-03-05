import express from "express";
import { PORT } from "./config/envs.js";

const app = express();

app.listen(PORT,()=>{
    console.log('server listening on port: ',PORT)
})