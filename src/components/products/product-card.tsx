import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Phone from "@/../public/products/phone2.png";

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  discount?: number;
  bestseller?: boolean;
  new?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-gray-100 dark:bg-neutral-800  rounded-xl shadow-lg hover:shadow-md transition-all duration-300 overflow-hidden">
      <div className="absolute top-3 left-3 z-10 flex gap-2">
        {product.discount && (
          <span className="bg-red-500 dark:bg-neutral-950 text-white text-xs font-bold px-2 py-1 rounded-full">
            -{product.discount}%
          </span>
        )}
        {product.bestseller && (
          <span className="bg-blue-500 dark:bg-neutral-950 text-white text-xs font-bold px-2 py-1 rounded-full">
            Mais Vendido
          </span>
        )}
        {product.new && (
          <span className="bg-green-500 dark:bg-neutral-950 text-white text-xs font-bold px-2 py-1 rounded-full">
            Novo
          </span>
        )}
      </div>

      <button className="absolute top-3 right-3 z-10 p-2 bg-white dark:bg-neutral-950 rounded-full shadow-md hover:bg-gray-100 transition-colors">
        <Heart className="w-4 h-4 text-gray-400" />
      </button>

      <Link href={`/produtos/${product.id}`}>
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={Phone}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300 p-5"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/produtos/${product.id}`}>
          <h3 className="font-medium text-gray-900 dark:text-white hover:text-blue-600 line-clamp-2 mb-2">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            {product.discount ? (
              <>
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  R${" "}
                  {(product.price * (1 - product.discount / 100))
                    .toFixed(2)
                    .replace(".", ",")}
                </span>
                <span className="text-sm text-gray-500 dark:text-white/80 line-through ml-2">
                  R$ {product.price.toFixed(2).replace(".", ",")}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                R$ {product.price.toFixed(2).replace(".", ",")}
              </span>
            )}
          </div>
          <Button size="sm" className="p-2 rounded-full">
            <ShoppingCart size={6} />
          </Button>
        </div>
      </div>
    </div>
  );
}
