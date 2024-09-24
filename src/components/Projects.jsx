// src/components/Projects.jsx
import React from 'react';
import Card from './Card';

export default function Projects() {
  const projectData = [
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio built using React and Tailwind CSS.',
      image: 'https://media.journoportfolio.com/system/examples/malachiquarles.webp', 
      link: 'https://link.com', 
    },
    {
      title: 'Instagram Downloader Bot',
      description: 'A Telegram bot that allows users to download Instagram media.',
      image: 'https://www.logo.wine/a/logo/Instagram/Instagram-Logo.wine.svg', 
      link: 'https://link.com', 
    },
    {
      title: 'Temperature converter App',
      description: 'A web application that converts temperatures between Celsius, Fahrenheit, and Kelvin.',
      image: 'https://as1.ftcdn.net/v2/jpg/02/22/86/10/1000_F_222861080_xrfCKN6ocBEGNz7koBUNp4XCg4v8y6Pl.jpg', 
      link: 'https://link.com',
    },
  ];

  return (
    <section className="p-6 bg-violet-600">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projectData.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
