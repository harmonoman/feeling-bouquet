import { DisplayFlowers } from "./flowers.js";
import { DisplayRetailers } from "./retailers.js";

const container = document.querySelector("#container");

const render = async () => {

    const flowersHTML = await DisplayFlowers();
    const retailersHTML = await DisplayRetailers();

    const composedHTML = 
    `<h2>Are You Feeling Bouquet?</h2>
        ${flowersHTML}
        ${retailersHTML}
    `
    container.innerHTML = composedHTML;
}

render()