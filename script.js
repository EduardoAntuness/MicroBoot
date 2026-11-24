// ================= NÚMERO DO WHATSAPP =================
const WHATS_NUMBER = "5531987953477";

// ================= ANO NO RODAPÉ =================
document.getElementById("ano").textContent = new Date().getFullYear();

// ================= CABEÇALHO COM SOMBRA AO ROLAR =================
const header = document.getElementById("header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// ================= MENU MOBILE =================
const navToggle = document.getElementById("nav-toggle");
const siteNav = document.getElementById("site-nav");

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ================= TELA DE BOOT =================
const bootScreen = document.getElementById("boot-screen");
const bootLog = document.getElementById("boot-log");
const bootSkip = document.getElementById("boot-skip");

const bootLines = [
  "MICROBOOT SYSTEM v2.0",
  "",
  "verificando hardware ......... OK",
  "carregando suporte tecnico ... OK",
  "conectando ao atendimento .... OK",
  "",
  "sistema pronto."
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function finishBoot() {
  bootScreen.classList.add("hidden");
  setTimeout(() => bootScreen.remove(), 600);
}

function runBoot() {
  if (reduceMotion) {
    finishBoot();
    return;
  }
  let i = 0;
  const timer = setInterval(() => {
    if (i < bootLines.length) {
      bootLog.textContent += bootLines[i] + "\n";
      i++;
    } else {
      clearInterval(timer);
      setTimeout(finishBoot, 500);
    }
  }, 140);
}

bootSkip.addEventListener("click", finishBoot);
window.addEventListener("load", runBoot);

// segurança: nunca deixa a tela de boot travada por mais de alguns segundos
setTimeout(finishBoot, 4000);

// ================= FORMULÁRIO DE ORÇAMENTO -> WHATSAPP =================
const quoteForm = document.getElementById("quote-form");

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = quoteForm.nome.value.trim();
  const telefone = quoteForm.telefone.value.trim();
  const servico = quoteForm.servico.value;
  const mensagem = quoteForm.mensagem.value.trim();

  const partes = [
    "Olá! Vim pelo site da Microboot e gostaria de um orçamento.",
    `Nome: ${nome}`,
    `Telefone: ${telefone}`,
    `Assunto: ${servico}`
  ];

  if (mensagem) {
    partes.push(`Detalhes: ${mensagem}`);
  }

  const texto = encodeURIComponent(partes.join("\n"));
  const url = `https://wa.me/${WHATS_NUMBER}?text=${texto}`;

  window.open(url, "_blank", "noopener");
});