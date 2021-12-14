getBusinessInfo();
async function getBusinessInfo() {
    let i = 0;
    const requestURL = '../../json/businesses.json';
    const responseJSON = await (await fetch(requestURL)).json();

    const towns = responseJSON['business'];
    towns.forEach(element => {
        if (i < 3) {   
        let card = document.createElement('section');
        card.classList.add('business-info');
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let span1 = document.createElement('span');
        let span2 = document.createElement('span');
        let image = document.createElement('img');
        let imageLocation = element.photo.replace('.jpg', '.webp');

        h2.textContent = element.name;
        span1.textContent = element.motto;
        span2.textContent = `Year Founded ${element.yearFounded}`;
        image.setAttribute('src', `images/${imageLocation}`);
        image.setAttribute("alt", `${element.name}, image`);

        div.appendChild(h2);
        div.appendChild(span1);
        div.appendChild(span2);
        card.appendChild(image);

        document.querySelector('div.business').appendChild(card).appendChild(div);
        i++;
        }
    })
}
