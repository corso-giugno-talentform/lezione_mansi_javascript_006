const utenti = [
    { nome: 'Mario', email: 'mario@email.com', eta: 30 },
    { email: 'laura@email.com', eta: 25, nome: 'Laura' },
    { nome: 'Giuseppe', email: 'giuseppe@email.com', eta: 35 }
];

//const lista = document.querySelector('#lista-prodotti');
const lista = document.getElementById('lista-prodotti');
//const paragrafo = document.getElementsByTagName('p');


//lista.innerHTML +=

const htmlelements = utenti.map(utente =>
    `<li>
        <span>${utente.nome} - Email: ${utente.email}</span>
    </li>`
).join('')

lista.innerHTML = htmlelements;
