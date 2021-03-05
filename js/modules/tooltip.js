export default function initTooltip() {

}

const tooltips = document.querySelectorAll('[data-tooltip]');

tooltips.forEach((itens) => {
  itens.addEventListener("mouseover", onMouseOver);
})

function onMouseOver(event) {
  const tooltipBox = criarTooltipBox(this);
}

function criarTooltipBox(element) {
  const tooltipBox = document.createElement('div');
  const text = element.getAttribute('aria-label');
  tooltipBox.classList.add('tooltip');
  tooltipBox.innerText = text;
  document.body.appendChild(tooltipBox);
  console.log(tooltipBox);
}