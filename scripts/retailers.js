export const DisplayRetailers = async () => {
    const retailers = await fetch("http://localhost:8088/retailers").then(res => res.json());

    const retailersHTML = retailers.map((retailer) => {
        return `
            <div class="retailer">
                <header class="retailer-name">
                    <h2>${retailer.name}</h2>
                </header>
            </div>
        `
    }).join("");

    return retailersHTML;
}