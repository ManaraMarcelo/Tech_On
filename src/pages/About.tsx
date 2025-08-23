import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const founders = [
    {
      name: 'Lucas Vieira',
      role: 'Co-fundador & CTO',
      description: 'Apaixonado por tecnologia desde jovem, Lucas sempre buscou formas inovadoras de apresentar conteúdo digital. Com mais de 15 anos de experiência em Engenharia de Software e experiência em arquitetura de solução digital, ele traz uma visão técnica e estratégica para a TechON.',
      image: '/placeholder-founder-1.jpg'
    },
    {
      name: 'Kelei Araujo',
      role: 'Co-fundador & CEO', 
      description: 'Com background em Design e Marketing Digital, Kelei é o responsável pela experiência visual e estratégica dos tours virtuais. Sua paixão por inovação e tecnologia imersiva o levou a cofundar a TechON, buscando revolucionar a forma como as pessoas exploram ambientes digitalmente.',
      image: '/placeholder-founder-2.jpg'
    }
  ];

  const timeline = [
    { year: '2020', event: 'Fundação da empresa' },
    { year: '2021', event: 'Primeiros projetos comerciais' },
    { year: '2022', event: 'Expansão para novos mercados' },
    { year: '2023', event: 'Mais de 100 projetos entregues' }
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Inovação',
      description: 'Buscamos constantemente novas tecnologias e métodos para oferecer as melhores soluções aos nossos clientes.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Excelência',
      description: 'Comprometemo-nos com a mais alta qualidade em todos os projetos que desenvolvemos.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Colaboração',
      description: 'Acreditamos no poder da colaboração para entregar soluções ainda melhores aos nossos clientes.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Paixão',
      description: 'Fazemos o que amamos e cada projeto reflexa o nosso amor pela inovação e pela tecnologia.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Confiabilidade',
      description: 'Nossos clientes podem contar conosco para entregar projetos no prazo e com transparência em todos os processos.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Impacto',
      description: 'Buscamos gerar impacto positivo transformando a maneira como os negócios do nosso clientes são apresentados aos seus públicos.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Sobre Nós</h1>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Nossa Missão</h2>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              "Nascemos com o intuito de inovar a maneira que os espaços são 
              apresentados aos clientes"
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="section-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Os Fundadores</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <Card key={index} className="card-shadow">
                <CardContent className="p-8">
                  {/* Placeholder for founder image */}
                  <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{founder.name}</h3>
                    <p className="text-primary font-medium mb-4">{founder.role}</p>
                    <p className="text-gray-600 leading-relaxed">{founder.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossa História</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6 mb-12">
              <p>
                A TechON Tour Virtual nasceu da visão compartilhada de Lucas e 
                Kelei de transformar a maneira como empresas e clientes interagem 
                no ambiente digital. Fundada em 2020, em meio aos desafios que 
                obrigaram o mundo a repensar a forma de apresentar produtos e 
                serviços, nossa empresa abraçou as tecnologias imersivas para 
                entregar soluções que permitissem às pessoas explorarem ambientes 
                virtualmente.
              </p>
              
              <p>
                Começamos com um pequeno escritório e alguns clientes locais, mas 
                nossa dedicação à qualidade, inovação tecnológica e atendimento 
                diferenciado nos permitiu crescer rapidamente. Cada projeto trouxe 
                novos aprendizados e a oportunidade de aprimorar ainda mais nossa 
                tecnologia e processos, consolidando nossa posição como referência 
                no setor.
              </p>
              
              <p>
                Nossa jornada é marcada pelo constante aperfeiçoamento e pela 
                busca contínua de soluções que maximizem o engajamento dos 
                usuários e ofereçam experiências digitais verdadeiramente 
                marcantes para nossos clientes e seus negócios.
              </p>
            </div>

            {/* Timeline */}
            <div className="flex justify-center items-center space-x-8 mb-8">
              {timeline.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-4 h-4 bg-primary rounded-full mb-2"></div>
                  <div className="text-sm font-semibold text-primary">{item.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Valores</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;