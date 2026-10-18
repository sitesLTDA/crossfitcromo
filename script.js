// CrossFit Cromo — personalize estes dados após confirmar com a empresa.
const empresa = {
  nome: "CrossFit Cromo",
  whatsapp: "5511912566940",
  mensagemInicial: "Olá! Gostaria de saber mais sobre as modalidades e como agendar uma aula experimental no CrossFit Cromo.",
  endereco: "Rua Tangerinas, 65, Casa Verde Média, São Paulo - SP, 02521-080",
  servicos: [
    {icone:"✣", nome:"CrossFit", descricao:"Conheça as aulas de CrossFit oferecidas pelo box. Consulte a equipe para saber como participar."},
    {icone:"↗", nome:"Cross Training", descricao:"Consulte as opções de treinamento e as atividades disponíveis."},
    {icone:"⚒", nome:"Levantamento de peso", descricao:"Saiba mais sobre as atividades de levantamento de peso oferecidas pelo espaço."},
    {icone:"◴", nome:"HIIT e circuitos", descricao:"Consulte a programação de atividades de condicionamento físico."},
    {icone:"♡", nome:"Cardio e core", descricao:"Conheça as opções de trabalho cardiovascular e fortalecimento do core."},
    {icone:"✺", nome:"Aulas em grupo", descricao:"Entre em contato para consultar horários e disponibilidade das aulas."}
  ],
  galeria: [
    {url:"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=85", alt:"Imagem ilustrativa de academia e equipamentos"},
    {url:"https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=800&q=85", alt:"Imagem ilustrativa de treinamento físico"},
    {url:"https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=85", alt:"Imagem ilustrativa de exercício"}
  ],
  perguntas: [
    {pergunta:"Quais modalidades são oferecidas?", resposta:"O box divulga CrossFit, Cross Training, levantamento de peso, HIIT, circuitos e outras atividades. Consulte a equipe para confirmar a programação atual."},
    {pergunta:"Como posso conhecer o box?", resposta:"Entre em contato pelo WhatsApp para consultar as condições de participação e a disponibilidade de uma aula experimental."},
    {pergunta:"Quais são os horários das aulas?", resposta:"Consulte diretamente o box para receber a grade de horários atualizada."},
    {pergunta:"Onde fica o CrossFit Cromo?", resposta:"Rua Tangerinas, 65, Casa Verde Média, São Paulo - SP, CEP 02521-080."},
    {pergunta:"Como posso obter mais informações?", resposta:"Use um dos botões de WhatsApp desta página para entrar em contato com a equipe."}
  ]
};

function montarWhatsApp(mensagem) {
  const numero = empresa.whatsapp.replace(/\D/g, "");
  if (!/^\d{12,13}$/.test(numero)) return "#contato";
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

// Liga todos os botões de WhatsApp.
document.querySelectorAll(".whatsapp-link").forEach(link => {
  link.href = montarWhatsApp(empresa.mensagemInicial);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

// Cria os cartões de modalidades usando texto seguro.
const servicesGrid = document.getElementById("servicesGrid");
empresa.servicos.forEach(servico => {
  const card = document.createElement("article");
  card.className = "service-card";
  const icon = document.createElement("div");
  icon.className = "service-icon";
  icon.textContent = servico.icone;
  const title = document.createElement("h3");
  title.textContent = servico.nome;
  const description = document.createElement("p");
  description.textContent = servico.descricao;
  card.append(icon, title, description);
  servicesGrid.appendChild(card);
});

// Galeria ilustrativa: substitua por imagens reais autorizadas antes de publicar.
const galleryGrid = document.getElementById("galleryGrid");
empresa.galeria.forEach(foto => {
  const figure = document.createElement("figure");
  figure.className = "gallery-item";
  const img = document.createElement("img");
  img.src = foto.url;
  img.alt = foto.alt;
  img.loading = "lazy";
  img.decoding = "async";
  figure.appendChild(img);
  galleryGrid.appendChild(figure);
});

// Perguntas frequentes expansíveis.
const faqList = document.getElementById("faqList");
empresa.perguntas.forEach(item => {
  const details = document.createElement("details");
  details.className = "faq-item";
  const summary = document.createElement("summary");
  summary.textContent = item.pergunta;
  const answer = document.createElement("p");
  answer.textContent = item.resposta;
  details.append(summary, answer);
  faqList.appendChild(details);
});

// Formulário: abre o WhatsApp com os dados informados pelo visitante.
document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const interest = document.getElementById("interest").value;
  if (!name) return;
  const message = `Olá! Meu nome é ${name}.${phone ? ` Meu WhatsApp é ${phone}.` : ""} Tenho interesse em: ${interest}. Gostaria de mais informações sobre o CrossFit Cromo.`;
  const url = montarWhatsApp(message);
  if (url !== "#contato") window.open(url, "_blank", "noopener,noreferrer");
  else window.location.href = "#contato";
});

// Google Maps: pesquisa pelo endereço informado.
document.getElementById("mapsLink").href =
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(empresa.endereco);

// Menu para celular.
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const aberto = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(aberto));
  menuToggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
}));

document.getElementById("year").textContent = new Date().getFullYear();
