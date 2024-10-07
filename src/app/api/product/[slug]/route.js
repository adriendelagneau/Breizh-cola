import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Product from "@/models/Product";

export const GET = async (request, { params }) => {
  const { slug } = params;

  try {
    await connect(); // Connect to the database

    const product = await Product.findOne({ slug }, { "nutritionel._id": 0 });

    if (!product) {
      return new NextResponse("Product Not Found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (err) {
    return new NextResponse(`Database Error: ${err.message}`, { status: 500 });
  }
};
