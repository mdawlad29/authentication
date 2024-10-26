import pg from "pg"
const {Client} =pg;

const client=new Client({
    user:"postgres",
    password:"awlad",
    host:"localhost",
    port:5432,
    database:"authentication"
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