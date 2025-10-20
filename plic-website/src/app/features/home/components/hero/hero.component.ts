import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../../../core/services/scroll.service';

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  stats: Stat[] = [
    { value: '50+', label: 'Proyectos Completados' },
    { value: '30+', label: 'Clientes Felices' },
    { value: '5+', label: 'Años de Experiencia' }
  ];

  constructor(private scrollService: ScrollService) {}

  scrollToContact(): void {
    this.scrollService.scrollToSection('contact');
  }

  scrollToPortfolio(): void {
    this.scrollService.scrollToSection('portfolio');
  }

  scrollToAbout(): void {
    this.scrollService.scrollToSection('about');
  }
}
