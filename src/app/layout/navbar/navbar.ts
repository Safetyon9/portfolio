import { Component, AfterViewInit } from '@angular/core';
import { SectionService } from '../../services/section.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements AfterViewInit {

  constructor(
    public sectionService: SectionService
  ) {}


  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }


  ngAfterViewInit() {

    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            this.sectionService.activeSection.set(entry.target.id);

          }

        });

      },
      {
        threshold: 0,
        rootMargin: "-40% 0px -40% 0px"
      }
    );


    sections.forEach((section) => {
      observer.observe(section);
    });

  }

}