const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const refs = {
  toggleTheme: document.querySelector("#theme-switch-toggle"),
  switchToggle: document.querySelector(".theme-switch__toggle"),
  body: document.querySelector("body"),
};

setTheme();
refs.toggleTheme.addEventListener("change", onSetTheme);

function setTheme() {
  const savedItem = localStorage.getItem("theme");

  if (savedItem) refs.body.classList.add(savedItem);
  if (savedItem === Theme.DARK) refs.switchToggle.checked = true;
}

function onSetTheme() {
  const savedItem = localStorage.getItem("theme");

  if (!savedItem || (savedItem && savedItem === Theme.LIGHT)) setDarkTheme();
  else setLightTheme();
}

function setDarkTheme() {
  refs.body.classList.add(Theme.DARK);
  refs.body.classList.remove(Theme.LIGHT);

  localStorage.setItem("theme", Theme.DARK);
}

function setLightTheme() {
  refs.body.classList.add(Theme.LIGHT);
  refs.body.classList.remove(Theme.DARK);

  localStorage.setItem("theme", Theme.LIGHT);
}
