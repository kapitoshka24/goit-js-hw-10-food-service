import "../css/styles.css";
import "../images/sprite.svg";
import "./themes";
import menu from "../menu.json";
import template from "../templates/cards.hbs";

const menuRef = document.querySelector(".js-menu");
menuRef.insertAdjacentHTML("beforeend", template(menu));
