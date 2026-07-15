import { Component } from '@angular/core';
import { ProjectCard, ProjectData } from '../../shared/components/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [
    ProjectCard
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  projects: ProjectData[] = [

    {
      title: 'Store Plugin',

      description:
        'Custom WooCommerce-inspired WordPress plugin for managing online stores. Implements product management, digital and physical sales, PayPal integration, automated email workflows, and order handling.',

      image: '/assets/projects/store-plugin.png',

      repositories: [
        {
          name: 'GitHub',
          url: 'https://www.harrogat.com/harrogat-official-store/'
        }
      ],
      
      technologies: [
        'WordPress',
        'PHP',
        'MySQL',
        'JavaScript',
        'PayPal API'
      ]
    },

    {
      title: 'SpaceWar2D - Arcade Game Engine',

      description:
        'Interactive 2D game developed with React and PixiJS, featuring custom gameplay systems, SAT-based collision detection, and a modular frontend architecture. Includes a Python-based sprite generation pipeline and is designed for future online leaderboard integration.',

      image: '/assets/projects/spacewar.png',

      repositories: [
        {
          name: 'GitHub',
          url: 'https://github.com/Safetyon9/AsteroidWar'
        },
        {
          name: 'Web App',
          url: 'https://safetyon9.github.io/AsteroidWar/'
        }
      ],

      technologies: [
        'React',
        'TypeScript',
        'PixiJS',
        'Python',
        'Vite'
      ]
    },

    {
      title: 'Zoo e-commerce',

      description:
        'Full stack web application developed for zoo management and online sales. Includes an admin dashboard for managing infrastructures and employees, alongside a user area for purchasing tickets and merchandise.',

      image: '/assets/projects/zoo.png',

      repositories: [
        {
          name: 'Frontend',
          url: 'https://github.com/Safetyon9/zooApp-frontend'
        },
        {
          name: 'Backend',
          url: 'https://github.com/Safetyon9/zooApp-backend'
        }
      ],

      technologies: [
        'Angular',
        'TypeScript',
        'Spring Boot',
        'JPA',
        'Hibernate',
        'PostgreSQL'
      ]
    },

    {
      title: 'AI Content Automation System',

      description:
        'AI-powered automation pipeline for generating, validating, and scheduling social media content. Integrates AI APIs, workflow orchestration, and containerized services to automate the complete publishing process.',

      image: '/assets/projects/ai-content.png',

      technologies: [
        'Python',
        'OpenAI API',
        'n8n',
        'Docker',
        'REST API'
      ]
    }

  ];

}