/* var rating = document.querySelector("#rating")
var ratingp = document.querySelector("#rating::after")
var rate = Number(rating.innerHTML)
rating.innterHTML = ""
ratingp.width = (rate / 5 *100) + "%" */

const html = items.results
    .map(x => {
    return `
    <div class="product">
        <img src="${x.Images[0].url_170x135}" />
        <h3>${x.title}</h3>
        <p>${x.Shop.shop_name}</p>        
        <div>

            <div id="rating">
                <div class="rate"></div>
            </div>

            <p>&nbsp;&nbsp;(${x.views})</p>
        </div>
        <p class="price">&dollar;${x.price}</p>
        <h4>Free shipping eligible</h4>
    </div>
    `
})
.join("")

console.log(html)

document.querySelector("main").innerHTML = html



