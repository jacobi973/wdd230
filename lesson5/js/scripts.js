const scriptureList = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function () {
    let scripture = input.value;
    input.value = '';

    const scriptureListItem = document.createElement('li');
    const scriptureListText = document.createElement('span');
    const scriptureListDelete = document.createElement('button');

    scriptureListItem.appendChild(scriptureListText);
    scriptureListText.textContent = scripture;
    scriptureListItem.appendChild(scriptureListDelete);
    scriptureListDelete.innerHTML = '&#10060;';
    scriptureList.appendChild(scriptureListItem);

    scriptureListDelete.onclick = function (e) {
        scriptureList.removeChild(scriptureListItem);
    }

    input.focus();
}