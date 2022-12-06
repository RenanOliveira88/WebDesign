(function () {
    var $body = document.querySelector("body");
    $body.classList.remove("no-js");
    $body.classList.add("js");
    
    
    var carouselQuotes = new Carousel({
        container: 'footer',
        itens: '.mention',
        time: 6000,
    }) 
} )()