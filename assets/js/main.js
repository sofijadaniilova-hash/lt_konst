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
      list.appendChild(li);
    }
  }
  showScreen('lessonsScreen');
}

function goBackToMenu() {
  showScreen('menuScreen');
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
