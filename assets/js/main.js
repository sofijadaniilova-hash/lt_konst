function showScreen(id) {
  document.querySelectorAll('.screen').forEach((el) => el.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
}

function goToNameScreen() {
  showScreen('nameScreen');
}

function goToMenu() {
  let name = document.getElementById('userName').value.trim();
  if (name === '') {
    name = 'Гость';
  }
  showScreen('menuScreen');
  document.getElementById('welcomeText').textContent = `Привет, ${name}!`;
}

function showConstitution() {
  // Ensure viewer points to the PDF (in case of future localization)
  const viewer = document.getElementById('constitutionViewer');
  if (viewer && !viewer.src.includes('WholetextRU.pdf')) {
    viewer.src = 'assets/WholetextRU.pdf';
  }
  showScreen('constitutionScreen');
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
window.setLanguage = function setLanguage(lang) {
  // Toggle active state on language buttons (placeholder for future i18n)
  document.querySelectorAll('.lang-btn').forEach((b) => b.classList.remove('active'));
  const mapping = { LT: 0, RU: 1, EN: 2 };
  const btns = document.querySelectorAll('.lang-btn');
  if (btns.length) {
    const idx = mapping[lang];
    if (idx !== undefined && btns[idx]) btns[idx].classList.add('active');
  }
  document.documentElement.setAttribute('data-lang', lang);
};

// Splash screen init and controls
function skipSplash() {
  showScreen('startScreen');
}

window.skipSplash = skipSplash;

document.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splashScreen');
  if (splash) {
    const img = document.getElementById('knightImg');
    const emoji = document.getElementById('knightEmoji');
    if (img) {
      img.addEventListener('error', () => {
        if (emoji) emoji.style.display = 'block';
        img.style.display = 'none';
      });
      // Show emoji until image loads
      if (emoji) emoji.style.display = 'block';
      img.addEventListener('load', () => {
        if (emoji) emoji.style.display = 'none';
        img.style.display = 'block';
      });
    }
    // Auto skip after a short delay
    setTimeout(() => {
      // Only switch if still on splash
      if (splash.classList.contains('active')) skipSplash();
    }, 3000);
  }
});
