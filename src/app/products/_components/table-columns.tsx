'use client';

import { ColumnDef } from "@tanstack/react-table";
import { Product } from "@prisma/client";
import { Badge } from "@/app/_components/ui/badge";
import { Circle } from "lucide-react";

const getStatusLabel = (status: string) => {
    switch (status) {
        case 'IN_STOCK':
            return 'Em Estoque';
        case 'OUT_OF_STOCK':
            return 'Esgotado';
    }
}

export const productTableColumns: ColumnDef<Product>[] = [
    {
        accessorKey: 'name',
        header: 'Produto',
    },
    {
        accessorKey: 'price',
        header: 'Valor Unitário',
    },
    {
        accessorKey: 'stock',
        header: 'Estoque',
    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => {
            const product = row.original
            const label = getStatusLabel(product.status);
            return <Badge variant={product.stock > 0 ? 'default' : 'outline'}>
                <Circle size={12} className={product.stock > 0 ? 'fill-primary-foreground' : 'fill-destructive-foreground'} />
                {label}</Badge>
        }
    },
]