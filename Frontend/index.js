const setButton = document.querySelector('.set-button');
const retrieveButton = document.querySelector('.retrieve-button');
const input = document.querySelector('input');

const retrieveData = () => {
    fetch('http://localhost:8080/api')
    .then(res => res.json())
    .then(data => showData(data.data))
}

const showData = (data) => {
    const dataContainer = document.querySelector('.data-container');
    const dataText = document.createElement('h1');
    dataText.innerText = data;
    dataContainer.appendChild(dataText);
}

const setData = (data) => {
    fetch('http://localhost:8080/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data })
    })
}

setButton.addEventListener('click', (e) => {
    e.preventDefault();
    user = input.value
    setData(user); 
    input.value = '';
})

retrieveButton.addEventListener('click', () => {
    retrieveData();
})