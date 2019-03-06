// helpers
const createListener = (element, event) => listener => element.addEventListener(event, listener);

// elements
const bodyElement = document.querySelector('body');
const anchorElement = document.querySelector('a.js-scroll-trigger[href*="#"]:not([href="#"])');

// listeners
const onAnchorClick = createListener(anchorElement, 'click');

// event handlers
onAnchorClick((event) => {
  const requestedHash = event.target.attributes.href;
  const requestedSection = document.querySelector(`section#${requestedHash}`);
  const distanceToSection = requestedSection.offsetTop - 56;
  bodyElement.scrollTop = distanceToSection;
});

const yourplaceModals = ['module-obyvak', 'module-lekce', 'module-off', 'module-senior', 'module-events', 'module-road'];


document.addEventListener('keydown', (event) => {
  if (event.keyCode === 27) {
    window.hideYourPlaceModals();
  }
});

window.hideYourPlaceModals = () => {
  yourplaceModals.forEach((selector) => {
    document.querySelector(`#${selector}`).style.display = 'none';
    document.querySelector('#gay-overlay').style.display = 'none';
  });
};

window.showYourPlaceModal = (selector) => {
  document.querySelector(`#${selector}`).style.display = 'block';
  document.querySelector('#gay-overlay').style.display = 'block';
};
