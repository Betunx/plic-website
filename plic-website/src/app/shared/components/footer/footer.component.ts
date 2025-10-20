import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../../core/services/scroll.service';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface FooterLink {
  label: string;
  sectionId?: string;
  url?: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks: FooterLink[] = [
    { label: 'Inicio', sectionId: 'hero' },
    { label: 'Nosotros', sectionId: 'about' },
    { label: 'Servicios', sectionId: 'services' },
    { label: 'Portfolio', sectionId: 'portfolio' }
  ];

  services: FooterLink[] = [
    { label: 'Redes Sociales', sectionId: 'services' },
    { label: 'Diseño Digital', sectionId: 'services' },
    { label: 'Estrategia', sectionId: 'services' },
    { label: 'Consultoría', sectionId: 'services' }
  ];

  socialLinks: SocialLink[] = [
    { name: 'Facebook', url: 'https://facebook.com', icon: 'facebook' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' }
  ];

  constructor(private scrollService: ScrollService) {}

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
  }

  scrollToTop(): void {
    this.scrollService.scrollToTop();
  }

  getSocialIcon(icon: string): string {
    const icons: { [key: string]: string } = {
      'facebook': 'f',
      'instagram': '📷',
      'linkedin': '💼',
      'twitter': '🐦'
    };
    return icons[icon] || '🔗';
  }
}
