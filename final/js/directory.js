function changeToGrid(){
    document.querySelector('.directory-info').classList.add('grid-layout');
    document.querySelector('.directory-info').classList.remove('list-layout');
}
function changeToList(){
    document.querySelector('.directory-info').classList.add('list-layout');
    document.querySelector('.directory-info').classList.remove('grid-layout');
}
getBusinessInfo();
async function getBusinessInfo() {
    const requestURL = '../json/businesses.json';
    const responseJSON = await (await fetch(requestURL)).json();

    const towns = responseJSON['business'];
    towns.forEach(element => {
        let card = document.createElement('section');
        card.classList.add('organization-div');
        let div = document.createElement('div');
        let h2 = document.createElement('h3');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');

        h2.textContent = element.name;
        p1.textContent = element.motto;
        p2.textContent = `Year Founded ${element.yearFounded}`;

        div.appendChild(h2);
        div.appendChild(p1);
        div.appendChild(p2);

        document.querySelector('div.directory-info').appendChild(div);

    })
}
