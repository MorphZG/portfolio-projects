# Login form

## Instrukcije

Kreirajte registracijsku formu koja će sadržavati 4 inputa (email, password, confirm password i broj mobitela) i jedan button (Login)
koristite js i jQuery
Forma mora biti responzivna
Na mobilnim uređajima svi elementi moraju biti 90% veličine ekrana (mobilni uređaju se računaju do 768px širine)
Forma mora imati sljedeće validatore

- email mora biti validna email adresa (obavezno polje)
- password mora sadržavati barem jedno veliko, jedno malo slovo i broj (obavezno polje)
- password i confirm password moraju biti jednaki
- broj mobitela nije obavezan
- BONUS - unutar password inputa postavite button s kojim se prikazuje password

Kada se Login button klikne treba prikazati obavijest da ste logirani ili da je došlo do greške
Označiti kriva polja sa zvijezdicom ili ih uokviriti u crvenu boju

Ispod registracijske forme napraviti dodatnu formu koja će imati 1 input (City) i jedan button (Get data) 
Putem API-a sa stranice https://www.weatherapi.com/ dohvatiti podatke o trenutnoj temperaturi, latitude i lonngitude za navedeni grad putem AJAX poziva
Dohvaćene podatke prikazati na stranici ispod buttona "Get Data" u 3 polja (Temperatura, lat i long). Polja moraju biti HTML <p> tagu i ne smiju postojati na stranici prije poziva na API
Kada korisnik unese ime grada po drugi put i klikne na "Get Data", pobrisati stare podatke (temp, lat, lng), dohvatiti nove i prikazati ih
dizajn po vašem izboru.

## Breakdown

- Build HTML registration form

## My notes

Grafike preuzete sa: [undraw.co](https://undraw.co/illustrations)
Ikone: [cdnjs.com](https://cdnjs.com/libraries/font-awesome)