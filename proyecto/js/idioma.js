//declaracion de constantes usando el metodo querySelector

//permite guardar el enlace el selecto <a> del html
const link = document.querySelectorAll('a');


const langEl = document.querySelector('.langWrap');
const logoText = document.querySelector('.logoText');
const tp2 = document.querySelector('.tp2');
const menuHome = document.querySelector('.menuHome');
const menuSectionOne = document.querySelector('.menuSectionOne');
const menuSectionTwo = document.querySelector('.menuSectionTwo');
const menuSectionThree = document.querySelector('.menuSectionThree');
const menuSectionFour = document.querySelector('.menuSectionFour');
const menuSectionFive = document.querySelector('.menuSectionFive');
const menuSectionSix = document.querySelector('.menuSectionSix');
const menuSectionSeven = document.querySelector('.menuSectionSeven');
const packageOne = document.querySelector('.packageOne');
const packageTwo = document.querySelector('.packageTwo');
const packageThree = document.querySelector('.packageThree');
const ourServices = document.querySelector('.ourServices');
const consoles = document.querySelector('.consoles');
const descriptionConsoles = document.querySelector('.descriptionConsoles');
const descriptionComputer = document.querySelector('.descriptionComputer');
const simulator = document.querySelector('.simulator')
const descriptionSimulator = document.querySelector('.descriptionSimulator');
const suscribeText = document.querySelector('.suscribeText')
const insideEmail = document.querySelector('.insideEmail');
const suscribeBtn = document.querySelector('.suscribeBtn');
const title2 = document.querySelector('.title2');
const ourAreas = document.querySelector('.ourAreas')
const arenaGaming = document.querySelector('.arenaGaming');
const descriptionArena = document.querySelector('.descriptionArena');
const areaConsoles = document.querySelector('.areaConsoles');
const descriptionConsoles2 = document.querySelector('.descriptionConsoles2');
const lounge = document.querySelector('.lounge');
const descriptionLounge = document.querySelector('.descriptionLounge');
const botonrecorrido = document.querySelector('.botonrecorrido');
const titleForm = document.querySelector('.titleForm');
const nameForm = document.querySelector('.nameForm');
const emailForm = document.querySelector('.emailForm');
const messageForm = document.querySelector('.messageForm');
const sendForm = document.querySelector('.sendForm');
const footerEng = document.querySelector('.footerEng');

link.forEach(r => {
    r.addEventListener('click', () => {
        const attr = r.getAttribute('language');       
        tp2.textContent = changeLanguage[attr].tp2;
        menuHome.textContent = changeLanguage[attr].menuHome;
        menuSectionOne.textContent = changeLanguage[attr].menuSectionOne;
        menuSectionTwo.textContent = changeLanguage[attr].menuSectionTwo;
        menuSectionThree.textContent = changeLanguage[attr].menuSectionThree;
        menuSectionFour.textContent = changeLanguage[attr].menuSectionFour;
        menuSectionFive.textContent = changeLanguage[attr].menuSectionFive;
        menuSectionSix.textContent = changeLanguage[attr].menuSectionSix;
        menuSectionSeven.textContent = changeLanguage[attr].menuSectionSeven;
        packageOne.textContent = changeLanguage[attr].packageOne;
        packageTwo.textContent = changeLanguage[attr].packageTwo;
        packageThree.textContent = changeLanguage[attr].packageThree;
        ourServices.textContent = changeLanguage[attr].ourServices;
        consoles.textContent = changeLanguage[attr].consoles;
        descriptionConsoles.textContent = changeLanguage[attr].descriptionConsoles;
        descriptionComputer.textContent = changeLanguage[attr].descriptionComputer;
        simulator.textContent = changeLanguage[attr].simulator;
        descriptionSimulator.textContent = changeLanguage[attr].descriptionSimulator;
        suscribeText.textContent = changeLanguage[attr].suscribeText;
        insideEmail.placeholder  = changeLanguage[attr].insideEmail;
        suscribeBtn.textContent = changeLanguage[attr].suscribeBtn;
        title2.textContent = changeLanguage[attr].title2;
        ourAreas.textContent = changeLanguage[attr].ourAreas;
        arenaGaming.textContent = changeLanguage[attr].arenaGaming;
        descriptionArena.textContent = changeLanguage[attr].descriptionArena;
        areaConsoles.textContent = changeLanguage[attr].areaConsoles;
        descriptionConsoles2.textContent = changeLanguage[attr].descriptionConsoles2;
        lounge.textContent = changeLanguage[attr].lounge;
        descriptionLounge.textContent = changeLanguage[attr].descriptionLounge;
        botonrecorrido.textContent = changeLanguage[attr].botonrecorrido;
        titleForm.textContent = changeLanguage[attr].titleForm;
        nameForm.textContent = changeLanguage[attr].nameForm;
        emailForm.textContent = changeLanguage[attr].emailForm;
        messageForm.textContent = changeLanguage[attr].messageForm;
        sendForm.textContent = changeLanguage[attr].sendForm;  
        footerEng.textContent = changeLanguage[attr].footerEng;  
    });
});


//objeto de json que asigna los valores a cada clase en español usando el atributo "espanish"
let changeLanguage = {

    "espanish":
    {
        "tp2": "Un espacio donde llevamos lo virtual a lo fisíco con tecnología de vanguardia desde las computadoras hasta el sonido y video. Queremos que cualquier equipo amateur o profesional de Costa Rica o Latinoamérica puedan usar las instalaciones para entrenar, realizar bootcamps, presentaciones, etc",
        "menuHome": "Inicio",
        "menuSectionOne": "Eventos",
        "menuSectionTwo": "Consultas",
        "menuSectionThree": "Recorrido 360",
        "menuSectionFour": "Paquetes",
        "menuSectionFive": "Noticias",
        "menuSectionSix": "Equipo",
        "menuSectionSeven": "Sobre Nosotros",
        "packageOne": "Paquete Infinito #1",
        "packageTwo": "Paquete Infinito #2",
        "packageThree": "Paquete VIP Infinito",
        "ourServices": "Nuestros Servicios",
        "consoles": "Consolas",
        "descriptionConsoles": "Nuestras consolas más populares son PlayStation de Sony, Xbox de Microsoft y Nintendo Switch. Ofrecen una experiencia de juego simplificada y optimizada, con hardware y software específicamente diseñados para juegos.",
        "descriptionComputer": "Nuestras PC gamers suelen tener hardware potente, como procesadores rápidos, tarjetas gráficas avanzadas y gran cantidad de memoria RAM. Contamos con más de 30 PC en nuestras instalaciones. ",
        "simulator": "Simulador",
        "descriptionSimulator": "Nuestros simuladores son sistemas especializados que recrean la experiencia de conducir un automóvil de carreras en un entorno virtual. Contamos con 3 en nuestras instalaciones.",
        "suscribeText": "¡Recibe las novedades de nuestros torneos y eventos próximos en el IGC!",
        "insideEmail": "Ingresa tu correo electrónico",
        "suscribeBtn": "Suscribirse",
        "title2": "De los píxeles a la gloria",
        "ourAreas": "Nuestras Áreas",
        "arenaGaming": "Árena Gaming",
        "descriptionArena": "Esta área es especial para los verdaderos gamers. ¿Tú eres uno de ellos?        Disponemos de 10 computadoras gamers profesionales para los torneos que quieras hacer con tus amigos de Valorant, Fortnite, League of Legends, Apex y Rocket League.",
        "areaConsoles": "Área de Consolas",
        "descriptionConsoles2": "¡Dónde puedes disfrutar tus horas de juego con tus juegos favoritos! Como en Ps5 Street Fighter, Tekken, FIFA, Fall Guys, en Xbox Gang Beast, Mortal Kombat, It takes Two. En Nintendo Switch Mario Kart, Just Dance, Mario Party y ¡muchos más!",
        "lounge": "Sala Lounge",
        "descriptionLounge": "La sala especial para el cumpleañero, aquí podemos disfrutar con tranquilidad el momento de la comida, cantar cumpleaños y probar las golosinas que tanto esperan.",
        "botonrecorrido": "Ver Recorrido",
        "titleForm": "Formulario de Contacto",
        "nameForm": "Nombre:",
        "emailForm": "Correo electrónico:",
        "messageForm": "Mensaje:",
        "sendForm": "Enviar",
        "footerEng": "Derechos Reservados © 2024"
    },

  //objeto de json que asigna los valores a cada clase en ingles usando el atributo "english"
    "english":
    {
        "tp2": "A space where we bring the virtual to the physical with cutting-edge technology from computers to sound and video. We want any amateur or professional team from Costa Rica or Latin America to be able to use the facilities to train, hold bootcamps, presentations, etc.",
        "menuHome": "Home",
        "menuSectionOne": "Events",
        "menuSectionTwo": "Inquiries",
        "menuSectionThree": "Tour 360",
        "menuSectionFour": "Packages",
        "menuSectionFive": "News",
        "menuSectionSix": "Equipment",
        "menuSectionSeven": "About Us",
        "packageOne": "Infinite Package #1",
        "packageTwo": "Infinite Package #2",
        "packageThree": "Infinite VIP Package",
        "ourServices": "Our Services",
        "consoles": "Consoles",
        "descriptionConsoles": "Our most popular consoles are Sony PlayStation, Microsoft Xbox and Nintendo Switch. They offer a simplified and optimized gaming experience, with hardware and software specifically designed for gaming",
        "descriptionComputer": "Our gaming PCs usually have powerful hardware, such as fast processors, advanced graphics cards, and large amounts of RAM. We have more than 30 PCs in our facilities.",
        "simulator": "Simulator",
        "descriptionSimulator": "Our simulators are specialized systems that recreate the experience of driving a racing car in a virtual environment. We have 3 in our facilities.",
        "suscribeText": "¡Receive news about our upcoming tournaments and events at IGC!",
        "insideEmail": "Type your email address",
        "suscribeBtn": "Subscribe",
        "title2": "From pixels to glory",
        "descriptionTwo": "Responsive website development Compatible with Smartphone and Tablet mobile devices.",
        "ourAreas": "Our Areas",
        "arenaGaming": "Gaming Arena",
        "descriptionArena": "This area is special for true gamers. You're one of them? We have 10 professional gaming computers for the tournaments you want to do with your Valorant, Fortnite, League of Legends, Apex and Rocket League friends.",
        "areaConsoles": "Consoles Area",
        "descriptionConsoles2": "Where you can enjoy your hours of play with your favorite games! Like on Ps5 Street Fighter, Tekken, FIFA, Fall Guys, on Xbox Gang Beast, Mortal Kombat, It takes Two. On Nintendo Switch Mario Kart, Just Dance, Mario Party and many more!",
        "lounge": "Lounge Room",
        "descriptionLounge": "The special room for the birthday child, here we can calmly enjoy the meal, sing birthdays and try the sweets they have been waiting for so long.",
        "botonrecorrido": "View Tour",
        "titleForm": "Contact Form",
        "nameForm": "Name:",
        "emailForm": "Email:",
        "messageForm": "Message:",
        "sendForm": "Send",
        "footerEng": "Copy Rights © 2024"
    }
}