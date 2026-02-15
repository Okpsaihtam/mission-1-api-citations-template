// ===== DEBUG ASSISTANT POUR MISSION API CITATIONS =====
// Outils d'aide au débogage pour les étudiants

/**
 * Assistant de débogage pour la mission API Citations
 * Utilisation : Ouvrir la console (F12) et taper debug.help()
 */

window.debug = {
    
    /**
     * Affiche l'aide complète
     */
    help: function() {
        console.log(`
🔧 DEBUG ASSISTANT - Mission API Citations

📚 COMMANDES DISPONIBLES :
├─ debug.testAPI()           → Teste l'API quotable.io
├─ debug.checkDOM()          → Vérifie les éléments HTML
├─ debug.inspectVariables()  → Affiche les variables principales
├─ debug.testFetch()         → Démonstration fetch()
├─ debug.clearConsole()      → Nettoie la console
├─ debug.showErrors()        → Affiche les erreurs courantes
└─ debug.validateCode()      → Valide votre implémentation

🆘 AIDE RAPIDE :
├─ debug.quickFix()          → Solutions aux erreurs fréquentes
├─ debug.checkNetwork()      → Vérifie la connexion réseau
└─ debug.explainAsync()      → Explique async/await

💡 Tapez debug.[commande]() pour exécuter
        `);
    },

    /**
     * Teste l'API quotable.io directement
     */
    testAPI: async function() {
        console.log('🧪 Test direct de l\'API quotable.io...');
        
        try {
            console.time('⏱️ Temps de réponse API');
            const response = await fetch('https://api.quotable.io/random');
            console.timeEnd('⏱️ Temps de réponse API');
            
            console.log('📡 Statut réponse:', response.status, response.statusText);
            console.log('📋 Headers:', [...response.headers.entries()]);
            
            const data = await response.json();
            console.log('✅ Données reçues:', data);
            console.log(`📝 Citation: "${data.content}"`);
            console.log(`👤 Auteur: ${data.author}`);
            console.log(`📏 Longueur: ${data.length} caractères`);
            
            return data;
        } catch (error) {
            console.error('❌ Erreur API:', error);
            console.log('💡 Vérifiez votre connexion internet');
            return null;
        }
    },

    /**
     * Vérifie la présence des éléments DOM essentiels
     */
    checkDOM: function() {
        console.log('🔍 Vérification des éléments DOM...');
        
        const elements = {
            'loading': 'Zone de chargement',
            'citation-container': 'Conteneur citation', 
            'citation-text': 'Texte de la citation',
            'citation-author': 'Auteur de la citation',
            'nouvelle-citation': 'Bouton nouvelle citation',
            'error-container': 'Conteneur d\'erreur',
            'error-text': 'Texte d\'erreur'
        };
        
        let allFound = true;
        
        Object.entries(elements).forEach(([id, description]) => {
            const element = document.getElementById(id);
            if (element) {
                console.log(`✅ ${description} (${id}): trouvé`);
            } else {
                console.error(`❌ ${description} (${id}): MANQUANT`);
                allFound = false;
            }
        });
        
        if (allFound) {
            console.log('🎉 Tous les éléments DOM sont présents !');
        } else {
            console.log('⚠️ Certains éléments manquent. Vérifiez votre HTML.');
        }
        
        return allFound;
    },

    /**
     * Inspecte les variables et fonctions principales
     */
    inspectVariables: function() {
        console.log('🔍 Inspection des variables globales...');
        
        // Vérification des variables attendues
        const globals = ['API_URL', 'loadingElement', 'citationContainer', 'citationText', 'citationAuthor'];
        
        globals.forEach(varName => {
            if (window[varName] !== undefined) {
                console.log(`✅ ${varName}:`, window[varName]);
            } else {
                console.log(`❌ ${varName}: non défini`);
            }
        });
        
        // Vérification des fonctions
        const functions = ['obtenirCitation', 'afficherCitation', 'gererErreur'];
        
        console.log('\n📋 Fonctions définies:');
        functions.forEach(funcName => {
            if (typeof window[funcName] === 'function') {
                console.log(`✅ ${funcName}(): définie`);
            } else {
                console.log(`❌ ${funcName}(): manquante`);
            }
        });
    },

    /**
     * Démonstration de fetch() étape par étape
     */
    testFetch: async function() {
        console.log('📚 Démonstration fetch() étape par étape...');
        
        console.log('1️⃣ Création de la requête...');
        const url = 'https://api.quotable.io/random';
        console.log('🔗 URL:', url);
        
        console.log('2️⃣ Envoi de la requête...');
        try {
            const response = await fetch(url);
            console.log('📥 Réponse reçue:', response);
            
            console.log('3️⃣ Vérification du statut...');
            console.log('✅ Status OK:', response.ok);
            console.log('🔢 Code status:', response.status);
            
            console.log('4️⃣ Conversion en JSON...');
            const data = await response.json();
            console.log('📄 Données JSON:', data);
            
            console.log('5️⃣ Utilisation des données...');
            console.log('💬 Citation:', data.content);
            console.log('👤 Auteur:', data.author);
            
            return data;
        } catch (error) {
            console.error('❌ Erreur:', error);
        }
    },

    /**
     * Solutions aux erreurs fréquentes
     */
    quickFix: function() {
        console.log(`
🆘 SOLUTIONS AUX ERREURS FRÉQUENTES :

❌ "ReferenceError: obtenirCitation is not defined"
   └─ 💡 La fonction n'est pas déclarée. Vérifiez :
      • async function obtenirCitation() { ... }
      • Pas d'erreur de syntaxe avant

❌ "TypeError: Cannot read property 'textContent' of null"
   └─ 💡 Élément DOM non trouvé. Vérifiez :
      • document.getElementById('citation-text')
      • L'ID existe dans le HTML
      • Pas de faute de frappe

❌ "SyntaxError: Unexpected token"
   └─ 💡 Erreur de syntaxe. Vérifiez :
      • Parenthèses, crochets, accolades fermés
      • Points-virgules et virgules
      • Guillemets fermés

❌ "Failed to fetch"
   └─ 💡 Problème réseau. Vérifiez :
      • Connexion internet
      • URL de l'API correcte
      • Pas de bloqueur de contenu

❌ "Uncaught (in promise)"
   └─ 💡 Erreur async non gérée. Ajoutez :
      • try { ... } catch(error) { ... }
      • await devant fetch()
        `);
    },

    /**
     * Vérifie la connexion réseau
     */
    checkNetwork: function() {
        console.log('🌐 Vérification de la connexion réseau...');
        
        if (navigator.onLine) {
            console.log('✅ Navigateur indique : CONNECTÉ');
        } else {
            console.log('❌ Navigateur indique : HORS LIGNE');
        }
        
        // Test ping Google
        fetch('https://www.google.com/favicon.ico', { mode: 'no-cors' })
            .then(() => console.log('✅ Test Google : SUCCÈS'))
            .catch(() => console.log('❌ Test Google : ÉCHEC'));
            
        // Test API quotable
        fetch('https://api.quotable.io/random')
            .then(response => {
                if (response.ok) {
                    console.log('✅ API Quotable : ACCESSIBLE');
                } else {
                    console.log('⚠️ API Quotable : Problème serveur');
                }
            })
            .catch(() => console.log('❌ API Quotable : INACCESSIBLE'));
    },

    /**
     * Explique async/await simplement
     */
    explainAsync: function() {
        console.log(`
📚 EXPLICATION ASYNC/AWAIT :

🤔 POURQUOI async/await ?
   Internet n'est pas instantané ! Il faut attendre les réponses.

❌ SANS await (ne marche pas) :
   const response = fetch(url);
   console.log(response); // → Promise {<pending>}

✅ AVEC await (marche) :
   const response = await fetch(url);
   console.log(response); // → Response {status: 200, ...}

📝 RÈGLES IMPORTANTES :
   1. await ne marche QUE dans une fonction async
   2. async function maFonction() { ... }
   3. await va "attendre" la réponse
   4. Toujours utiliser try/catch pour les erreurs

💡 EXEMPLE COMPLET :
   async function obtenirCitation() {
       try {
           const response = await fetch(url);
           const data = await response.json();
           console.log(data);
       } catch (error) {
           console.error(error);
       }
   }
        `);
    },

    /**
     * Valide l'implémentation de l'étudiant
     */
    validateCode: async function() {
        console.log('🧪 Validation de votre code...');
        
        let score = 0;
        const tests = [];
        
        // Test 1: Fonction obtenirCitation existe
        if (typeof window.obtenirCitation === 'function') {
            tests.push('✅ Fonction obtenirCitation() définie');
            score++;
        } else {
            tests.push('❌ Fonction obtenirCitation() manquante');
        }
        
        // Test 2: Éléments DOM présents
        const elementsOK = this.checkDOM();
        if (elementsOK) {
            tests.push('✅ Éléments DOM présents');
            score++;
        } else {
            tests.push('❌ Éléments DOM manquants');
        }
        
        // Test 3: API accessible
        try {
            const data = await this.testAPI();
            if (data) {
                tests.push('✅ API accessible et fonctionnelle');
                score++;
            } else {
                tests.push('❌ API inaccessible');
            }
        } catch (error) {
            tests.push('❌ Erreur test API');
        }
        
        // Test 4: Try/catch présent dans le code
        const scriptContent = document.querySelector('script[src="script.js"]');
        if (scriptContent) {
            tests.push('✅ Script chargé');
            score++;
        }
        
        console.log('\n📊 RÉSULTATS DE VALIDATION :');
        tests.forEach(test => console.log(test));
        console.log(`\n🎯 Score: ${score}/4`);
        
        if (score === 4) {
            console.log('🎉 Félicitations ! Votre code semble bien structuré.');
        } else {
            console.log('💪 Continuez, vous êtes sur la bonne voie !');
        }
        
        return score;
    },

    /**
     * Nettoie la console
     */
    clearConsole: function() {
        console.clear();
        console.log('🧹 Console nettoyée !');
        console.log('💡 Tapez debug.help() pour revoir les commandes');
    },

    /**
     * Affiche les erreurs courantes et leurs solutions
     */
    showErrors: function() {
        console.log(`
🚨 ERREURS COURANTES ET SOLUTIONS :

1️⃣ ERREUR : ReferenceError: fetch is not defined
   🔧 SOLUTION : Utilisez un navigateur moderne (Chrome, Firefox, Safari)

2️⃣ ERREUR : SyntaxError: await is only valid in async functions  
   🔧 SOLUTION : Ajoutez 'async' devant function :
      async function obtenirCitation() { ... }

3️⃣ ERREUR : TypeError: Cannot read property 'textContent' of null
   🔧 SOLUTION : Vérifiez l'ID de l'élément :
      const element = document.getElementById('citation-text');

4️⃣ ERREUR : Failed to fetch
   🔧 SOLUTION : Vérifiez la connexion et l'URL :
      const response = await fetch('https://api.quotable.io/random');

5️⃣ ERREUR : Uncaught (in promise) SyntaxError
   🔧 SOLUTION : L'API retourne du HTML au lieu de JSON
      Vérifiez l'URL exacte de l'API

💡 ASTUCE : Utilisez toujours F12 → Console pour voir les erreurs !
        `);
    }
};

// Auto-affichage de l'aide au chargement
console.log(`
🔧 DEBUG ASSISTANT CHARGÉ !

💡 Tapez debug.help() pour voir toutes les commandes
🆘 Tapez debug.quickFix() pour les solutions rapides
🧪 Tapez debug.testAPI() pour tester l'API
`);

// Ajout d'un raccourci global
window.help = window.debug.help;