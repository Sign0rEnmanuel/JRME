# JR Materiais Elétricos — Landing page

Landing page da JR Materiais Elétricos (Matinhos - PR), feita com React + Vite e CSS puro com variáveis.

## Scripts

```bash
pnpm install     # instalar dependências
pnpm dev         # servidor de desenvolvimento
pnpm build       # build de produção em /dist
pnpm preview     # pré-visualizar o build
pnpm lint        # ESLint
```

## Estrutura

```
src/
├── assets/            Fotos da loja
├── components/        Uma pasta por seção (JSX + CSS)
│   └── ui/            Componentes reutilizáveis (Logo, Reveal, SectionHeader, ícones de marca)
├── data/
│   ├── business.js    Dados do negócio (telefone, endereço, horários, redes…)
│   └── content.js     Textos: menu, categorias, diferenciais, passos, galeria
├── hooks/             Scroll, seção ativa, animação de entrada, status aberto/fechado
├── styles/global.css  Variáveis de design, reset, botões e utilitários
└── utils/             Link de WhatsApp e cálculo de horários
```

Para editar dados ou textos, altere apenas os arquivos em `src/data/`. Os pontos pendentes estão marcados com `TODO`.
