/* var template = `
<div class="product">
    <img src="product.jpeg" />
    <h2>foobar</h2>
    <div class="desc">
        <p>Views: 29</p>
        <p class = "price">12.00</p>
    </div>
</div>
`
*/
const html = items.results
    .map(x => {
    return `
    <div class="product">
        <img src="${x.Images[0].url_170x135}" />
        <h3>${x.title}</h3>
        <div class="desc">
            <p>Views: ${x.Shop.shop_name}</p>
            <p class = "price">&dollar;${x.price}</p>
        </div>
    </div>
    `
})
.join("")

console.log(html)

document.querySelector("main").innerHTML = html