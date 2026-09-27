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
        'Custom modular e-commerce plugin developed in PHP for WordPress, covering the complete sales flow with product and variant management, cart, coupons, orders, checkout, server-side validation, and automated PayPal payment confirmation.',

      image: '/assets/projects/store-plugin.png',

      repositories: [
        {
          name: 'Web App',
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
      title: 'Volleyball Analysis Desktop App',

      description:
        'Offline-first desktop application for post-match volleyball analysis, currently moving from architecture design into development. Built around an event-driven match model for players, rallies, rotations, technical actions, and advanced statistics, with planned video synchronization and timeline-based analysis for performance evaluation and opponent study.',

      image: '/assets/projects/volleyball-analysis.png',

      technologies: [
        'React',
        'TypeScript',
        'Tauri',
        'Rust',
        'SQLite',
        'FFmpeg'
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
      title: 'Interactive Narrative Application',

      description:
        'Modular narrative application developed with Godot and GDScript, featuring a smartphone-inspired interface, reusable scene-based components, signal-driven navigation, persistent state management, and a data-driven branching story engine designed around JSON-defined events, choices, flags, and checkpoints.',

      image: '/assets/projects/godot-app.png',

      technologies: [
        'Godot',
        'GDScript',
        'JSON'
      ]
    },

    {
      title: 'AI Content Automation System',

      description:
        'AI-powered automation pipeline for generating, validating, and publishing social media content. Orchestrated with n8n and the OpenAI API, it handles prompt-driven content generation, multi-clip video workflows, scheduling, containerization, and process monitoring.',

      image: '/assets/projects/ai-content-thumbnail.png',

      technologies: [
        'OpenAI API',
        'n8n',
        'Docker',
        'Python',
        'REST API'
      ]
    }

  ];

}
