function Carousel(config){
    this.container = (typeof (config.container) === 'string' ? document.querySelector(config.container) : config.container);
    
    this.itens = (typeof (config.itens) === 'string' ? this.container.querySelectorAll(config.itens): config.itens);
    this.time = (typeof (config.time) === 'number' ? config.time : 100000);
    var _this = this;
    var _currentSlide = 0;
    
    init()
    
    function init(){
        var _show = _this.container.querySelectorAll('.show');
        Array.prototype.forEach.call(_show, function(sh){
            sh.classList.remove('show');
        })
        _this.itens[0].classList.add('show');
        
        setInterval(showNextSlide, _this.time);
        
    }
    
    function showNextSlide(){
        _currentSlide++;
        showSlide()
    }
    
    function showPrevSlide(){
        _currentSlide--;
        showSlide();
    }
    
    function showSlide(){
        var qtd = _this.itens.length;
        var slide = Math.abs(_currentSlide % qtd);
        
        _this.container.querySelector('.show').classList.remove('show');
        _this.itens[slide].classList.add('show');
    }
}