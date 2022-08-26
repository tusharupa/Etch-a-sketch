const container=document.querySelector('#container');
const inputsize = document.querySelector('#input');
const reset =document.querySelector('#reset');

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
    container.style.setProperty('grid-template-columns',`repeat(16,1fr)`);
    container.style.setProperty('grid-template-rows',`repeat(16,1fr)`);
    defaultGrid();
}
defaultGrid();
inputsize.addEventListener('change',updateGrid);
reset.addEventListener('click',resetGrid);






