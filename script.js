function changeColor() {
  const visualElement = document.querySelector('.visual-element');
  const currentColor = visualElement.style.backgroundColor;
  visualElement.style.backgroundColor = currentColor === 'rgb(255, 221, 87)' ? '#f4a261' : '#ffdd57';
}
  