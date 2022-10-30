(function () {
    var $body = document.querySelector("body");
    $body.classList.remove("no-js");
    $body.classList.add("js");
    
    var carouselImgs = new Carousel({
        container: '.container .slider',
        itens: 'figure',
        time: 5000,
    })
    
    var carouselQuotes = new Carousel({
        container: 'footer',
        itens: '.mention',
        time: 6000,
    }) 
} )()