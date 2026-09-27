import { Component, Input } from '@angular/core';

export interface Experience {
  period: string;
  role: string;
  description: string;
  projects?: { title: string; description: string }[];
}

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.html',
  styleUrl: './experience-item.css',
})
export class ExperienceItemComponent {

  @Input() experience!: Experience;

}
