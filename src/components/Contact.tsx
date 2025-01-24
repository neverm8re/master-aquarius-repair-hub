import { Phone, MapPin, Clock, Mail, BrandTiktok } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Телефон",
      details: "+380 XX XXX XX XX",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Адреса",
      details: "вул. Примірна, 123, м. Київ",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Графік роботи",
      details: "Пн-Пт: 9:00 - 18:00\nСб: 10:00 - 15:00",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@vodoliy.com",
    },
    {
      icon: <BrandTiktok className="w-6 h-6" />,
      title: "TikTok",
      details: "#",
      isLink: true,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Контакти
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/10 p-4 rounded-full mb-4">{info.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
              {info.isLink ? (
                <a
                  href={info.details}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 underline"
                >
                  Перейти до TikTok
                </a>
              ) : (
                <p className="opacity-90 whitespace-pre-line">{info.details}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};