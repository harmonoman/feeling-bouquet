export const DisplayFlowers = async () => {
    const flowers = await fetch("http://localhost:8088/flowers").then(res => res.json());

    let flowersHTML = `<ul class="flower-list">`

    const flowersArray = flowers.map((flower) => {
        return `
            <li class="flower-card">
                <h3>${flower.commonName}</h3>
                <p>Color: ${flower.color}</p>
            </li>`
    }).join("");

    flowersHTML += flowersArray + `</ul>`;
    
    return flowersHTML;
}