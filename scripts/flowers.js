export const DisplayFlowers = async () => {
    const flowers = await fetch("http://localhost:8088/flowers").then(res => res.json());
    
    const flowersHTML = flowers.map((flower) => {
        return `
            <div class="flower">
                <header class="flower-name">
                    <h2>${flower.commonName}</h2>
                </header>
                <section class="flower-color">
                    Color: ${flower.color}
                </section>
            </div>
        `
    }).join("");

    return flowersHTML;
}