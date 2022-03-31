document.addEventListener('DOMContentLoaded', newBipsum);


async function olvaso_fetch(url){
    let promise = await fetch(url);
    let promise_json = await promise.json();
    return promise_json;
}

async function newBipsum(){
    let bipsum = document.querySelector('#bipsum');

    let dict = await olvaso_fetch("https://baconipsum.com/api/?type=meat-and-filler");
    bipsum.innerHTML = dict;
}

async function copyToClipboard() {
    let bipi = document.querySelector('#bipsum').innerHTML;
    navigator.clipboard.writeText(bipi);

    alert("Bipsum átmásolva!");
}