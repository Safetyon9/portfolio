import { Component, Input } from '@angular/core';
import { BadgeTech } from '../badge-tech/badge-tech';

export interface ProjectData {
  title: string;
  description: string;
  image: string;
  repositories?: Repository[];
  technologies: string[];
}

export interface Repository {
  name: string;
  url: string;
}

@Component({
  selector: 'app-project-card',
  imports: [
    BadgeTech
  ],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {

  @Input() project!: ProjectData;

  showRepositories = false;

  toggleRepositories() {
    this.showRepositories = !this.showRepositories;
  }
}