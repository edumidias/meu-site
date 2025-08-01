import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { MessageCircle, Phone, Clock, MapPin, Send } from "lucide-react";
import { mockData } from "../mock";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá Eduardo! Vi seu portfólio e gostaria de conversar sobre um projeto.");
    window.open(`https://wa.me/${mockData.contact.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Vamos Conversar
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            {mockData.contact.message}
          </p>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* WhatsApp Card */}
          <Card className="bg-gradient-to-br from-green-900/20 to-green-800/20 border-green-800 hover:border-green-600 transition-all duration-300">
            <CardHeader className="pb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-white">WhatsApp</CardTitle>
                  <p className="text-gray-300">Resposta rápida garantida</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-green-500" />
                  <span>+55 {mockData.contact.whatsapp}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="w-5 h-5 mr-3 text-green-500" />
                  <span>Disponível de Segunda a Sexta, 9h às 18h</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-green-500" />
                  <span>Santa Catarina, Brasil</span>
                </div>
              </div>
              
              <Button 
                onClick={handleWhatsAppClick}
                size="lg" 
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 group"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Abrir WhatsApp
              </Button>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Sobre o Atendimento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Orçamento Gratuito</h3>
                  <p className="text-gray-400">
                    Receba uma proposta personalizada sem compromisso. Analisamos seu projeto e enviamos um orçamento detalhado.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Processo Transparente</h3>
                  <p className="text-gray-400">
                    Mantemos você informado em todas as etapas do projeto, com entregas parciais e feedback constante.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Suporte Contínuo</h3>
                  <p className="text-gray-400">
                    Após a entrega, oferecemos suporte para ajustes e dúvidas, garantindo sua total satisfação.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300 cursor-pointer" onClick={handleWhatsAppClick}>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Orçamento</h3>
              <p className="text-gray-400 text-sm">Solicite um orçamento para seu projeto</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300 cursor-pointer" onClick={handleWhatsAppClick}>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Consultoria</h3>
              <p className="text-gray-400 text-sm">Tire suas dúvidas sobre design e vídeo</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300 cursor-pointer" onClick={handleWhatsAppClick}>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Urgente</h3>
              <p className="text-gray-400 text-sm">Projetos com prazo apertado</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;