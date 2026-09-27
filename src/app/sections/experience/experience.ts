import { Component } from '@angular/core';
import { ExperienceItemComponent } from '../../shared/components/experience-item/experience-item';


export interface ExperienceData {
  period: string;
  role: string;
  description: string;
  projects?: { title: string; description: string }[];
}


@Component({
  selector: 'app-experience',
  imports: [
    ExperienceItemComponent
  ],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {


  experiences: ExperienceData[] = [
    {
      period: 'Jan - Sep 2026',
      role: 'Full Stack Developer - Betacom S.R.L.',
      description:
        'Contributed to web development projects, including enterprise applications built on monolithic and microservices architectures. Developed backend features with Java and Spring Boot, REST API integrations, and data persistence with Spring Data JPA and Hibernate on MySQL and PostgreSQL, using Maven for dependency and build management. Built frontend components with Angular and TypeScript. Activities included technical analysis, application logic, test case preparation and execution, and automated testing with JUnit. Investigated and documented issues, reproduced bugs, analysed code and logs, identified root causes, and implemented and verified fixes.'
    },

    {
      period: 'Mar 2025 - present',
      role: 'Software Developer - Commissioned and Collaborative Projects',
      description:
        'Software projects developed on commission and in collaboration with others, spanning web development, interactive applications and AI-powered automation.',
      projects: [
        {
          title: 'Volleyball Analysis Application',
          description:
            'Currently designing an application to collect and analyse amateur volleyball data. Defining the application domain, game-action recording workflows, and the architecture for matches, sets, rallies, players, rotations and statistics.'
        },
        {
          title: 'PHP and WordPress Development',
          description:
            'Built showcase websites and a complete custom WordPress e-commerce solution. Designed a modular PHP plugin, independent of WooCommerce, for products, variants, cart, coupons, orders and checkout, with server-side validation and automatic PayPal payment confirmation. Managed deployment, hosting, domains, DNS, SSL certificates, backups and data migration.'
        },
        {
          title: 'Godot Application',
          description:
            'Collaborated on the design and development of an interactive application in Godot. Defined a scene-based architecture and reusable UI components, and implemented application logic, interface navigation, state management and save systems in GDScript, including dynamic loading of JSON data.'
        },
        {
          title: 'AI Content Automation',
          description:
            'Worked in a team on an automated pipeline for generating, validating and publishing social media content. Designed and refined prompts and orchestrated n8n workflows using OpenAI APIs, turning an initial title into text content and multi-clip video sequences. Integrated scheduling, containerisation and monitoring.'
        }
      ]
    }
  ];

}
