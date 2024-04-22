const result=document.querySelector('.container');

window.addEventListener("mousemove",(e)=>{
    let x=e.clientX;
    let y=e.clientY;

    result.innerHTML=`<h2><span> X: </span>${x} px</h2> <br> <h2><span> Y: </span>${y} px</h2>`
})