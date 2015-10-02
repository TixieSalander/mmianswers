function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function element_from_array(tableau) {
    var randomi = getRandomInt(0, window[tableau].length - 1);
    return window[tableau][randomi];
}
var utilisateurs = ["installer", "faire un apt-get install", "remove", "update", "lancer", "upgrade", "include", "importer", "link", "upload", "fork", "configurer"];
var utilisateurs2 = ["installer", "faire un apt-get install", "remove", "update", "lancer", "upgrade", "include", "importer", "link", "upload", "fork", "configurer"];
var gentils_pluriel = ["Jquery", "NodeJS", "PHP", "CSS3", "HTML5", "AJAX", "Javascript", "SSH2"];
var gentils_singulier = ["MAMP", "Flash Player", "Silverlight", "Sublime Text", "Atom", "CMD", "Filezilla", "Brackets", "Dreamweaver", "Notepad++", "Chromium", "Java"];
var gentils_groupes = ["SSH", "WAMP", "Firefox", "Scilab"];
var site_com = ["Github", "OpenClassRooms", "Stackoverflow", "Comment ça marche", "Clubic", "01net", "Twitter", "Tomsguide"];
var messagerie = ["Twitter", "Gmail", "Caramail", "IRC", "Hotmail", "Jabber", "Telegram", "MSN Messenger", "Skype", "Mumble", "Teamspeak", "ICQ", "Google Talk"];

// Nous = installer / apt-get install / include
// eux = logiciel
// autre = logiciel
// groupe = autre logiciel
// gentils = site communautaire


function intro1() {
   
    
    var user = element_from_array('utilisateurs');
    var eux = element_from_array('gentils_singulier');
    var autres = element_from_array('gentils_singulier');
    var groupe = element_from_array('gentils_pluriel');
    return ("Tu as pensé à " + user + " " + eux + " ? " + autres + " ne peut pas fonctionner sans " + groupe);
}

function intro2() {
    var user = element_from_array('utilisateurs');
    var gentils = element_from_array('site_com');
    var eux = element_from_array('gentils_singulier');
    var groupe = element_from_array('gentils_pluriel');
    return ("Tu devrais " + user + " " + eux + ", Ça arrive souvent quand on ne met pas à jour " + groupe);
}

function intro3() {
    var user = element_from_array('utilisateurs');
    var gentils = element_from_array('site_com');
    var eux = element_from_array('gentils_singulier');
    return ("La meilleure solution c'est " + user + " " + eux + ", j'ai vu ça l'autre jour sur " + gentils);
}

function intro4() {
    var user = element_from_array('utilisateurs');
    var groupe = element_from_array('gentils_pluriel');
    var groupe2 = element_from_array('gentils_groupes');
    var gentils = element_from_array('site_com');
    return ("Je suis sûr qu'il faut " + user + " " + groupe + ". Selon " + gentils + ", ça vient d'une faille sur " + groupe2);
}

function intro5() {
    var user = element_from_array('utilisateurs');
    var groupe = element_from_array('gentils_groupes');
    var gentils = element_from_array('site_com');
    var groupe2 = element_from_array('gentils_pluriel');
    var eux = element_from_array('gentils_singulier');
    return ("J'ai vu l'autre jour qu'il fallait " + user + " " + groupe + " en utilisant " + eux + ". De toute façon, " + groupe2 + " est clairement inutilisable en 2015");
}
function intro6() {
    var user = element_from_array('utilisateurs');
    var user2 = element_from_array('utilisateurs2');
    var groupe = element_from_array('gentils_groupes');
    var gentils = element_from_array('site_com');
    var groupe2 = element_from_array('gentils_pluriel');
    var eux = element_from_array('gentils_singulier');
    return ("En premier, il faut " + user + " " + groupe + " en passant par " + eux + ". Ensuite il faut simplement " + user2 + " " + groupe2);
}

var intros = [intro1(), intro2(), intro3(), intro4(), intro5(), intro6()];

function randomintro() {
    var rintro = element_from_array('intros');
    return rintro;
}


function conclusion1() {
    var messagerie = element_from_array('messagerie');
    return (" Si t'as besoin, demande moi via " + messagerie + " !");
}

function conclusion2() {
    var messagerie = element_from_array('messagerie');
    return (" Je t'explique sur " + messagerie + " :) ");
}

function conclusion3() {
    var messagerie = element_from_array('messagerie');
    return (" On peut en parler sur " + messagerie + " !");
}

function conclusion4() {
    var messagerie = element_from_array('messagerie');
    return (" Le mieux c'est de continuer sur " + messagerie + ".");
}

var conclusions = [conclusion1(), conclusion2(), conclusion3(), conclusion4()];

function randomconclu() {
    var rconclu = element_from_array('conclusions');
    return rconclu;
}

document.getElementById("message").innerHTML = randomintro() + "." + randomconclu();