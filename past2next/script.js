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

// Keep each task's video, description and reported result together.
const video = document.getElementById('robot-video');
const choices = [...document.querySelectorAll('.task-choice')];
const contexts = [...document.querySelectorAll('.task-context')];
const error = document.getElementById('video-error');
function setTask(choice, play = true) {
  for (const item of choices) item.setAttribute('aria-pressed', String(item === choice));
  for (const context of contexts) context.hidden = context.id !== `task-${choice.dataset.task}`;
  if (!play) return;
  video.pause();
  video.src = `assets/videos/${choice.dataset.file}.mp4`;
  video.poster = `assets/videos/${choice.dataset.file}.jpg`;
  video.setAttribute('aria-label', `Past2Next ${choice.dataset.title} real-robot demonstrations`);
  document.getElementById('video-caption').textContent = `${choice.dataset.title} · Three placements`;
  error.hidden = true;
  video.load();
  video.play().catch(() => {});
}
for (const choice of choices) choice.addEventListener('click', () => setTask(choice));
setTask(choices[0], false);
video.addEventListener('error', () => {
  error.textContent = 'The video could not load. Please reload the page or choose another task.';
  error.hidden = false;
});
