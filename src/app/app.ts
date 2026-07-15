import { Component, signal, HostListener } from '@angular/core';
import { Navbar } from './layout/navbar/navbar';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Projects } from './sections/projects/projects';
import { Contact } from './sections/contact/contact';
import { Footer } from "./layout/footer/footer";
import { Experience } from "./sections/experience/experience";

@Component({
  selector: 'app-root',
  imports: [
    Hero,
    Navbar,
    Footer,
    About,
    Experience,
    Projects,
    Contact,
    Footer
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  protected readonly title = signal('portfolio');

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

    document.documentElement.style.setProperty(
      '--mouse-x',
      `${event.clientX}px`
    );

    document.documentElement.style.setProperty(
      '--mouse-y',
      `${event.clientY}px`
    );

  }
}