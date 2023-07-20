
console.log("Hello World Server Silde Javascript");
//Express Js Server bana ka ak frame work hai
//NPM full form : Node Package Menigar
//Javascript ki app ko hum web/website application Khatai hai 
//Node js ki app ko hum love sa khatai hai package
//Express kindof ak liberary/framework hai
//Express js ak liberary/framework hai
// Liberary mai kya hota hai hum function ko call karta hai
// Framework kia hota hai tora sa sintext bhi framework ka hota hai 
//SERVER KA MATLAB HAI SERIF KARANA WALA
//SERVER AK SOFTWARE HAI NA KA AK HARDWARE
//GUI FULL FORM : grapical user interface
//UI : user interface
//CLI : command line interface ya bhi people ka lia bana gata hai
//API : application programming interface 
//server ak machine hai or mara web/application yani mara laptop ak machine hai 
//Cloud Computing 
//Onpremeses
//Classic Server

//            COMMANDS
//  node -v /v18.16.0 
// node server.mjs //server run karna ka short methode NOT RECOMMENDED
//NPM START/NPM I -G NODEMON server run karna ka sahi methode ya npm run dev RECOMMENDED 
//NPM INIT : package.json ka folder banta hai
//NPM INSTALL EXPRESS : sa package-lock.json or node_module ka folder create hota hai
//NPM START sa humara server run hota hai
//NPM INSTALL : npm install command run karna hi ya package.json ki file talash karta hai

// IMPORTANT   
// hum na ya node.js import export learn kia hai is ka express sa q reaction nahi hai
// ya import export go karna ka kam hai ya mjs hum go node.js learn kar raha hai ya is ka andar phala sa hai
// import export framework kha raha hai just ap mujha asa kar ka da do



import express from 'express';
// import cors from 'cors';
import path from "path"
const __dirname = path.resolve();

import apiv1Router from "./apiv1/index.mjs"
import apiv2Router from "./apiv2/index.mjs"


//app = server
const app = express()
app.use(express.json()); //body parse
// app.use(cors())


// app.use(authRouter)
app.use("/api/v1/", apiv1Router)
app.use("/api/v2/", apiv2Router)
// app.use("/api/v1/", feedRouter)


//    /static/vscode_windows,exe
app.use("/static", express.static(path.join(__dirname, "static")))

app.use('/', express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})
