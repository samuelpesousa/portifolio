# 🚀 Portfolio Pessoal - Samuel Sousa

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-2025-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-0.181.0-black?style=for-the-badge&logo=three.js)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC?style=for-the-badge&logo=tailwind-css)

### 💼 Portfólio moderno com experiências 3D interativas

[Demo ao Vivo](https://portifolio-rho-ivory.vercel.app/) • [Reportar Bug](https://github.com/samuelpesousa/portifolio/issues) • [Solicitar Feature](https://github.com/samuelpesousa/portifolio/issues)

</div>

---

## ✨ Sobre o Projeto

Um portfólio pessoal interativo e responsivo que combina design moderno com tecnologias de ponta. Desenvolvido com React e Three.js, apresenta animações suaves, modelos 3D interativos e uma experiência de usuário imersiva.

### 🎯 Destaques

- 🎨 **Design Moderno**: Interface elegante e minimalista com animações GSAP
- 🌐 **Experiência 3D**: Modelos 3D interativos usando Three.js e React Three Fiber
- 📱 **Totalmente Responsivo**: Otimizado para todos os dispositivos (mobile, tablet, desktop)
- ⚡ **Performance Otimizada**: Carregamento rápido com Vite e lazy loading
- 🎭 **Animações Fluidas**: Transições suaves com GSAP e scroll triggers
- ✉️ **Formulário de Contato**: Integração com EmailJS
- 🎨 **Efeitos Visuais**: Partículas animadas e efeitos de bloom

---

## 🛠️ Tecnologias

### Frontend

- **React 19.1.1** - Biblioteca JavaScript para interfaces
- **Vite 7.1.7** - Build tool ultrarrápido
- **TailwindCSS 4.1.17** - Framework CSS utility-first

### 3D & Animações

- **Three.js 0.181.0** - Biblioteca JavaScript para gráficos 3D
- **@react-three/fiber** - Renderizador React para Three.js
- **@react-three/drei** - Helpers úteis para React Three Fiber
- **@react-three/postprocessing** - Efeitos de pós-processamento
- **GSAP 3.13.0** - Biblioteca de animações profissional

### Utilitários

- **react-countup** - Contadores animados
- **react-responsive** - Hooks para responsividade
- **@emailjs/browser** - Envio de emails

---

## 🚀 Começando

### Pré-requisitos

```bash
node >= 18.0.0
npm >= 9.0.0
```

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/samuelpesousa/portifolio.git
cd portifolio
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure as variáveis de ambiente**

```bash
cp .env.example .env
# Edite o arquivo .env com suas credenciais do EmailJS
```

4. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

5. **Acesse no navegador**

```
http://localhost:5173
```

---

## 📦 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Gera build de produção
npm run preview  # Visualiza o build de produção
npm run lint     # Executa o linter
```

---

## 🎨 Estrutura do Projeto

```
portifolio/
├── public/
│   ├── images/          # Imagens e ícones
│   │   ├── logos/       # Logos de tecnologias
│   │   └── textures/    # Texturas para 3D
│   └── models/          # Modelos 3D (.glb)
├── src/
│   ├── components/      # Componentes reutilizáveis
│   │   ├── HeroModels/  # Componentes 3D da hero section
│   │   └── Models/      # Outros componentes 3D
│   ├── sections/        # Seções da página
│   │   ├── Hero.jsx
│   │   ├── ShowcaseSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── TechStack.jsx
│   │   └── Footer.jsx
│   ├── constanst/       # Constantes e dados
│   │   └── index.js
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Ponto de entrada
│   └── index.css        # Estilos globais
└── package.json
```

---

## 🎭 Principais Funcionalidades

### 🏠 Hero Section

- Modelo 3D interativo de ambiente de trabalho
- Animações de texto com GSAP
- Partículas animadas de fundo
- Controles de câmera com zoom e rotação

### 💼 Showcase de Projetos

- Grid responsivo de projetos
- Animações ao scroll
- Cards com hover effects
- Imagens otimizadas

### 🎯 Seção de Habilidades

- Ícones 3D interativos de tecnologias
- Efeitos de hover com partículas
- Grid responsivo
- Modelos GLB otimizados

### 📊 Experiência Profissional

- Timeline interativa
- Cards com efeito glow
- Reviews de clientes
- Transições suaves

### 📬 Contato

- Formulário funcional com validação
- Integração com EmailJS
- Feedback visual
- Links para redes sociais

---

## 🎨 Personalização

### Cores

Edite as cores no arquivo `src/index.css`:

```css
@theme {
  --color-white-50: #d9ecff;
  --color-black-50: #1c1c21;
  --color-black-100: #0e0e10;
  --color-black-200: #282732;
  --color-blue-50: #839cb5;
  --color-blue-100: #2d2d38;
}
```

### Conteúdo

Edite seus dados em `src/constanst/index.js`:

```javascript
export const words = [...]
export const CounterItems = [...]
export const navLinks = [...]
export const techStackIcons = [...]
```

---

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas!

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 👨‍💻 Autor

**Samuel Sousa**

- GitHub: [@samuelpesousa](https://github.com/samuelpesousa)
- LinkedIn: [Samuel Sousa](https://linkedin.com/in/samuelpesousa)
- Email: samuelpaulacv@gmail.com

---

## 🌟 Mostre seu apoio

Se este projeto te ajudou, deixe uma ⭐️!

---

<div align="center">

Feito com ❤️ e muitos ☕ por [Samuel Sousa](https://github.com/samuelpesousa)

</div>
