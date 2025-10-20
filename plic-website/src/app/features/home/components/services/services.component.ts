import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../../../core/services/scroll.service';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: '📱',
      title: 'Gestión de Redes Sociales',
      description: 'Creamos y gestionamos contenido estratégico que conecta con tu audiencia y fortalece tu marca.',
      features: ['Estrategia de contenido', 'Community management', 'Análisis de métricas'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: '🎨',
      title: 'Diseño Digital',
      description: 'Diseños únicos y funcionales que reflejan la identidad de tu marca y cautivan a tu audiencia.',
      features: ['Diseño web', 'Branding', 'UI/UX Design'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: '📊',
      title: 'Estrategia Digital',
      description: 'Desarrollamos estrategias basadas en datos para maximizar tu presencia online y alcanzar tus objetivos.',
      features: ['Marketing digital', 'SEO/SEM', 'Analítica web'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: '👥',
      title: 'Community Management',
      description: 'Construimos y gestionamos comunidades activas y comprometidas alrededor de tu marca.',
      features: ['Engagement', 'Atención al cliente', 'Monitoreo 24/7'],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      icon: '📢',
      title: 'Publicidad Digital',
      description: 'Campañas publicitarias efectivas en múltiples plataformas para maximizar tu ROI.',
      features: ['Facebook Ads', 'Google Ads', 'Instagram Ads'],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      icon: '💼',
      title: 'Consultoría Digital',
      description: 'Asesoría especializada para optimizar tu estrategia digital y alcanzar el éxito.',
      features: ['Auditorías', 'Capacitación', 'Consultoría estratégica'],
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
  ];

  processSteps: ProcessStep[] = [
    {
      number: '01',
      title: 'Descubrimiento',
      description: 'Conocemos tu negocio, objetivos y audiencia para crear una estrategia personalizada.'
    },
    {
      number: '02',
      title: 'Estrategia',
      description: 'Desarrollamos un plan detallado con acciones concretas y métricas de éxito.'
    },
    {
      number: '03',
      title: 'Diseño & Desarrollo',
      description: 'Creamos contenido visual y estratégico que refleja tu identidad de marca.'
    },
    {
      number: '04',
      title: 'Implementación',
      description: 'Ejecutamos la estrategia con precisión y atención al detalle.'
    },
    {
      number: '05',
      title: 'Optimización',
      description: 'Analizamos resultados y optimizamos continuamente para mejores resultados.'
    }
  ];

  constructor(private scrollService: ScrollService) {}

  scrollToContact(): void {
    this.scrollService.scrollToSection('contact');
  }
}
