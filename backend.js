import express from "express";
import cors from "cors";
//import "./user.js";


const app = express();
const port = 8000;


app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});  