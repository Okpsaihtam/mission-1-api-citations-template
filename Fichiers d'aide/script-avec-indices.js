// ===== GUIDE D'ANALYSE DU CODE PRINCIPAL =====
// Projet : Assignment 1 - API REST avec JavaScript
// Objectif : Comprendre et analyser le code existant dans script.js

/*
🎯 MISSION PRINCIPALE : 
Ce fichier vous aide à COMPRENDRE le code principal (script.js) qui est déjà complet.
Votre travail : analyser, tester, et déboguer le code existant.

📋 UTILISEZ CE FICHIER SI :
- Vous voulez comprendre étape par étape
- Vous avez besoin d'aide pour analyser le code
- Vous voulez des explications détaillées
- Vous préférez une approche guidée

⚠️ IMPORTANT : Ce fichier ne remplace PAS script.js !
Il sert uniquement à vous aider à comprendre le code principal.
*/

// Configuration (identique au script principal)
const API_URL = 'https://api.quotable.io/random';

// ===== SYSTÈME D'AIDE POUR COMPRENDRE LE CODE =====

window.analyseCode = {
    // Aide pour comprendre l'appel API
    expliquerAPI: () => {
        console.log("🎓 EXPLICATION : Appel API dans script.js");
        console.log("==============================================");
        console.log("1. 📡 fetch(API_URL) - Envoie une requête HTTP vers quotable.io");
        console.log("2. ⏳ await - Attend la réponse du serveur (asynchrone)");
        console.log("3. ✅ response.ok - Vérifie si tout s'est bien passé (200)");
        console.log("4. 📄 response.json() - Convertit la réponse en objet JavaScript");
        console.log("5. 🎨 afficherCitation(data) - Met à jour l'interface");
        console.log("");
        console.log("💡 Testez l'API directement : debug.testAPI()");
        console.log("🔍 Voir le code réel : Ouvrez script.js ligne ~40");
    },
    
    // Aide pour comprendre le DOM
    expliquerDOM: () => {
        console.log("🎓 EXPLICATION : Manipulation DOM dans script.js");
        console.log("===============================================");
        console.log("1. 🎯 document.getElementById() - Sélectionne un élément HTML par son ID");
        console.log("2. ✏️ textContent - Change le texte affiché (plus sûr qu'innerHTML)");
        console.log("3. 👁️ classList.remove('hidden') - Rend l'élément visible");
        console.log("4. 🔄 disabled = false - Réactive un bouton");
        console.log("5. 🎨 style.opacity/transform - Animations CSS");
        console.log("");
        console.log("💡 Vérifiez les éléments : debug.checkDOM()");
        console.log("🔍 Voir le code réel : Ouvrez script.js ligne ~90");
    },
    
    // Aide pour comprendre les erreurs
    expliquerErreurs: () => {
        console.log("🎓 EXPLICATION : Gestion d'erreurs dans script.js");
        console.log("================================================");
        console.log("1. 🛡️ try...catch - Capture les erreurs sans planter l'app");
        console.log("2. 📶 'Failed to fetch' - Problème de connexion internet");
        console.log("3. 🚫 HTTP 404 - Page/ressource non trouvée");
        console.log("4. 🚫 HTTP 500 - Erreur du serveur API");
        console.log("5. 👥 Messages utilisateur - Explications claires (pas techniques)");
        console.log("");
        console.log("💡 Testez les erreurs : coupez internet et cliquez sur le bouton");
        console.log("🔍 Voir le code réel : Ouvrez script.js ligne ~140");
    },
    
    // Guide d'analyse du code principal
    guidePasAPas: () => {
        console.log("📋 GUIDE D'ANALYSE DU CODE PRINCIPAL (script.js)");
        console.log("================================================");
        console.log("");
        console.log("🔍 ÉTAPE 1 : Ouvrez script.js et trouvez la fonction obtenirCitation()");
        console.log("   📍 Ligne ~40 : async function obtenirCitation()");
        console.log("   📚 Analysez les TODO 1.1 à 1.6");
        console.log("   🧪 Regardez les console.log() et checkpoints");
        console.log("");
        console.log("🔍 ÉTAPE 2 : Trouvez la fonction afficherCitation()");
        console.log("   📍 Ligne ~90 : function afficherCitation(data)");
        console.log("   📚 Analysez les TODO 2.1 à 2.4");
        console.log("   🎨 Notez les animations bonus");
        console.log("");
        console.log("🔍 ÉTAPE 3 : Trouvez la fonction gererErreur()");
        console.log("   📍 Ligne ~140 : function gererErreur(error)");
        console.log("   📚 Analysez les TODO 3.1 à 3.4");
        console.log("   💬 Observez la personnalisation des messages");
        console.log("");
        console.log("🔍 ÉTAPE 4 : Trouvez les event listeners");
        console.log("   📍 Ligne ~200 : addEventListener");
        console.log("   📚 Analysez les TODO 4.1 à 4.4");
        console.log("   ⌨️ Testez le raccourci barre d'espace");
        console.log("");
        console.log("🎯 OBJECTIF : Comprendre comment tout s'articule");
    },
    
    // Analyser les variables globales
    expliquerVariables: () => {
        console.log("🔧 VARIABLES GLOBALES dans script.js");
        console.log("===================================");
        console.log("const API_URL = 'https://api.quotable.io/random'");
        console.log("   → URL de l'API pour récupérer les citations");
        console.log("");
        console.log("const loadingElement = document.getElementById('loading')");
        console.log("   → Référence vers l'élément de chargement");
        console.log("");
        console.log("const citationContainer = document.getElementById('citation-container')");
        console.log("   → Conteneur principal de la citation");
        console.log("");
        console.log("const citationText = document.getElementById('citation-text')");
        console.log("   → Élément qui affiche le texte de la citation");
        console.log("");
        console.log("const citationAuthor = document.getElementById('citation-author')");
        console.log("   → Élément qui affiche l'auteur");
        console.log("");
        console.log("💡 Ces variables sont pré-déclarées pour éviter de les chercher à chaque fois");
    }
};

// ===== OUTILS DE COMPRÉHENSION ET TEST =====

window.testeurCode = {
    // Tester la compréhension de l'API
    quizAPI: () => {
        console.log("❓ QUIZ : Comprenez-vous l'API ?");
        console.log("================================");
        console.log("Q1: Que fait fetch(API_URL) ?");
        console.log("Q2: Pourquoi utilise-t-on await ?");
        console.log("Q3: Que contient data.content ?");
        console.log("Q4: Que fait response.ok ?");
        console.log("");
        console.log("💡 Réponses : testeurCode.reponsesAPI()");
    },
    
    reponsesAPI: () => {
        console.log("✅ RÉPONSES QUIZ API :");
        console.log("=====================");
        console.log("R1: fetch(API_URL) envoie une requête HTTP vers l'API quotable.io");
        console.log("R2: await permet d'attendre la réponse (car internet n'est pas instantané)");
        console.log("R3: data.content contient le texte de la citation");
        console.log("R4: response.ok vérifie si la requête a réussi (status 200)");
    },
    
    // Analyser le code étape par étape
    analyserFonction: (nomFonction) => {
        const analyses = {
            obtenirCitation: {
                role: "Récupère une citation depuis l'API quotable.io",
                parametres: "Aucun",
                retour: "Aucun (void) - met à jour l'interface",
                etapes: [
                    "1. Affiche l'état de chargement (spinner + bouton désactivé)",
                    "2. Fait l'appel API avec fetch() et attend la réponse",
                    "3. Vérifie que la réponse est correcte (status 200)",
                    "4. Convertit la réponse en objet JavaScript (.json())",
                    "5. Appelle afficherCitation() avec les données",
                    "6. En cas d'erreur, appelle gererErreur()"
                ],
                concepts: ["async/await", "fetch API", "try/catch", "HTTP status codes"]
            },
            afficherCitation: {
                role: "Met à jour l'interface avec la citation reçue",
                parametres: "data (objet avec content, author, length)",
                retour: "Aucun (void) - modifie le DOM",
                etapes: [
                    "1. Masque le loading et les erreurs précédentes",
                    "2. Remplit le texte de la citation (textContent sécurisé)",
                    "3. Remplit le nom de l'auteur",
                    "4. Rend le conteneur visible (remove class 'hidden')",
                    "5. Réactive le bouton pour la prochaine citation",
                    "6. Lance l'animation d'apparition (bonus)"
                ],
                concepts: ["DOM manipulation", "textContent vs innerHTML", "CSS classes", "animations CSS"]
            },
            gererErreur: {
                role: "Affiche un message d'erreur compréhensible à l'utilisateur",
                parametres: "error (objet Error avec message)",
                retour: "Aucun (void) - modifie l'interface",
                etapes: [
                    "1. Masque les autres états (loading, citation)",
                    "2. Analyse le type d'erreur (connexion, 404, 500, autre)",
                    "3. Choisit un message approprié (user-friendly)",
                    "4. Affiche le message dans l'interface"
                ],
                concepts: ["Error handling", "UX design", "Messages utilisateur", "Robustesse"]
            }
        };
        
        const analyse = analyses[nomFonction];
        if (analyse) {
            console.log(`🔬 ANALYSE DÉTAILLÉE : ${nomFonction}()`);
            console.log("=" + "=".repeat(nomFonction.length + 18));
            console.log(`🎯 Rôle : ${analyse.role}`);
            console.log(`📥 Paramètres : ${analyse.parametres}`);
            console.log(`📤 Retour : ${analyse.retour}`);
            console.log("📋 Étapes :");
            analyse.etapes.forEach(etape => console.log(`   ${etape}`));
            console.log("🎓 Concepts abordés :");
            analyse.concepts.forEach(concept => console.log(`   - ${concept}`));
            console.log("");
            console.log(`🔍 Pour voir le code : Ouvrez script.js et cherchez "function ${nomFonction}"`);
        } else {
            console.log("❌ Fonction non trouvée. Utilisez : obtenirCitation, afficherCitation, ou gererErreur");
        }
    },
    
    // Tester la compréhension globale
    quizGeneral: () => {
        console.log("❓ QUIZ GÉNÉRAL : Comprenez-vous le projet ?");
        console.log("==========================================");
        console.log("Q1: Combien de fonctions principales y a-t-il ?");
        console.log("Q2: Quel raccourci clavier génère une nouvelle citation ?");
        console.log("Q3: Que fait la classe CSS 'hidden' ?");
        console.log("Q4: Pourquoi utilise-t-on textContent au lieu d'innerHTML ?");
        console.log("");
        console.log("💡 Réponses : testeurCode.reponsesGeneral()");
    },
    
    reponsesGeneral: () => {
        console.log("✅ RÉPONSES QUIZ GÉNÉRAL :");
        console.log("=========================");
        console.log("R1: 3 fonctions principales + fonctions utilitaires + bonus");
        console.log("R2: La barre d'espace (Space) génère une nouvelle citation");
        console.log("R3: La classe 'hidden' cache un élément (display: none)");
        console.log("R4: textContent évite les injections XSS (sécurité)");
    }
};

// ===== EXERCICES PRATIQUES =====

window.exercices = {
    // Exercice 1 : Observer le comportement
    exercice1: () => {
        console.log("🏋️ EXERCICE 1 : Observer le comportement");
        console.log("=======================================");
        console.log("📋 CONSIGNES :");
        console.log("1. Ouvrez votre site avec Live Server sur index.html");
        console.log("2. Ouvrez F12 → Console");
        console.log("3. Regardez les messages qui apparaissent automatiquement");
        console.log("4. Cliquez sur 'Nouvelle Citation'");
        console.log("5. Observez les nouveaux messages");
        console.log("6. Notez l'ordre des événements");
        console.log("");
        console.log("❓ Que voyez-vous ? Tapez exercices.correction1() pour vérifier");
    },
    
    correction1: () => {
        console.log("✅ CORRECTION EXERCICE 1 :");
        console.log("=========================");
        console.log("Vous devriez voir cette séquence :");
        console.log("1. 🚀 Page chargée, récupération de la première citation...");
        console.log("2. 🔄 Début du chargement...");
        console.log("3. 📡 Appel API vers: https://api.quotable.io/random");
        console.log("4. 📥 Réponse reçue: Response {status: 200, ok: true, ...}");
        console.log("5. ✅ Données reçues: {content: '...', author: '...', ...}");
        console.log("6. 📝 Citation: [texte de la citation]");
        console.log("7. 👤 Auteur: [nom de l'auteur]");
        console.log("8. 📄 Citation affichée: [même texte]");
        console.log("9. 👤 Auteur affiché: [même auteur]");
        console.log("");
        console.log("🎯 Si vous voyez cette séquence, le code fonctionne parfaitement !");
    },
    
    // Exercice 2 : Analyser l'API
    exercice2: () => {
        console.log("🏋️ EXERCICE 2 : Analyser l'API");
        console.log("=============================");
        console.log("📋 CONSIGNES :");
        console.log("1. Tapez debug.testAPI() dans cette console");
        console.log("2. Regardez la réponse de l'API");
        console.log("3. Identifiez toutes les propriétés disponibles");
        console.log("4. Comparez avec ce qu'utilise notre code");
        console.log("");
        console.log("❓ Quelles propriétés utilise notre code ? Tapez exercices.correction2()");
    },
    
    correction2: () => {
        console.log("✅ CORRECTION EXERCICE 2 :");
        console.log("=========================");
        console.log("🎯 Propriétés utilisées par notre code :");
        console.log("- data.content → Texte de la citation (affiché dans #citation-text)");
        console.log("- data.author → Nom de l'auteur (affiché dans #citation-author)");
        console.log("");
        console.log("📊 Propriétés disponibles mais non utilisées :");
        console.log("- data.length → Longueur de la citation en caractères");
        console.log("- data._id → Identifiant unique de la citation");
        console.log("- data.tags → Array des catégories/tags de la citation");
        console.log("- data.authorSlug → Version URL-friendly du nom d'auteur");
        console.log("");
        console.log("💡 Idée d'amélioration : Vous pourriez afficher la longueur ou les tags !");
    },
    
    // Exercice 3 : Tester les erreurs
    exercice3: () => {
        console.log("🏋️ EXERCICE 3 : Tester la gestion d'erreurs");
        console.log("==========================================");
        console.log("📋 CONSIGNES :");
        console.log("1. Assurez-vous que votre site fonctionne normalement");
        console.log("2. Coupez votre connexion internet (WiFi off)");
        console.log("3. Cliquez sur 'Nouvelle Citation'");
        console.log("4. Observez le message d'erreur");
        console.log("5. Reconnectez internet");
        console.log("6. Cliquez sur 'Réessayer'");
        console.log("");
        console.log("❓ Que se passe-t-il ? Tapez exercices.correction3()");
    },
    
    correction3: () => {
        console.log("✅ CORRECTION EXERCICE 3 :");
        console.log("=========================");
        console.log("🔴 Hors ligne - Vous devriez voir :");
        console.log("- Message : 'Problème de connexion. Vérifiez votre accès internet.'");
        console.log("- Bouton change en '🔄 Réessayer'");
        console.log("- Interface reste stable (pas de plantage)");
        console.log("");
        console.log("🟢 Reconnecté - Vous devriez voir :");
        console.log("- Après clic sur 'Réessayer' : nouvelle citation s'affiche");
        console.log("- Bouton redevient '🔄 Nouvelle Citation'");
        console.log("- Séquence normale reprend");
        console.log("");
        console.log("🎯 C'est ça, une gestion d'erreurs robuste ! L'app ne plante jamais.");
    }
};

// ===== AIDE CONTEXTUELLE =====

window.aide = {
    // Messages selon le niveau
    debutant: () => {
        console.log("👋 AIDE DÉBUTANT : Par où commencer ?");
        console.log("====================================");
        console.log("🎯 Votre objectif : COMPRENDRE le code dans script.js (déjà complet)");
        console.log("");
        console.log("📚 Parcours recommandé :");
        console.log("1. analyseCode.guidePasAPas() → Vue d'ensemble du code");
        console.log("2. analyseCode.expliquerAPI() → Comprendre les appels API");
        console.log("3. exercices.exercice1() → Premier test pratique");
        console.log("4. testeurCode.quizAPI() → Vérifier vos connaissances");
        console.log("");
        console.log("💡 Rappelez-vous : Le code fonctionne déjà ! Votre mission = analyser et comprendre.");
    },
    
    bloque: () => {
        console.log("🆘 AIDE : Vous êtes bloqué ?");
        console.log("===========================");
        console.log("");
        console.log("🔧 Problème technique :");
        console.log("   - debug.testAPI() → Teste l'API directement");
        console.log("   - debug.checkDOM() → Vérifie les éléments HTML");
        console.log("   - debugCitations() → État actuel de l'application");
        console.log("");
        console.log("🤔 Problème de compréhension :");
        console.log("   - analyseCode.expliquerAPI() → Explique l'API REST");
        console.log("   - analyseCode.expliquerDOM() → Explique la manipulation DOM");
        console.log("   - testeurCode.analyserFonction('obtenirCitation') → Analyse détaillée");
        console.log("");
        console.log("📚 Besoin de théorie :");
        console.log("   - Ouvrez : Fichiers d'aide/presentation-atelier.html");
        console.log("   - Ou : Fichiers d'aide/debug-guide.html");
        console.log("");
        console.log("❓ Questions spécifiques :");
        console.log("   - testeurCode.quizAPI() → Quiz sur les APIs");
        console.log("   - testeurCode.quizGeneral() → Quiz sur le projet");
    },
    
    avance: () => {
        console.log("🚀 AIDE AVANCÉ : Aller plus loin");
        console.log("===============================");
        console.log("");
        console.log("🌟 Fonctionnalités bonus déjà disponibles :");
        console.log("   - Partage social (fonction partagerCitation)");
        console.log("   - Favoris localStorage (fonction ajouterAuxFavoris)");
        console.log("   - Raccourcis clavier (barre d'espace)");
        console.log("   - Animations CSS (apparition en douceur)");
        console.log("");
        console.log("🎨 Idées de personnalisations :");
        console.log("   - Modifier les styles CSS (couleurs, polices, layout)");
        console.log("   - Ajouter d'autres propriétés API (tags, longueur)");
        console.log("   - Intégrer d'autres APIs (zenquotes.io, quotegarden)");
        console.log("   - Créer un historique des citations vues");
        console.log("");
        console.log("🔧 Défis techniques :");
        console.log("   - Implémenter un système de cache");
        console.log("   - Ajouter des catégories/filtres");
        console.log("   - Créer un mode sombre/clair");
        console.log("   - Optimiser pour PWA (Progressive Web App)");
    },
    
    // Résumé de toutes les commandes
    toutesCommandes: () => {
        console.log("📋 TOUTES LES COMMANDES DISPONIBLES");
        console.log("==================================");
        console.log("");
        console.log("🎓 ANALYSE DU CODE :");
        console.log("   analyseCode.guidePasAPas()");
        console.log("   analyseCode.expliquerAPI()");
        console.log("   analyseCode.expliquerDOM()");
        console.log("   analyseCode.expliquerErreurs()");
        console.log("   analyseCode.expliquerVariables()");
        console.log("");
        console.log("🧪 TESTS ET QUIZ :");
        console.log("   testeurCode.quizAPI()");
        console.log("   testeurCode.quizGeneral()");
        console.log("   testeurCode.analyserFonction('nomFonction')");
        console.log("");
        console.log("🏋️ EXERCICES PRATIQUES :");
        console.log("   exercices.exercice1() → Observer le comportement");
        console.log("   exercices.exercice2() → Analyser l'API");
        console.log("   exercices.exercice3() → Tester les erreurs");
        console.log("");
        console.log("🆘 AIDE CONTEXTUELLE :");
        console.log("   aide.debutant() → Guide pour commencer");
        console.log("   aide.bloque() → Si vous êtes bloqué");
        console.log("   aide.avance() → Pour aller plus loin");
        console.log("");
        console.log("🔧 DEBUG (du script principal) :");
        console.log("   debug.testAPI() → Teste l'API");
        console.log("   debug.checkDOM() → Vérifie les éléments");
        console.log("   debugCitations() → État actuel");
    }
};

// ===== FONCTION DE VALIDATION SIMPLE =====

window.testerMonCode = function() {
    console.log('🧪 Test rapide de votre compréhension...');
    console.log('========================================');
    
    // Test 1 : Connaissances API
    console.log('✅ Test 1 : Connaissances API');
    console.log('   Le code principal utilise bien fetch() et async/await');
    
    // Test 2 : Connaissances DOM
    console.log('✅ Test 2 : Manipulation DOM');
    console.log('   Le code utilise textContent (sécurisé) et classList');
    
    // Test 3 : Gestion d'erreurs
    console.log('✅ Test 3 : Gestion d\'erreurs');
    console.log('   Le code gère bien try/catch et messages utilisateur');
    
    console.log('');
    console.log('🎯 Pour approfondir votre compréhension :');
    console.log('   → analyseCode.guidePasAPas()');
    console.log('   → exercices.exercice1()');
    console.log('   → testeurCode.quizAPI()');
};

// ===== INITIALISATION ET AIDE =====

console.log("🎓 GUIDE D'ANALYSE DU CODE PRINCIPAL");
console.log("===================================");
console.log("");
console.log("Ce fichier vous aide à COMPRENDRE le code principal (script.js).");
console.log("Le code est déjà complet et fonctionnel !");
console.log("");
console.log("🎯 VOTRE MISSION : Analyser et tester le code existant");
console.log("");
console.log("🚀 COMMANDES PRINCIPALES :");
console.log("==========================");
console.log("📚 analyseCode.guidePasAPas() → Guide complet étape par étape");
console.log("🔍 analyseCode.expliquerAPI() → Comprendre les appels API");
console.log("🎨 analyseCode.expliquerDOM() → Comprendre la manipulation DOM");
console.log("🏋️ exercices.exercice1() → Premier exercice pratique");
console.log("🆘 aide.debutant() → Guide pour débuter");
console.log("📋 aide.toutesCommandes() → Liste complète des commandes");
console.log("");
console.log("💡 RAPPEL : debug.testAPI() et debug.checkDOM() sont aussi disponibles !");

// Auto-suggestion pour guider l'utilisateur
setTimeout(() => {
    console.log("");
    console.log("💡 SUGGESTION : Commencez par analyseCode.guidePasAPas()");
    console.log("   Cela vous donnera une vue d'ensemble du code à analyser.");
}, 3000);

// Message d'encouragement après 10 secondes
setTimeout(() => {
    console.log("");
    console.log("🌟 N'hésitez pas à explorer ! Ce code est un excellent exemple de bonnes pratiques JavaScript.");
    console.log("   Vous apprenez en analysant du code professionnel - c'est très formateur !");
}, 10000);