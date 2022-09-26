const prova = {
  aluno: 'João',
  materia: 'Português',
  valor: 10,
  questoes: [
    {
      resposta: 'a',
      correta: 'b',
    },
    {
      resposta: 'c',
      correta: 'c',
    },
    {
      resposta: 'e',
      correta: 'b',
    },
    {
      resposta: 'b',
      correta: 'b',
    },
    {
      resposta: 'c',
      correta: 'c',
    },
  ],
};

function corrigirProva(prova) {
  let soma = 0;
  let notaPorQuestao = prova.valor / prova.questoes.length;
  let nota = 0;
  for (item of prova.questoes) {
    if (item.resposta === item.correta) {
      soma += 1;
      nota += notaPorQuestao;
    }
  }
  console.log(
    `O aluno(a) ${prova.aluno} acertou ${soma} questões e obteve nota ${nota}`
  );
}

corrigirProva(prova);
