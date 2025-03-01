let speed = 0;
const startEngineBtn = document.getElementById('start-engine');
const accelerateBtn = document.getElementById('accelerate');
const brakeBtn = document.getElementById('brake');
const speedometer = document.getElementById('speed');

startEngineBtn.addEventListener('click',()=>{
    console.log('engine started!');
    startEngineBtn.disabled = true;
    accelerateBtn.disabled = false;
    brakeBtn.disabled = false;
});
accelerateBtn.addEventListener('click',()=>{
    speed += 10;
    speedometer.textContent = `speed :${speed}km/h`;
    if (speed > 50){
        console.log('you are going fast!');
    }  
});
brakeBtn.addEventListener('click',()=>{
    speed += 10;
    if (speed < 0){
        speed = 0;
        
    }  
    if(speed == 0){
        console.log('you have stopped!');
        console.log('engine started!');
        startEngineBtn.disabled = false;
        accelerateBtn.disabled = true;
        brakeBtn.disabled = true;

    }
});