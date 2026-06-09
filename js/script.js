const menuBtn = document.querySelector("#menu-btn");

const nav = document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

});

const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {

question.addEventListener("click", () => {

const answer = question.nextElementSibling;

answer.classList.toggle("show");

});

});


const contatoForm = document.getElementById('contato-form');
if (contatoForm) {
  contatoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let valido = true;

    document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
    document.querySelectorAll('.input-erro').forEach(el => el.classList.remove('input-erro'));

    const nome     = document.getElementById('nome');
    const email    = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');

    if (!nome.value.trim() || nome.value.trim().length < 3) {
      document.getElementById('erro-nome').textContent = 'Insira seu nome completo (mínimo 3 caracteres).';
      nome.classList.add('input-erro');
      valido = false;
    }
    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      document.getElementById('erro-email').textContent = 'Insira um e-mail válido.';
      email.classList.add('input-erro');
      valido = false;
    }
    if (!mensagem.value.trim() || mensagem.value.trim().length < 10) {
      document.getElementById('erro-mensagem').textContent = 'Mensagem deve ter ao menos 10 caracteres.';
      mensagem.classList.add('input-erro');
      valido = false;
    }
    if (!valido) return;

    const feedback = document.getElementById('form-feedback');
    feedback.textContent = '✅ Mensagem enviada! Entraremos em contato em até 24 horas.';
    feedback.className = 'form-feedback sucesso';
    contatoForm.reset();
    feedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => { feedback.className = 'form-feedback hidden'; }, 6000);
  });
}


const btnDemo   = document.getElementById('btn-demo');
const modalDemo = document.getElementById('modal-demo');
const btnFechar = document.getElementById('btn-fechar-modal');

if (btnDemo && modalDemo) {
  btnDemo.addEventListener('click', function() {
    modalDemo.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    iniciarDemo();
  });
  btnFechar.addEventListener('click', fecharModal);
  modalDemo.addEventListener('click', function(e) {
    if (e.target === modalDemo) fecharModal();
  });
}

function fecharModal() {
  modalDemo.classList.add('hidden');
  document.body.style.overflow = '';
}

function iniciarDemo() {
  const steps = [
    document.getElementById('modal-step-1'),
    document.getElementById('modal-step-2'),
    document.getElementById('modal-step-3')
  ];
  const bar = document.getElementById('modal-progress-bar');
  let etapa = 0;
  steps.forEach(s => s.classList.remove('active'));
  steps[0].classList.add('active');
  if (bar) bar.style.width = '33%';

  const intervalo = setInterval(() => {
    etapa++;
    if (etapa >= steps.length) { clearInterval(intervalo); return; }
    steps.forEach(s => s.classList.remove('active'));
    steps[etapa].classList.add('active');
    if (bar) bar.style.width = `${((etapa + 1) / steps.length) * 100}%`;
  }, 2000);
}


const regrasTriagem = [
  { sintomas: ['dor_peito','falta_ar'],         prioridade: 'Alta',  cor: 'alta',  especialista: 'Cardiologista / UPA',     tempo: 'Imediato',       obs: '⚠️ Pode indicar urgência cardiovascular. Considere ligar 192 (SAMU).' },
  { sintomas: ['falta_ar','tosse','febre'],      prioridade: 'Alta',  cor: 'alta',  especialista: 'Pneumologista',           tempo: '5 a 10 min',     obs: 'Possível infecção respiratória grave. Avaliação urgente recomendada.' },
  { sintomas: ['febre','tosse'],                 prioridade: 'Média', cor: 'media', especialista: 'Clínico Geral',           tempo: '8 min',          obs: 'Sintomas compatíveis com infecção viral.' },
  { sintomas: ['febre','dor_garganta'],          prioridade: 'Média', cor: 'media', especialista: 'Otorrinolaringologista',  tempo: '10 min',         obs: 'Possível faringite ou amigdalite.' },
  { sintomas: ['nausea','dor_abdominal'],        prioridade: 'Média', cor: 'media', especialista: 'Gastroenterologista',     tempo: '12 min',         obs: 'Evite automedicação até a consulta.' },
  { sintomas: ['dor_cabeca','cansaco'],          prioridade: 'Baixa', cor: 'baixa', especialista: 'Clínico Geral',           tempo: '15 min',         obs: 'Pode estar relacionado a tensão ou desidratação.' },
  { sintomas: ['alergia'],                       prioridade: 'Baixa', cor: 'baixa', especialista: 'Alergologista',           tempo: '15 min',         obs: 'Avaliação de alergias e sensibilidades.' },
  { sintomas: ['visao'],                         prioridade: 'Média', cor: 'media', especialista: 'Oftalmologista',          tempo: '10 min',         obs: 'Alterações visuais devem ser avaliadas rapidamente.' },
  { sintomas: ['dor_costas'],                    prioridade: 'Baixa', cor: 'baixa', especialista: 'Ortopedista',             tempo: '18 min',         obs: 'Evite esforço físico até a avaliação.' },
];
const nomesSintomas = { febre:'Febre', tosse:'Tosse', dor_cabeca:'Dor de cabeça', dor_garganta:'Dor de garganta', dor_peito:'Dor no peito', falta_ar:'Falta de ar', nausea:'Náusea/Vômito', dor_abdominal:'Dor abdominal', cansaco:'Cansaço extremo', dor_costas:'Dor nas costas', alergia:'Alergia/Coceira', visao:'Problema de visão' };

const btnAnalisar   = document.getElementById('btn-analisar');
const btnLimpar     = document.getElementById('btn-limpar');
const btnNova       = document.getElementById('btn-nova-triagem');
const painelSint    = document.getElementById('painel-sintomas');
const painelRes     = document.getElementById('painel-resultado');
const avisoSel      = document.getElementById('aviso-selecao');

if (btnAnalisar) {
  btnAnalisar.addEventListener('click', function() {
    const selecionados = Array.from(document.querySelectorAll('input[name="sintoma"]:checked')).map(c => c.value);
    if (selecionados.length === 0) { avisoSel.classList.remove('hidden'); return; }
    avisoSel.classList.add('hidden');

    let resultado = { prioridade:'Baixa', cor:'baixa', especialista:'Clínico Geral', tempo:'15 a 20 min', obs:'Seus sintomas serão avaliados por um clínico geral.' };
    for (const r of regrasTriagem) {
      if (r.sintomas.some(s => selecionados.includes(s))) { resultado = r; break; }
    }

    document.getElementById('lista-sintomas-selecionados').innerHTML =
      selecionados.map(s => `<span class="tag-sintoma">${nomesSintomas[s] || s}</span>`).join('');
    const elPrio = document.getElementById('resultado-prioridade');
    elPrio.textContent = resultado.prioridade;
    elPrio.className = `resultado-valor prioridade-${resultado.cor}`;
    document.getElementById('resultado-especialista').textContent = resultado.especialista;
    document.getElementById('resultado-tempo').textContent        = resultado.tempo;
    document.getElementById('resultado-obs').textContent          = resultado.obs;

    painelSint.classList.add('hidden');
    painelRes.classList.remove('hidden');
    painelRes.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}
if (btnLimpar) {
  btnLimpar.addEventListener('click', function() {
    document.querySelectorAll('input[name="sintoma"]').forEach(c => c.checked = false);
    avisoSel.classList.add('hidden');
  });
}
if (btnNova) {
  btnNova.addEventListener('click', function() {
    painelRes.classList.add('hidden');
    painelSint.classList.remove('hidden');
    document.querySelectorAll('input[name="sintoma"]').forEach(c => c.checked = false);
    painelSint.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}