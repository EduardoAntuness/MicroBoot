Microboot Informática

Site institucional e página de captação de orçamentos desenvolvida para a Microboot Informática — assistência técnica especializada em manutenção de computadores, montagem de PCs, redes e venda de peças em Betim - MG. (site somente para estudo e treino)

"Você ligado na melhor tecnologia."

Funcionalidades

Tela de Boot Interativa: Animação de inicialização em estilo terminal (MICROBOOT SYSTEM v2.0) com opção de pular (pular ⏵) e suporte automático a prefers-reduced-motion.

Catálogo de Serviços: Cards dedicados para manutenção de computadores/notebooks, montagem de PCs sob medida, suporte técnico, redes/Wi-Fi, manutenção de impressoras e peças/acessórios — cada um com link direto para orçamento no WhatsApp.

Formulário de Orçamento Integrado ao WhatsApp: Coleta nome, telefone, tipo de serviço e detalhes do problema, formatando e abrindo a mensagem diretamente no WhatsApp da empresa.

Vitrine de Produtos e Diferenciais: Apresentação das categorias disponíveis na loja e dos diferenciais de atendimento (entrega expressa, preços promocionais, atendimento de segunda a sábado e laboratório próprio).

Localização e Contato: Informações completas de endereço, telefone, e-mail e mapa interativo incorporado via Google Maps.

Design Responsivo: Layout escuro moderno (dark mode) adaptado para desktop, tablet e dispositivos móveis, incluindo menu colapsável e botão flutuante do WhatsApp.

Tecnologias Utilizadas

HTML5: Estrutura semântica e acessível (aria-label, aria-expanded, aria-hidden).

CSS3: Estilização customizada com variáveis CSS (:root), CSS Grid, Flexbox, backdrop-filter e media queries para responsividade.

JavaScript (ES6+): Manipulação do DOM para a animação de boot, controle do menu mobile, efeito de rolagem no cabeçalho, atualização automática do ano no rodapé e integração do formulário com a API de links do WhatsApp (wa.me).

Google Fonts: Tipografias Sora, Inter e JetBrains Mono.

Estrutura de Arquivos

MicroBoot/
├── index.html   # Estrutura principal da página e seções do site
├── style.css    # Tokens de design, estilos globais e layout responsivo
├── script.js    # Tela de boot, menu mobile e envio do formulário via WhatsApp
└── README.md    # Documentação do projeto


Como Executar Localmente

Clone este repositório:

git clone https://github.com/EduardoAntuness/MicroBoot.git


Acesse a pasta do projeto:

cd MicroBoot


Abra o arquivo index.html diretamente no seu navegador (ou utilize a extensão Live Server no VS Code).

Autor

Desenvolvido por Eduardo Antunes — GitHub
