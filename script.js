const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
let savedTheme;
try { savedTheme = localStorage.getItem('fz-theme'); } catch (_) {}
const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
function setTheme(theme) {
  root.dataset.theme = theme;
  toggle.setAttribute('aria-label', theme === 'dark' ? '切换到浅色模式' : '切换到深色模式');
  toggle.title = theme === 'dark' ? '切换到浅色模式' : '切换到深色模式';
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#20231e' : '#f5f4ee';
}
setTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : preferredTheme);
toggle.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(next);
  try { localStorage.setItem('fz-theme', next); } catch (_) {}
});
document.getElementById('year').textContent = new Date().getFullYear();
