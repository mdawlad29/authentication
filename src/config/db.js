import pg from "pg"
import dotenv from "dotenv"
const {Client} =pg;
dotenv.config()

const isProduction=process.env.NODE_ENV==="production"

const connectionString=`postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const client=new Client({
    connectionString:isProduction?process.env.DATABASE_URL:connectionString
})

const dbConnect=async()=>{
    try {
        await client.connect();
        console.log("Database connection successful.")
    } catch (error) {
        console.log("Database connection failed!",error)
    }
}

export  {client,dbConnect}