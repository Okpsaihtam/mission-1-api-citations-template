// ===== GÉNÉRATEUR DE CITATIONS - VERSION ULTRA-ROBUSTE =====
// Cette version fonctionne TOUJOURS, même sans internet !

// 📚 Base de données locale de citations (solution de secours)
const CITATIONS_LOCALES = [
    {
        content: "Le succès c'est d'aller d'échec en échec sans perdre son enthousiasme.",
        author: "Winston Churchill"
    },
    {
        content: "La vie est ce qui vous arrive pendant que vous êtes occupé à faire d'autres plans.",
        author: "John Lennon"
    },
    {
        content: "Le seul moyen de faire du bon travail est d'aimer ce que vous faites.",
        author: "Steve Jobs"
    },
    {
        content: "L'imagination est plus importante que le savoir.",
        author: "Albert Einstein"
    },
    {
        content: "Soyez vous-même, les autres sont déjà pris.",
        author: "Oscar Wilde"
    },
    {
        content: "Le meilleur moment pour planter un arbre était il y a 20 ans. Le deuxième meilleur moment est maintenant.",
        author: "Proverbe chinois"
    },
    {
        content: "Ce n'est pas parce que les choses sont difficiles que nous n'osons pas, c'est parce que nous n'osons pas qu'elles sont difficiles.",
        author: "Sénèque"
    },
    {
        content: "La seule façon de faire du bon travail est d'aimer ce que vous faites.",
        author: "Steve Jobs"
    },
    {
        content: "L'avenir appartient à ceux qui croient en la beauté de leurs rêves.",
        author: "Eleanor Roosevelt"
    },
    {
        content: "Vous manquez 100% des coups que vous ne tentez pas.",
        author: "Wayne Gretzky"
    },
    {
        content: "La créativité c'est l'intelligence qui s'amuse.",
        author: "Albert Einstein"
    },
    {
        content: "Ne comptez pas les jours, faites que les jours comptent.",
        author: "Muhammad Ali"
    },
    {
        content: "Le pessimiste voit la difficulté dans chaque opportunité. L'optimiste voit l'opportunité dans chaque difficulté.",
        author: "Winston Churchill"
    },
    {
        content: "La seule limite à notre réalisation de demain sera nos doutes d'aujourd'hui.",
        author: "Franklin D. Roosevelt"
    },
    {
        content: "Croyez que vous pouvez le faire et vous êtes déjà à mi-chemin.",
        author: "Theodore Roosevelt"
    },
    {
        content: "Le changement est la loi de la vie. Ceux qui ne regardent que le passé ou le présent ratent à coup sûr l'avenir.",
        author: "John F. Kennedy"
    },
    {
        content: "Il n'y a qu'une façon d'échouer, c'est d'abandonner avant d'avoir réussi.",
        author: "Olivier Lockert"
    },
    {
        content: "Vous devez être le changement que vous voulez voir dans le monde.",
        author: "Gandhi"
    },
    {
        content: "Un voyage de mille lieues commence toujours par un premier pas.",
        author: "Lao Tseu"
    },
    {
        content: "La vie est 10% ce qui vous arrive et 90% comment vous y réagissez.",
        author: "Charles R. Swindoll"
    }
];

// Configuration des APIs
const API_URL_PRIMARY = 'https://api.quotable.io/random';
const API_URL_BACKUP = 'https://type.fit/api/quotes';

// État de l'application
let quotesBackup = [];
let useBackupAPI = false;
let useLocalQuotes = false;

// 🎯 RÉCUPÉRATION DES ÉLÉMENTS DOM
const loadingElement = document.getElementById('loading');
const citationContainer = document.getElementById('citation-container');
const errorContainer = document.getElementById('error-container');
const errorText = document.getElementById('error-text');
const citationText = document.getElementById('citation-text');
const citationAuthor = document.getElementById('citation-author');
const btnNouvelle = document.getElementById('nouvelle-citation');
const btnRetry = document.getElementById('retry-btn');

// ===== FONCTIONS PRINCIPALES =====

/**
 * 🎯 Obtenir une citation aléatoire locale
 */
function obtenirCitationLocale() {
    const randomIndex = Math.floor(Math.random() * CITATIONS_LOCALES.length);
    return CITATIONS_LOCALES[randomIndex];
}

/**
 * 🎯 FONCTION PRINCIPALE : Obtenir une citation
 * Essaie les APIs, sinon utilise les citations locales
 */
async function obtenirCitation() {
    try {
        console.log('🔄 Début du chargement...');
        afficherLoading();
        
        let data = null;
        
        // ===== TENTATIVE 1 : API Principale (quotable.io) =====
        if (!useBackupAPI && !useLocalQuotes) {
            try {
                console.log('📡 Tentative 1/3 : API quotable.io');
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 5000); // Timeout 5 secondes
                
                const response = await fetch(API_URL_PRIMARY, { 
                    signal: controller.signal,
                    mode: 'cors'
                });
                clearTimeout(timeoutId);
                
                if (response.ok) {
                    data = await response.json();
                    console.log('✅ API quotable.io fonctionne !');
                } else {
                    throw new Error(`HTTP ${response.status}`);
                }
                
            } catch (primaryError) {
                console.warn('⚠️ API quotable.io indisponible:', primaryError.message);
                useBackupAPI = true;
            }
        }
        
        // ===== TENTATIVE 2 : API Backup (type.fit) =====
        if (!data && useBackupAPI && !useLocalQuotes) {
            try {
                console.log('📡 Tentative 2/3 : API type.fit');
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 5000);
                
                const response = await fetch(API_URL_BACKUP, { 
                    signal: controller.signal,
                    mode: 'cors'
                });
                clearTimeout(timeoutId);
                
                if (response.ok) {
                    if (quotesBackup.length === 0) {
                        quotesBackup = await response.json();
                        console.log(`✅ ${quotesBackup.length} citations chargées depuis type.fit`);
                    }
                    
                    const randomIndex = Math.floor(Math.random() * quotesBackup.length);
                    const quote = quotesBackup[randomIndex];
                    
                    data = {
                        content: quote.text,
                        author: quote.author || 'Anonyme'
                    };
                    console.log('✅ API type.fit fonctionne !');
                } else {
                    throw new Error(`HTTP ${response.status}`);
                }
                
            } catch (backupError) {
                console.warn('⚠️ API type.fit indisponible:', backupError.message);
                useLocalQuotes = true;
            }
        }
        
        // ===== TENTATIVE 3 : Citations locales (TOUJOURS DISPONIBLE) =====
        if (!data) {
            console.log('📚 Tentative 3/3 : Citations locales');
            data = obtenirCitationLocale();
            console.log('✅ Citation locale sélectionnée');
            useLocalQuotes = true;
        }
        
        // Afficher la citation
        console.log('📝 Citation:', data.content);
        console.log('👤 Auteur:', data.author);
        
        afficherCitation(data);
        
    } catch (error) {
        console.error('❌ Erreur inattendue:', error);
        // En dernier recours, toujours utiliser une citation locale
        const citation = obtenirCitationLocale();
        afficherCitation(citation);
    }
}

/**
 * 🎯 Afficher une citation
 */
function afficherCitation(data) {
    // Cacher le loading et l'erreur
    loadingElement.classList.add('hidden');
    errorContainer.classList.add('hidden');
    
    // Mettre à jour le contenu
    citationText.textContent = `"${data.content}"`;
    citationAuthor.textContent = `— ${data.author}`;
    
    // Afficher le container avec animation
    citationContainer.classList.remove('hidden');
    citationContainer.classList.add('fade-in');
    
    // Réactiver le bouton
    btnNouvelle.disabled = false;
    
    console.log('📄 Citation affichée avec succès');
}

/**
 * 🎯 Gérer les erreurs (normalement jamais appelée car citations locales en secours)
 */
function gererErreur(error) {
    console.log('🚨 Gestion de l\'erreur:', error.message);
    
    // Cacher le loading et la citation
    loadingElement.classList.add('hidden');
    citationContainer.classList.add('hidden');
    
    // Message d'erreur
    let message = 'Impossible de charger une citation. Veuillez réessayer.';
    
    errorText.textContent = message;
    errorContainer.classList.remove('hidden');
    
    // Réactiver le bouton
    btnNouvelle.disabled = false;
}

/**
 * 🎯 Afficher l'état de chargement
 */
function afficherLoading() {
    loadingElement.classList.remove('hidden');
    citationContainer.classList.add('hidden');
    errorContainer.classList.add('hidden');
    btnNouvelle.disabled = true;
}

// ===== ÉVÉNEMENTS =====

/**
 * 🎯 Bouton Nouvelle Citation
 */
btnNouvelle.addEventListener('click', () => {
    console.log('🖱️ Clic sur Nouvelle Citation');
    obtenirCitation();
});

/**
 * 🎯 Bouton Réessayer
 */
btnRetry.addEventListener('click', () => {
    console.log('🖱️ Clic sur Réessayer');
    obtenirCitation();
});

/**
 * 🎯 Raccourci clavier (Espace)
 */
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !btnNouvelle.disabled) {
        event.preventDefault();
        console.log('⌨️ Raccourci clavier : Espace pressé');
        obtenirCitation();
    }
});

/**
 * 🎯 INITIALISATION : Charger une citation au démarrage
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Application démarrée');
    console.log('📋 Configuration:');
    console.log('   - API Principale:', API_URL_PRIMARY);
    console.log('   - API Backup:', API_URL_BACKUP);
    console.log('   - Citations locales:', CITATIONS_LOCALES.length);
    console.log('');
    
    // Charger la première citation
    obtenirCitation();
});

// ===== OUTILS DE DEBUG =====

const debug = {
    /**
     * Tester les APIs
     */
    testAPI: async function() {
        console.log('🧪 Test manuel des APIs...');
        console.log('');
        
        // Test API 1
        console.log('1️⃣ Test quotable.io...');
        try {
            const response = await fetch(API_URL_PRIMARY, { mode: 'cors' });
            const data = await response.json();
            console.log('✅ quotable.io OK:', data);
        } catch (error) {
            console.log('❌ quotable.io ERREUR:', error.message);
        }
        
        console.log('');
        
        // Test API 2
        console.log('2️⃣ Test type.fit...');
        try {
            const response = await fetch(API_URL_BACKUP, { mode: 'cors' });
            const data = await response.json();
            console.log('✅ type.fit OK:', data.length, 'citations');
        } catch (error) {
            console.log('❌ type.fit ERREUR:', error.message);
        }
        
        console.log('');
        
        // Citations locales
        console.log('3️⃣ Citations locales disponibles:', CITATIONS_LOCALES.length);
        console.log('Exemple:', obtenirCitationLocale());
    },
    
    /**
     * Afficher les statistiques
     */
    afficherStats: function() {
        console.log('📊 Statistiques:');
        console.log('   - Mode utilisé:', useLocalQuotes ? 'Local' : (useBackupAPI ? 'Backup API' : 'API Principale'));
        console.log('   - Citations en cache:', quotesBackup.length);
        console.log('   - Citations locales:', CITATIONS_LOCALES.length);
    },
    
    /**
     * Forcer le mode local
     */
    forcerModeLocal: function() {
        useLocalQuotes = true;
        console.log('✅ Mode local forcé');
        obtenirCitation();
    },
    
    /**
     * Réinitialiser et essayer les APIs
     */
    reset: function() {
        useBackupAPI = false;
        useLocalQuotes = false;
        console.log('🔄 Réinitialisation - nouvelle tentative avec les APIs');
        obtenirCitation();
    }
};

console.log('💡 Commandes disponibles dans la console:');
console.log('   - debug.testAPI() : Tester toutes les sources');
console.log('   - debug.afficherStats() : Voir les statistiques');
console.log('   - debug.forcerModeLocal() : Forcer les citations locales');
console.log('   - debug.reset() : Réessayer les APIs');