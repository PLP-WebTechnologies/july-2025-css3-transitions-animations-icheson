/* =========================================================
   PART 2 – JavaScript Functions (scope, params, returns)
   ========================================================= */

// Reusable helper: generic toggle class
function toggleClass(element, className) {
  // element is local parameter, returns boolean success
  if (!element) return false;
  element.classList.toggle(className);
  return true;
}

// Reusable helper: animate box
function animateBox(selector, animClass) {
  const box = document.querySelector(selector);
  return toggleClass(box, animClass);
}

// Reusable helper: flip card
function flipCard(cardSelector) {
  const card = document.querySelector(cardSelector);
  return toggleClass(card, 'flipped');
}

// Loader on/off
let loaderInterval;
function toggleLoader(loaderSelector) {
  const loader = document.querySelector(loaderSelector);
  const isShown = toggleClass(loader, 'hidden');
  if (!isShown) { // was hidden → start
    loaderInterval = setInterval(() => {}, 1000); // dummy for demo
  } else {
    clearInterval(loaderInterval);
  }
  return !isShown; // true = now running
}

// Modal open/close
function openModal(overlaySelector) {
  const overlay = document.querySelector(overlaySelector);
  return toggleClass(overlay, 'show');
}
function closeModal(overlaySelector) {
  const overlay = document.querySelector(overlaySelector);
  return toggleClass(overlay, 'show');
}

// ---------- GLOBAL SCOPE ----------
const overlaySel = '#modalOverlay';

// ---------- EVENT BINDINGS ----------
document.getElementById('triggerBox').addEventListener('click', () => animateBox('#animatedBox', 'animate'));
document.querySelector('.card').addEventListener('click', () => flipCard('.card'));
document.getElementById('toggleLoader').addEventListener('click', () => toggleLoader('#loader'));
document.getElementById('openModal').addEventListener('click', () => openModal(overlaySel));
document.getElementById('closeModal').addEventListener('click', () => closeModal(overlaySel));

// Close modal on overlay click
document.querySelector(overlaySel).addEventListener('click', (e) => {
  if (e.target === document.querySelector(overlaySel)) closeModal(overlaySel);
});

// ---------- TAB SWITCHING ----------
document.querySelectorAll('nav button').forEach(btn => {
  btn.addEventListener('click', () => {
    // Hide all tabs
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    // Show selected tab
    const target = btn.dataset.tab;
    document.getElementById(target).classList.add('active');
    // Update nav active state
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ---------- FORM DEMO ----------
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent (demo mode)!');
});