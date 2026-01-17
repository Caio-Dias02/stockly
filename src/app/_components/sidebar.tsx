
import { LayoutGrid, PackageIcon, ShoppingBagIcon } from "lucide-react";
import { SidebarButton } from "./sidebarButton";

export const Sidebar = () => {
    return (
        <div className="w-64 bg-white">
            {/* Logo */}
            <div className="px-8 py-6">
                <h1 className="font-bold text-2xl">STOCKLY</h1>
            </div>
            {/* botoes */}
            <div className="flex flex-col gap-2 p-2">

                <SidebarButton href="/">
                    <LayoutGrid size={20} />
                    Dashboard
                </SidebarButton>

                <SidebarButton href="/products">
                    <PackageIcon size={20} />
                    Produtos
                </SidebarButton>

                <SidebarButton href="/sales">
                    <ShoppingBagIcon size={20} />
                    Vendas
                </SidebarButton>

            </div>
        </div>
    );
};