const landforms = {
  mountains: ['🏔️', 'The Himalayas', 'These young fold mountains form a natural wall in the north. Many rivers begin in their snow and glaciers.'],
  plains: ['🌾', 'The Northern Plains', 'Rivers deposit rich soil here. The flat, fertile land is excellent for farming and supports many cities and villages.'],
  plateau: ['⛰️', 'The Deccan Plateau', 'A plateau is high land with a mostly flat top. Much of southern India lies on this ancient rocky tableland.'],
  coast: ['🏝️', 'Coasts and Islands', 'India has the Arabian Sea to the west, the Bay of Bengal to the east, and the Indian Ocean to the south.']
};

const eras = {
  indus: ['🏺', 'About 2500 BCE', 'Well-planned Indus cities', 'Cities such as Harappa had straight streets, brick houses, wells, and covered drains. That shows careful planning.', '💡 Remember: cities and drainage'],
  ashoka: ['☸️', '3rd century BCE', 'Ashoka chooses peace', 'After seeing the suffering caused by war, Emperor Ashoka promoted peace, kindness, and the teachings of Buddhism.', '💡 Remember: change from war to peace'],
  kingdoms: ['🏰', 'Ancient to medieval times', 'Many kingdoms shape India', 'Different kingdoms supported art, literature, science, trade, temples, forts, and new styles of architecture.', '💡 Remember: many rulers and achievements'],
  freedom: ['🕊️', '1857–1947', 'The freedom struggle', 'People across India joined movements against British rule. Mahatma Gandhi encouraged non-violence and peaceful protest.', '💡 Remember: unity and non-violence'],
  republic: ['🇮🇳', '26 January 1950', 'India becomes a republic', 'The Constitution came into effect. India chose to be a democratic republic where citizens elect their representatives.', '💡 Remember: Constitution and democracy']
};

const governments = {
  local: ['🧹', 'Local government', 'Looks after nearby needs such as streets, parks, drains, and waste collection.'],
  state: ['🏥', 'State government', 'Works on subjects such as state roads, police, hospitals, and schools across the state.'],
  union: ['🛡️', 'Union government', 'Works for the whole country on subjects such as defence, currency, railways, and relations with other countries.']
};

const decks = {
  geography: [
    ['What is a plateau?', 'High land with a mostly flat top.', '⛰️'],
    ['Which mountains lie in northern India?', 'The Himalayas.', '🏔️'],
    ['What are the three large water bodies around India?', 'The Arabian Sea, Bay of Bengal, and Indian Ocean.', '🌊'],
    ['Where does a river’s journey begin?', 'At its source.', '💧']
  ],
  history: [
    ['What was special about Indus cities?', 'They had planned streets, brick houses, wells, and drains.', '🏺'],
    ['What did Ashoka promote after the Kalinga war?', 'Peace, kindness, and Buddhism.', '☸️'],
    ['When did India become independent?', '15 August 1947.', '🕊️'],
    ['When did India become a republic?', '26 January 1950.', '🇮🇳']
  ],
  polity: [
    ['What is democracy?', 'A system in which people choose their representatives.', '🗳️'],
    ['What is the Constitution?', 'India’s main rulebook for government and citizens’ rights.', '📘'],
    ['Which government works across one state?', 'The state government.', '🏙️'],
    ['Who are citizens?', 'People who legally belong to a country.', '👨‍👩‍👧‍👦']
  ],
  culture: [
    ['What does “unity in diversity” mean?', 'We can be different and still belong together as one country.', '🤝'],
    ['Name three parts of culture.', 'Any three: language, food, music, clothing, art, or festivals.', '🎭'],
    ['What is India’s national bird?', 'The Indian peafowl, often called the peacock.', '🦚'],
    ['Why should we respect different traditions?', 'They enrich our shared country and help us learn from one another.', '🌈']
  ]
};

const quizQuestions = [
  { topic: 'GEOGRAPHY', emoji: '🏔️', question: 'Which landform is high with a mostly flat top?', options: ['Plain', 'Plateau', 'Island', 'Valley'], answer: 1, explain: 'A plateau is raised land with a mostly flat top.' },
  { topic: 'GEOGRAPHY', emoji: '🧭', question: 'The Himalayas are in which direction from most of India?', options: ['North', 'South', 'East', 'West'], answer: 0, explain: 'The Himalayas stretch across India’s north.' },
  { topic: 'GEOGRAPHY', emoji: '🌊', question: 'Where does a river usually finish its journey?', options: ['At its source', 'On a mountain', 'At its mouth', 'In a field'], answer: 2, explain: 'The river mouth is where the river meets a sea, lake, or another river.' },
  { topic: 'HISTORY', emoji: '🏺', question: 'What shows that Indus cities were carefully planned?', options: ['Covered drains', 'Airports', 'Skyscrapers', 'Cars'], answer: 0, explain: 'Their straight streets, wells, and covered drains show careful planning.' },
  { topic: 'HISTORY', emoji: '🕊️', question: 'In which year did India become independent?', options: ['1857', '1947', '1950', '2000'], answer: 1, explain: 'India became independent on 15 August 1947.' },
  { topic: 'HISTORY', emoji: '📘', question: 'What important event happened on 26 January 1950?', options: ['India became a republic', 'The Taj Mahal was built', 'A new ocean formed', 'The railway began'], answer: 0, explain: 'The Constitution came into effect and India became a republic.' },
  { topic: 'POLITY', emoji: '🗳️', question: 'In a democracy, how do citizens choose representatives?', options: ['By voting', 'By racing', 'By guessing', 'By drawing lots'], answer: 0, explain: 'Citizens vote in elections to choose representatives.' },
  { topic: 'POLITY', emoji: '🧹', question: 'Which level usually looks after neighbourhood drains and waste?', options: ['Union', 'World', 'Local', 'State'], answer: 2, explain: 'Local government manages many nearby community services.' },
  { topic: 'CULTURE', emoji: '🤝', question: 'What does “unity in diversity” teach us?', options: ['Everyone must be the same', 'Differences can belong together', 'Only one language matters', 'Festivals are competitions'], answer: 1, explain: 'India’s many cultures are different and still part of one nation.' },
  { topic: 'INDIA & THE WORLD', emoji: '🌍', question: 'What can countries exchange with one another?', options: ['Only money', 'Only food', 'Goods, knowledge, and ideas', 'Nothing'], answer: 2, explain: 'Countries grow by sharing goods, knowledge, skills, and ideas.' }
];

function bindChoiceButtons(selector, data, update) {
  document.querySelectorAll(selector).forEach((button) => button.addEventListener('click', () => {
    document.querySelector(`${selector}.active`)?.classList.remove('active');
    button.classList.add('active');
    update(data[button.dataset.landform || button.dataset.era || button.dataset.government]);
  }));
}

bindChoiceButtons('.landform', landforms, ([emoji, title, copy]) => {
  document.querySelector('#landform-emoji').textContent = emoji;
  document.querySelector('#landform-title').textContent = title;
  document.querySelector('#landform-copy').textContent = copy;
});
bindChoiceButtons('.time-stop', eras, ([icon, date, title, copy, remember]) => {
  document.querySelector('#era-icon').textContent = icon;
  document.querySelector('#era-date').textContent = date;
  document.querySelector('#era-title').textContent = title;
  document.querySelector('#era-copy').textContent = copy;
  document.querySelector('#era-remember').textContent = remember;
});
bindChoiceButtons('.gov-level', governments, ([icon, title, copy]) => {
  document.querySelector('#government-icon').textContent = icon;
  document.querySelector('#government-title').textContent = title;
  document.querySelector('#government-copy').textContent = copy;
});

document.querySelectorAll('[data-direction]').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('[data-direction]').forEach((item) => item.classList.remove('correct', 'wrong'));
  const correct = button.dataset.direction === 'right';
  button.classList.add(correct ? 'correct' : 'wrong');
  document.querySelector('.mini-feedback').textContent = correct ? '⭐ Correct! North is at the top of most maps.' : 'Good try—look for N on the compass and try again.';
}));

const savedMissions = new Set(JSON.parse(localStorage.getItem('indiaExplorerMissions') || '[]'));
function renderProgress() {
  const count = savedMissions.size;
  document.querySelector('#star-count').textContent = count;
  document.querySelector('#progress-fill').style.width = `${count * 20}%`;
  document.querySelector('#progress-message').textContent = count === 5 ? 'Amazing! You completed every mission! 🎉' : count ? `${count} of 5 missions complete. Keep exploring!` : 'Start a mission to earn your first star!';
  document.querySelectorAll('[data-mission]').forEach((card) => card.classList.toggle('done', savedMissions.has(card.dataset.mission)));
  document.querySelectorAll('[data-complete]').forEach((button) => {
    if (savedMissions.has(button.dataset.complete)) { button.classList.add('completed'); button.textContent = 'Mission complete ✓'; }
  });
}
document.querySelectorAll('[data-complete]').forEach((button) => button.addEventListener('click', () => {
  const mission = button.dataset.complete;
  if (!savedMissions.has(mission)) {
    savedMissions.add(mission);
    localStorage.setItem('indiaExplorerMissions', JSON.stringify([...savedMissions]));
    const toast = document.querySelector('.star-toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2200);
  }
  renderProgress();
}));
renderProgress();

let flashcards = decks.geography;
let cardIndex = 0;
const card = document.querySelector('.flashcard');
const count = document.querySelector('.card-count');
const front = document.querySelector('.card-front strong');
const back = document.querySelector('.card-back strong');
const frontEmoji = document.querySelector('.front-emoji');
const backEmoji = document.querySelector('.back-emoji');
function showCard() {
  card.classList.remove('flipped');
  [front.textContent, back.textContent, frontEmoji.textContent, backEmoji.textContent] = [flashcards[cardIndex][0], flashcards[cardIndex][1], flashcards[cardIndex][2], flashcards[cardIndex][2]];
  count.textContent = `${cardIndex + 1} / ${flashcards.length}`;
}
function moveCard(amount) { cardIndex = (cardIndex + amount + flashcards.length) % flashcards.length; showCard(); }
card.addEventListener('click', () => card.classList.toggle('flipped'));
document.querySelector('.previous-card').addEventListener('click', () => moveCard(-1));
document.querySelector('.next-card').addEventListener('click', () => moveCard(1));
document.querySelector('.know-button').addEventListener('click', () => moveCard(1));
document.querySelectorAll('.deck-button').forEach((button) => button.addEventListener('click', () => {
  document.querySelector('.deck-button.active').classList.remove('active');
  button.classList.add('active'); flashcards = decks[button.dataset.deck]; cardIndex = 0; showCard();
}));
showCard();

let quizIndex = 0;
let quizScore = 0;
function renderQuiz() {
  const item = quizQuestions[quizIndex];
  document.querySelector('.quiz-topic').textContent = item.topic;
  document.querySelector('#quiz-visual').textContent = item.emoji;
  document.querySelector('#quiz-question').textContent = item.question;
  document.querySelector('#quiz-feedback').textContent = '';
  document.querySelector('#next-question').hidden = true;
  document.querySelector('#quiz-progress-fill').style.width = `${(quizIndex / quizQuestions.length) * 100}%`;
  const answers = document.querySelector('#quiz-answers'); answers.replaceChildren();
  item.options.forEach((option, optionIndex) => {
    const button = document.createElement('button'); button.textContent = option;
    button.addEventListener('click', () => answerQuiz(optionIndex)); answers.append(button);
  });
}
function answerQuiz(choice) {
  const item = quizQuestions[quizIndex];
  const buttons = [...document.querySelectorAll('#quiz-answers button')];
  buttons.forEach((button, index) => { button.disabled = true; if (index === item.answer) button.classList.add('correct'); });
  if (choice === item.answer) { quizScore += 1; document.querySelector('#quiz-score').textContent = quizScore; document.querySelector('#quiz-feedback').textContent = `⭐ Correct! ${item.explain}`; }
  else { buttons[choice].classList.add('wrong'); document.querySelector('#quiz-feedback').textContent = `Almost! ${item.explain}`; }
  document.querySelector('#next-question').hidden = false;
}
document.querySelector('#next-question').addEventListener('click', () => {
  quizIndex += 1;
  if (quizIndex < quizQuestions.length) renderQuiz();
  else {
    document.querySelector('#quiz-progress-fill').style.width = '100%';
    document.querySelector('#quiz-area').innerHTML = `<div class="quiz-finish"><span>🏆</span><h3>You earned ${quizScore} out of ${quizQuestions.length} quiz stars!</h3><p>${quizScore >= 8 ? 'Brilliant exploring—you know India very well!' : 'Great journey! Review the diagrams and try once more.'}</p></div>`;
    const next = document.querySelector('#next-question'); next.textContent = 'Play again ↻'; next.hidden = false;
    next.onclick = () => location.reload();
  }
});
renderQuiz();
