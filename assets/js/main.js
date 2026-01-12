function goToNameScreen() {
  document.getElementById('startScreen').classList.remove('active');
  document.getElementById('nameScreen').classList.add('active');
}

function goToMenu() {
  const name = document.getElementById('userName').value.trim();
  if (name === '') {
    alert('Пожалуйста, введите имя!');
    return;
  }
  document.getElementById('nameScreen').classList.remove('active');
  document.getElementById('menuScreen').classList.add('active');
  document.getElementById('welcomeText').textContent = `Привет, ${name}!`;
}

function showConstitution() {
  alert('Здесь будет текст Конституции Литвы....');
}

function showLessons() {
  alert('Здесь будут уроки по Конституции Литвы...');
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
