import "./style.css";

export default function home() {
    const divHome = document.getElementById('home');
    const divCenter = document.createElement('div');
    const title = document.createElement('h1');
    const slogan = document.createElement('p');

    divHome.appendChild(divCenter);
    divCenter.classList.add('center');
    divCenter.appendChild(title);
    title.innerHTML = `"Savory Haven"`;
    divCenter.appendChild(slogan);
    slogan.innerHTML = ` "Indulge in flavors that will take your taste buds on a journey."`
}
