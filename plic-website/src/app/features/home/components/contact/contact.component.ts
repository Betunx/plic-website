import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link?: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  serviceOptions = [
    'Gestión de Redes Sociales',
    'Diseño Digital',
    'Estrategia Digital',
    'Community Management',
    'Publicidad Digital',
    'Consultoría Digital'
  ];

  budgetOptions = [
    'Menos de $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    'Más de $50,000'
  ];

  contactInfo: ContactInfo[] = [
    {
      icon: '📧',
      label: 'Email',
      value: 'hola@plicstudio.com',
      link: 'mailto:hola@plicstudio.com'
    },
    {
      icon: '📱',
      label: 'Teléfono',
      value: '+52 55 1234 5678',
      link: 'tel:+525512345678'
    },
    {
      icon: '📍',
      label: 'Ubicación',
      value: 'Ciudad de México, México'
    }
  ];

  socialLinks: SocialLink[] = [
    { name: 'Facebook', url: 'https://facebook.com', icon: 'f' },
    { name: 'Instagram', url: 'https://instagram.com', icon: '📷' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      company: [''],
      service: ['', Validators.required],
      budget: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (!field || !field.errors) return '';

    if (field.errors['required']) return 'Este campo es requerido';
    if (field.errors['email']) return 'Email inválido';
    if (field.errors['minlength']) {
      const minLength = field.errors['minlength'].requiredLength;
      return `Mínimo ${minLength} caracteres`;
    }
    if (field.errors['pattern']) return 'Formato inválido (10 dígitos)';

    return 'Campo inválido';
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    try {
      // Simular envío de formulario
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Form data:', this.contactForm.value);

      this.submitSuccess = true;
      this.contactForm.reset();

      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      this.submitError = true;

      // Ocultar mensaje de error después de 5 segundos
      setTimeout(() => {
        this.submitError = false;
      }, 5000);
    } finally {
      this.isSubmitting = false;
    }
  }
}
