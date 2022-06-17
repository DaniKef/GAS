const url  = 'https://script.google.com/macros/s/AKfycbyWwgIIrYe21nWmrHMhMhGd5VyR5RZOvzLd7u0-pDXMtI0kmr3wW4eMVA5z8P4KzCDG/exec';
const url1 = 'https://script.google.com/macros/s/AKfycbzXcnlKbPxMRVzHNoqCNXjhVwBPS_KkDGr-a2R4bSUyYst8Xyj6GV__LCokali7e8kbDg/exec';

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
            addPostData(data);
        })
})

function addPostData(data) {
    output.innerHTML = '';
    output.innerHTML += "<p>Показания отправлены. </p>";
}

/*
var servResponse = document.querySelector('#response');
document.forms.ourForm.onsubmit = function(e) {
    e.preventDefault();
    var userInput = document.forms.ourForm.ourForm_inp.value;
    userInput = encodeURIComponent(userInput);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url1);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('ourForm_inp=' + userInput);
}
*/