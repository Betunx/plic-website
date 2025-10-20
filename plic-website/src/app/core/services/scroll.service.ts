import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private readonly HEADER_OFFSET = 80;

  constructor() { }

  /**
   * Scrolls to a specific section with smooth animation and offset
   * @param sectionId The ID of the section to scroll to
   */
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - this.HEADER_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  /**
   * Scrolls to the top of the page
   */
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  /**
   * Gets the currently active section based on scroll position
   * @param sections Array of section IDs to check
   * @returns The ID of the active section
   */
  getActiveSection(sections: string[]): string {
    const scrollPosition = window.pageYOffset + this.HEADER_OFFSET + 100;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop) {
          return sections[i];
        }
      }
    }

    return sections[0] || '';
  }

  /**
   * Checks if user has scrolled past a certain threshold
   * @param threshold The scroll position threshold
   * @returns True if scrolled past threshold
   */
  hasScrolledPast(threshold: number): boolean {
    return window.pageYOffset > threshold;
  }
}
