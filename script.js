const button = document.querySelector('button');
const ul = document.querySelector('ul');
const input = document.querySelector('input');
const li = document.querySelector('li');
let history = [];

window.onload = function(){
    ul.innerHTML = '';
    let i = 1;
    
    while (true) {
        const savedItem = localStorage.getItem(`mess_${i}`);
        if (savedItem === null) break;
        
        const li = document.createElement('li');
        li.textContent = savedItem;
        li.dataset.index = i;
        ul.appendChild(li);
        i++;
    }
}

function addText() {
    if(!input.value){
        alert('Пустая строка!')
    }else{
        let index = 1;
        while(localStorage.getItem(`mess_${index}`) !== null){
            index++;
        }
        localStorage.setItem(`mess_${index}`, input.value)
        const li = document.createElement('li');
        li.textContent = input.value;
        li.dataset.index = index;
        ul.appendChild(li);
        input.value = '';
    }
}

button.addEventListener('click', addText);

input.addEventListener('keydown', (event) => {
        if(event.key === "Enter"){
            addText()
    }
});

ul.addEventListener('dblclick', (event) => {
    if(event.target.tagName === "LI"){
        const index = event.target.dataset.index;
        localStorage.removeItem(`mess_${index}`);
        event.target.remove();
    }
})