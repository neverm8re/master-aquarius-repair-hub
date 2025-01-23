import { CheckCircle, Clock, Wrench, Trophy } from "lucide-react";

export const WhyUs = () => {
  const benefits = [
    {
      icon: <Trophy className="w-12 h-12 text-primary" />,
      title: "Досвід та професіоналізм",
      description: "Більше 10 років досвіду в ремонті та обслуговуванні насосного обладнання",
    },
    {
      icon: <Wrench className="w-12 h-12 text-primary" />,
      title: "Якісні запчастини",
      description: "Використовуємо тільки оригінальні запчастини та професійне обладнання",
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Швидкий ремонт",
      description: "Виконуємо ремонт в найкоротші терміни без втрати якості",
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-primary" />,
      title: "Гарантія якості",
      description: "Надаємо гарантію на всі види ремонтних робіт та запчастини",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Чому обирають нас
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};