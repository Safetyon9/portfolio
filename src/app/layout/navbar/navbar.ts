import { afterNextRender, Component, DestroyRef, inject } from '@angular/core';
import { SectionService } from '../../services/section.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  private readonly destroyRef = inject(DestroyRef);

  constructor(
    public sectionService: SectionService
  ) {
    afterNextRender(() => this.observeSections());
  }


  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }


  private observeSections() {

    if (typeof IntersectionObserver === 'undefined') return;

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

    this.destroyRef.onDestroy(() => observer.disconnect());

  }

}
