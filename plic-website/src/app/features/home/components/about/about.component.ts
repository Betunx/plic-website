import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../../../core/services/scroll.service';

interface AboutCard {
  icon: string;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  aboutCards: AboutCard[] = [
    {
      icon: '🚀',
      title: 'Nuestra Historia',
      description: 'Fundada con la visión de revolucionar el diseño digital, hemos crecido de un pequeño equipo apasionado a una agencia reconocida que transforma marcas y crea experiencias memorables.'
    },
    {
      icon: '🎯',
      title: 'Nuestra Misión',
      description: 'Empoderar a las marcas con soluciones digitales innovadoras que impulsan el crecimiento, mejoran la presencia online y crean conexiones auténticas con sus audiencias.'
    },
    {
      icon: '💡',
      title: 'Nuestros Valores',
      description: 'Innovación constante, calidad sin compromisos, transparencia total con nuestros clientes y un compromiso inquebrantable con la excelencia en cada proyecto que emprendemos.'
    }
  ];

  teamMember: TeamMember = {
    name: 'Omar',
    role: 'Founder & Ingeniero en Diseño Digital',
    description: 'Con más de 5 años de experiencia en diseño digital y estrategia de marca, Omar lidera Plic Studio con una visión clara: crear experiencias digitales que realmente importan. Su enfoque combina creatividad con estrategia basada en datos.',
    image: '/assets/images/team/omar.jpg'
  };

  constructor(private scrollService: ScrollService) {}

  scrollToContact(): void {
    this.scrollService.scrollToSection('contact');
  }
}
