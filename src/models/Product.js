import mongoose from "mongoose";

const { Schema } = mongoose;

// Define the nutrition sub-schema
const nutritionSchema = new Schema({
  energie: { type: Number, required: true },
  graisses: { type: Number, required: true },
  glucides: { type: Number, required: true },
  proteines: { type: Number, required: true },
  sel: { type: Number, required: true },
});

// Define the main Product schema
const ProductSchema = new Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true, // Ensure slugs are unique
    },
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    infoSingle: {
      type: [String], // Modify description to be an array of strings
      required: true,
    },
    ingredients: {
      type: String,
      required: true,
    },
    nutritionel: {
      type: nutritionSchema,
      required: true,
    },
  },
  { timestamps: true } // Automatically handle createdAt and updatedAt timestamps
);

// Export the model, considering existing connections
export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
