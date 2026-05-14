'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface FormData {
  nombre: string;
  apellido: string;
  email: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  apellido?: string;
  email?: string;
  mensaje?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    apellido: '',
    email: '',
    mensaje: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }
    if (!formData.apellido.trim()) {
      newErrors.apellido = 'El apellido es requerido';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#F8F4FC] border border-[#8acce8] rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-[#8acce8]/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-[#8acce8]" />
        </div>
        <h3 className="text-xl font-semibold text-[#2e2e74] mb-2">
          ¡Gracias por tu mensaje!
        </h3>
        <p className="text-[#2e2e74]">
          Nos contactaremos a la brevedad.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="nombre"
            className="block text-sm font-medium text-[#2e2e74] mb-2"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.nombre ? 'border-red-500' : 'border-[#8acce8]/30'
            } focus:border-[#8acce8] focus:ring-1 focus:ring-[#8acce8] outline-none transition-colors bg-white`}
            placeholder="Tu nombre"
          />
          {errors.nombre && (
            <p className="mt-1 text-sm text-red-500">{errors.nombre}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="apellido"
            className="block text-sm font-medium text-[#2e2e74] mb-2"
          >
            Apellido
          </label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.apellido ? 'border-red-500' : 'border-[#8acce8]/30'
            } focus:border-[#8acce8] focus:ring-1 focus:ring-[#8acce8] outline-none transition-colors bg-white`}
            placeholder="Tu apellido"
          />
          {errors.apellido && (
            <p className="mt-1 text-sm text-red-500">{errors.apellido}</p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[#2e2e74] mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.email ? 'border-red-500' : 'border-[#8acce8]/30'
          } focus:border-[#8acce8] focus:ring-1 focus:ring-[#8acce8] outline-none transition-colors bg-white`}
          placeholder="tu@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="mensaje"
          className="block text-sm font-medium text-[#2e2e74] mb-2"
        >
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.mensaje ? 'border-red-500' : 'border-[#8acce8]/30'
          } focus:border-[#8acce8] focus:ring-1 focus:ring-[#8acce8] outline-none transition-colors resize-none bg-white`}
          placeholder="Escribe tu mensaje..."
        />
        {errors.mensaje && (
          <p className="mt-1 text-sm text-red-500">{errors.mensaje}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-[#8acce8] text-white font-semibold rounded-lg hover:bg-[#2e2e74] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
      </button>
    </form>
  );
}