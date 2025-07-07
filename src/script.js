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
        <span class="font-da-ereditare">${utente.nome} - Email: ${utente.email}</span>
    </li>`
).join('')

lista.innerHTML = htmlelements;

const h2 = document.querySelector('h2');

function cambiaColore() {
    h2.style.color = '#5cdd05';
    h2.style.fontSize = '78px'

}
