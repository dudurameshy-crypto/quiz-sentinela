// Quiz baseado no artigo "Sentinela 7-9.docx"

const artigoQuiz = [
  {
    pergunta: "1. Que capacidade Jeová nos deu, e por quê?",
    alternativas: [
      "A capacidade de pensar, aprender e aplicar o conhecimento, para que possamos achar o conhecimento de Deus e servi-lo.",
      "O poder de prever o futuro e saber quando o fim virá.",
      "O dom de riquezas materiais para garantir prosperidade.",
      "A habilidade de dominar outras nações pela força."
    ],
    correta: "A capacidade de pensar, aprender e aplicar o conhecimento, para que possamos achar o conhecimento de Deus e servi-lo."
  },
  {
    pergunta: "2. (a) Que fato precisamos entender? (Jó 37:23, 24) (b) Por que isso é bom para nós?",
    alternativas: [
      "Que há muitas coisas que não sabemos; isso nos torna humildes e nos ajuda a confiar em Jeová.",
      "Que devemos saber tudo para agradar a Jeová.",
      "Que a ciência tem todas as respostas e substitui a fé.",
      "Que não precisamos estudar a Bíblia, porque já sabemos tudo."
    ],
    correta: "Que há muitas coisas que não sabemos; isso nos torna humildes e nos ajuda a confiar em Jeová."
  },
  {
    pergunta: "3. O que vamos ver neste estudo?",
    alternativas: [
      "Coisas que não sabemos, os desafios por isso e por que às vezes é bom não saber tudo; isso fortalece nossa confiança em Jeová.",
      "A história completa do mundo desde a criação até hoje.",
      "Um resumo de todos os profetas menores.",
      "Como ganhar riquezas materiais seguindo a Bíblia."
    ],
    correta: "Coisas que não sabemos, os desafios por isso e por que às vezes é bom não saber tudo; isso fortalece nossa confiança em Jeová."
  },
  {
    pergunta: "4. De acordo com Mateus 24:36, qual é uma das coisas que nós não sabemos?",
    alternativas: [
      "Quando o fim deste sistema de coisas vai chegar.",
      "O número exato de pessoas que vão aceitar a mensagem.",
      "Quanto ouro a Terra possui.",
      "Quem será o próximo líder político mundial."
    ],
    correta: "Quando o fim deste sistema de coisas vai chegar."
  },
  {
    pergunta: "5. Já que não sabemos a data do fim, como isso pode nos afetar?",
    alternativas: [
      "Podemos ficar impacientes, desanimados ou ser alvo de ridicularização por parte de outros.",
      "Ficar imediatamente ricos sem trabalhar.",
      "Ter certeza de dominar o mundo antes do fim.",
      "Garantir fama e reconhecimento público."
    ],
    correta: "Podemos ficar impacientes, desanimados ou ser alvo de ridicularização por parte de outros."
  },
  {
    pergunta: "6. Por que é bom não saber quando o fim virá?",
    alternativas: [
      "Porque isso prova que servimos a Jeová por amor e não por um prazo; fortalece nossa fé e confiança nele.",
      "Porque assim podemos adiar toda obra espiritual.",
      "Porque impede que alguém pregue a mensagem.",
      "Porque nos permite controlar os outros."
    ],
    correta: "Porque isso prova que servimos a Jeová por amor e não por um prazo; fortalece nossa fé e confiança nele."
  },
  {
    pergunta: "7. Que coisas sabemos?",
    alternativas: [
      "Que os últimos dias começaram em 1914 e qual é o trabalho que Jeová quer que façamos (pregar as boas novas).",
      "Que tudo será resolvido por tecnologia humana.",
      "Que devemos depender apenas de governos humanos.",
      "Que nada do que a Bíblia diz é confiável."
    ],
    correta: "Que os últimos dias começaram em 1914 e qual é o trabalho que Jeová quer que façamos (pregar as boas novas)."
  },
  {
    pergunta: "8. O que a expressão “o trabalho do verdadeiro Deus” quer dizer? (Eclesiastes 11:5)",
    alternativas: [
      "Refere-se ao que Jeová faz e ao que Ele permite para cumprir o seu propósito; muitas vezes não entendemos todos os motivos.",
      "Significa exclusivamente o trabalho dos pregadores humanos.",
      "Refere-se ao trabalho científico moderno.",
      "Significa que tudo é aleatório e sem propósito."
    ],
    correta: "Refere-se ao que Jeová faz e ao que Ele permite para cumprir o seu propósito; muitas vezes não entendemos todos os motivos."
  },
  {
    pergunta: "9. Por não sabermos como Jeová vai agir, o que pode acontecer?",
    alternativas: [
      "Podemos ficar indecisos e hesitar em fazer sacrifícios para servir mais a Jeová.",
      "Seremos capazes de prever todos os milagres futuros.",
      "Isto nos dá motivo para abandonar a fé imediatamente.",
      "Faz com que tenhamos total controle sobre o plano de Deus."
    ],
    correta: "Podemos ficar indecisos e hesitar em fazer sacrifícios para servir mais a Jeová."
  },
  {
    pergunta: "10. Que qualidades importantes podemos desenvolver por não saber como Jeová vai agir?",
    alternativas: [
      "Humildade, modéstia e maior confiança em Jeová.",
      "Arrogância e desprezo pelos outros.",
      "A crença de que a força física é tudo.",
      "A convicção de que conhecimento humano substitui a fé."
    ],
    correta: "Humildade, modéstia e maior confiança em Jeová."
  },
  {
    pergunta: "11. Que coisas importantes nós sabemos?",
    alternativas: [
      "Que Jeová é amoroso, justo e sábio, e que recompensa os que são leais a ele.",
      "Que Jeová abandona os que sofrem.",
      "Que a riqueza material é o sinal supremo de aprovação divina.",
      "Que não precisamos de oração nem de fé."
    ],
    correta: "Que Jeová é amoroso, justo e sábio, e que recompensa os que são leais a ele."
  },
  {
    pergunta: "12. O que aprendemos em Tiago 4:13, 14?",
    alternativas: [
      "Que não sabemos como será o nosso amanhã; estamos sujeitos ao tempo e ao imprevisto.",
      "Que sempre controlamos todos os eventos do futuro.",
      "Que planejar o futuro elimina toda incerteza.",
      "Que o amanhã pertence somente a governantes humanos."
    ],
    correta: "Que não sabemos como será o nosso amanhã; estamos sujeitos ao tempo e ao imprevisto."
  },
  {
    pergunta: "13. Como as incertezas da vida podem nos afetar?",
    alternativas: [
      "Podem deixar-nos desanimados, frustrados e tirar nossa alegria.",
      "Nos garantem total estabilidade e prazer imediato.",
      "Nos tornam automaticamente insensíveis ao sofrimento dos outros.",
      "Fazem com que nunca precisemos decidir nada."
    ],
    correta: "Podem deixar-nos desanimados, frustrados e tirar nossa alegria."
  },
  {
    pergunta: "14. Do que a nossa felicidade realmente depende?",
    alternativas: [
      "Depende de ter a orientação de Jeová e obedecer a ele, não de saber tudo o que vai acontecer.",
      "Depende de não crer em nada espiritual.",
      "Depende apenas de acumular bens materiais.",
      "Depende de controlar todas as pessoas ao nosso redor."
    ],
    correta: "Depende de ter a orientação de Jeová e obedecer a ele, não de saber tudo o que vai acontecer."
  },
  {
    pergunta: "15. O que sabemos sobre o futuro?",
    alternativas: [
      "Que Jeová prometeu vida eterna e que suas promessas se cumprirão; ele não pode mentir.",
      "Que não há qualquer promessa divina sobre o futuro.",
      "Que o futuro depende só da sorte humana.",
      "Que ninguém jamais será recompensado por suas ações."
    ],
    correta: "Que Jeová prometeu vida eterna e que suas promessas se cumprirão; ele não pode mentir."
  },
  {
    pergunta: "16. O que Jeová sabe sobre nós que não conseguimos entender completamente?",
    alternativas: [
      "Que Ele conhece cada detalhe sobre nós: pensamentos, motivos e sentimentos.",
      "Que Ele ignora nossas palavras e ações.",
      "Que desconhece o nosso coração e intenções.",
      "Que só observa ações públicas, não pensamentos."
    ],
    correta: "Que Ele conhece cada detalhe sobre nós: pensamentos, motivos e sentimentos."
  },
  {
    pergunta: "17. Por que pode ser difícil aceitar que Jeová nos conhece tão bem?",
    alternativas: [
      "Por causa da nossa formação, cultura ou sentimento de culpa; podemos achar que Ele está muito longe.",
      "Porque sabemos que nada nos diferencia uns dos outros.",
      "Porque é impossível que alguém nos entenda.",
      "Porque isso prova que ninguém nos ama."
    ],
    correta: "Por causa da nossa formação, cultura ou sentimento de culpa; podemos achar que Ele está muito longe."
  },
  {
    pergunta: "18. Por que é bom aceitar que Jeová nos conhece melhor do que nós mesmos?",
    alternativas: [
      "Porque Ele vê nosso potencial, nos ama e nos dá força para servir fielmente.",
      "Porque isso nos torna passivos e sem responsabilidade.",
      "Porque nos impede de melhorar como pessoas.",
      "Porque significa que não precisamos orar."
    ],
    correta: "Porque Ele vê nosso potencial, nos ama e nos dá força para servir fielmente."
  },
  {
    pergunta: "19. O que sabemos sobre Jeová?",
    alternativas: [
      "Que Jeová é amor e que tudo quanto Ele pede é por amor; Ele quer que tenhamos vida eterna.",
      "Que Jeová não se importa com as pessoas.",
      "Que Jeová prefere que ninguém seja fiel.",
      "Que Jeová deixou de se envolver nos assuntos humanos."
    ],
    correta: "Que Jeová é amor e que tudo quanto Ele pede é por amor; Ele quer que tenhamos vida eterna."
  },
  {
    pergunta: "20. Por que não precisamos ficar preocupados demais com o que não sabemos?",
    alternativas: [
      "Porque Jeová nos diz o que realmente precisamos saber e podemos confiar nele.",
      "Porque não precisamos nos esforçar para aprender nada.",
      "Porque a preocupação garante respostas imediatas.",
      "Porque o mundo humano sempre resolverá tudo por nós."
    ],
    correta: "Porque Jeová nos diz o que realmente precisamos saber e podemos confiar nele."
  },
  {
    pergunta: "21. Quando o fim vai chegar?",
    alternativas: [
      "Não sabemos a data exata; Jeová conhece o cronograma e não nos revela a hora.",
      "Sabemos exatamente: será daqui a 10 anos.",
      "Alguém na Terra possui a data secreta e compartilhará em breve.",
      "O fim depende exclusivamente de decisões humanas."
    ],
    correta: "Não sabemos a data exata; Jeová conhece o cronograma e não nos revela a hora."
  },
  {
    pergunta: "22. O que vai acontecer amanhã?",
    alternativas: [
      "Não sabemos plenamente o que acontecerá amanhã; devemos confiar em Jeová e cumprir o que Ele nos pede hoje.",
      "Sabemos com certeza tudo que amanhã trará.",
      "Apenas a previsão científica determina o que acontece amanhã.",
      "O que acontecerá amanhã depende só de nossas riquezas."
    ],
    correta: "Não sabemos plenamente o que acontecerá amanhã; devemos confiar em Jeová e cumprir o que Ele nos pede hoje."
  },
  {
    pergunta: "23. O quanto Jeová nos conhece?",
    alternativas: [
      "Jeová nos conhece perfeitamente: conhece nossos pensamentos, motivos e sentimentos.",
      "Jeová conhece apenas nossas ações públicas.",
      "Jeová não tem conhecimento real sobre as pessoas.",
      "Jeová só observa os líderes religiosos."
    ],
    correta: "Jeová nos conhece perfeitamente: conhece nossos pensamentos, motivos e sentimentos."
  }
];

let perguntaAtual = 0;
let acertos = 0;

function iniciarQuiz() {
  mostrarPergunta();
}

function mostrarPergunta() {
  const quizDiv = document.getElementById("quiz");
  const q = artigoQuiz[perguntaAtual];

  let html = `<h2>Pergunta ${perguntaAtual + 1} de ${artigoQuiz.length}</h2>`;
  html += `<p><b>${q.pergunta}</b></p>`;

  const alternativasEmbaralhadas = shuffle([...q.alternativas]);
  alternativasEmbaralhadas.forEach(alt => {
    html += `
      <button class="alternativa" onclick="verificarResposta('${escapeHtml(alt)}')">
        ${alt}
      </button>
    `;
  });

  html += `<div id="feedback" style="margin-top:15px;font-weight:bold;"></div>`;
  quizDiv.innerHTML = html;
}

function verificarResposta(resposta) {
  const q = artigoQuiz[perguntaAtual];
  const feedbackDiv = document.getElementById("feedback");
  const botoes = document.querySelectorAll(".alternativa");

  botoes.forEach(b => b.disabled = true);

  if (unescapeHtml(resposta) === q.correta) {
    acertos++;
    feedbackDiv.innerHTML = `<span style="color:green;">✅ Correto!</span>`;
  } else {
    feedbackDiv.innerHTML = `<span style="color:red;">❌ Errado.</span> <br>Resposta certa: <b>${q.correta}</b>`;
  }

  if (perguntaAtual < artigoQuiz.length - 1) {
    feedbackDiv.innerHTML += `<br><button onclick="proximaPergunta()">Próxima ➡️</button>`;
  } else {
    feedbackDiv.innerHTML += `<br><button onclick="finalizarQuiz()">Ver Resultado 🏆</button>`;
  }
}

function proximaPergunta() {
  perguntaAtual++;
  mostrarPergunta();
}

function finalizarQuiz() {
  const quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = `
    <h2>Fim do Quiz 🎉</h2>
    <p>Você acertou <b>${acertos}</b> de <b>${artigoQuiz.length}</b> perguntas.</p>
    <button onclick="reiniciarQuiz()">🔄 Tentar novamente</button>
  `;
}

function reiniciarQuiz() {
  perguntaAtual = 0;
  acertos = 0;
  mostrarPergunta();
}

// Helpers
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function unescapeHtml(safe) {
  return safe
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", iniciarQuiz);
} else {
  iniciarQuiz();
}
