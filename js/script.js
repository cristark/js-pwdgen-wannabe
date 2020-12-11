/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito20 */

// |Variabili principali
var name, surname, prefColor, password;

// | Inserimento nome
name = prompt('Inserisci il tuo nome');
console.log(name);

// Conversione prima lettera nome in Maiuscolo
name = name.charAt(0).toUpperCase() + name.substring(1);
console.log(name);

//| Inserimento cognome
surname = prompt('Inserisci il tuo cognome');
console.log(surname);

// Conversione prima lettera cognome in Maiuscolo
surname = surname.charAt(0).toUpperCase() + surname.substring(1);
console.log(surname);

//| Inserimento colore preferito
prefColor = prompt('Qual è il tuo colore preferito?');
console.log(prefColor);

// Conversione prima lettera cognome in Maiuscolo
prefColor = prefColor.charAt(0).toUpperCase() + prefColor.substring(1);
console.log(prefColor);

//| Generatore password
password = name + surname + prefColor + 20;
console.log(password);

// Visualizzazione sulla pagina
document.getElementById('pass').innerHTML = password;