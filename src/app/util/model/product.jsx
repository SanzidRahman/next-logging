import mongoose from "mongoose";

 const productSchema = new mongoose.Schema({
    name : String,
    brand : String,
    price : String,
    origin: String,
 });


 export const Product = mongoose.models.products || mongoose.model("products", productSchema);