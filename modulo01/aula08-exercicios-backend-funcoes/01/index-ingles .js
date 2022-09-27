const test = {
  student: 'João',
  subject: 'Português',
  value: 10,
  questions: [
    {
      answer: 'a',
      correct: 'b',
    },
    {
      answer: 'c',
      correct: 'c',
    },
    {
      answer: 'e',
      correct: 'b',
    },
    {
      answer: 'b',
      correct: 'b',
    },
    {
      answer: 'c',
      correct: 'c',
    },
  ],
};

function correctExam(test) {
  let sum = 0;
  let notePerQuestion = test.value / test.questions.length;
  let note = 0;
  for (item of test.questions) {
    if (item.answer === item.correct) {
      sum += 1;
      note += notePerQuestion;
    }
  }
  console.log(
    `O aluno(a) ${test.student} acertou ${sum} questões e obteve nota ${note}`
  );
}

correctExam(test);
