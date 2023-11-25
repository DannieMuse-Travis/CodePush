import express,{Application} from "express"
import cors from "cors"
import { dbConfig } from "./Config/dbConfig"
import { mainApp } from "./MainApp"


const port:number = 2277

const  app:Application = express()
app.use(express.json())
app.use(cors)
mainApp(app)

const  Server = app.listen(port,()=>{
    dbConfig()
    console.log("Server is live")
})

process.on("uncaughtException",(error)=>{
    console.log("server is shutting down because of uncaughtException",(error))
process.exit(1)
})

process.on("unhandledRejection",(reason)=>{
    console.log("server is shutting down because of unhandledRejection",(reason))

    Server.close(()=>{
        process.exit(1)
    })
})
