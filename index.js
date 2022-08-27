const container=document.querySelector('#container');
const inputsize = document.querySelector('#input');
const reset =document.querySelector('#reset');
const rainbow=document.querySelector('#rainbow');
const colorpick=document.querySelector('#colorpicker');
let flag=0;
let gridsize=document.querySelector('h3');
inputsize.addEventListener('input',function(){
gridsize.innerText=`${inputsize.value} X ${inputsize.value}` ;
})
const defaultGrid = () =>{
    for(let i=0;i<256;i++)
    {
        let divs=document.createElement('div');
        divs.classList.add('cell');
        container.append(divs);
    }
    }
const createGrid = () =>{
    for(let i=0;i<inputsize.value * inputsize.value;i++)
    {
        let divs=document.createElement('div');
        divs.classList.add('cell');
        container.append(divs);
    }
    }
const updateGrid = () =>{
   

    container.innerHTML="";
    container.style.setProperty('grid-template-columns',`repeat(${inputsize.value},1fr)`);
    container.style.setProperty('grid-template-rows',`repeat(${inputsize.value},1fr)`);
createGrid();
}
const resetGrid = () =>{
    container.innerHTML="";
    inputsize.value="";
    flag=0;
    gridsize.innerText="16 X 16";
    container.style.setProperty('grid-template-columns',`repeat(16,1fr)`);
    container.style.setProperty('grid-template-rows',`repeat(16,1fr)`);
    defaultGrid();
}
defaultGrid();
const randColor = () =>{
    const r= Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    return `rgb(${r}, ${g}, ${b})`;
}
inputsize.addEventListener('change',updateGrid);
reset.addEventListener('click',resetGrid);

rainbow.addEventListener('click',()=>{
    
    flag=1;
});
colorpick.addEventListener('change',function(){
    flag=2;
})
let mouseDown=false;
container.addEventListener('mousedown',function(){
    mouseDown=true;
});
container.addEventListener('mouseup',()=>{mouseDown=false;});
container.addEventListener('mouseover',function(e){
    if(mouseDown){
        if(flag==1)
        e.target.style.backgroundColor=randColor();
        else if(flag==2)
        e.target.style.backgroundColor=colorpick.value;
    }
    
});









