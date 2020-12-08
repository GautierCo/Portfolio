export default [
    {
        id: 1,
        name: "ClgeCrew", 
        description: "Création d'un site e-Commerce sous Wordpress (avant ma formation). Comme mon frère est Youtuber, il avait envie d'avoir son propre site pour vendre ses tenues personnalisées de moto-cross, ainsi que des vêtements. La boutique est actuellement fonctionnelle et en ligne.", 
        theme: "eCommerce",
        technology: [
            {
                name: "Wordpress",
                color: "#fff",
            }, 
            {
                name: "Javascript",
                color: "#fff",
            },
        ],
        url: "https://clgecrew.fr/",
        logo: process.env.PUBLIC_URL + '/logo_project/clgecrew.png',
        image: process.env.PUBLIC_URL + '/img_project/clgecrew.jpeg',
        urlGithub: null
    },
    { 
        id: 2,
        name: "Déco d'Élise", 
        description: "Création d'une boutique eCommerce avec Wordpress et le thème Divi complétement customisable.(avant ma formation)", 
        theme: "eCommerce",
        technology: [
            {
                name: "Wordpress",
                color: "#fff",
            }, 
            {
                name: "Javascript",
                color: "#fff",
            },
        ],
        url: "https://decodelise.com/",
        logo: process.env.PUBLIC_URL + '/logo_project/decodelise.png',
        image: process.env.PUBLIC_URL + '/img_project/decodelise.jpeg',
        urlGithub: null
    },
    { 
        id: 3,
        name: "iTongue", 
        description: `<p>Après 5 mois de formation intensive dans la fabuleuse <strong>Ecole O'clock</strong> pour apprendre le métier de développeur web, nous avons eu pour mission de créer un projet de A à Z pendant une durée de 1 mois en équipe de 5.</p>

        <p>iTongue lève la barrière de la langue en permettant à tout un chacun de maîtriser les rudiments qui faciliteront ses échanges lors de ses voyages.</p>
        
        <p>La communauté des utilisateurs partage ses connaissances, on vient sur iTongue à la fois pour apprendre et transmettre son savoir grâce à des iRecords. Ce sont des enregistrements audio réalisés par la communauté qui permettent d'être écouté ou reproduit à travers l'application.</p>
        
        <p>J'ai été chargé de développer le front-end de l'application avec mon coéquipier Ludovic, nous avons utilisé le framework ReactJS couplé à Redux pour la gestion du store de l'application. On a eu l'occasion d'utiliser SocketIO avec lequel on a pu mettre en place un système de notifications et de chat en temps réel. Concernant l'UI nous avons préféré utiliser semantic UI comme base pour avoir plus de temps sur la partie fonctionnelle de l'application, mais nous avons tout de même fait beaucoup de css à la main avec Sass.</p>`, 
        theme: "React, Redux, NodeJS, Express",
        technology: [
            {
                name: "Wordpress",
                color: "#fff",
            }, 
            {
                name: "Javascript",
                color: "#fff",
            },
        ],
        logo: process.env.PUBLIC_URL + '/logo_project/itongue.png',
        image: "https://fakeimg.pl/680x320/",
        video: "gFhX1y1v8GQ",
        url: "https://itongue.io",
        urlGithub: "https://github.com/GautierCo/iTongue"
    },
];