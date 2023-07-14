const button = document.querySelector('button');
const input = document.querySelector('input');

async function userData() {
    const res = await fetch('http://localhost:8080/api');
    const data = await res.json();
    console.log(data);
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/api')
    .then(res => res.json())
    .then(data => console.log(data))
})