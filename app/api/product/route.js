import { MongoClient } from "mongodb"
import { NextResponse } from "next/server";


// Replace the uri string with your connection string.
const uri = "mongodb+srv://RanjeetShrivastav:1SQpDaIlZNnRAEpQ@rjmongoproject.v2lyubz.mongodb.net/?retryWrites=true&w=majority&appName=RJmongoProject";
    
const client = new MongoClient(uri);

export async function GET(request){

  try {
    const database = client.db('stock');
    const inventory = database.collection('inventory');

    // Query for a movie that has the title 'Back to the Future'
    const query = {};
    const products = await inventory.find(query).toArray();

    // console.log(products);
    return NextResponse.json(products)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export async function POST(request){

    let body = await request.json()
    
      try {
        const database = client.db('stock');
        const inventory = database.collection('inventory');
    
        // Query for a movie that has the title 'Back to the Future'
        const product = await inventory.insertOne(body);
    
        // console.log(product);
        return NextResponse.json({product, ok: true})
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }
