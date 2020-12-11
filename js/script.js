/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito20 */

var name, surname, prefColor, password;

name = prompt('Inserisci il tuo nome');
console.log(name);

surname = prompt('Inserisci il tuo cognome');
console.log(surname);

prefColor = prompt('Qual è il tuo colore preferito?');
console.log(prefColor);

password = name + surname + prefColor + 20;
console.log(password);

document.getElementById('pass').innerHTML = password;