metor.style.left = -250 + 'px';
metor.style.transform = 'rotate(200deg)';
function metorshower() {
    let y = (Math.random()*document.body.clientHeight);
    let newAngle = (Math.random()*90)-45;
    let x = 0;
    if (Math.random()>0.5){
        x = -100;
    }
    else {
        x = screen.width+200
        newAngle = newAngle + 180;
    }
    let angle = 200+newAngle;
    metor.style.transform = 'rotate(' + angle + 'deg)';
    function animateMetor(){
        if (x>screen.width+500 || x<-200){
            clearInterval(run);
        }
        else{
            x = x + 30*Math.cos(0.01745*newAngle);
            metor.style.left = x + 'px';
            y = y + 30*Math.sin(0.01745*newAngle);
            metor.style.top = y + 'px';
        }
    }
    run = setInterval(animateMetor,50);
}
setInterval(metorshower, 7000);