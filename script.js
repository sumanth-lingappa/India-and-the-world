const popover = document.querySelector('.fact-popover');
const popoverText = popover.querySelector('span');
document.querySelectorAll('.card-button').forEach((button) => {
  button.addEventListener('click', () => {
    popoverText.textContent = button.dataset.fact;
    popover.classList.add('show');
  });
});
popover.querySelector('button').addEventListener('click', () => popover.classList.remove('show'));
document.querySelectorAll('[data-answer]').forEach((button) => {
  button.addEventListener('click', () => {
    const feedback = document.querySelector('.answer-feedback');
    feedback.textContent = button.dataset.answer === 'yes' ? 'That’s right! Tigers are India’s national animal. 🐯' : 'Nice try! The tiger is India’s national animal. 🐯';
  });
});

const decks = {
  india: [
  ['What is India’s national animal?', 'The tiger.', '🐯'],
  ['What is India’s national bird?', 'The Indian peafowl, often called the peacock.', '🦚'],
  ['What is India’s national flower?', 'The lotus.', '🪷'],
  ['How many official languages does India have?', 'India has 22 scheduled (officially recognised) languages.', '🗣️'],
  ['What happens during Holi?', 'People celebrate spring with music, sweets and colourful powder.', '🎨'],
  ['What is the name of India’s northern mountain range?', 'The Himalayas.', '🏔️'],
  ['Which ocean lies south of India?', 'The Indian Ocean.', '🌊'],
  ['What is a group of tigers called?', 'A streak of tigers.', '🐅']
  ],
  animals: [
    ['Which big cat is India’s national animal?', 'The tiger.', '🐯'],
    ['Which bird is known for its beautiful blue-green tail feathers?', 'The Indian peafowl, or peacock.', '🦚'],
    ['Which large animal has a trunk?', 'The Asian elephant.', '🐘'],
    ['What is a group of tigers called?', 'A streak of tigers.', '🐅']
  ],
  celebrations: [
    ['Which festival is celebrated with coloured powder?', 'Holi.', '🎨'],
    ['Which festival is known as the festival of lights?', 'Diwali.', '🪔'],
    ['What do people often make during Diwali?', 'Rangoli patterns—colourful designs on the floor.', '🌸'],
    ['What sweet treat is often shared at festivals?', 'Mithai—Indian sweets.', '🍬']
  ]
};
let flashcards = decks.india;
let cardIndex = 0;
const card = document.querySelector('.flashcard');
const count = document.querySelector('.card-count');
const front = document.querySelector('.card-front strong');
const back = document.querySelector('.card-back strong');
const frontEmoji = document.querySelector('.front-emoji');
const backEmoji = document.querySelector('.back-emoji');
function showCard() { card.classList.remove('flipped'); front.textContent = flashcards[cardIndex][0]; back.textContent = flashcards[cardIndex][1]; frontEmoji.textContent = flashcards[cardIndex][2]; backEmoji.textContent = flashcards[cardIndex][2]; count.textContent = `${cardIndex + 1} / ${flashcards.length}`; }
function moveCard(amount) { cardIndex = (cardIndex + amount + flashcards.length) % flashcards.length; showCard(); }
card.addEventListener('click', () => card.classList.toggle('flipped'));
document.querySelector('.previous-card').addEventListener('click', () => moveCard(-1));
document.querySelector('.next-card').addEventListener('click', () => moveCard(1));
document.querySelector('.know-button').addEventListener('click', () => moveCard(1));
document.querySelectorAll('.deck-button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.deck-button.active').classList.remove('active');
    button.classList.add('active');
    flashcards = decks[button.dataset.deck];
    cardIndex = 0;
    showCard();
  });
});
showCard();

const regions = {
  north: { icon: '🏔️', label: 'NORTH INDIA', title: 'Mountains, forts & snowy peaks', copy: 'The mighty Himalayas rise in the north. This is where the Ganga begins its long journey across India.', food: '🥟 Momos', landmark: '🏛️ Taj Mahal', colour: '#fff2cb' },
  west: { icon: '🐪', label: 'WEST INDIA', title: 'Deserts, sea & colourful cities', copy: 'In the west, you can find the golden Thar Desert, busy Mumbai and a long Arabian Sea coast.', food: '🥘 Dhokla', landmark: '🏜️ Thar Desert', colour: '#ffe0b4' },
  east: { icon: '🦏', label: 'EAST INDIA', title: 'Rivers, tea gardens & rhinos', copy: 'The east is home to the Sundarbans mangroves and the one-horned rhinoceros of Assam.', food: '🍚 Pitha', landmark: '🌿 Sundarbans', colour: '#cbe9ef' },
  south: { icon: '🌴', label: 'SOUTH INDIA', title: 'Coconuts, temples & ocean waves', copy: 'India’s southern tip meets the Indian Ocean. You’ll find tropical beaches and beautiful ancient temples here.', food: '🥞 Dosa', landmark: '🛕 Meenakshi Temple', colour: '#cdebd3' }
};
document.querySelectorAll('.region-pin').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.region-pin.active').classList.remove('active');
    button.classList.add('active');
    const region = regions[button.dataset.region];
    document.querySelector('.region-icon').textContent = region.icon;
    document.querySelector('.region-label').textContent = region.label;
    document.querySelector('.region-title').textContent = region.title;
    document.querySelector('.region-copy').textContent = region.copy;
    document.querySelector('.region-food').textContent = region.food;
    document.querySelector('.region-landmark').textContent = region.landmark;
    document.querySelector('.region-story').style.background = region.colour;
  });
});
