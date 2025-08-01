import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, Palette, Video, Code, Star } from "lucide-react";
import { mockData } from "../mock";

const Home = () => {
  const iconComponents = {
    Palette,
    Video,
    Code
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {mockData.personal.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {mockData.personal.title}
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              {mockData.personal.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-4 group">
                  Ver Serviços
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-900 px-8 py-4">
                  Meu Portfólio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              O que eu faço
            </h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mockData.services.map((service) => {
              const Icon = iconComponents[service.icon];
              return (
                <Card key={service.id} className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-700 transition-colors">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-900">
                Ver Todos os Serviços
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 border border-gray-700">
            <Star className="w-12 h-12 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para começar seu projeto?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {mockData.contact.message}
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-4">
                Entrar em Contato
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;