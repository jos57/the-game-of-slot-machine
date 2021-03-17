

let score = 0
let start = document.querySelector('.start')//button
let valuesRandom = []//values generate for random
let spritesBoxes = document.querySelectorAll('.sprite')//the four sprites boxes elements html
let board = document.querySelector('.score')
let info = document.querySelector('.info')
let backgroundSprite = document.getElementById('spritesheet')


//function reset class_________________________________________

let resetClass =(valueReset)=>{
   
   for(n of valueReset) {
       n.classList=''
   }
}

//función random_________________________________________________

let randomFunction = ()=> {
    for (let i=0; i<4; i++) { 
        let random = parseInt(Math.random() * (4 - 0) + 0)
                
            if(random < 0.5) {
                valuesRandom.unshift(Math.floor(random))}
            else {
                valuesRandom.unshift(Math.ceil(random))}
        }
} 

//function asigned class_______________________________________________

let imageAsign = (valuesRandom)=> {
    Array.from(spritesBoxes)
   
    spritesBoxes[0].classList.add('sprite')
    spritesBoxes[1].classList.add('sprite')
    spritesBoxes[2].classList.add('sprite')
    spritesBoxes[3].classList.add('sprite')


setTimeout(()=>{

    spritesBoxes[0].classList.add(`position${valuesRandom[0]}`)
    spritesBoxes[1].classList.add(`position${valuesRandom[1]}`)
    spritesBoxes[2].classList.add(`position${valuesRandom[2]}`)
    spritesBoxes[3].classList.add(`position${valuesRandom[3]}`)
    
},300)
}

//funcion game over

let gameOver = (data)=> {
   
    let clover=0
    let crown=0
    let diamond=0
    let skull=0
    
        for(d of data){
               switch (d) {
                   case 0:
                       clover++
                       break;
                   case 1:
                       crown++
                       break;
                   case 2:
                       diamond++
                       break;
                   case 3:
                       skull++
                       break;
               
                   default:
                       break;
               }
                        }
                            
                        switch (clover) {
                            case 1:
                                info.textContent += `one clover cero points  `
                                
                                break;
                            case 2:
                                
                                score+=200
                                info.textContent += `
                                two clovers add 200 points
                                `
                                
                                break;
                            case 3:
                                score+=300
                                info.textContent += `
                                three clovers add 300 points
                                `
                                break;
                            case 4:
                  
                                info.textContent += `
                                four clovers you add 500 points `
                                break;
                        
                            default: 
                                break;
                        }
                        switch (crown) {
                            case 1:
                                info.textContent += 'one crown cero points '
                                break;
                            case 2:
                                score+=400
                                info.textContent += `two crown add 400 points `
                                break;
                            case 3:
                                score+=600
                                info.textContent += `three crown add 600 points `
                                break;
                            case 4:
                                score+=1000
                                info.textContent += `four crown add 1000 points ` 
                                break;
                        
                            default:
                                break;
                        }
                        switch (diamond) {
                            case 1:
                                info.textContent += 'one diamond cero points '
                                break;
                            case 2:
                                score+=600
                                info.textContent += `two diamonds add 600 points `
                                break;
                            case 3:
                                score+=900
                                info.textContent += `three diamonds add 900 points `
                                break;
                            case 4:
                                score+=2000
                                info.textContent += `four diamonds add 2000 points `
                                break;
                        
                            default: 
                                break;
                        }
                        switch (skull) {
                            case 1:
                                score-=100
                                info.textContent += 'one skull subtract 100 points '
                                break
                            case 2:
                                score-=500
                                info.textContent += `two skulls subtract 500 points `
                                break;
                            case 3:
                                score+=1000
                                info.textContent += `three skull subtract 1000 points `
                                break;
                            case 4:
                                info.textContent += `you are game over, fucking looser`
                                break;
                        
                            default:
                                break;
                        }
                       
                        valuesRandom=[]

                                }

//function checked score_______________________________________________________

let checkedScore = (score)=> {
    console.log(score)
    
    if(score >= 1000) {
        backgroundSprite.classList.remove('blanco')
        backgroundSprite.classList.add('mil')
        console.log(backgroundSprite.classList)
    }
     if(score >= 2000) {
        backgroundSprite.classList.replace('mil','dosmil')
        console.log(backgroundSprite.classList)
    } 

    if(score < 0) {
        alert('GAME OVER')
            location.reload()
    }
  
}

/*--------------------------------------------------------------------------------------*/ 
/*--------------------------------------------------------------------------------------*/ 
/*--------------------------------------------------------------------------------------*/ 

//click event for start button________________________________________

start.addEventListener('click', ()=> {
    randomFunction()
    resetClass(spritesBoxes)
    imageAsign(valuesRandom)
    info.textContent=''
    gameOver(valuesRandom)
    board.textContent = `Score:${score}`
    checkedScore(score)
    

})












