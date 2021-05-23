 let valeur = 4;
 const nombre = document.getElementById("nombre");

 const etudiants = document.querySelectorAll(".supprimer");

 const dibor = document.getElementById("supprimer_dibor");
 const assane = document.getElementById("supprimer_assane");
 const rafihou = document.getElementById("supprimer_rafihou");
 const mbengue = document.getElementById("supprimer_mbengue");

 etudiants.forEach(function (etudiant) {
    etudiant.addEventListener("click", function(event){
        const supprimer = event.currentTarget.classList;
        if(supprimer.contains("dibor")){
            supprimerEtudiant(dibor);
        }
        if(supprimer.contains("assane")){
            supprimerEtudiant(assane);
        }
        if(supprimer.contains("rafihou")){
            supprimerEtudiant(rafihou);
        }
        if(supprimer.contains("mbengue")){
            supprimerEtudiant(mbengue);
        }
    });
});

function supprimerEtudiant(personne){
    personne.classList.add("delete");
    valeur--;
    nombre.textContent = valeur;
}


const form = document.querySelector('form');

const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const afficher = document.getElementById("afficher");

const gender = document.getElementById("gender");

const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const genre = document.getElementById("genre");

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    afficher.style.display = 'block'; 

    nom.textContent = firstname.value;
    prenom.textContent = lastname.value;
    genre.textContent = gender.value;
    console.log(firstname);
});