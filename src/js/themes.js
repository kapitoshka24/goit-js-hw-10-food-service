const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const refs = {
  switcher: document.querySelector(".theme-switch__toggle"),
  body: document.querySelector("body"),
};

setTheme();
refs.switcher.addEventListener("change", onSetTheme);

function setTheme() {
  const savedItem = localStorage.getItem("theme");

  if (savedItem) refs.body.classList.add(savedItem);
  if (savedItem === Theme.DARK) refs.switcher.checked = true;
}

function onSetTheme() {
  const savedItem = localStorage.getItem("theme");

  if (!savedItem || (savedItem && savedItem === Theme.LIGHT))
    setDarkOrLightTheme(Theme.DARK, Theme.LIGHT);
  else setDarkOrLightTheme(Theme.LIGHT, Theme.DARK);
}

function setDarkOrLightTheme(set, remove) {
  refs.body.classList.add(set);
  refs.body.classList.remove(remove);

  localStorage.setItem("theme", set);
}
