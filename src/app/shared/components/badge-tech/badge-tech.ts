import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge-tech',
  imports: [],
  templateUrl: './badge-tech.html',
  styleUrl: './badge-tech.css',
})
export class BadgeTech {
  @Input() name!: string;
}