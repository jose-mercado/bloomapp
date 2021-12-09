const dotenv = require("dotenv").config()
const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/api/", (_, res)=>{
    res.json({data: "This is API DATA!!!"});
});

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
});


// *** SOME CONSOLE LOGS TO TEST IF WORKING ***

// console.log("its alive");
// console.log(__dirname);
// console.log(__filename);
// console.log(process.env.USERNAME);
// console.log(process.env.APIKEY);
// console.log(process.env.DBPASS);
// console.log(process.env.PORT);
