function toggleMobileNav(){
  document.getElementById('mobilePanel').classList.toggle('is-open');
  document.getElementById('mobileBackdrop').classList.toggle('is-open');
  document.getElementById('accordionContent').classList.remove('is-open');
  document.getElementById('accordionChevron').classList.remove('is-open');
}
function closeMobileNav(){
  document.getElementById('mobilePanel').classList.remove('is-open');
  document.getElementById('mobileBackdrop').classList.remove('is-open');
  document.getElementById('accordionContent').classList.remove('is-open');
  document.getElementById('accordionChevron').classList.remove('is-open');
}
function toggleProductsAccordion(){
  document.getElementById('accordionContent').classList.toggle('is-open');
  document.getElementById('accordionChevron').classList.toggle('is-open');
}
function toggleMega(){
  document.getElementById('megaMenu').classList.toggle('is-open');
}
window.addEventListener('resize', function(){
  if (window.innerWidth >= 1080) closeMobileNav();
});
