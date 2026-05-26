let carouselArr = [];

class Carousel {
    constructor(imagem, titulo, link) {
        this.imagem = imagem;
        this.titulo = titulo;
        this.link = link;
    }

    
    static Start(arr) {
        if (!arr || arr.length === 0) {
            throw "Method Start need a Array Variable.";
        }

        Carousel._arr = arr;
        Carousel._sequence = 0;
        Carousel._size = arr.length;

        // Mostra a primeira imagem
        Carousel.Show();

        // Troca automaticamente a cada 5 segundos
        Carousel._interval = setInterval(function () {
            Carousel.Next();
        }, 5000);
    }

    
    static Show() {
        let item = Carousel._arr[Carousel._sequence];

        document.getElementById("carousel").innerHTML =
            `<a href="${item.link}">
                <img src="img/${item.imagem}"
                     style="width: 1000px; height: 430px; object-fit: cover; display: block; margin: 0 auto;">
             </a>`;

        document.getElementById("carousel-title").innerHTML =
            `<a href="${item.link}">${item.titulo}</a>`;
    }

    
    static Next() {
        Carousel._sequence++;

        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }

        Carousel.Show();
    }

    
    static Prev() {
        Carousel._sequence--;

        if (Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size - 1;
        }

        Carousel.Show();
    }
}