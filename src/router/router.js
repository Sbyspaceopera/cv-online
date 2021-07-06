import { createWebHistory, createRouter } from "vue-router";
import SkillComponent from "./../components/main/skills/SkillComponent.vue";
import SoftskillComponent from "./../components/main/skills/SoftskillComponent.vue";
import Home from "./../components/main/skills/Home.vue";
import PageNotFound from './../components/PageNotFound.vue'

const routes = [
  {
    path:"/:pathMatch(.*)",
    name:"PageNotFound",
    component: PageNotFound
  },
  {
    path: "/",
    name:"Home",
    component: Home,
  },
  {
    path: "/JavaScript",
    name: "JavaScript",
    component: SkillComponent,
    props: {
      skill: {
        name: "JavaScript",
        description: `<p>Le langage que je maîtrise le plus et qui m'est le plus utile. Voilà deux ans que j'ai commencé avec celui-ci et j'arrive désormais à me débrouiller avec la plupart du code auquel je dois me confronter.</p>
    <p>Je suis à jour sur ce langage et prêt à l'emploi, y compris en TypeScript. Mes seules faiblesses seraient le CommonJs, utiliser notamment dans NodeJs, et le RxJs sur lesquels je n'ai pas encore pris le temps de me pencher sérieusement.</p>
    <p>J'ai également eut une première exérience avec Socket.io durant laquelle j'ai put me familiarisé avec les sockets. Outre cela, je me sens largement dans la capacité d'attaquer n'importe quel projet écrit en JavaScript.</p>
    <p>Particulièrement friands des conceptes transplateformes et des nouvelles possibilités que ce langage offre. Je tends à évoluer dans l'avenir vers des outils tel React Native, Electron ainsi que Three.Js et tout ce qui peut toucher à l'animation et au rendu 3D.</p>
    <p>Au niveau du code pur, j'essaye de rester dans le clean code autant que possible mais les deadlines me semblent prioritaires sur ces concepts.</p>`,
      },
      level: 80,
    },
  },
  {
    path: "/React",
    name: "React",
    component: SkillComponent,
    props: {
      skill: {
        name: "React",
        description: `<p>React est le framework sur lequel j'ai le plus de compétences. D'abord appris en formation, j'ai très vite accroché et ai consolider mon expertise sur Udemy. Redux, les cycles de vie, les props, les states, le contexte et les hooks, voilà des concepts avec lesquels je suis à l'aise. Je pense avoir atteint une assez bonne compréhension du fonctionnement de cette librairie, bien que certaines méthodes, très peu utilisées, me soient encore inconnues.</p>
    <p>Durant mon dernier projet en ReactJs j'ai eu l'occasion également d'apprendre Material UI. Ce fut ma seconde expérience avec un framework CSS, cette fois-ci penser pour ReactJs, et j'avoue avoir été assez déçu bien que cela ne me dérange pas de travailler avec cet outil.</p>
    <p>Concernant React Native, je suis en train de me former à son sujet sur Udemy et mes aisances avec RectJs me facilite la tache. Sur la fin de mon apprentissage, mon projet projet utilisera React Native afin d'ancrer comme il faut ses particularités et se mise en production.</p>
    <p>Vous pourrez trouver mon dernier projet ReactJs, Dùrastats, sur ma page Linkedin, en haut à droite de l'écran. Celui-ci n'est pas aussi excentrique visuellement que ce site mais se devait de respecter la charte du forum pour lequel il a traité. Ce fut surtout un défit logique quant à l'implémentation des statistiques et conditions d'un RPG.</p>`,
      },
      level: 85,
    },
  },
  {
    path: "/VueJs",
    name: "VueJs",
    component: SkillComponent,
    props: {
      skill: {
        name: "VueJs",
        description: `<p>Ce site a été créé avec VueJs. C'est le dernier framework sur lequel je me suis penché à l'heure où j'écris ces lignes. L'apprentissage fut aisé de part ses ressemblances avec ReactJs mais j'ai bien moins d'expérience avec VueJs. J'ai assez aimé travailler avec cet outil, de part sa grande lisibilité.</p>
    <p>La formation Udemy que j'ai suivit concernant ce framework n'était pas très poussé, environ 7 heures, mais m'a permit d'être rapidement autonome sans parler de la facilité d'utilisation de VueJs. Celle-ci était basée sur Vue2 mais j'ai pris à coeur d'utiliser Vue3 pour mon projet et ma formation afin d'être à jour sur les nouveautés.</p>
    <p>Travailler avec VueJs ne me pose donc aucun problème, je suis même curieux d'aller plus loin avec ce framework. Curieux également de voir ce que leur version mobile native donnera à l'avenir.</p>`,
      },
      level: 65,
    },
  },
  {
    path: "/CSS3",
    name: "CSS3",
    component: SkillComponent,
    props: {
      skill: {
        name: "CSS3",
        description: `<p>Le CSS est un incontournable, bien souvent sous-estimer. Le CSS3 me permet de faire à peu près ce que je désire à l'heure actuelle. Il me manque principalement des notions de 3D ou de géométrie avancé pour le gérer plus facilement. Je pense avoir un assez bon niveau dans le domaine, et j'aime à pratiquer cette partie du développement que je trouve très satisfaisante.</p>
    <p>Le layout m'est assez facile, ainsi que le responsive design à l'aide de flexbox, grid et mediaqueries. Je suis également à l'aise avec l'animation et ai récemment ouvert mes possibilités via l'animation du SVG. Travaillant de concert avec un éditeur SVG, construire des formes et les animées est dans mes compétences.</p>
    <p>Je rajouterais également que la logique en cascade, la priorité des sélecteurs et les pseudo-éléments me sont acquis.</p>`,
      },
      level: 80,
    },
  },
  {
    path: "/HTML5",
    name: "HTML5",
    component: SkillComponent,
    props: {
      skill: {
        name: "HTML5",
        description: `<p>Le langage HTML me parait tout autant sous-estimer que le CSS. Il offre aujourd'hui un grand nombre de possibilités et reste le principal atout en terme de SEO. Pour ma part je me sens à l'aise avec cette technologie et suis un adepte du moins de "div" possibles à des fins de lisibilité principalement.</p>
    <p>Entre autres, j'aime beaucoup les possibilités de partage entre sites qu'offre cette technologie, ainsi que les solutions d'optimisation native qu'elle offre au travers des médias à source multiple.</p>`,
      },
      level: 80,
    },
  },
  {
    path: "/Sass",
    name: "Sass",
    component: SkillComponent,
    props: {
      skill: {
        name: "Sass",
        description: `<p>L'utilité du sucre syntaxique qu'offre le Sass et le Scss saute tout de suite aux yeux. Dans un esprit DRY et KISS, le Scss m'a grandement facilité la vie sur l'un de mes projets, et nul doutes que je l'utiliserais encore. Je manque un peu de pratique, mais la facilité d'utilisation de ces technologies est grande et je me suis tout de suite senti à l'aise avec ces concepts.</p>`,
      },
      level: 80,
    },
  },
  {
    path: "/Git",
    name: "Git",
    component: SkillComponent,
    props: {
      skill: {
        name: "Git",
        description: `<p>J'ai suivi une formation Git sur Udemy, voyant bien que cet outil est indispensable tant pour gérer son code que pour travailler en équipe.</p>
    <p>Je me débrouille avec les concepts de base et le système de branchs. Commit, merge, stashes, pull, push, SHA-1, readme.txt, .gitignore... Mais serait sans doute la mauvaise personne pour gérer l'entiéreté du Git d'un projet de part mon manque d'expérience.</p>`,
      },
      level: 65,
    },
  },
  {
    path: "/NPM",
    name: "NPM",
    component: SkillComponent,
    props: {
      skill: {
        name: "NPM",
        description: `<p>NPM est l'outil de base avec lequel je travaille actuellement. Je l'utilisait avant sans trop le maitriser mais me suis former quant à sa configuration et ses lignes de commande.</p>
    <p>Ainsi, l'installation de dépendances et le contrôle de leur version me sont aisés bien que j'ai encore à apprendre sur le sujet.</p>`,
      },
      level: 65,
    },
  },
  {
    path: "/Babel",
    name: "Babel",
    component: SkillComponent,
    props: {
      skill: {
        name: "Babel",
        description: `<p>La configuration de Babel m'est connu malgré un manque de pratique dut au fait qu'on ne s'en occupe qu'une fois par projet. Je différencie bien la différence entre le babel.config.json et le .babelrc.json. Malgré cela, je suis loin de connaître sur le bout des doigts chaque ligne de configuration et possibilités qu'offre cet outil.</p>
    <p>L'utilisation de Babel me semble aujourd'hui indispensable afin de profiter pleinement des nouvelles possibilités qu'offre le JavaScript.</p>`,
      },
      level: 40,
    },
  },
  {
    path: "/Webpack",
    name: "Webpack",
    component: SkillComponent,
    props: {
      skill: {
        name: "Webpack",
        description: `<p>Mon niveau en webpack est assez faible, bien que je comprenne son fonctionnement. Je n'ai pas souvent eu l'occasion de pratiquer mais suis actuellement une formation Udemy concernant le sujet.</p>
    <p>Je peux néanmoins comprendre une configuration webpack et utiliser des loaders.</p>`,
      },
      level: 25,
    },
  },
  {
    path: "/DesignTools",
    name: "DesignTools",
    component: SkillComponent,
    props: {
      skill: {
        name: "Design tools",
        description: `<p>De part ma formation artistique de base, je me débrouille un peu sur Photoshop mais suis actuellement plus à l'aise sur Figma ou Illustrator qui me permettent de travailler du SVG.</p>
    <p>Bien que n'étant pas designer, j'ai quelques notions de bonnes pratiques qui peuvent aider au cas où. J'ai également la possibilité de créer du contenu vidéo ou visuels pour des réseaux sociaux via Canva et Clipchamp.</p>
    <p>Pour moi, les designs actuels se ressemblent un peu trop tous et je trouve dommage qu'il n'y ait pas plus de sites qui osent l'originalité bien que cela demande plus de travail et un certain niveau de risque.</p>`,
      },
      level: 50,
    },
  },
  {
    path: "/Jest",
    name: "Jest",
    component: SkillComponent,
    props: {
      skill: {
        name: "Jest",
        description: `<p>J'ai suivi quelques court vis-à-vis du testing, notamment sur les test unitaires et d'intégrations en utilisant Jest et Enzyme.</p>
    <p>Sans avoir une grande expérience en la matière, je me sens capable de rédiger des tests unitaires et suis prêt à aller plus loin en ce sens, même si je dois bien avouer que le sujet n'est pas des plus attractifs.</p>`,
      },
      level: 50,
    },
  },
  {
    path: "/NodeJs",
    name: "NodeJs",
    component: SkillComponent,
    props: {
      skill: {
        name: "NodeJs",
        description: `<p>J'ai eu l'occasion de pratiquer du NodeJs avec le framework Express. Je sais développé une API et utilisé des ORM comme Sequelize et Mongoose. Cependant, j'ai encore du mal avec le CommonJs.</p>
    <p>Récemment, j'ai pu aussi utilisé le CMS headless Strapi qui est très utile pour lancer une API REST ou graphQl facilement.</p>
    <p>Bien que le back-end ne soit pas ma spécialité, je peux aisément me débrouiller au niveau de mes projets personnels si il le faut. Par contre, je me vois mal gérer la sécurité des données en entreprise en l'état actuel de mes connaissances.</p>`,
      },
      level: 35,
    },
  },
  {
    path: "/Python",
    name: "Python",
    component: SkillComponent,
    props: {
      skill: {
        name: "Python",
        description: `<p>Durant ma formation front-end, nous avons étrangement eu un cours de Python orienté objet. J'avais déjà eu quelques notions de ce langage, car ce fut le premier à m'introduire à l'algorithmie, et j'ai pu là développer la POO le concernant.</p>
    <p>Cependant, je n'ai jamais fait aucun projet en python et ne connaît aucun framework. Je n'aurais cependant rien contre l'apprentissage de ce langage et compte bien m'y mettre après avoir suffisamment exploré le front-end. Bien que mon dévolu puisse se porter sur Java.</p>`,
      },
      level: 25,
    },
  },
  {
    path: "/PHP",
    name: "PHP",
    component: SkillComponent,
    props: {
      skill: {
        name: "PHP",
        description: `<p>J'ai construit mon premier site dynamique en PHP. Ce ne fut pas une tâche aisée car j'ai dû faire sans frameworks, y compris pour la partie front-end. Celui-ci comprenait toute une partie admin afin de gérer le contenu, mais également un forum intégrer à une page pour laquelle je me suis tout de même servi de PHPBB3.</p>
    <p>Ce fut ma dernière expérience avec le PHP car je n'appréciais pas vraiment ce langage. J'ai préféré m'orienter directement vers le JavaScript et, ayant un peu touché au Java et au Python, je ne pense pas que j'y reviendrais si le contexte ne l'impose pas.</p>`,
      },
      level: 10,
    },
  },
  {
    path: "/AgileSCRUM",
    name: "AgileSCRUM",
    component: SoftskillComponent,
    props: {
      softskill: {
        name: "Agile SCRUM",
        description: `<p>J'ai eu l'occasion d'apprendre l'Agile SCRUM en formation, sa philosophie et ses techniques de travail.</p>
        <p>C'est une méthode de travail qui me convient bien et qui a l'avantage d'aider à la bonne communication dans une équipe.</p>
        <p>SCRUM Master, Product Owner, sprints, daily scrums, sont des termes avec lesquels je suis familier, ainsi que l'organisation autour de ces concepts.</p>`,
        icon: "group_48px.svg",
      },
    },
  },
  {
    path: "/Souriant",
    name: "Souriant",
    component: SoftskillComponent,
    props: {
      softskill: {
        name: "Souriant",
        description: `<p>Je suis quelqu'un de très souriant, et avec l'humour facile qui plus est. A part tôt le matin, je suis généralement toujours réceptif à une bonne blague.</p>
        <p>Malheureusement, je ne suis pas aussi bon comédien que je suis bon publique mais je vous laisserai juge de la qualité de mon humour</p>`,
        icon: "insert_emoticon_48px.svg",
      },
    },
  },
  {
    path: "/RPG",
    name: "RPG",
    component: SoftskillComponent,
    props: {
      softskill: {
        name: "Forum RPG",
        description: `<p>L'un de mes hobbies favoris est d'écrire sur un Forum RPG, Le Monde de Dùralas. Cela me permet d'échapper un peu du quotidien et de vivre de folles aventures au travers de mes personnages.</p>
        <p>L'un de mes projets, Dùrastats, est justement en rapport avec celui-ci. J'essaye de me rendre utile à la communauté à mon échelle et cela me permet de faire parler ma créativité.</p>
        <p>J'ai également eu une période de modération sur ce forum. Expérience qui m'a donné une première impression de la gestion d'un projet et d'un univers sur le long terme.</p>
        <p>Outre le forum, j'ai également participé à des RP plus classiques, autour d'une table, avec des dés. Le Donjon de Naheulbeuk fut par contre ma seule expérience.</p>`,
        icon: "feather.svg",
      },
    },
  },
  {
    path: "/JeuxVideos",
    name: "JeuxVideos",
    component: SoftskillComponent,
    props: {
      softskill: {
        name: "Jeux vidéos",
        description: `<p>Il m'arrive de faire une ou deux parties après le travail, ou avec des amis, mais je ne suis pas ce que l'on pourrait appeler un gamer.</p>
        <p>Mon style préféré est le jeu de stratégie et de gestion. J'aime à découvrir et expérimenter les diverses options et tactiques possibles.</p>
        <p>League of Legends, Total War, Dawn of War, Heroes of Might and Magic, Age of Wonders, sont des titres que j'apprécie particulièrement. Il m'arrive aussi de jouer à différents jeux mobiles dont j'aime m'inspirer des interfaces.</p>`,
        icon: "videogame_asset_48px.svg",
      },
    },
  },
  {
    path: "/Musique",
    name: "Musique",
    component: SoftskillComponent,
    props: {
      softskill: {
        name: "Musique",
        description: `<p>J'adore la musique ! Il n'y a pas une journée où je n'en écoute pas. Cela me permet à la fois de me détendre et de me concentrer.</p>
        <p>Au niveau des styles, j'écoute de tout ! De l'opéra, du rap français, du blues, en passant par la J-pop et des musiques plus anciennes. Seuls le hardcore metal et la techno n'ont pas trouvés place dans mes oreilles.</p>`,
        icon: "headset_48px.svg",
      },
    },
  },
  {
    path: "/Cinema",
    name: "Cinema",
    component: SoftskillComponent,
    props: {
      softskill: {
        name: "Cinéma",
        description: `<p>J'aime beaucoup regarder des films et des séries, bien que le temps me manque souvent.</p>
        <p>La science-fiction et la fantasy sont ce que je préfère dans le domaine. Je suis d'ailleurs assez fan des différentes séries Star Trek. Tous les genres me vont cependant, bien que je ne sois pas grand fan du cinéma français.</p>
        <p>Quelques exemples de séries : The Good Place, Dirk Gently, West World, Altered Carbon, Man Seeking Woman,...</p>`,
        icon: "local_movies_48px.svg",
      },
    },
  },
  {
    path: "/Sciences",
    name: "Sciences",
    component: SoftskillComponent,
    props: {
      softskill: {
        name: "Vulgarisation scientifique",
        description: `<p>J'ai toujours été curieux des réalités de ce monde et de son fonctionnement. Par la vulgarisation scientifique qu'offre maintenant bon nombre de médias, j'ai les moyens de les découvrir et ne m'en prive pas.</p>
        <p>Socio-psychologie, astronomie, zététique, philosophie, histoire, physique sont des sujets qui me plaisent particulièrement. Je passe une bonne partie de mon temps libre à essayer d'en apprendre plus sur l'un ou l'autre de ces sujets en plus de la programmation.</p>`,
        icon: "school_48px.svg",
      },
    },
  },
  {
    path: "/Curieux",
    name: "Curieux",
    component: SoftskillComponent,
    props: {
      softskill: {
        name: "Curieux",
        description: "Voici un test de description",
        icon: "help_48px.svg",
      },
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
