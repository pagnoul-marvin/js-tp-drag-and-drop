let currentItem;
const items = document.querySelectorAll('li');
const message = document.querySelector('.alert');
items.forEach(liElt => {
    liElt.addEventListener('dragstart', (e) => {
        currentItem = e.currentTarget;
    });

    liElt.addEventListener('dragenter', (e) => {
        e.currentTarget.style.border = "3px dotted grey";
    });

    liElt.addEventListener('dragleave', (e) => {
        e.currentTarget.style.border = "";
    });

    liElt.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    liElt.addEventListener('drop', (e) => {
        e.currentTarget.style.border = "";
        [currentItem.textContent, e.currentTarget.textContent] = [e.currentTarget.textContent, currentItem.textContent];
    });
});

document.getElementById('validate').addEventListener('click', () => {
    for (let i = 0; i < items.length - 1; i++) {
        if (items[i].textContent > items[i + 1].textContent) {
            message.textContent = 'pas ok';
            return;
        }
    }
    message.textContent = 'ok';
});