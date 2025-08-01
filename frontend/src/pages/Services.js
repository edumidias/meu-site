import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Palette, Video, Code, ArrowRight, CheckCircle } from "lucide-react";
import { mockData } from "../mock";

const Services = () => {
  const iconComponents = {
    Palette,
    Video,
    Code
  };

  const serviceDetails = {
    1: {
      features: [
        "Posts para Instagram e Facebook",
        "Stories animados e interativos",
        "Banners para promoções",
        "Identidade visual consistente",
        "Formatos otimizados para cada plataforma"
      ]
    },
    2: {
      features: [
        "Edição profissional no CapCut",
        "Correção de cor e áudio",
        "Efeitos visuais e transições",
        "Legendas e motion graphics",
        "Otimização para redes sociais"
      ]
    },
    3: {
      features: [
        "Sites responsivos e modernos",
        "Landing pages otimizadas",
        "Integração com redes sociais",
        "SEO básico incluído",
        "Design personalizado"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Meus Serviços
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas em design gráfico, edição de vídeos e desenvolvimento web 
            para impulsionar sua presença digital.
          </p>
          <div className="w-20 h-1 bg-white mx-auto mt-8"></div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-1 gap-12 mb-16">
          {mockData.services.map((service) => {
            const Icon = iconComponents[service.icon];
            const details = serviceDetails[service.id];
            
            return (
              <Card key={service.id} className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-white mb-2">
                        {service.title}
                      </CardTitle>
                      <p className="text-gray-400 text-lg">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">O que está incluído:</h4>
                      <ul className="space-y-3">
                        {details.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <Icon className="w-16 h-16 text-white" />
                        </div>
                        <p className="text-gray-400">
                          Qualidade profissional garantida
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">
              Interessado em algum serviço?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Entre em contato para discutirmos seu projeto e como posso ajudar a torná-lo realidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-4">
                  Falar no WhatsApp
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-900 px-8 py-4">
                  Ver Meu Trabalho
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;