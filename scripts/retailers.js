export const DisplayRetailers = async () => {
    // Get all retailers from database (expanding distributor) 
    const retailers = await fetch("http://localhost:8088/retailers?_expand=distributor").then(res => res.json());

    // Get join table of nurseries and distributors from database (expanding nursery)
    const nurseryRelationships = await fetch("http://localhost:8088/nurseryDistributors?_expand=nursery").then(res => res.json());
    
    // Get join table of nurseries and flowers from database (expanding flower)
    const nurseryFlowers = await fetch("http://localhost:8088/nurseryFlowers?_expand=flower").then(res => res.json());

    const retailersHTML = `
    ${
        retailers.map((retailer) => {
            // Filter distributors from nurseryRelationships against retailers' associated distributors
            const relationships = nurseryRelationships.filter(rel => rel.distributorId === retailer.distributor.id);
                        
            // Create HTML to display retailers, distributors, nurseries, and flowers
            const nurseryFlowersHTML = relationships.map(rel => {
                const flowers = nurseryFlowers
                    .filter(flower => flower.nurseryId === rel.nurseryId)
                    .map(flower => `<li>${flower.flower.commonName}</li>`)
                    .join("");

                return `
                    <section class="source-nurseries">
                        <ul>
                            ${rel.nursery.name}
                            <section class="available-flowers">
                                <ul>
                                    ${flowers}
                                </ul>
                            </section>
                        </ul>
                    </section>`;
            }).join("");

            return `
            <div class="retailer">
                <header class="retailer-name">
                    <h2>${retailer.name}</h2>
                </header>
                <section class="distributor-name">
                    Distributor: ${retailer.distributor.name}
                </section>
                ${nurseryFlowersHTML}
            </div>`;
        }).join("")
    }`

    return retailersHTML;
}