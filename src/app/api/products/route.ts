import { db } from "@/app/_lib/prisma";
import { NextResponse } from "next/server";
//Apenas para referencia
export async function GET() {
    const products = await db.product.findMany();
    return NextResponse.json(products, {
        status: 200,
    });
}

export async function POST(request: Request) {
    const data = await request.json();

    const name = data.name;
    const price = data.price;
    const stock = data.stock;

    const product = await db.product.create({
        data: {
            name,
            price,
            stock,
        },
    });
    return NextResponse.json(product, {
        status: 201,
    });
}