import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.479 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          <path d="M11.893 5.5c2.25 0 4.242.875 5.808 2.438 1.563 1.563 2.437 3.559 2.437 5.808 0 4.533-3.69 8.21-8.245 8.21-1.43 0-2.786-.375-3.977-1.031l-2.76.724.747-2.727c-.719-1.235-1.13-2.662-1.13-4.176 0-4.532 3.69-8.21 8.245-8.21-.108-.033.875-.036.875-.036z"/>
        </svg>
      ),
      title: 'WhatsApp',
      subtitle: '(11) 99999-8888',
      description: '@techontour'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'E-mail',
      subtitle: 'contato@techon.com.br',
      description: '@techontour'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.488-1.995.219 0 .359.16.359.379 0 .219-.139.698-.219 1.077-.16.66.359 1.219 1.077 1.219 1.301 0 2.181-1.542 2.181-3.358 0-1.38-1.021-2.4-2.899-2.4-2.021 0-3.278 1.542-3.278 3.358 0 .66.219 1.38.619 1.8.07.08.08.16.06.24-.07.219-.219.898-.26 1.021-.04.16-.16.199-.359.119-1.301-.66-1.981-2.4-1.981-4.14 0-3.278 2.659-6.897 7.677-6.897 4.06 0 6.797 2.899 6.797 6.017 0 4.14-2.301 7.258-5.738 7.258-1.142 0-2.204-.619-2.584-1.301l-.698 2.699c-.219.937-.898 2.021-1.301 2.699 1.021.359 2.101.539 3.239.539 6.622 0 11.99-5.367 11.99-11.987C24.007 5.367 18.639.001 12.017.001z"/>
        </svg>
      ),
      title: 'Instagram', 
      subtitle: '@techontour',
      description: '@techontour'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Estamos prontos para transformar seu espaço em uma experiência virtual imersiva
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Envie sua mensagem</h2>
              
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name">Nome completo</Label>
                  <Input 
                    id="name" 
                    placeholder="Digite seu nome" 
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="contact">E-mail ou Telefone</Label>
                  <Input 
                    id="contact" 
                    placeholder="Digite seu e-mail ou telefone" 
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Como podemos ajudar?" 
                    className="mt-1 min-h-[120px]"
                  />
                </div>

                <Button size="lg" className="w-full button-shadow">
                  Enviar mensagem ✈️
                </Button>
              </form>
            </div>

            {/* Contact Methods */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Fale conosco diretamente</h2>
              
              <div className="space-y-6 mb-12">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="card-shadow hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          {method.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{method.title}</h3>
                          <p className="text-gray-600">{method.subtitle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    Endereço
                  </h3>
                  <p className="text-gray-600 ml-7">
                    Av. Paulista, 1000 - Bela Vista<br />
                    São Paulo - SP, 01310-100
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Horário de atendimento
                  </h3>
                  <p className="text-gray-600 ml-7">
                    Segunda a Sexta: 9h às 18h<br />
                    Sábado: 9h às 13h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <h2 className="text-2xl font-bold text-gray-900">Mapa de Localização</h2>
            </div>
            <p className="text-gray-600 mb-8">Visite nosso escritório em São Paulo</p>
            
            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <p className="text-gray-500">Mapa Interativo</p>
                <p className="text-sm text-gray-400">Av. Paulista, 1000 - São Paulo, SP</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;