document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { img: "assets/images/pexels-pixabay-258244.jpg", title: "Product 1", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: "$10.99" },
        { img: "assets/images/pexels-828860-2697787.jpg", title: "Product 2", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit..", price: "$12.99" },
        { img: "assets/images/pexels-karolina-grabowska-4202325.jpg", title: "Product 3", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: "$15.99" },
        { img: "assets/images/pexels-laryssa-suaid-798122-1667071.jpg", title: "Product 4", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: "$8.99" },
        { img: "assets/images/pexels-laryssa-suaid-798122-1667088.jpg", title: "Product 5", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit..", price: "$20.99" },
        { img: "assets/images/pexels-laryssa-suaid-798122-3616991.jpg", title: "Product 6", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: "$25.99" },
        { img: "assets/images/pexels-olenkabohovyk-3819969.jpg", title: "Product 7", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: "$18.99" },
        { img: "assets/images/pexels-rethaferguson-3621234.jpg", title: "Product 8", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: "$30.99" },
        { img: "assets/images/pexels-sarmad-mughal-94606-397978.jpg", title: "Product 9", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: "$22.99" },
        { img: "assets/images/pexels-shiny-diamond-3373736.jpg", title: "Product 10", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: "$28.99" },
        { img: "assets/images/pexels-yaazhini-17307532.jpg", title: "Product 11", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: "$35.99" },
        { img: "assets/images/pexels-alexazabache-3907507.jpg", title: "Product 12", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: "$40.99" }
    ];

    const productList = document.getElementById("product-list");

    products.forEach(product => {
        const productCard = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${product.img}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.desc}</p>
                        <p class="card-text"><strong>${product.price}</strong></p>
                        <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    });
});
