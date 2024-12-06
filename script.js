const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", ()=>{

    const xPost = event.offsetX;
    const yPost = event.offsetY;
    const spanE1 = document.createElement("span");
    bodyEl.appendChild(spanE1);
    spanE1.style.left = xPost +"px";
    spanE1.style.top = yPost +"px";
    const size = Math.random()*100;
    spanE1.style.width = size + "px";
    spanE1.style.height = size + "px";
    setTimeout(()=>{
     spanE1.remove();
    } , 3000)
})