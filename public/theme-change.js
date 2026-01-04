function isDark() {
  return document.documentElement.getAttribute('data-prefers-color') === 'dark';
}

const darkState = isDark();

function changeDark(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'default-dark' : 'default-light');
}

function changeTheme() {
  if (darkState === isDark()) return;
  window.location.reload();
}

setInterval(changeTheme, 500);

changeDark(darkState);
