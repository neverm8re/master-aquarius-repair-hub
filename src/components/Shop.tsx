import { Droplet, Wrench, Cog, Package, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export const Shop = () => {
  const categories = [
    {
      icon: <Droplet className="w-12 h-12 mb-4" />,
      title: "Насоси",
      items: ["Водяні насоси", "Свердловинні насоси", "Циркуляційні насоси"],
    },
    {
      icon: <Wrench className="w-12 h-12 mb-4" />,
      title: "Запчастини",
      items: ["Підшипники", "Сальники", "Робочі колеса"],
    },
    {
      icon: <Cog className="w-12 h-12 mb-4" />,
      title: "Комплектуючі",
      items: ["Реле тиску", "Гідроакумулятори", "Блоки управління"],
    },
    {
      icon: <Package className="w-12 h-12 mb-4" />,
      title: "Крупорушки",
      items: ["Побутові крупорушки", "Промислові крупорушки", "Запчастини"],
    },
  ];

  return (
    <section id="shop" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Наш магазин
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-primary flex justify-center">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 text-center">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button
            variant="default"
            size="lg"
            className="gap-2"
            asChild
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              Перейти до магазину <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};