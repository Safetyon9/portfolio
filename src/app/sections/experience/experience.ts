import { Component } from '@angular/core';
import { ExperienceItemComponent } from '../../shared/components/experience-item/experience-item';


export interface ExperienceData {
  period: string;
  role: string;
  description: string;
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
      period: '2025 - now',
      role: 'Web Developer - Freelance',
      description:
        'Developing custom web solutions and e-commerce platforms, managing the complete lifecycle from development and deployment to performance optimization and client collaboration.'
    },

    {
      period: '2026',
      role: 'Full Stack Developer - Betacom Academy',
      description:
        'Developed enterprise full-stack applications using Java, Spring Boot, and Angular, working on both monolithic and microservices architectures.'
    },

    {
      period: '2025',
      role: 'AI Content Automation System',
      description:
        'Building AI-powered workflows for content generation and automation, integrating APIs, scheduling systems, and containerized services.'
    }
  ];

}