document.getElementById('quizForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Jawaban benar
  const answers = {
    q1: 'c',
    q2: 'b',
    q3: 'a'
  };

  let score = 0;
  let total = Object.keys(answers).length;

  for (let key in answers) {
    const radios = document.getElementsByName(key);
    let selected = '';
    for (let radio of radios) {
      if (radio.checked) {
        selected = radio.value;
        break;
      }
    }
    if (selected === answers[key]) {
      score++;
    }
  }

  document.getElementById('result').innerHTML = `Skor Anda: <strong>${score} / ${total}</strong>`;
});