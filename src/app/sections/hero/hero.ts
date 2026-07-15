import { Component } from '@angular/core';
import { SectionService } from '../../services/section.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  constructor(
    public sectionService: SectionService
  ) {}

  descriptions = {
  about: 'I build scalable full-stack applications with clean architecture and modern technologies.',
  
  experience: 'A journey through the experiences that shaped my approach to software development.',

  projects: 'Exploring the challenges, technologies, and decisions behind the projects I\'ve built.',

  contact: "Thanks for stopping by. I'm always open to new opportunities and conversations."
  };

  get description() {
    return this.descriptions[
      this.sectionService.activeSection() as keyof typeof this.descriptions
    ];
  }
}