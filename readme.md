MyBotAPI Es un API para obtener informacion de la plataforma https://portalmybot.com/

![PortalMyBot](https://portalmybot.com/assets/img/logo/portal-logo.png)

# MyBotApi
> ¿Que es? 
- MyBotAPI Es un API para obtener informacion de la plataforma [PortalMyBot](https://portalmybot.com/)

> Aviso

* Todas las funciones son asincronas.
* No usa ningun API Oficial


> Usos

# .getBot(ID);
```js
const MyBotApi = require('mybotapi');

(async () => {
    const bot = await MyBotApi.getBot('746581603844751460');
    console.log(bot);
    
    /* 
    
    Resultado:
    {
        id: '746581603844751460',
        username: 'YN9',
        shortDescription: 'El Mejor bot de Antiraid y Moderación de TODO Discord',
        description: 'Mucho texto',
        avatar: 'https://cdn.discordapp.com/avatars/746581603844751460/2f8618e686084657028cc2ce541c3621.png',
        prefix: 'y?',
        category: 'Administracion',
        library: 'discord.js',
        invite: 'https://discord.com/oauth2/authorize?client_id=746581603844751460&scope=bot&permissions=8',
        discord: 'https://discord.gg/DeK9s4SgME',
        web: 'https://cossio.mx/',
        author: {
          id: '706610373368741889',
          avatar: 'https://cdn.discordapp.com/avatars/706610373368741889/d76c8584e5bdcd5ba58b25fe48459272.png',
          tag: 'IkerC#2898',
          info: 'Me gustan los tacos de lengua, esto no es realmente util ni nada pero pues me gustan los tacos de lengua',
          bots: [ [Object], [Object] ]
        }
      }
    */
})
```

# .searchBot(String);
```js
(async () => {
    const bot = await MyBotApi.searchBot('746581603844751460');
    console.log(bot);
    
    /*
    Resultado: 
    [
        {
          name: 'Abstract Bot',
          description: 'es un bot con muchas funciones y divercion, moderación, etc ',
          category: 'Administracion',
          url: 'https://portalmybot.com/mybotlist/bot/663507899967995914',
          id: '663507899967995914'
        },
        {
          name: 'Affaibli',
          description: 'un Bot variado para Discord, moderación, diversión, interacción, música.',
          category: 'Anime',
          url: 'https://portalmybot.com/mybotlist/bot/703509135743778877',
          id: '703509135743778877'
        },
        {
          name: 'Andrómeda',
          description: 'Un bot multiFunciones Para la comunidad hispanohablante con variedad de comandos de diversión, moderación &amp; configuración! Andromeda ',
          category: 'Administracion',
          url: 'https://portalmybot.com/mybotlist/bot/695009337898172476',
          id: '695009337898172476'
        },
        {
          name: 'Antonii',
          description: 'Un Bot de moderación, utilidad y entretenimiento',
          category: 'Utilidad',
          url: 'https://portalmybot.com/mybotlist/bot/779188757173370912',
          id: '779188757173370912'
        },
        {
          name: 'Aranak ♦',
          description: 'Bot multiusos [Moderación - Acción - Diversión - etc]',
          category: 'Otros',
          url: 'https://portalmybot.com/mybotlist/bot/781504168052785193',
          id: '781504168052785193'
        },
        {
          name: 'AthaBot',
          description: 'Un bot de shitpost, economia y un poco de moderacion',
          category: 'Social',
          url: 'https://portalmybot.com/mybotlist/bot/588883241352560650',
          id: '588883241352560650'
        },
        {
          name: 'Ayato',
          description: 'Un bot Multifuncion - Mod - Entretenimiento - Bienvenidas y Despedidas - Interacciones - automod',
          category: 'Juegos',
          url: 'https://portalmybot.com/mybotlist/bot/760252449209712700',
          id: '760252449209712700'
        },
        {
          name: '⚡Trueno⚡',
          description: 'Hola, Trueno Es Un Bot Principalmente Dedicado A Mejorar La Protección Y Moderación De Todos Los Servidores De Discord Contiene 31 Comandos (Algunos Solo Yo Los Puedo Usar) Y Trae Diferentes Secciones En Su Comando De Ayuda Las Cuales Son: Configuración, Moderación , Mini juegos Y Interacción.',
          category: 'Administracion',
          url: 'https://portalmybot.com/mybotlist/bot/767217525833859093',
          id: '767217525833859093'
        },
        {
          name: 'Blint Segurity',
          description: 'Un bot de moderacion, Logs para que tu server este en orden',
          category: 'Moderacion',
          url: 'https://portalmybot.com/mybotlist/bot/786300614598328330',
          id: '786300614598328330'
        },
        {
          name: 'Blitz',
          description: 'Es un BOT que te funcionara para Moderación, Diversión, Usuarios es multi uso y trae muchas opciones para servidores Rewards y para mas.',
          category: 'Administracion',
          url: 'https://portalmybot.com/mybotlist/bot/835033195787059200',
          id: '835033195787059200'
        },
        {
          name: 'Bot sin nada que hacer',
          description: 'Bot de Discord con múltiples propósitos, generalmente para entretener y para moderar',
          category: 'Moderacion',
          url: 'https://portalmybot.com/mybotlist/bot/794330629747638312',
          id: '794330629747638312'
        },
        {
          name: 'Carlos',
          description: 'Bot en desarrollo para Automoderación / Entretenimiento / etc',
          category: 'Utilidad',
          url: 'https://portalmybot.com/mybotlist/bot/854207611351990282',
          id: '854207611351990282'
        },
        {
          name: 'Celest',
          description: 'Bot multitarea capaz de hacer acciones de moderación, administración, economía y mucho más...',
          category: 'Otros',
          url: 'https://portalmybot.com/mybotlist/bot/770019112876638250',
          id: '770019112876638250'
        },
        {
          name: 'Chika',
          description: 'Chika es una bot multipropósito totalmente en español, con múltiples comandos de diversión, moderación, roleplay, utilidad y más.',
          category: 'Roleplay',
          url: 'https://portalmybot.com/mybotlist/bot/723745070573944902',
          id: '723745070573944902'
        },
        {
          name: 'Chill House',
          description: 'Bot Multilenguage de moderacion y divercion para tu servidor.',
          category: 'Moderacion',
          url: 'https://portalmybot.com/mybotlist/bot/407276800322830336',
          id: '407276800322830336'
        },
        {
          name: 'Clytho',
          description: 'Clytho Bot | Music | Fun | Information | Utility | Minecraft | Moderation | Anime',
          category: 'Administracion',
          url: 'https://portalmybot.com/mybotlist/bot/835503779641294938',
          id: '835503779641294938'
        },
        {
          name: 'DarckCloud',
          description: 'A multipurpose discord bot that is designed in, moderation and Utility to servers and users',
          category: 'Moderacion',
          url: 'https://portalmybot.com/mybotlist/bot/806734279517667338',
          id: '806734279517667338'
        },
        {
          name: 'DarkSBot',
          description: 'DarkSBot es un bot con multiples funciones de moderacion/diversion/usuarios/administracion etc..., DarkSBot con un total de 89 comandos',
          category: 'Administracion',
          url: 'https://portalmybot.com/mybotlist/bot/620444174189068329',
          id: '620444174189068329'
        },
        {
          name: 'Dino bot',
          description: 'Bot multifuncional 24/7 mayormente de moderacion',
          category: 'Moderacion',
          url: 'https://portalmybot.com/mybotlist/bot/819640269053755434',
          id: '819640269053755434'
        },
        {
          name: 'Discity',
          description: 'Un bot de diversos comandos para tu server, tenemos de diversion, moderacion, utilidad, juegos, tickets un poco de todo.',
          category: 'Utilidad',
          url: 'https://portalmybot.com/mybotlist/bot/812094860835946496',
          id: '812094860835946496'
        }
      ]
    */
});
```

# .MyBotProfile(ID);
```js
( async () => {
    const user = await MyBotApi.MyBotProfile('iker')
    console.log(user);
    
    /*
    Resultado:
        {
        id: '706610373368741889',
        username: 'IkerC',
        discriminator: '2898',
        tag: 'IkerC#2898',
        level: '18',
        points: '540',
        followers: '7',
        achievements: [
          {
            name: ' k3vfollower',
            id: '148',
            url: 'https://portalmybot.com/logro/148',
            icon: 'https://portalmybot.com/assets/badges/v1/badge_148.png'
          },
          {
            name: ' Que capo',
            id: '145',
            url: 'https://portalmybot.com/logro/145',
            icon: 'https://portalmybot.com/assets/badges/v1/badge_145.png'
          },
          {
            name: ' Dashboard v1',
            id: '144',
            url: 'https://portalmybot.com/logro/144',
            icon: 'https://portalmybot.com/assets/badges/v1/badge_144.png'
          },
          {
            name: ' Mensaje positivo',
            id: '141',
            url: 'https://portalmybot.com/logro/141',
            icon: 'https://portalmybot.com/assets/badges/v1/badge_141.png'
          },
          {
            name: ' Bot en MyBOT List',
            id: '139',
            url: 'https://portalmybot.com/logro/139',
            icon: 'https://portalmybot.com/assets/badges/v1/badge_139.png'
          },
          {
            name: ' 10 Codigos',
            id: '120',
            url: 'https://portalmybot.com/logro/120',
            icon: 'https://portalmybot.com/assets/badges/v1/badge_120.png'
          },
          {
            name: ' 5 Codigos',
            id: '119',
            url: 'https://portalmybot.com/logro/119',
            icon: 'https://portalmybot.com/assets/badges/v1/badge_119.png'
          },
          {
            name: ' 200 Vistas',
            id: '117',
            url: 'https://portalmybot.com/logro/117',
            icon: 'https://portalmybot.com/assets/badges/v1/badge_117.png'
          },
          {
            name: ' 100 Vistas',
            id: '116',
            url: 'https://portalmybot.com/logro/116',
            icon: 'https://portalmybot.com/assets/badges/v1/badge_116.png'
          },
          {
            name: ' 50 Vistas',
            id: '115',
            url: 'https://portalmybot.com/logro/115',
            icon: 'https://portalmybot.com/assets/badges/v1/badge_115.png'
          },
          {
            name: ' 5 Me gustas',
            id: '111',
            url: 'https://portalmybot.com/logro/111',
            icon: 'https://portalmybot.com/assets/badges/v1/badge_111.png'
          },
          {
            name: ' Explorador de Comunidades',
            id: '94',
            url: 'https://portalmybot.com/logro/94',
            icon: 'https://portalmybot.com/assets/badges/v1/badge_94.png'
          },
          {
            name: ' Rol Normal',
            id: '83',
            url: 'https://portalmybot.com/logro/83',
            icon: 'https://portalmybot.com/assets/badges/v1/badge_83.png'
          },
          {
            name: ' Rol Web Developer',
            id: '81',
            url: 'https://portalmybot.com/logro/81',
            icon: 'https://portalmybot.com/assets/badges/v1/badge_81.png'
          },
          {
            name: ' Rol Bot Developer',
            id: '79',
            url: 'https://portalmybot.com/logro/79',
            icon: 'https://portalmybot.com/assets/badges/v1/badge_79.png'
          },
          {
            name: ' Nivel 10',
            id: '70',
            url: 'https://portalmybot.com/logro/70',
            icon: 'https://portalmybot.com/assets/badges/v1/badge_70.png'
          },
          {
            name: ' Nivel 5',
            id: '69',
            url: 'https://portalmybot.com/logro/69',
            icon: 'https://portalmybot.com/assets/badges/v1/badge_69.png'
          },
          {
            name: ' Herramienta NPM para Bots Discord',
            id: '67',
            url: 'https://portalmybot.com/logro/67',
            icon: 'https://portalmybot.com/assets/badges/v1/badge_67.png'
          },
          {
            name: ' Sitio Web para Server o Bot Discord',
            id: '66',
            url: 'https://portalmybot.com/logro/66',
            icon: 'https://portalmybot.com/assets/badges/v1/badge_66.png'
          },
          {
            name: ' Seguidor en Twitch',
            id: '61',
            url: 'https://portalmybot.com/logro/61',
            icon: 'https://portalmybot.com/assets/badges/v1/badge_61.png'
          },
          {
            name: ' Seguidor en Twitter',
            id: '60',
            url: 'https://portalmybot.com/logro/60',
            icon: 'https://portalmybot.com/assets/badges/v1/badge_60.png'
          },
          {
            name: ' Suscriptor en Youtube',
            id: '58',
            url: 'https://portalmybot.com/logro/58',
            icon: 'https://portalmybot.com/assets/badges/v1/badge_58.png'
          },
          {
            name: ' 10 Logros',
            id: '53',
            url: 'https://portalmybot.com/logro/53',
            icon: 'https://portalmybot.com/assets/badges/v1/badge_53.png'
          },
          {
            name: ' 100 Puntos',
            id: '41',
            url: 'https://portalmybot.com/logro/41',
            icon: 'https://portalmybot.com/assets/badges/v1/badge_41.png'
          },
          {
            name: ' 50 Puntos',
            id: '40',
            url: 'https://portalmybot.com/logro/40',
            icon: 'https://portalmybot.com/assets/badges/v1/badge_40.png'
          },
          {
            name: ' 10 Puntos',
            id: '39',
            url: 'https://portalmybot.com/logro/39',
            icon: 'https://portalmybot.com/assets/badges/v1/badge_39.png'
          },
          {
            name: ' +100 Servers',
            id: '20',
            url: 'https://portalmybot.com/logro/20',
            icon: 'https://portalmybot.com/assets/badges/v1/badge_20.png'
          }
        ],
        codes: [
          {
            name: 'Ejemplos usando los nuevos botones de discord',
            library: 'Discord.js',
            category: 'Utilidad',
            id: 'MAPKh6sZEW',
            url: 'https://portalmybot.com/code/MAPKh6sZEW',
            description: null
          },
          {
            name: 'Eval de python (nodejs y python)',
            library: 'Discord.js',
            category: 'Utilidad',
            id: 'fUPvqcspHR',
            url: 'https://portalmybot.com/code/fUPvqcspHR',
            description: null
          },
          {
            name: 'Encuesta (Hasta 15 opciones)',
            library: 'Discord.js',
            category: 'Utilidad',
            id: 'oAHOrE1z73',
            url: 'https://portalmybot.com/code/oAHOrE1z73',
            description: 'Crear una simple encuesta de hasta 15 opciones'
          },
          {
            name: 'Usuario de clash of clans',
            library: 'Discord.js',
            category: 'Juegos',
            id: 'MHDNeLY2Ta',
            url: 'https://portalmybot.com/code/MHDNeLY2Ta',
            description: 'Un comando para obtener informacion de un jugador de clash of clans (coc)'
          },
          {
            name: 'Bot - Dashboard (Parte 4:Frontend)',
            library: 'Otros',
            category: 'Dashboard',
            id: 'JvHMVDWKuR',
            url: 'https://portalmybot.com/code/JvHMVDWKuR',
            description: null
          },
          {
            name: 'Bot - Dashboard (Parte 3: Backend)',
            library: 'Otros',
            category: 'Dashboard',
            id: 'qMbLrlaGiB',
            url: 'https://portalmybot.com/code/qMbLrlaGiB',
            description: null
          },
          {
            name: 'Bot - Dashboard (Parte 2:Backend)',
            library: 'Otros',
            category: 'Dashboard',
            id: '8f-OL2FvUk',
            url: 'https://portalmybot.com/code/8f-OL2FvUk',
            description: null
          },
          {
            name: 'Bot - Dashboard (Parte 1: Backend)',
            library: 'Otros',
            category: 'Dashboard',
            id: 'lrD2YJ3f09',
            url: 'https://portalmybot.com/code/lrD2YJ3f09',
            description: null
          },
          {
            name: 'Mostrar votos de top.gg usando replit',
            library: 'Otros',
            category: 'Otros',
            id: 'N3rwIYxHkh',
            url: 'https://portalmybot.com/code/N3rwIYxHkh',
            description: 'Ver quien ha votado por nuestro bot usando replit.com'
          },
          {
            name: 'Detectar mayusculas || mongoose',
            library: 'Discord.js',
            category: 'Moderacion',
            id: 'uNH5O-e4pq',
            url: 'https://portalmybot.com/code/uNH5O-e4pq',
            description: null
          },
          {
            name: 'Ignorechannels Mongoose',
            library: 'Discord.js',
            category: 'Administracion',
            id: 'B48wDxmLb1',
            url: 'https://portalmybot.com/code/B48wDxmLb1',
            description: 'Un comando de ignorechannel... Solo eso, Ignorar canales, Es lo unico que hace... Ignorar canales'
          }
        ]
      }
    */
});
```

# .MyBotListProfile(ID);
```js
(async () => {
    const perfil = await MyBotApi.getBot('746581603844751460');
    console.log(perfil);

    /* 
        Resultado:
        {
        id: '706610373368741889',
        avatar: 'https://cdn.discordapp.com/avatars/706610373368741889/d76c8584e5bdcd5ba58b25fe48459272.png',
        tag: 'IkerC#2898',
        info: 'Me gustan los tacos de lengua, esto no es realmente util ni nada pero pues me gustan los tacos de lengua',
        bots: [
          {
            name: 'YN9',
            description: 'El Mejor bot de Antiraid y Moderación de TODO Discord',
            tag: 'Administracion',
            url: 'https://portalmybot.com/mybotlist/bot/746581603844751460'
          },
          {
            name: 'Supercell bot',
            description: 'Supercellbot, Un bot en español acerca de supercell!',
            tag: 'Juegos',
            url: 'https://portalmybot.com/mybotlist/bot/830995862506438738'
          }
        ]
      }
    */
});
```