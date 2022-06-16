const url = 'https://script.google.com/macros/s/AKfycby-MZUuAKVGMph4z0Bmzq9C1GU0ltQOQsh6r30bAIYw125ggbP9gdzpfFybrjzK7Cnk3w/exec';

const btnGet = document.querySelector('.btnGetData');
const btnPost = document.querySelector('.btnPostData');

const myCounter = document.querySelector('.inputCounter');
const myHot = document.querySelector('.inputHot');
const myCold = document.querySelector('.inputCold');

const output = document.querySelector('.output');

btnGet.addEventListener('click', (e)=>{
    fetch(url)
        .then(res => res.json())          
        .then(data => {
            console.log(data);
        })
})

/*function addGotData(data) {
    output.innerHTML = '';
    data.array.forEach(element => {
        output.innerHTML = '$<div>{element.first} ${element.second} ${element.third}</div>';
    });
}*/




/*btnGet.addEventListener('click', (e)=>{
    fetch(url)
        .then(res => res.json())          
        .then(data => {
            console.log(data);
        })
})*/


/*btn.addEventListener('click', (e)=>{
    const formData = new FormData();
    formData.append('row', 2)
    fetch(url,{
        method: 'POST',
        body: formData
    })
        .then(res => res.json())          
        .then(data => {
            console.log(data);
        })
})*/
