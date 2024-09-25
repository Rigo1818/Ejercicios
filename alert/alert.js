function showAlert(event) {
    const id = event.target.getAttribute('id');
    const dataId = event.target.getAttribute('data-id');
    const dialCode = event.target.getAttribute('data-dial-code');
    
    alert(`ID: ${id}, Data Id: ${dataId}, Dial Code: ${dialCode}`);
}

const items = document.querySelectorAll('li');
items.forEach(item => {
    item.addEventListener('click', showAlert);
});
