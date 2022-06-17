const url  = 'https://script.google.com/macros/s/AKfycbyWwgIIrYe21nWmrHMhMhGd5VyR5RZOvzLd7u0-pDXMtI0kmr3wW4eMVA5z8P4KzCDG/exec';
const url1 = 'https://script.google.com/macros/s/AKfycbyX6QuqZOQgw-CirWEVFnVwS9QPOjMu_-7httXus3ywwBPrnu8GX_7wgv6x85z83zoY/exec';

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
            addGotData(data);
        })
})

function addGotData(data) {
    let check = false;
    output.innerHTML = '';
    output.innerHTML += "<p>Показания счетчика по счету: " + myCounter.value + "</p>";
    data.forEach((row) => {
        if(row.first == myCounter.value)
        {
            output.innerHTML += "<p>Горячая вода: " + row.third + " м<sup>3</sup></p>";
            output.innerHTML += "<p>Холодная вода: " + row.second + " м<sup>3</sup></p>";
            check = true;
        }
    })
    if(!check)
    output.innerHTML += "<p>Такого счета не существует.</p>";
}



btnPost.addEventListener('click', (e)=>{
   /* var myData = {
        first: myCounter.value,
        second: myCold.value,
        third: myHot.value
    };
    const formData = new FormData();
    formData.append('json', JSON.stringify(myData));*/
    const formData = new FormData();
    formData.append('row', myCounter.value);
    formData.append('second', myHot.value);
    formData.append('third', myCold.value);
    fetch(url1,{
        method: 'POST',
        body: formData
    })
        .then(res => res.json())          
        .then(data => {
            console.log(data);
        })
})

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
