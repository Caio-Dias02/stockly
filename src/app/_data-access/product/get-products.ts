import 'server-only';

import { db } from "@/app/_lib/prisma";
import { Product } from "@prisma/client";


export const getProducts = async (): Promise<Product[]> => {
    try {
        const products = await db.product.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
        return products;
    } catch (error) {
        throw new Error('Failed to get products');
    }
}