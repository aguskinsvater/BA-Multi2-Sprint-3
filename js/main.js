
const catalogo = [
    {
        id: 1,
        title: "In the Court of the Crimson King",
        description: "King Crimson - 1969",
        category: "music album",
        image: "./assets/img/medium-Court_2500px.jpeg",
        link: "https://www.youtube.com/watch?v=7OvW8Z7kiws&list=PLXhfRoiJBIiuXOUv_7EJ1i7UKj0aGfy0U",
    },
    {
        id: 2,
        title: "Discipline",
        description: "King Crimson - 1981",
        category: "music album",
        image: "./assets/img/Discipline.jpg",
        link: "https://www.youtube.com/watch?v=YecBv-5JXmQ&list=PLXhfRoiJBIitwly9g1nmx6mWt7yqrG4A8",
    },
    {
        id: 3,
        title: "Red",
        description: "King Crimson - 1974",
        category: "music album",
        image: "./assets/img/medium-Red,_King_Crimson.jpg",
        link: "https://www.youtube.com/watch?v=aXTCDB70Qgo&list=PLXhfRoiJBIislZ9MHBBNYK0h3N30Gv7Ja",
    },
    {
        id: 4,
        title: "Invisible",
        description: "Invisible - 1974",
        category: "Rock Progresivo",
        image: "./assets/img/invisible-album.jpg",
        link: "https://www.youtube.com/watch?v=7cWI0_V7Xtk&list=OLAK5uy_k8axigbEbuT_0EWCqvTgvXhyuKO0YI0pY",
    },
    {
        id: 5,
        title: "El Jardín de los Presentes",
        description: "Invisible - 1976",
        category: "Jazz Rock",
        image: "./assets/img/jardin-de-los-presentes.jpg",
        link: "https://www.youtube.com/watch?v=38jG_1bELEs&list=OLAK5uy_mg3aSUOXiC1X4W-Q8F2Nm4uF4CIByJlvk",
    },
    {
        id: 6,
        title: "Sgt. Pepper's Lonely Hearts Club Band",
        description: "The Beatles - 1967",
        category: "Rock Psicodelico",
        image: "./assets/img/sgt-pepper.jpg",
        link: "https://www.youtube.com/watch?v=QlgNMZnLsIQ&list=OLAK5uy_kXTCtXTKA6DMJOSGKweNRGC0aoPn1iBF8",
    },
    {
        id: 7,
        title: "Abbey Road",
        description: "The Beatles - 1969",
        category: "Rock",
        image: "./assets/img/abbey-road.webp",
        link: "https://www.youtube.com/watch?v=45cYwDMibGo&list=OLAK5uy_k2JcEE3_maNjnVBKU2s1JjhaZ4rxwgaME",
    },
    {
        id: 8,
        title: "A Farewell to Kings",
        description: "Rush - 1977",
        category: "Rock Progresivo",
        image: "./assets/img/farewell-to-kings.jpeg",
        link: "https://www.youtube.com/watch?v=eV-5iNu6Sd8&list=OLAK5uy_n5g_CTO1xIh6NtTO4BOM4imZLVz8Av2K0",
    },
]

let card = document.getElementById("card-ejemplo");

catalogo.map((producto) => {
    card.innerHTML+= `
    <div class= "container">
        <div class= "articulos">
            <div class= "articulo">
                <img class= "img-art" src = ${producto.image} alt="court">
                <p>${producto.title}</p>
                <a href= ${producto.link} target="_blank">
                <button class="btn-art" >Escuchar 🔊</button>
                </a>
            </div>
        </div>
    </div>
    `
}); 




/*<div class="col-md-5 mb-5">
<div class="card h-100 w-100 text-center p-4" key= ${producto.id} >
    <img src= ${producto.image} className="card-img-top" alt= ${producto.title} height="300px" />
    <div class="card-body">
        <h5 class="card-title mb-0"> ${producto.title}</h5>
        <p class="card-title mb-0"> ${producto.description}</p>
    </div>
    <a href= ${producto.link} target= "_blank" class="btn btn-outline-dark"> Escuchar 🔊 </a>
</div>
</div>*/