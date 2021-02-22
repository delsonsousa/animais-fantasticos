// Navegação por Tabs
function menuTab() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-content section');
  tabContent[0].classList.add('ativo');

  if(tabMenu.length && tabContent.length){

  function activeTab(index) {
    tabContent.forEach((content) => {
      content.classList.remove('ativo');
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add('ativo', direcao);
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    })
  });

  }
}
menuTab()


// Accordion List
function initAccordion() {

  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = "ativo";
  if(accordionList.length) {

    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
        
  }
}
initAccordion()

// Scroll Suave
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToLink(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToLink);
  });
}

initScrollSuave()

// Animação ao Scroll
function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');

  if(sections.length){
    const windowMetade = window.innerHeight * 0.5;

    function animaScroll() {
     sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isVisible = (sectionTop - windowMetade) < 0;
      if(isVisible){
        section.classList.add('ativo');
      } else {
        section.classList.remove('ativo');
      }
     });
    }

    window.addEventListener('scroll', animaScroll);
  }
}
initAnimacaoScroll()


// Dataset
