import { MongoClient } from "mongodb"
import { NextResponse } from "next/server";


// Replace the uri string with your connection string.
const uri = "mongodb+srv://RanjeetShrivastav:1SQpDaIlZNnRAEpQ@rjmongoproject.v2lyubz.mongodb.net/?retryWrites=true&w=majority&appName=RJmongoProject";
    
const client = new MongoClient(uri);

export async function GET(request){

    const database = client.db('stock');
    const inventory = database.collection('inventory');

    // Query for a movie that has the title 'Back to the Future'
    const query = {};
    const products = await inventory.find(query).toArray();

    // console.log(products);
    return NextResponse.json(products)

}

export async function POST(request){

    try {
        const body = await request.json();
        const database = client.db('stock');
        const inventory = database.collection('inventory');
    
        // Check if the product with the given name already exists
        const existingProduct = await inventory.findOne({ name: body.name, category: body.category });
        console.log(existingProduct)
    
        if (existingProduct) {
          // If the product exists, update its details
          await inventory.updateOne(
            { name: body.name },
            { $set: { category: body.category, price: body.price, quantity: body.quantity } }
          );
          return new Response(JSON.stringify({ message: 'Product updated successfully.', ok: true }), {
            headers: { 'Content-Type': 'application/json' },
          });
        } else {
          // If the product doesn't exist, add a new one
          await inventory.insertOne(body);
          return new Response(JSON.stringify({ message: 'Product added successfully.', ok: true }), {
            headers: { 'Content-Type': 'application/json' },
          });
        }
      } catch (error) {
        console.error('Error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      
}
