import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";
import buttonStyle from "./button.module.css";
import redTshirt from "./redTshirt.jpg";
import imageStyle from "./image.module.css";
import data from "./data.json";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <button id='btn'>Click!</button>
    <img id="img"/>
    <pre>${JSON.stringify()}</pre>
    </div>
`;

setupCounter(document.querySelector("#counter"));

document.getElementById("btn").className = buttonStyle;

const image = document.getElementById("img");

image.src = redTshirt;

image.className = imageStyle.img;
