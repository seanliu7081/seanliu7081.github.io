'use strict';
// Progressive enhancement: all results and full-size figures work without JavaScript.
const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab) {
  for (const item of tabs) {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  }
}
for (const [index, tab] of tabs.entries()) {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectTab(tabs[next]); tabs[next].focus(); }
  });
}
if (tabs.length) selectTab(tabs[0]);

const dialog = document.querySelector('.lightbox');
const modalImage = document.getElementById('lightbox-image');
let previousFocus;
for (const link of document.querySelectorAll('.figure-link')) {
  link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    previousFocus = link;
    const image = link.querySelector('img');
    modalImage.src = link.href;
    modalImage.alt = image.alt;
    document.getElementById('lightbox-caption').textContent = image.alt;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  });
}
document.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => { document.body.style.overflow = ''; previousFocus?.focus(); });

const copyButton = document.querySelector('.copy-button');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(document.getElementById('bibtex').textContent);
    copyButton.textContent = 'Copied';
    document.getElementById('copy-status').textContent = 'BibTeX copied to clipboard.';
    setTimeout(() => { copyButton.textContent = 'Copy BibTeX'; }, 2200);
  } catch {
    copyButton.textContent = 'Select text to copy';
    document.getElementById('copy-status').textContent = 'Clipboard is unavailable. Please select and copy the citation below.';
  }
});

// Select a complete successful rollout without changing its playback speed.
const fruitVideo = document.getElementById('fruit-video');
const rolloutChoices = [...document.querySelectorAll('.rollout-choice')];
if (fruitVideo) {
  const error = document.getElementById('fruit-video-error');
  for (const choice of rolloutChoices) {
    choice.addEventListener('click', () => {
      fruitVideo.pause();
      for (const item of rolloutChoices) item.setAttribute('aria-pressed', String(item === choice));
      fruitVideo.src = choice.dataset.video;
      fruitVideo.poster = choice.dataset.poster;
      fruitVideo.setAttribute('aria-label', `SMQ-DiT Prepare Fruit ${choice.dataset.label.toLowerCase()}`);
      document.getElementById('fruit-video-caption').textContent = choice.dataset.label;
      error.hidden = true;
      fruitVideo.load();
      fruitVideo.play().catch(() => {}); // Native controls remain available if playback needs another gesture.
    });
  }
  fruitVideo.addEventListener('error', () => {
    error.textContent = 'This video could not load. Please try another rollout or reload the page.';
    error.hidden = false;
  });
}
const experimentVideos = [...document.querySelectorAll('.experiment-video')];
for (const video of experimentVideos) {
  video.addEventListener('play', () => {
    for (const other of experimentVideos) if (other !== video) other.pause();
  });
}
