import './globals.css';

export const metadata = {
  title: 'Matheus Soares | Desenvolvedor Backend',
  description:
    'Portfólio de Matheus Soares, estudante de Engenharia de Software na FIAP com foco em desenvolvimento backend, APIs e aplicações web.',
  openGraph: {
    title: 'Matheus Soares | Desenvolvedor Backend',
    description: 'Projetos, trajetória e contato de Matheus Soares.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
