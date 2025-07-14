function toggle(element) {
  element.classList.toggle('done');
  saveProgress();
}

function saveProgress() {
  const items = document.querySelectorAll('li');
  const state = Array.from(items).map(item => item.classList.contains('done'));
  localStorage.setItem('mallaEstado', JSON.stringify(state));
}

function loadProgress() {
  const items = document.querySelectorAll('li');
  const state = JSON.parse(localStorage.getItem('mallaEstado'));
  if (state) {
    items.forEach((item, index) => {
      if (state[index]) {
        item.classList.add('done');
      }
    });
  }
}

window.onload = loadProgress;
