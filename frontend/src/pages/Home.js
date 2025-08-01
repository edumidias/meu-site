import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { 
  Target, 
  ShoppingCart, 
  Megaphone, 
  Video, 
  PenTool, 
  Settings,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  MessageCircle,
  Instagram,
  Send,
  Star,
  Award,
  Users,
  TrendingUp
} from "lucide-react";
import { mockData } from "../mock";

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert('Mensagem enviada com sucesso! Eduardo entrará em contato em breve.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const iconComponents = {
    Target,
    ShoppingCart,
    Megaphone,
    Video,
    PenTool,
    Settings
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-red-600">Edu Mídias</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#inicio" className="text-gray-700 hover:text-red-600 transition-colors">Início</a>
            <a href="#sobre" className="text-gray-700 hover:text-red-600 transition-colors">Sobre</a>
            <a href="#servicos" className="text-gray-700 hover:text-red-600 transition-colors">Serviços</a>
            <a href="#portfolio" className="text-gray-700 hover:text-red-600 transition-colors">Portfólio</a>
            <a href="#contato" className="text-gray-700 hover:text-red-600 transition-colors">Contato</a>
          </nav>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-red-50 to-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="text-red-600">Eduardo</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              {mockData.hero.title}
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {mockData.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4">
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar Orçamento
              </Button>
              <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-4">
                <ExternalLink className="w-5 h-5 mr-2" />
                Ver Portfólio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-red-100">
              <CardContent className="pt-6">
                <Award className="w-10 h-10 text-red-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{mockData.about.experience}</div>
                <p className="text-gray-600">de experiência</p>
              </CardContent>
            </Card>
            <Card className="text-center border-red-100">
              <CardContent className="pt-6">
                <Users className="w-10 h-10 text-red-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{mockData.about.clients}</div>
                <p className="text-gray-600">satisfeitos</p>
              </CardContent>
            </Card>
            <Card className="text-center border-red-100">
              <CardContent className="pt-6">
                <TrendingUp className="w-10 h-10 text-red-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{mockData.about.projects}</div>
                <p className="text-gray-600">entregues</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Mim</h2>
              <Separator className="w-20 h-1 bg-red-600 mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {mockData.about.name}
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {mockData.about.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-red-100 text-red-800">Design Gráfico</Badge>
                  <Badge variant="secondary" className="bg-red-100 text-red-800">Varejo</Badge>
                  <Badge variant="secondary" className="bg-red-100 text-red-800">Atacado</Badge>
                  <Badge variant="secondary" className="bg-red-100 text-red-800">Marketing Digital</Badge>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center">
                  <div className="text-white text-center">
                    <Award className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-xl font-semibold">Especialista em<br />Design para Varejo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{mockData.partnership.title}</h2>
              <Separator className="w-20 h-1 bg-red-600 mx-auto" />
            </div>
            <Card className="border-red-100">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
                  {mockData.partnership.description}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {mockData.partnership.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Serviços Oferecidos</h2>
              <Separator className="w-20 h-1 bg-red-600 mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockData.services.map((service) => {
                const IconComponent = iconComponents[service.icon];
                return (
                  <Card key={service.id} className="border-red-100 hover:shadow-lg transition-shadow group">
                    <CardHeader>
                      <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-700 transition-colors">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{mockData.portfolio.title}</h2>
              <p className="text-lg text-gray-600 mb-6">{mockData.portfolio.description}</p>
              <Separator className="w-20 h-1 bg-red-600 mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {mockData.portfolio.items.map((item) => (
                <Card key={item.id} className="overflow-hidden border-red-100 hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-red-100 to-gray-100 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <Star className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm">Projeto Portfolio</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                <ExternalLink className="w-5 h-5 mr-2" />
                Ver Portfólio Completo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">{mockData.nextSteps.title}</h2>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              {mockData.nextSteps.description}
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {mockData.nextSteps.features.map((feature, index) => (
                <div key={index} className="flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-red-200 mr-3" />
                  <span className="text-red-100">{feature}</span>
                </div>
              ))}
            </div>
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4">
              <MessageCircle className="w-5 h-5 mr-2" />
              Agendar Reunião
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Contato</h2>
              <Separator className="w-20 h-1 bg-red-600 mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Informações de Contato</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-red-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">{mockData.contact.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-red-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-900">WhatsApp</p>
                      <p className="text-gray-600">+55 {mockData.contact.whatsapp}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-red-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-900">Localização</p>
                      <p className="text-gray-600">{mockData.contact.location}</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="border-red-100">
                <CardHeader>
                  <CardTitle>Envie uma Mensagem</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      name="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Seu email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      name="company"
                      placeholder="Empresa (opcional)"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                    <Textarea
                      name="message"
                      placeholder="Sua mensagem"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-3xl font-bold text-red-600 mb-4">Edu Mídias</div>
              <p className="text-gray-400 mb-6">Design gráfico profissional para o varejo e atacado</p>
              <div className="flex justify-center space-x-6">
                <a href={mockData.social.instagram} className="text-gray-400 hover:text-red-600 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href={mockData.social.whatsapp} className="text-gray-400 hover:text-red-600 transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a href={mockData.social.tiktok} className="text-gray-400 hover:text-red-600 transition-colors">
                  <Video className="w-6 h-6" />
                </a>
              </div>
            </div>
            <Separator className="bg-gray-800 mb-8" />
            <div className="text-center text-gray-400">
              <p>&copy; 2025 Eduardo – Edu Mídias. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg animate-bounce"
          onClick={() => window.open(`https://wa.me/${mockData.contact.whatsapp}`, '_blank')}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Home;