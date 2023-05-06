import "./style.css";

export default function contact(){
    const divHome = document.getElementById('contact');
    const title = document.createElement('h2');
    const form = document.createElement('form');
    const input1 = document.createElement('input');
    const input2 = document.createElement('input');
    const input3 = document.createElement('input');
    const input4 = document.createElement('input');
    const button = document.createElement('button');
    
    divHome.appendChild(title);
    title.innerHTML = "Contact form";

    divHome.appendChild(form);
    form.action = 'get';

    form.appendChild(input1);
    input1.type = 'text';
    input1.placeholder = 'First Name';

    form.appendChild(input2);
    input2.type = 'text';
    input2.placeholder = 'Last Name';

    form.appendChild(input3);
    input3.type = 'email';
    input3.placeholder = 'Email';

    form.appendChild(input4);
    input4.type = 'text';
    input4.placeholder = 'Message';

    form.appendChild(button);
    button.innerHTML = 'Submit';
    button.type = 'submit';
}