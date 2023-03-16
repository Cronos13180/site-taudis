const citations = [
    "Si quelqu'un lève son index pour te juger! Lève ton majeur pour le remercier....",
    "J'ai confondu patience! Et perte de temps...",
    "Le temps ne te fait pas perdre tes amis, il te fait comprendre qui sont les vrais!",
    "Une erreur répétée plusieurs fois est une decision....",
    "Certaines personnes sont comme les pigeons! Tu les aides à voler et une fois en l'air... ils te chient dessus!",    
    "TOUT LE MONDE EST CON! Bin oui! Essaye de crier Espece de con dans la rue !... Tout le monde se retournera ",
    "Mieux vaut fermer son bec et paraître stupide! Que de l'ouvrir et le prouver",
    "Fais ce que tu penses être bien! On te critiquera de toute façon...",
    "Si tu n'es pas heureux seul, tu ne seras pas heureux à deux.... Le bonheur provient de l'intérieur,pas es autres!",
    "Choisir avec qui parler est important! Comprendre avec qui garder le silence l'est encore plus!",
    "Les gens bourrés... Les enfants ET Les leggings... Disent toujours la vérité!",
    "Avant de briser un coeur, regarde si tu n'es pas à l'interieur...",
    "Aujourd'hui nous sommes encore plus gênés de tousser que de péter!",
    "Tu crois que la vie est plus belle aprés la mort!? Ca dépend... la mort de qui ?!?",
    "Quand on dit que l'argent ne fait pas le bonheur... nous parlons de quelle somme exactement?!",
    "Drôle d'époque... où des ordinateurs demandent a des humains de prouver qu'ils ne sont pas des robots...",
    "Sans vouloir me vanter, je me lavais les mains avant que ça soit tendance....",
    "Je ne ferme déja pas ma bouche quand j'ai tord.... Alors imagine quand j'ai raison!",
    "Pire que les mauvaises personnes... Il y a ceux qui font semblant d'être bon!",
    "Si tu veux connaître quelqu'un! N'écoute ps ce qu'il dit... Regarde ce qu'il fait!",
    "Soyez vous même! Tous les autres sont déja pris....",
    "On a tous le droit dêtre un peu con! Mais certains abusent du privilège....",
    "Mon secret beauté? S'asseoir à côté d'une moche!!!.",
    "Moi la seule rentrée que j'aime... c'est la rentrée d'argent!",
    "Celui qui n'a pas voulu quand il pouvait.... Ne pourra pas quand il voudra!",
    "JAMAIS Je ne pourrai abandonner ma meilleure amie... Ce taudis en sait trop sur moi!",
    "Ne pas confondre Ivre de Bonheur et Ivre de BONNE HEURE!",
    "J'inspire le positif ! J'expire le négatif!...",
    "Lorsqu'une personne te dit qu'une chose est impossible à faire... Rapelle toi qu'elle te parle de ses propres limites...",
    "La douleur est temporaire! L'abandon est définitif!",
    "Sois une voix.... Pas un écho",
    "La personne dont j'ai le plus besoin! M'a appris que je n'ai besoin de personne...",
    "Pour les mensonges il faut de la mémoire... Pour la vérité il faut des couilles!!!",
    "Rien de mieux que la discrétion. Ils ne peuvent pas détruire ce qu'ils ne savent pas!",
    "C'est épuisant de devoir prendre des pincettes avec les gens... Je vais plutôt prendre une pelle!!",
    "Les meilleures choses de la vie sont GRATUITES... Les câlins, les bisous, la famille, l'amour, les sourires...",
    "Mon secret pour avoir le ventre plat?! Je m'allonge ....",
    "Aujourd'hui je suis auss efficace qu'un doigt d'honneur dans une moufle!",
    "C'est à force d'être trop gentil que les autres finissent par vous rendre un jour méchant!",
    "Pensez comme un adulte, Vivez comme un jeune, Conseillez comme un ancien, Rêvez comme un enfant",    
  ];
  
  function getCitationDuJour() {
    const now = new Date();
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const indexCitation = dayOfYear % citations.length;
    return citations[indexCitation];
  }
  
  function afficherCitationDuJour() {
    const citationElement = document.getElementById("citation-text");
    citationElement.textContent = getCitationDuJour();
  }
  
  // Afficher la citation du jour au chargement de la page
  afficherCitationDuJour();
  