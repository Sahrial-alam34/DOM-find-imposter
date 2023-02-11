const imposterBox = `box-${Math.floor(Math.random() * 9) + 1}`;

const points = document.getElementById('points');
let life = parseInt(points.innerText);

const result = document.getElementById('result');

const allBoxes = document.getElementsByClassName('box');

const randomImage = new Array("url('images/green.gif')","url('images/brown.gif')","url('images/purple.gif')","url('images/sky.gif')","url('images/white.gif')","url('images/yellow.gif')");




for (const allBox of allBoxes) {
    allBox.addEventListener('click', function() {
        if(this.classList.contains(imposterBox)) {
            console.log("success");
            this.style.backgroundImage = "url('images/imposter.gif')";
            points.innerText = life+1;
            if(life+1 <=3){
                result.innerText = `Congratulation!! You have Good IQ. You succeed in ${life+1} try` 
            }
            else if(life+1 <=6){
                result.innerText = `Congratulation!! You have Average IQ. You succeed in ${life+1} try`
            }
            else{
                result.innerText = `Congratulation!! You have Bad IQ. you succeed in ${life+1} try`
            }
        }
        else {
            const randomNum = Math.floor(Math.random()* randomImage.length);
            console.log("You failed");          
            
            this.style.backgroundImage = randomImage[randomNum];    
            
            life++;
            points.innerText = life;
            
        }
    })
}