import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Star,
  Truck,
  ShieldCheck,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import ProductCard from "@/components/products/product-card";
import Image from "next/image";
import Phone from "@/../public/products/phone2.png";

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Smartphone Premium",
      price: 2999.9,
      rating: 4.8,
      image: "/images/phone.jpg",
      discount: 15,
    },
    {
      id: 2,
      name: "Fone Bluetooth",
      price: 499.9,
      rating: 4.5,
      image: "/images/headphones.jpg",
      bestseller: true,
    },
    {
      id: 3,
      name: "Notebook Ultrafino",
      price: 4599.9,
      rating: 4.9,
      image: "/images/laptop.jpg",
      new: true,
    },
    {
      id: 4,
      name: "Smartwatch",
      price: 1299.9,
      rating: 4.3,
      image: "/images/watch.jpg",
    },
  ];

  const categories = [
    {
      name: "Tecnologia",
      icon: <ShoppingBag size={20} />,
      href: "/categorias/tecnologia",
    },
    { name: "Moda", icon: <ShoppingBag size={20} />, href: "/categorias/moda" },
    {
      name: "Casa e Decoração",
      icon: <ShoppingBag size={20} />,
      href: "/categorias/casa-decoracao",
    },
    {
      name: "Beleza",
      icon: <ShoppingBag size={20} />,
      href: "/categorias/beleza",
    },
    {
      name: "Esportes",
      icon: <ShoppingBag size={20} />,
      href: "/categorias/esportes",
    },
    {
      name: "Livros",
      icon: <ShoppingBag size={20} />,
      href: "/categorias/livros",
    },
    {
      name: "Brinquedos",
      icon: <ShoppingBag size={20} />,
      href: "/categorias/brinquedos",
    },
    {
      name: "Alimentos",
      icon: <ShoppingBag size={20} />,
      href: "/categorias/alimentos",
    },
  ];

  return (
    <main className="w-full flex min-h-screen flex-col">
      <section className="w-full relative px-10 h-[600px] bg-gradient-to-r from-blue-400 to-blue-700 dark:from-neutral-900 dark:to-neutral-900 flex items-center">
        <div className="w-full flex items-center justify-center px-6 z-10">
          <div className="w-full flex flex-col items-center">
            <h1 className="text-5xl font-bold text-white mb-4">
              As melhores ofertas estão aqui
            </h1>
            <p className="text-xl text-white mb-8">
              Descubra produtos incríveis com descontos exclusivos
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-300 dark:bg-neutral-950 dark:text-white dark:hover:bg-neutral-800 px-8 py-6 text-lg"
            >
              Comprar agora
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center p-6 bg-white dark:bg-neutral-950 rounded-lg shadow-lg">
              <Truck className="text-blue-600 mr-4" size={32} />
              <div>
                <h3 className="font-semibold text-lg">Frete Grátis</h3>
                <p className="text-gray-600">Para compras acima de R$ 200</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-white dark:bg-neutral-950 rounded-lg shadow-lg">
              <ShieldCheck className="text-blue-600 mr-4" size={32} />
              <div>
                <h3 className="font-semibold text-lg">Compra Segura</h3>
                <p className="text-gray-600">Seus dados protegidos</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-white dark:bg-neutral-950 rounded-lg shadow-lg">
              <Star className="text-blue-600 mr-4" size={32} />
              <div>
                <h3 className="font-semibold text-lg">Avaliação 5 estrelas</h3>
                <p className="text-gray-600">Pelos nossos clientes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Destaques</h2>
          <Link
            href="/produtos"
            className="flex items-center text-blue-600 hover:text-blue-800 dark:text-white"
          >
            Ver todos <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-neutral-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Categorias</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="flex flex-col items-center p-6 bg-white dark:bg-neutral-950 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-blue-100 dark:bg-white dark:text-neutral-950 p-4 rounded-full mb-4">
                  {category.icon}
                </div>
                <h3 className="font-medium text-center">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
