// Algo

let maphrase = "Bonjour tout le monde,je suis Christian Lisangola,développeur logiciels à Kinshasa Digital. Mon numéro de téléphone est le +243840964176 qui un numéro vodacom,et mon adresse email privé est le christian.lisangola@gmail.com. Par le passé j'ai eu à utiliser d'autres numéros de téléphones à l'instar d'un numéro Airtel qui fut le +243971151294 mais qui ne passe plus je suppose et aussi un numéro Tigo,le +243895602911. Ici à Kinshasa Digital,j'utilise une adresse mail d'entreprise qui est le christian@kinshasadigital.com."

let maNouvellePhrase = maphrase.toLowerCase().split(/[ ,]/);

// console.log(maNouvellePhrase);
// console.log(maNouvellePhrase.length);


// nombre d'adresse mail

// const listeDesAdressesMails = maNouvellePhrase.filter ((adresseMail) => {

//     return adresseMail.includes('@')  
// })

// console.log(listeDesAdressesMails);
// console.log(listeDesAdressesMails.length);


//numero de telephone

// const listeDesNumeroDeTelephone = maNouvellePhrase.filter ((adresseMail) => {
//     return adresseMail.includes('+243')
// })

const supprimerLePoint = (monTableauDeNumeo)=>{
    for(let i = 0; i < monTableauDeNumeo.length; i++){
        if(monTableauDeNumeo[i].endsWith('.')){
            monTableauDeNumeo[i] = monTableauDeNumeo[i].replace('.', '');      
        }
    }
};
// supprimerLePoint(listeDesNumeroDeTelephone);
// console.log(listeDesNumeroDeTelephone);
// console.log(listeDesNumeroDeTelephone.length);

// numero de telephone vodacom

// const numeroDeTelephoneVodacom = maNouvellePhrase.filter (function(word){ 
//     return word.startsWith('+24381') || word.startsWith('+24382');
// });
// supprimerLePoint(numeroDeTelephoneVodacom);
// console.log(numeroDeTelephoneVodacom);
// console.log(numeroDeTelephoneVodacom.length);


// numero tigo

// const numeroDeTelephoneTigo = maNouvellePhrase.filter (function(word){ 
//     return word.startsWith('+24389') || word.startsWith('+24380');
// });
// supprimerLePoint(numeroDeTelephoneTigo);
// console.log(numeroDeTelephoneTigo);
// console.log(numeroDeTelephoneTigo.length);


// numero orange

// const numeroDeTelephoneOrange = maNouvellePhrase.filter (function(word){ 
//     return word.startsWith('+24384') || word.startsWith('+24385');
// });
// supprimerLePoint(numeroDeTelephoneOrange);
// console.log(numeroDeTelephoneOrange);
// console.log(numeroDeTelephoneOrange.length);


// numero airtel

// const numeroDeTelephoneOrange = maNouvellePhrase.filter (function(word){ 
//     return word.startsWith('+24397') || word.startsWith('+24399');
// });
// supprimerLePoint(numeroDeTelephoneOrange);
// console.log(numeroDeTelephoneOrange);
// console.log(numeroDeTelephoneOrange.length);


// // adresse de messagerie professionlle

// const messagerieProfessionlle = maNouvellePhrase.filter (function(word){ 
//     return word.includes('@kinshasadigital')
// });
// console.log(messagerieProfessionlle);
// console.log(messagerieProfessionlle.length);


// // messagerie privee

// const messageriePrivee = maNouvellePhrase.filter (function(word){ 
//     return word.includes('@gmail')
// });
// supprimerLePoint(messageriePrivee);
// console.log(messageriePrivee);
// console.log(messageriePrivee.length);


// supprimer les mots

// const motAsupprimer = maNouvellePhrase.filter(word=> !/le|à|la|je|une|un|de|qui|est|mon|0|1|et|par|nous|les|@/.test(word))
// console.log(motAsupprimer );
// let nombreDeMot = motAsupprimer.length
// console.log(nombreDeMot);
