let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "black";//cor do cobra

let food ={
    x: Math.floor(Math.random() * 15 + 1) * box, //Criando numeros aleatorios para a comida
    y: Math.floor(Math.random() * 15 + 1) * box
}

/*--== Criando o campo do jogo ==--*/
function criarBG() {
    //estilo-cor
    context.fillStyle = "lightblue";
    //desenha o retangulo do jo
    context.fillRect(0, 0, 16 * box, 16 * box);
}

/*--== Criando a cobrinha ==--*/
function criarCobra() {

    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green ";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

/*--== Comando das teclas ==--*/

function drawFood(){
    context.fillStyle="red"
    context.fillRect(food.x, food.y, box, box);
}


/*--== Comando das teclas ==--*/

document.addEventListener('keydown', update);

function update() {

    if(event.keyCode == 37 && direction != "right") direction ="left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction ="down";
}

function iniciarJogo() {


    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Geme Over :(');
        }
    }
   
    criarBG();
    criarCobra();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    /*--== Direcionamento da cobrinha ==--*/

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();//retira o ultimo elemento da cobrinha
    }else{

       food.x= Math.floor(Math.random() * 15 + 1) * box; //Criando numeros aleatorios para a comida
       food.y= Math.floor(Math.random() * 15 + 1) * box;
    }


     /*--== Adiciona um cubo a frente ==--*/
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);



