function showScreen(id) {
  document.querySelectorAll('.screen').forEach((el) => el.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
}

function goToNameScreen() {
  showScreen('nameScreen');
}

function goToMenu() {
  const name = document.getElementById('userName').value.trim();
  if (name === '') {
    alert('Пожалуйста, введите имя!');
    return;
  }
  showScreen('menuScreen');
  document.getElementById('welcomeText').textContent = `Привет, ${name}!`;
}

function showConstitution() {
  alert('Здесь будет текст Конституции Литвы....');
}

function showLessons() {
  const list = document.getElementById('lessonsList');
  if (list) {
    list.innerHTML = '';
    for (let i = 1; i <= 18; i += 1) {
      const li = document.createElement('li');
      li.textContent = `Урок ${i}`;
      li.tabIndex = 0;
      li.style.cursor = 'pointer';
      li.addEventListener('click', () => showLesson(i));
      li.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') showLesson(i);
      });
      list.appendChild(li);
    }
  }
  showScreen('lessonsScreen');
}

function goBackToMenu() {
  showScreen('menuScreen');
}

function goBackToLessons() {
  showScreen('lessonsScreen');
}

function showLesson(num) {
  const titleEl = document.getElementById('lessonTitle');
  const bodyEl = document.getElementById('lessonBody');
  if (titleEl && bodyEl) {
    titleEl.textContent = `Урок ${num}`;
    bodyEl.innerHTML = `
      <p><strong>Тема:</strong> Введение в тему урока ${num}.</p>
      <p>Это демонстрационный текст содержания. Здесь позже можно подставить настоящий материал, изображения, ссылки и задания.</p>
      <ol>
        <li>Пункт 1 содержания урока ${num}</li>
        <li>Пункт 2 содержания</li>
        <li>Пункт 3 содержания</li>
      </ol>
    `;
  }
  showScreen('lessonScreen');
}

function showGame() {
  alert('Здесь будет игра для изучения Конституции...');
}

// Expose functions to global scope for inline onclick handlers
window.goToNameScreen = goToNameScreen;
window.goToMenu = goToMenu;
window.showConstitution = showConstitution;
window.showLessons = showLessons;
window.showGame = showGame;
window.goBackToMenu = goBackToMenu;
window.goBackToLessons = goBackToLessons;
window.showLesson = showLesson;
