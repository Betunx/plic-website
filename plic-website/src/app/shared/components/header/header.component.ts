import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../../core/services/scroll.service';

interface NavItem {
  label: string;
  sectionId: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = 'hero';

  navItems: NavItem[] = [
    { label: 'Inicio', sectionId: 'hero' },
    { label: 'Nosotros', sectionId: 'about' },
    { label: 'Servicios', sectionId: 'services' },
    { label: 'Portfolio', sectionId: 'portfolio' },
    { label: 'Contacto', sectionId: 'contact' }
  ];

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = this.scrollService.hasScrolledPast(50);
    this.updateActiveSection();
  }

  updateActiveSection(): void {
    const sections = this.navItems.map(item => item.sectionId);
    this.activeSection = this.scrollService.getActiveSection(sections);
  }

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
    this.closeMobileMenu();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
