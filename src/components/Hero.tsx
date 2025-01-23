import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="pt-16 bg-gradient-to-br from-primary-light to-primary">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
              Професійний ремонт насосів та продаж обладнання
            </h1>
            <p className="text-lg mb-8 opacity-90 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              Ваш надійний партнер у ремонті та обслуговуванні насосного обладнання. Також пропонуємо широкий асортимент насосів та запчастин.
            </p>
            <div className="flex gap-4 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
              <a
                href="#contact"
                className="bg-white text-primary px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors"
              >
                Зв'язатися з нами
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="/placeholder.svg"
              alt="Сервісний центр"
              className="rounded-lg shadow-xl animate-fadeIn"
              style={{ animationDelay: "0.6s" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};