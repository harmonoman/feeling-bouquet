import { DisplayFlowers } from "./flowers.js";

const container = document.querySelector("#container");

const render = async () => {

    const flowersHTML = await DisplayFlowers();

    const composedHTML = 
    `<h2>Are You Feeling Bouquet?</h2>
        ${flowersHTML}
    `
    container.innerHTML = composedHTML;
}

render()