const dotenv = require("dotenv").config()
const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.json());

app.use("/api/", (_, res)=>{
    res.json({"message": "success", "people": [{"craft": "ISS", "name": "Mark Vande Hei"}, {"craft": "ISS", "name": "Pyotr Dubrov"}, {"craft": "ISS", "name": "Anton Shkaplerov"}, {"craft": "Shenzhou 13", "name": "Zhai Zhigang"}, {"craft": "Shenzhou 13", "name": "Wang Yaping"}, {"craft": "Shenzhou 13", "name": "Ye Guangfu"}, {"craft": "ISS", "name": "Raja Chari"}, {"craft": "ISS", "name": "Tom Marshburn"}, {"craft": "ISS", "name": "Kayla Barron"}, {"craft": "ISS", "name": "Matthias Maurer"}, {"craft": "ISS", "name": "Alexander Misurkin"}, {"craft": "ISS", "name": "Yusaku Maezawa"}, {"craft": "ISS", "name": "Yozo Hirano"}], "number": 13});
});

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
});

app.use("*", (_,res)=>{
    res.sendFile(path.join(__dirname, "client/build", "index.html"))
});
// *** SOME CONSOLE LOGS TO TEST IF WORKING ***

// console.log("its alive");
// console.log(__dirname);
// console.log(__filename);
// console.log(process.env.USERNAME);
// console.log(process.env.APIKEY);
// console.log(process.env.DBPASS);
// console.log(process.env.PORT);
