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
