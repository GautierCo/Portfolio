export default [
    {
        id: 1,
        name: "ClgeCrew",
        description:
            "<p>Création d'un site e-Commerce sous Wordpress (avant ma formation). Comme mon frère est Youtuber, il avait envie d'avoir son propre site pour vendre ses tenues personnalisées de moto-cross, ainsi que des vêtements. La boutique est actuellement fonctionnelle et en ligne.</p>",
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
        logo: process.env.PUBLIC_URL + "/logo_project/clgecrew.png",
        image: process.env.PUBLIC_URL + "/img_project/clgecrew.jpeg",
        urlGithub: null,
    },
    {
        id: 2,
        name: "Déco d'Élise",
        description:
            "<p>Création d'une boutique eCommerce avec Wordpress et le thème Divi complétement customisable.(avant ma formation)</p>",
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
        logo: process.env.PUBLIC_URL + "/logo_project/decodelise.png",
        image: process.env.PUBLIC_URL + "/img_project/decodelise.jpeg",
        urlGithub: null,
    },
    {
        id: 3,
        name: "iTongue",
        description: `<p>Après 5 mois de formation intensive à l'<strong>Ecole O'clock</strong> pour apprendre le métier de développeur web, nous avons eu pour mission de créer un projet de A à Z pendant une durée de 1 mois en équipe de 5.</p>
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
        logo: process.env.PUBLIC_URL + "/logo_project/itongue.png",
        image: null,
        video: "gFhX1y1v8GQ",
        url: "https://itongue.io",
        urlGithub: "https://github.com/GautierCo/iTongue",
    },
    {
        id: 4,
        name: "Qovery Engine",
        description: `<p>Benjamin Code a publié une vidéo concernant l'intégration d'une maquette qu'il devait réaliser pour son travail. Après avoir vu la vidéo j'ai décidé de faire un petit projet pour essayer à mon tour de réaliser cette maquette et d'y intégrer quelques effets d'animations en plus.</p>`,
        theme: "HTML, SCSS, Javascript",
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
        logo: process.env.PUBLIC_URL + "/logo_project/qovery_logo.jpg",
        image: process.env.PUBLIC_URL + "/img_project/qovery.gif",
        video: null,
        url: "https://qovery-engine-ten.vercel.app/",
        urlGithub: "https://github.com/GautierCo/Qovery-Engine",
    },
    {
        id: 5,
        name: "TradeLogger",
        description: `
        <p>Pour passer mon <i>« Titre Professionnel Développeur Web & Mobile »</i> j'ai créé cette application du back jusqu'au front. A savoir : <b> elle n'est pas totalement terminée.</b></p>
        <p>TradeLogger est une application permettant aux traders de suivre quotidiennement toutes les actions d’achat ou de vente qu’ils exécutent.</p>
        <p>Bénéficier d’une synthèse avec des statistiques sur l’ensemble des trades, par exemple le pourcentage de trades gagnant. </p>
        <p>Pour être gagnant sur le long terme la psychologie est capitale, c’est pourquoi les utilisateurs ont la possibilité de tenir leur propre journal de bord, ce qui permet ensuite d’analyser leur état d’esprit en fonction des résultats obtenus.
        </p>
        <p>➜ Le serveur est hébergé chez <b>Heroku</b> en version gratuite, si il n'y a pas d'activité au bout d'une heure il se met en "veille". Si vous souhaitez tester l'application une fois que la première requête sera effectuée, il faudra attendre 30 secondes avant que le serveur puisse vous retourner les données.</p>`,
        theme: "React, NodeJS/ExpressJS, MongoDB",
        technology: [
            {
                name: "ExpressJs",
                color: "#fff",
            },
            {
                name: "Javascript",
                color: "#fff",
            },
        ],
        logo: process.env.PUBLIC_URL + "/logo_project/tradelogger.jpg",
        image: process.env.PUBLIC_URL + "/img_project/tradelogger.gif",
        video: null,
        url: "https://trader-logger.vercel.app/signup",
        urlGithub: "https://github.com/GautierCo/TradeLogger",
    },
    {
        id: 6,
        name: "Haunted House",
        description: `<p>Étant fortement intéressé par les animations avec Javascript, j'ai cherché à en apprendre plus. Je connaissais déjà GSAP, une librairie qui permet de faire énormément de choses, d'ailleurs je l'utilise actuellement sur mon portfolio.</p>
                <p>J'ai donc acheté une formation sur ThreeJS créée par Bruno Simon (<a href="https://threejs-journey.xyz/" rel="nofollow"><b>ThreeJS Journey</b></a>). Pendant le parcours d'apprentissage qu'il propose, il fallait réaliser un exercice dont le but était de réaliser une maison hantée avec des décors tels que des tombes, des fantômes qui se déplacent dans l'ombre</p> 
                <p>N'hésitez pas à visiter le site que j'ai hébergé sur Vercel pour avoir un meilleur aperçu</p>`,
        theme: "ThreeJS, Javascript",
        technology: [
            {
                name: "ThreeJS",
                color: "#fff",
            },
            {
                name: "Javascript",
                color: "#fff",
            },
        ],
        logo: process.env.PUBLIC_URL + "/logo_project/hauntedhouse_logo.jpg",
        image: process.env.PUBLIC_URL + "/img_project/hauntedhouse.gif",
        video: null,
        url: "https://hauntedhouse.vercel.app/",
        urlGithub: "",
    },
    {
        id: 7,
        name: "GroupBook",
        description: `
        <p>Cette extension est capable de récupérer les informations entrées par les utilisateurs lors de leur
        demande pour intégrer un groupe privé sur Facebook. (Email, questions posées par le créateur du
        groupe).</p>
        <p>Au départ, mon idée était d'apprendre à créer une simple <b>extension chrome</b> permettant de récupérer les adresses emails ainsi que les différentes réponses des membres lorsqu'ils demandent d'intégrer un <b>groupe privé Facebook</b>.</p>
        <p>Mais j'ai voulu en plus de l'extension pour pouvoir centraliser ces données grâce à un <b>Dashboard</b>, créé avec <b>ReactJS</b>.</p>    
        <p>J'ai construit mon backend grâce aux cloud functions de <b>Firebase</b> et stocké les données sur le <b>Firestore</b></p>
        <p>Conscient que <b>React</b> n'est pas très <b>SEO Friendly</b> j'ai aussi commencé un « site vitrine » avec <b>NextJS</b> pour présenter mon extension ainsi que le dashboard.</p>
        <p>Le code sur Github est actuellement en privé, car je ne comptais pas le mettre en public donc je ferais une mise à jour prochainement pour supprimer les données sensibles.</p>
        <p>Après avoir passé du temps à développer ce projet j'avais comme idée de créer mon premier SaaS, mais je me suis rendu compte qu'au niveau RGPD ce n'était pas faisable donc j'ai peu à peu abandonné ce projet</p>
        <p>Il n'y a pas de version en production pour l'extension ni pour le dashboard</p>
        `,
        theme: "ReactJS, NodeJS, Firebase, Chrome Extension, NextJS",
        technology: [
            {
                name: "ThreeJS",
                color: "#fff",
            },
            {
                name: "Javascript",
                color: "#fff",
            },
        ],
        logo: process.env.PUBLIC_URL + "/logo_project/groupbook_logo.jpg",
        image: null,
        video: "swYdCa4BALI",
        url: null,
        urlGithub: null,
    },
];
