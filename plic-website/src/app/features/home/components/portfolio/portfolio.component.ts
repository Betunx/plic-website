import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  activeFilter = 'all';

  categories = [
    { id: 'all', label: 'Todos' },
    { id: 'branding', label: 'Branding' },
    { id: 'web', label: 'Web Design' },
    { id: 'social', label: 'Social Media' },
    { id: 'marketing', label: 'Marketing' }
  ];

  projects: Project[] = [
    {
      id: 1,
      title: 'Café Aroma',
      category: 'branding',
      description: 'Rediseño completo de marca e identidad visual para cadena de cafeterías boutique.',
      image: '/assets/images/portfolio/project-1.jpg',
      metrics: [
        { label: 'Engagement', value: '+150%' },
        { label: 'Ventas', value: '+80%' }
      ]
    },
    {
      id: 2,
      title: 'TechStart',
      category: 'web',
      description: 'Desarrollo de sitio web y aplicación móvil para startup tecnológica.',
      image: '/assets/images/portfolio/project-2.jpg',
      metrics: [
        { label: 'Usuarios', value: '10K+' },
        { label: 'Rating', value: '4.8/5' }
      ]
    },
    {
      id: 3,
      title: 'FitLife',
      category: 'social',
      description: 'Estrategia de redes sociales y creación de contenido para gimnasio premium.',
      image: '/assets/images/portfolio/project-3.jpg',
      metrics: [
        { label: 'Followers', value: '+200%' },
        { label: 'Reach', value: '500K+' }
      ]
    },
    {
      id: 4,
      title: 'EcoStore',
      category: 'marketing',
      description: 'Campaña de marketing digital para tienda de productos ecológicos.',
      image: '/assets/images/portfolio/project-4.jpg',
      metrics: [
        { label: 'ROI', value: '320%' },
        { label: 'Conversión', value: '+95%' }
      ]
    },
    {
      id: 5,
      title: 'Urban Fashion',
      category: 'branding',
      description: 'Branding y estrategia visual para marca de moda urbana.',
      image: '/assets/images/portfolio/project-5.jpg',
      metrics: [
        { label: 'Brand Awareness', value: '+180%' },
        { label: 'Sales', value: '+120%' }
      ]
    },
    {
      id: 6,
      title: 'RestaurantPro',
      category: 'web',
      description: 'Plataforma web de reservaciones para cadena de restaurantes.',
      image: '/assets/images/portfolio/project-6.jpg',
      metrics: [
        { label: 'Reservas', value: '+250%' },
        { label: 'Satisfacción', value: '95%' }
      ]
    }
  ];

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.activeFilter);
  }

  setFilter(filterId: string): void {
    this.activeFilter = filterId;
  }

  onProjectClick(project: Project): void {
    console.log('Project clicked:', project);
    // Aquí se puede agregar lógica para mostrar un modal o navegar a página de detalle
  }

  getCategoryLabel(categoryId: string): string {
    const category = this.categories.find(cat => cat.id === categoryId);
    return category ? category.label : categoryId;
  }
}
