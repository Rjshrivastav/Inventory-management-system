import { MongoClient } from "mongodb"
import { NextResponse } from "next/server";


// Replace the uri string with your connection string.
const uri = "mongodb+srv://RanjeetShrivastav:1SQpDaIlZNnRAEpQ@rjmongoproject.v2lyubz.mongodb.net/?retryWrites=true&w=majority&appName=RJmongoProject";
    
const client = new MongoClient(uri);

export async function GET(request){
    const query = request.nextUrl.searchParams.get("query")

    const database = client.db('stock');
    const inventory = database.collection('inventory');

    // Query for a movie that has the title 'Back to the Future'
    
    const products = await inventory.aggregate([{
        $match: {
            $or: [
                { name: { $regex: query, $options: "i"}}
            ]
        }
    }]).toArray()

    // console.log(products);
    return NextResponse.json(products)
}