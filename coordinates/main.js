const vertical = document.querySelector('.vertical');
const horozontal = document.querySelector('.horozontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');


addEventListener('load',() => {
    const targetRect = target.getBoundingClientRect();
    console.log(targetRect);
    const targetHalfWidth = targetRect.width/2;
    const targetHalHeight = targetRect.height/2;
    
    
    document.addEventListener('mousemove',(event) =>{
        const x = event.clientX;
        const y = event.clientY;
        console.log(`${x} ${y}`);
    
        vertical.style.transform = `translateX(${x}px)`
        horozontal.style.transform = `translateY(${y}px)`
        target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalHeight}px)`;
        tag.style.transform = `translate(${x}px, ${y}px)`
        tag.innerHTML = `${x}. ${y}px`; 
    
    
    });
})



