export const profile = {
  name: 'Matheus Soares',
  email: 'matheus529.ms@gmail.com',
  github: 'https://github.com/MattSoares',
  linkedin: 'https://www.linkedin.com/in/amorimmatheus/',
  whatsapp:
    'https://wa.me/5511947006489?text=Ol%C3%A1%2C%20Matheus!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.',
};

export const projects = {
  odontovida: {
    repository: 'https://github.com/MattSoares/Clinica-OdontoVida-Fullstack',
    images: [
      {
        src: '/assets/odontovida/dashboard.png',
        alt: 'Dashboard administrativo da Clínica OdontoVida',
      },
      {
        src: '/assets/odontovida/nova-consulta.png',
        alt: 'Tela de nova consulta da Clínica OdontoVida',
      },
      { src: '/assets/odontovida/login.png', alt: 'Tela de login da Clínica OdontoVida' },
    ],
  },
};

export function assetPath(path) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;
}
