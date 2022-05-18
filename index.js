const container = document.querySelector('#container');
let userInput = document.getElementById('size');
const reset = document.querySelector('.buttons.reset')
createGrid = () =>{
for(let i=0;i<256;i++)
{
    let divs = document.createElement('div');
    divs.className ='grid';
    container.appendChild(divs);
}
}

updateGrid = () =>{
    container.innerText="";
    container.style.setProperty(
        'grid-template-columns',`repeat(${userInput.value},1fr)`
    );
    container.style.setProperty('grid-template-rows',`repeat(${userInput.value},1fr)`);
    for(let i=0;i<userInput.value*userInput.value;i++)
    {
        let divs=document.createElement('div');
        divs.className = 'grid';
        container.appendChild(divs);
    }
    console.log(userInput.value);
};
userInput.addEventListener('change',updateGrid);
reset.addEventListener('click', function(){
    container.innerHTML="";
    userInput.value="";
    container.style.setProperty('grid-template-columns',`repeat(16,1fr)`);
    container.style.setProperty('grid-template-rows',`repeat(16,1fr)`);
    createGrid();
});

createGrid();
