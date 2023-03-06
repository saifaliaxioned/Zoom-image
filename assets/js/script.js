const rangeInput = document.querySelector('.zoom-range');
const image = document.querySelector('.image-box img');
const figure = document.querySelector('.image-figure');

rangeInput.addEventListener('input', () => {
  const rangeValue = rangeInput.value / 20;
  if (rangeValue > 0.5) {
    image.style.transform = `scale(${rangeValue})`;
  };
});


















