import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ExternalLink, Star, Eye, Download } from "lucide-react";
import { mockData } from "../mock";

const Portfolio = () => {
  const handlePortfolioClick = () => {
    window.open(mockData.portfolio.link, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {mockData.portfolio.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            {mockData.portfolio.description}
          </p>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>

        {/* Main Portfolio Card */}
        <div className="mb-12">
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-300">
            <CardContent className="p-0">
              <div className="relative">
                {/* Portfolio Preview */}
                <div className="h-80 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
                  <div className="text-center z-20">
                    <Star className="w-16 h-16 text-white mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Portfólio Completo</h3>
                    <p className="text-gray-300">Todos os meus trabalhos em um só lugar</p>
                  </div>
                  
                  {/* Floating elements for decoration */}
                  <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 right-20 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-500"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <Eye className="w-8 h-8 text-white mx-auto mb-2" />
                      <h4 className="font-semibold text-white mb-1">Visualização</h4>
                      <p className="text-gray-400 text-sm">Galeria interativa</p>
                    </div>
                    <div className="text-center">
                      <Download className="w-8 h-8 text-white mx-auto mb-2" />
                      <h4 className="font-semibold text-white mb-1">Downloads</h4>
                      <p className="text-gray-400 text-sm">Materiais disponíveis</p>
                    </div>
                    <div className="text-center">
                      <Star className="w-8 h-8 text-white mx-auto mb-2" />
                      <h4 className="font-semibold text-white mb-1">Projetos</h4>
                      <p className="text-gray-400 text-sm">Trabalhos realizados</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button 
                      size="lg" 
                      onClick={handlePortfolioClick}
                      className="bg-white text-black hover:bg-gray-200 px-8 py-4 group"
                    >
                      <ExternalLink className="w-5 h-5 mr-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                      {mockData.portfolio.linkText}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Categories Preview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Design Gráfico</h3>
              <p className="text-gray-400 text-sm">Artes para redes sociais, logotipos e materiais promocionais</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Edição de Vídeos</h3>
              <p className="text-gray-400 text-sm">Vídeos para redes sociais, apresentações e conteúdo digital</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Desenvolvimento Web</h3>
              <p className="text-gray-400 text-sm">Sites e aplicações web modernas e responsivas</p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">
              Gostou do que viu?
            </h2>
            <p className="text-gray-300 mb-6">
              Entre em contato para discutirmos seu próximo projeto
            </p>
            <Button 
              onClick={() => window.open(`https://wa.me/${mockData.contact.whatsapp}`, '_blank')}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3"
            >
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;