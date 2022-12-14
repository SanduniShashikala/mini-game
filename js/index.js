const player = document.getElementById('player');
const ground = document.getElementById('ground');

let dx = 0;
let dy = 1;
let acceleration = 0.2;
let index = 0;


const draw = ()=>{
    if (dx === 0){
        player.style.backgroundImage = `url('img/templerun/Idle__00${index++}.png')`;
    } else{
        player.style.backgroundImage = `url('img/templerun/Run__00${index++}.png')`;
    }
    if(index > 8 && dx !==0){
        index = 0;
    }
    
    if(index>10) {
        index = 0
    }
    requestAnimationFrame(draw);
};


const animate = ()=>{
   
    if((player.offsetLeft + player.offsetWidth + dx) > innerWidth){
        dx = 0;
        player.style.left = `${innerWidth - player.offsetWidth}px`;
    }else if(player.offsetLeft < 0){
        dx = 0;
        player.style.left = '0';
    }
    
    dy += acceleration;
    if((player.offsetTop + player.offsetHeight)> ground.offsetTop){
        dy = 0;
        player.style.top = `${ground.offsetTop - player.offsetHeight}px`;
        acceleration = 0;
    }
    player.style.left = `${player.offsetLeft + dx}px`;
    
    player.style.top = `${player.offsetTop + dy}px`;
    
    requestAnimationFrame(animate);
    
    
};

addEventListener('keydown', ({key}) =>{
    if(key === 'ArrowRight'){
        index = 0;
        player.classList.remove('turn');
        dx = 10;
    }else if(key === 'ArrowLeft'){
        index = 0;
        player.classList.add('turn');
        dx = -10;
    }
    // else if(key === 'ArrowUp'){
    //     dy = -20;
    //     acceleration = 0.1;
    // }
    
});

addEventListener('keypress', ({key}) =>{
    if(key === ' '){
        index = 0;
        dy = -10;
        acceleration = 0.3;
    }
});

addEventListener('keyup', ({key}) =>{
    if(key === 'ArrowRight'){
        dx = 0;
    }else if(key === 'ArrowLeft'){
        dx = 0;
    }
    // else if(key === 'ArrowUp'){
    //     dy = 0;
    // }
});

requestAnimationFrame(animate);
requestAnimationFrame(draw);


// let j = 0; 
// let t1 = 0;
// const interval = 2;

// function repaint(timestamp){
//     if (!t1) t1 = timestamp;
//     const diff = timestamp -t1;
//     if(diff >= (interval * 1000)){
//         t1 = timestamp;
//         console.log('paint : '+ j++);
//     }
//     requestAnimationFrame(repaint);
// }

// requestAnimationFrame(repaint);
