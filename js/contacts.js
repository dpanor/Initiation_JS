/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme
var contact = {
	nom: "",
	prenom: "",
	
	init: function(prenom,nom)
	{
		this.prenom=prenom;
		this.nom=nom;
	},
	
	decrire: function()
	{
		var description = "Nom : "+this.nom+", prénom : "+this.prenom;
		return description;
	}
};

contact1 = Object.create(contact);
contact1.init("Carole","Lévisse");
contact2 = Object.create(contact);
contact2.init("Mélodie","Nelsonne");


var choix = "99";
var contacts = [contact1,contact2];

console.log("Bienvenue dans le gestionnaire des contacts !");

while (choix !== 0)
{
	console.log("1. Lister les contacts");
	console.log("2. Ajouter un contact");
	console.log("0. Quitter");
	choix = Number(prompt("Choisissez une option :"));
	

	switch(choix){
		case 1:
			//lister
			console.log("Voici la liste de tous vos contacts :");
			contacts.forEach(function listage(contact){ console.log(contact.decrire()); });
			console.log("\n");
			break;
		case 2: 
			//Ajouter
			var newContact = Object.create(contact);
			 newContact.nom = prompt("Entrez le nom du nouveau contact :");
			 newContact.prenom = prompt("Entrez le prénom du nouveau contact :");
			 contacts.push(newContact);
			 console.log("Le nouveau contact a été ajouté !");
			 console.log("\n");
			break;
		case 0:
			//quitter
			console.log("\n\nAu revoir !");
			break;
		default:
			console.log("Il semble y avoir une erreur... réessayer. ");
			break;
	}

}