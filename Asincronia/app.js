fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(json => {
        for(let element of json) {
            let card = document.createElement("div");
            card.classList.add("card");
            document.body.appendChild(card);

            let h2 = document.createElement("h2");
            h2.textContent = element.title;
            card.appendChild(h2);

            let img = document.createElement("img");
            img.src = element.image;
            card.appendChild(img);

            let p = document.createElement("p");
            p.textContent = element.price;
            card.appendChild(p);

            let button = document.createElement("button");
            button.textContent = "Comprar";
            card.appendChild(button);
        }
    })
    .catch(err => console.log(err));