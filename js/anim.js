function hover(){
    new hoverEffect({
        parent: document.querySelector('.main-block__image__cover'),
        intensity: 0.3,
        image1: '../img/4.jpg',
        image2: '../img/5.png',
        displacementImage: '../img/ramen.jpg'
    });
}
hover()