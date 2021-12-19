var coin, coinImg;
var duck, duck1Img, duck2Img, duck3Img, duck4Img, duck5Img, duck6Img;
var background, backgroundImg;
var invisiblewall;

function preload(){
    coinImg = loadImage("Images/coin.png")
    backgroundImg = loadImage("Images/compile.png")
    backgroundImg = loadImage("Images/compile.png")
    duck1Img = loadImage("Images/duck1.png")
    duck2Img = loadImage("Images/duck2.png")
    duck3Img = loadImage("Images/duck3.png")
    duck4Img = loadImage("Images/duck4.png")
    duck5Img = loadImage("Images/duck5.png")
    duck6Img = loadImage("Images/duck6.png")
    duck = loadAnimation("Images/duck1.png","Images/duck2.png","Images/duck3.png","Images/duck4.png","Images/duck5.png","Images/duck6.png")
}

function setUp(){
    createCanvas = (1000,1000,500,400);

    background = createSprite(1000,1000,500,500)
    background.addImage ("backgroundImg")

    duck = createSprite(20,20,20,20)
    duck.addAnimation ("duck")
    duck.scale = 0.2;

    coin = createSprite(20,20,20,20)
    coin.addImage ("coinImg")
    coin.scale = 0.1;

    invisiblewall = createSprite(50,20,250,500)
}

function draw(){
    

    drawSprites();

}
