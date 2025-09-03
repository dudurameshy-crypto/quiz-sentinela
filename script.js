// Quiz - Sentinela 7-9 (23 perguntas com alternativas mais desafiadoras)

const artigoQuiz = [
  {
    pergunta: "1. Que capacidade Jeová nos deu, e por quê?",
    alternativas: [
      "A capacidade de pensar, aprender e aplicar o conhecimento, para que possamos achar o conhecimento de Deus e servi-lo.",
      "A capacidade de compreender apenas profecias, sem aplicar no dia a dia.",
      "O dom de discernimento para julgar todas as pessoas infalivelmente.",
      "A habilidade de adquirir sabedoria humana suficiente para governar sem depender de Jeová."
    ],
    correta: "A capacidade de pensar, aprender e aplicar o conhecimento, para que possamos achar o conhecimento de Deus e servi-lo."
  },
  {
    pergunta: "2. Que fato precisamos entender, e por que isso é bom para nós? (Jó 37:23, 24)",
    alternativas: [
      "Que há muitas coisas que não sabemos; isso nos torna humildes e nos ajuda a confiar em Jeová.",
      "Que todo conhecimento espiritual depende unicamente da tradição dos anciãos.",
      "Que podemos prever o futuro se estudarmos suficientemente as Escrituras.",
      "Que só é possível confiar em Jeová quando entendemos completamente seus caminhos."
    ],
    correta: "Que há muitas coisas que não sabemos; isso nos torna humildes e nos ajuda a confiar em Jeová."
  },
  {
    pergunta: "3. O que vamos ver neste estudo?",
    alternativas: [
      "Coisas que não sabemos, os desafios por isso e por que às vezes é bom não saber tudo; isso fortalece nossa confiança em Jeová.",
      "Como calcular cronogramas exatos para o Armagedom.",
      "Uma lista de todos os segredos ocultos que só os ungidos conhecem.",
      "O modo como Jeová revelou datas específicas aos profetas modernos."
    ],
    correta: "Coisas que não sabemos, os desafios por isso e por que às vezes é bom não saber tudo; isso fortalece nossa confiança em Jeová."
  },
  {
    pergunta: "4. De acordo com Mateus 24:36, qual é uma das coisas que nós não sabemos?",
    alternativas: [
      "Quando o fim deste sistema de coisas vai chegar.",
      "O momento exato em que todos os mortos serão ressuscitados.",
      "O ano em que a grande tribulação começará e terminará.",
      "A ordem em que cada nação será julgada durante o Armagedom."
    ],
    correta: "Quando o fim deste sistema de coisas vai chegar."
  },
  {
    pergunta: "5. Já que não sabemos a data do fim, como isso pode nos afetar?",
    alternativas: [
      "Podemos ficar impacientes, desanimados ou ser alvo de ridicularização por parte de outros.",
      "Podemos concluir que não precisamos mais pregar até que a data seja revelada.",
      "Podemos acreditar que Jeová esqueceu sua promessa e abandonou a Terra.",
      "Podemos pensar que temos liberdade para viver sem padrões morais até o último momento."
    ],
    correta: "Podemos ficar impacientes, desanimados ou ser alvo de ridicularização por parte de outros."
  },
  {
    pergunta: "6. Por que é bom não saber quando o fim virá?",
    alternativas: [
      "Porque isso prova que servimos a Jeová por amor e não por um prazo; fortalece nossa fé e confiança nele.",
      "Porque assim cada pessoa pode definir seu próprio caminho independente de Jeová.",
      "Porque nos dá autoridade para fixar datas alternativas de julgamento.",
      "Porque elimina a necessidade de vigilância constante no serviço a Deus."
    ],
    correta: "Porque isso prova que servimos a Jeová por amor e não por um prazo; fortalece nossa fé e confiança nele."
  },
  {
    pergunta: "7. Que coisas sabemos?",
    alternativas: [
      "Que os últimos dias começaram em 1914 e qual é o trabalho que Jeová quer que façamos.",
      "Que o Armagedom acontecerá em um período de sete anos predeterminado.",
      "Que a humanidade conseguirá prolongar o sistema atual por mais séculos.",
      "Que apenas profetas modernos podem revelar os propósitos de Jeová."
    ],
    correta: "Que os últimos dias começaram em 1914 e qual é o trabalho que Jeová quer que façamos."
  },
  {
    pergunta: "8. O que a expressão “o trabalho do verdadeiro Deus” quer dizer? (Eclesiastes 11:5)",
    alternativas: [
      "Refere-se ao que Jeová faz e ao que Ele permite para cumprir o seu propósito; muitas vezes não entendemos todos os motivos.",
      "Refere-se apenas às tarefas administrativas dentro da congregação.",
      "Diz respeito exclusivamente a milagres visíveis realizados no passado.",
      "Aponta para todo trabalho religioso feito pela humanidade."
    ],
    correta: "Refere-se ao que Jeová faz e ao que Ele permite para cumprir o seu propósito; muitas vezes não entendemos todos os motivos."
  },
  {
    pergunta: "9. Por não sabermos como Jeová vai agir, o que pode acontecer?",
    alternativas: [
      "Podemos ficar indecisos e hesitar em fazer sacrifícios para servir mais a Jeová.",
      "Podemos supor que Ele nunca cumprirá suas promessas e desistir da fé.",
      "Podemos criar nossas próprias interpretações para acelerar o fim.",
      "Podemos nos tornar presunçosos e decidir que não precisamos de sua orientação."
    ],
    correta: "Podemos ficar indecisos e hesitar em fazer sacrifícios para servir mais a Jeová."
  },
  {
    pergunta: "10. Que qualidades importantes podemos desenvolver por não saber como Jeová vai agir?",
    alternativas: [
      "Humildade, modéstia e maior confiança em Jeová.",
      "Orgulho de nossa própria sabedoria humana.",
      "Segurança de que podemos prever cada detalhe do futuro.",
      "Desprezo pelas instruções da congregação cristã."
    ],
    correta: "Humildade, modéstia e maior confiança em Jeová."
  },
  {
    pergunta: "11. Que coisas importantes nós sabemos?",
    alternativas: [
      "Que Jeová é amoroso, justo e sábio, e que recompensa os que são leais a ele.",
      "Que Jeová abandona aqueles que não alcançam perfeição absoluta.",
      "Que Jeová é severo demais para demonstrar amor em todas as situações.",
      "Que a fidelidade a Ele traz apenas bênçãos materiais imediatas."
    ],
    correta: "Que Jeová é amoroso, justo e sábio, e que recompensa os que são leais a ele."
  },
  {
    pergunta: "12. O que aprendemos em Tiago 4:13, 14?",
    alternativas: [
      "Que não sabemos como será o nosso amanhã; estamos sujeitos ao tempo e ao imprevisto.",
      "Que podemos planejar cada detalhe da vida com certeza absoluta.",
      "Que nossas decisões garantem total controle sobre o futuro.",
      "Que o amanhã depende somente da força humana e do destino."
    ],
    correta: "Que não sabemos como será o nosso amanhã; estamos sujeitos ao tempo e ao imprevisto."
  },
  {
    pergunta: "13. Como as incertezas da vida podem nos afetar?",
    alternativas: [
      "Podem deixar-nos desanimados, frustrados e tirar nossa alegria.",
      "Podem nos levar a confiar demais em nossa própria capacidade.",
      "Podem nos fazer negligenciar completamente a oração.",
      "Podem criar a ilusão de que não precisamos mais servir a Jeová."
    ],
    correta: "Podem deixar-nos desanimados, frustrados e tirar nossa alegria."
  },
  {
    pergunta: "14. Do que a nossa felicidade realmente depende?",
    alternativas: [
      "Depende de ter a orientação de Jeová e obedecer a ele, não de saber tudo o que vai acontecer.",
      "Depende de alcançar prosperidade material neste sistema.",
      "Depende de possuir conhecimento científico em abundância.",
      "Depende de saber todas as datas proféticas com exatidão."
    ],
    correta: "Depende de ter a orientação de Jeová e obedecer a ele, não de saber tudo o que vai acontecer."
  },
  {
    pergunta: "15. O que sabemos sobre o futuro?",
    alternativas: [
      "Que Jeová prometeu vida eterna e que suas promessas se cumprirão; ele não pode mentir.",
      "Que os planos divinos dependem da vontade dos governantes humanos.",
      "Que o futuro pode ser alterado por adivinhações e presságios.",
      "Que somente a filosofia humana define o que virá."
    ],
    correta: "Que Jeová prometeu vida eterna e que suas promessas se cumprirão; ele não pode mentir."
  },
  {
    pergunta: "16. O que Jeová sabe sobre nós que não conseguimos entender completamente?",
    alternativas: [
      "Que Ele conhece cada detalhe sobre nós: pensamentos, motivos e sentimentos.",
      "Que Ele observa apenas nossas ações públicas, não o coração.",
      "Que Ele só percebe os erros, nunca as boas intenções.",
      "Que Ele avalia exclusivamente as orações feitas em público."
    ],
    correta: "Que Ele conhece cada detalhe sobre nós: pensamentos, motivos e sentimentos."
  },
  {
    pergunta: "17. Por que pode ser difícil aceitar que Jeová nos conhece tão bem?",
    alternativas: [
      "Por causa da nossa formação, cultura ou sentimento de culpa; podemos achar que Ele está muito longe.",
      "Porque é impossível que alguém saiba mais sobre nós do que nós mesmos.",
      "Porque pensamos que Ele só se interessa por líderes religiosos.",
      "Porque acreditamos que Ele não está atento às nossas falhas."
    ],
    correta: "Por causa da nossa formação, cultura ou sentimento de culpa; podemos achar que Ele está muito longe."
  },
  {
    pergunta: "18. Por que é bom aceitar que Jeová nos conhece melhor do que nós mesmos?",
    alternativas: [
      "Porque Ele vê nosso potencial, nos ama e nos dá força para servir fielmente.",
      "Porque isso elimina a responsabilidade pessoal de tomar decisões.",
      "Porque significa que nunca cometeremos erros no serviço a Ele.",
      "Porque nos torna independentes das Escrituras e da congregação."
    ],
    correta: "Porque Ele vê nosso potencial, nos ama e nos dá força para servir fielmente."
  },
  {
    pergunta: "19. O que sabemos sobre Jeová?",
    alternativas: [
      "Que Jeová é amor e que tudo quanto Ele pede é por amor; Ele quer que tenhamos vida eterna.",
      "Que Jeová exige sacrifícios humanos como prova de lealdade.",
      "Que Jeová se alegra apenas quando castigamos os inimigos.",
      "Que Jeová não se importa com as escolhas individuais."
    ],
    correta: "Que Jeová é amor e que tudo quanto Ele pede é por amor; Ele quer que tenhamos vida eterna."
  },
  {
    pergunta: "20. Por que não precisamos ficar preocupados demais com o que não sabemos?",
    alternativas: [
      "Porque Jeová nos diz o que realmente precisamos saber e podemos confiar nele.",
      "Porque podemos ignorar totalmente as Escrituras.",
      "Porque o tempo e o acaso sempre resolvem tudo.",
      "Porque o conhecimento humano é suficiente para substituir a fé."
    ],
    correta: "Porque Jeová nos diz o que realmente precisamos saber e podemos confiar nele."
  },
  {
    pergunta: "21. Quando o fim vai chegar?",
    alternativas: [
      "Não sabemos a data exata; Jeová conhece o cronograma e não nos revela a hora.",
      "Será em breve, conforme cálculos matemáticos escondidos na Bíblia.",
      "Depende da vontade dos líderes religiosos atuais.",
      "Já aconteceu secretamente no passado e ninguém percebeu."
    ],
    correta: "Não sabemos a data exata; Jeová conhece o cronograma e não nos revela a hora."
  },
  {
    pergunta: "22. O que vai acontecer amanhã?",
    alternativas: [
      "Não sabemos plenamente o que acontecerá amanhã; devemos confiar em Jeová e cumprir o que Ele nos pede hoje.",
      "Sempre acontecerá exatamente o que planejamos com antecedência.",
      "Amanhã será revelado todo o propósito divino em detalhes.",
      "Jeová garante que amanhã todos os problemas desaparecerão."
    ],
    correta: "Não sabemos plenamente o que acontecerá amanhã; devemos confiar em Jeová e cumprir o que Ele nos pede hoje."
  },
  {
    pergunta: "23. O quanto Jeová nos conhece?",
    alternativas: [
      "Jeová nos conhece perfeitamente: conhece nossos pensamentos, motivos e sentimentos.",
      "Jeová só observa nossas palavras públicas, não o coração.",
      "Jeová apenas registra os pecados mais graves.",
      "Jeová conhece a humanidade em geral, mas não cada pessoa individualmente."
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
