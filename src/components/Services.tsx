import { Settings, Wrench, Search, Package } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8 text-white" />,
      title: "Ремонт насосів",
      description: "Професійний ремонт насосів будь-якої складності",
    },
    {
      icon: <Settings className="w-8 h-8 text-white" />,
      title: "Технічне обслуговування",
      description: "Регулярне обслуговування для подовження терміну служби обладнання",
    },
    {
      icon: <Search className="w-8 h-8 text-white" />,
      title: "Діагностика",
      description: "Точна діагностика несправностей з використанням спеціального обладнання",
    },
    {
      icon: <Package className="w-8 h-8 text-white" />,
      title: "Продаж запчастин",
      description: "Широкий асортимент оригінальних запчастин для насосів",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Наші послуги
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark rounded-lg transform transition-transform group-hover:scale-105" />
              <div className="relative p-6 text-white">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="opacity-90">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};