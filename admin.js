// INFORMATIONS DU COMPTE
// Afficher les champs éditables
function afficherInfos() {
  document.getElementById("prenom").style.display = "inline-block";
  document.getElementById("nom").style.display = "inline-block";
  document.getElementById("email").style.display = "inline-block";
  document.getElementById("role").style.display = "inline-block";
  document.getElementById("labelRole").style.display = "inline-block";
  document.getElementById("boutonsModifInfos").style.display = "inline-block";
  
  document.getElementById("motdepasse").style.display = "none";
  document.getElementById("confirmermotdepasse").style.display = "none";
  document.getElementById("boutonsModifPassword").style.display = "none";
} 

// Annuler modifications
function annulerModificationsInfos() {
  document.getElementById("prenom").value = "";
  document.getElementById("nom").value = "";
  document.getElementById("email").value = "";
  document.getElementById("role").value = "";
  document.getElementById("prenom").style.display = "none";
  document.getElementById("nom").style.display = "none";
  document.getElementById("email").style.display = "none";
  document.getElementById("role").style.display = "none";
  document.getElementById("labelRole").style.display = "none";
  document.getElementById("boutonsModifInfos").style.display = "none";
}

// -------- // -------- //
// -------- // -------- //

// MOTS DE PASSE
// Afficher les champs éditables
function afficherPassword() {
  document.getElementById("motdepasse").style.display = "inline-block";
  document.getElementById("confirmermotdepasse").style.display = "inline-block";
  document.getElementById("boutonsModifPassword").style.display = "inline-block";
  
  document.getElementById("prenom").style.display = "none";
  document.getElementById("nom").style.display = "none";
  document.getElementById("email").style.display = "none";
  document.getElementById("role").style.display = "none";
  document.getElementById("labelRole").style.display = "none";
  document.getElementById("boutonsModifInfos").style.display = "none";
}

// Annuler modifications
function annulerModificationsPassword() {
  document.getElementById("motdepasse").value = "";
  document.getElementById("confirmermotdepasse").value = "";
  document.getElementById("motdepasse").style.display = "none";
  document.getElementById("confirmermotdepasse").style.display = "none";
  document.getElementById("boutonsModifPassword").style.display = "none";
}

// -------- // -------- //
// -------- // -------- //

// AJOUTER UN ADMINISTRATEUR
// Afficher les champs éditables
function afficherNew() {
  document.getElementById("prenom-new").style.display = "inline-block";
  document.getElementById("nom-new").style.display = "inline-block";
  document.getElementById("email-new").style.display = "inline-block";
  document.getElementById("role-new").style.display = "inline-block";
  document.getElementById("labelRole-new").style.display = "inline-block";
  document.getElementById("boutonsNew").style.display = "inline-block";
} 

// Annuler modifications
function annulerNew() {
  document.getElementById("prenom-new").value = "";
  document.getElementById("nom-new").value = "";
  document.getElementById("email-new").value = "";
  document.getElementById("role-new").value = "";
  document.getElementById("prenom-new").style.display = "none";
  document.getElementById("nom-new").style.display = "none";
  document.getElementById("email-new").style.display = "none";
  document.getElementById("role-new").style.display = "none";
  document.getElementById("labelRole-new").style.display = "none";
  document.getElementById("boutonsNew").style.display = "none";
}
