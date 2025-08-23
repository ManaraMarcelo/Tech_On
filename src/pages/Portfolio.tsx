import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = [
    { name: 'Todos', count: 43 },
    { name: 'Imóveis', count: 15 },
    { name: 'Restaurantes', count: 8 },
    { name: 'Lojas', count: 12 },
    { name: 'Supermercados', count: 4 },
    { name: 'Salões de Festas', count: 4 }
  ];

  const projects = [
    {
      id: 1,
      title: 'Residencial Villa Verde',
      description: 'Tour virtual completo de apartamento decorado com 3 quartos.',
      category: 'Imóveis',
      image: '/placeholder-project-1.jpg'
    },
    {
      id: 2,
      title: 'Cantina Della Nonna',
      description: 'Restaurante italiano com ambientes internos e área externa.',
      category: 'Restaurantes',
      image: '/placeholder-project-2.jpg'
    },
    {
      id: 3,
      title: 'Boutique Elegance',
      description: 'Loja de roupas com dois andares e provadores.',
      category: 'Lojas',
      image: '/placeholder-project-3.jpg'
    },
    {
      id: 4,
      title: 'Supermercado Economia',
      description: 'Tour completo com navegação por corredores e seções.',
      category: 'Supermercados',
      image: '/placeholder-project-4.jpg'
    },
    {
      id: 5,
      title: 'Espaço Celebration',
      description: 'Salão de festas com capacidade para 200 pessoas.',
      category: 'Salões de Festas',
      image: '/placeholder-project-5.jpg'
    },
    {
      id: 6,
      title: 'Condomínio Solar das Palmeiras',
      description: 'Tour das áreas comuns e apartamento modelo.',
      category: 'Imóveis',
      image: '/placeholder-project-6.jpg'
    }
  ];

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Nosso Portfólio</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Explore nossos projetos de tour virtual em um mapa interativo e descubra como 
            transformamos espaços físicos em experiências digitais imersivas.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={activeCategory === category.name ? "default" : "outline"}
                onClick={() => setActiveCategory(category.name)}
                className="rounded-full"
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-12 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Mapa Interativo de Projetos</h2>
            
            {/* Map Container - Simulated interactive map */}
            <div className="relative bg-gray-100 rounded-xl h-96 flex items-center justify-center mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl"></div>
              
              {/* Simulated map markers */}
              <div className="relative w-full h-full">
                <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
                <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-primary rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
                <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-primary rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
                <div className="absolute top-2/3 left-1/4 w-4 h-4 bg-primary rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
                <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-primary rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
                <div className="absolute top-1/3 right-1/2 w-4 h-4 bg-primary rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
              </div>
              
              {/* Map controls */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button className="bg-white shadow-md rounded p-2 hover:shadow-lg transition-shadow">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
                <button className="bg-white shadow-md rounded p-2 hover:shadow-lg transition-shadow">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <button className="bg-white shadow-md rounded p-2 hover:shadow-lg transition-shadow">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Recent Projects Info */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Projetos Recentes</h3>
              <p className="text-gray-600 text-sm">
                Clique em um ponto no mapa para visualizar detalhes do projeto e acessar o tour virtual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="card-shadow hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-500">Tour Virtual</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-white rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button className="w-full" size="sm">
                    Ver Tour Virtual →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;