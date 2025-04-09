export const DisplayRetailers = async () => {
    const retailers = await fetch("http://localhost:8088/retailers?_expand=distributor").then(res => res.json());

    console.log(retailers)

    const retailersHTML = retailers.map((retailer) => {
        return `
            <div class="retailer">
                <header class="retailer-name">
                    <h2>${retailer.name}</h2>
                </header>
                <section class="distributor-name">
                    Distributor: ${retailer.distributor.name}
                </section>
            </div>
        `
    }).join("");

    return retailersHTML;
}