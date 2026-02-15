# 💬 Mission 1 : Générateur de Citations avec API REST

> **Objectif :** Créer une application web qui consomme une API REST avec JavaScript moderne

## 🚀 **DÉMARRAGE - Environnement de Travail**

### 📱 **1. Accéder au GitHub Codespace**
1. **Ouvrez votre repository** sur GitHub
2. **Cliquez sur le bouton vert `<> Code`**
3. **Sélectionnez l'onglet `Codespaces`**
4. **Cliquez sur `Create codespace on main`**
5. **Attendez** que l'environnement se charge (2-3 minutes)

### 🌐 **2. Configurer Live Server pour les Pages HTML**
1. **Live Server est pré-installé** dans votre Codespace
2. **Pour afficher une page HTML :**
   - Clic droit sur le fichier `.html` → `Open with Live Server`
   - OU utilisez `Ctrl+Shift+P` → tapez "Live Server" → `Open with Live Server`
3. **Une nouvelle fenêtre** s'ouvrira avec votre page web
4. **Les modifications** sont automatiquement rechargées

### 📖 **3. Fichiers à Consulter avec Live Server**
- **🎓 `Fichiers d'aide/presentation-atelier.html`** → Concepts théoriques
- **🔧 `Fichiers d'aide/debug-guide.html`** → Guide de débogage F12
- **📊 `Fichiers d'aide/evaluation-form.html`** → Auto-évaluation finale
- **💻 `index.html`** → Votre application (une fois codée)

## 🎯 **Vue d'Ensemble de la Mission**

Vous allez développer une application qui récupère et affiche des citations inspirantes depuis l'API [Quotable](https://docs.quotable.io/), avec gestion d'erreurs et design responsive.

**🎓 Concepts clés :** API REST • fetch() • async/await • Manipulation DOM • Gestion d'erreurs

## 📋 **IMPORTANT : Consignes Détaillées**

**👉 Les instructions complètes de l'atelier sont dans :**
### **📝 `Fichiers d'aide/instructions_etudiant.md`**

Ce README est un **aperçu général**. Pour le **guide étape par étape détaillé**, consultez le fichier `instructions_etudiant.md` qui contient :
- ✅ Instructions précises étape par étape
- 💡 Aide au débogage
- 🧪 Points de vérification
- 📚 Concepts théoriques expliqués

## 📋 **Workflow de Travail (Chemin Recommandé)**

```
🚀 DÉMARRER
    ↓
🌐 Ouvrir Codespace + Live Server
    ↓
📖 README.md (vous êtes ici !) ──→ Vue d'ensemble
    ↓
🎓 presentation-atelier.html ──→ Concepts théoriques (10 min)
    ↓
📝 instructions_etudiant.md ──→ 📋 GUIDE PRINCIPAL (45 min)
    ↓
💻 DÉVELOPPEMENT dans Codespace
    ├─ script.js (code principal à compléter)
    ├─ index.html + style.css (structure fournie)
    └─ Tests avec F12 (console + network)
    ↓
❓ PROBLÈME ?
    ├─ 🚨 Erreur → 🔧 debug-guide.html (Live Server)
    ├─ 🤔 Bloqué → 💡 script-avec-indices.js  
    └─ ✅ OK → Continuer
    ↓
🧪 TESTS MANUELS
    ├─ Fonctionnalités (boutons, API)
    ├─ Responsive (F12 mode mobile)
    └─ Gestion erreurs (couper internet)
    ↓
🚀 DÉPLOIEMENT GitHub Pages (automatique)
    ↓
📊 evaluation-form.html ──→ QCM + Auto-évaluation (15 min)
    ↓
🎉 MISSION TERMINÉE !
```

## 🎯 **Démarrage Selon Votre Profil**

| Votre Situation | 👉 Action Immédiate |
|------------------|---------------------|
| **🆕 Première fois** | 1. [Ouvrir Codespace](#🚀-démarrage---environnement-de-travail) <br/> 2. Live Server sur `presentation-atelier.html` <br/> 3. Lire `instructions_etudiant.md` |
| **💻 Je veux coder direct** | 1. [Ouvrir Codespace](#🚀-démarrage---environnement-de-travail) <br/> 2. Aller à `Fichiers d'aide/instructions_etudiant.md` |
| **🆘 Je suis en panne** | 1. Live Server sur `debug-guide.html` <br/> 2. Ou utiliser `script-avec-indices.js` |
| **📊 J'évalue mon travail** | Live Server sur `evaluation-form.html` |

## 📁 **Structure du Projet**

```
📂 Votre Repository
├── 🌐 **Fichiers principaux**
│   ├── index.html          ← Page web principale
│   ├── style.css           ← Design et responsive
│   ├── script.js           ← Code JavaScript à compléter
│   └── evaluation.json     ← Auto-évaluation (généré)
│
├── ⚙️ **Configuration**
│   ├── package.json        ← Métadonnées projet
│   ├── .gitignore          ← Fichiers à ignorer
│   └── .github/workflows/  ← Déploiement automatique
│
└── 🆘 **Ressources d'aide**
    ├── 📝 instructions_etudiant.md  ← Guide étape par étape
    ├── 🎓 presentation-atelier.html ← Concepts théoriques 
    ├── 🔧 debug-guide.html          ← Outils de débogage
    ├── 💡 script-avec-indices.js    ← Code avec aide
    └── 📊 evaluation-form.html      ← Interface d'évaluation
```

## ✅ **Fonctionnalités à Implémenter**

### 🎯 **Obligatoires (15 pts)**
- [x] **Appel API** : Récupération citations depuis quotable.io
- [x] **Affichage** : Citation + auteur avec HTML sémantique
- [x] **Interactivité** : Bouton "Nouvelle citation" fonctionnel
- [x] **Responsive** : Adaptation mobile/desktop
- [x] **Gestion erreurs** : Messages clairs sans plantage
- [x] **Déploiement** : Site accessible via GitHub Pages

### 🌟 **Bonus (9 pts)**
- [ ] **Partage social** : Web Share API
- [ ] **Favoris** : Sauvegarde localStorage
- [ ] **Raccourcis** : Navigation clavier
- [ ] **Animations** : Transitions CSS fluides
- [ ] **Accessibilité** : Support lecteurs d'écran

## 🔧 **API à Utiliser**

**Endpoint :** `https://api.quotable.io/random`  
**Documentation :** [https://docs.quotable.io/](https://docs.quotable.io/)

**Réponse type :**
```json
{
  "content": "Le succès c'est d'aller d'échec en échec sans perdre son enthousiasme.",
  "author": "Winston Churchill",
  "length": 65
}
```

**✅ API testée et fonctionnelle** - Vous pouvez tester directement dans votre navigateur : [https://api.quotable.io/random](https://api.quotable.io/random)

### 🧪 **Test Rapide de l'API**
Pour vérifier que l'API fonctionne :
1. **Ouvrez ce lien** dans votre navigateur : https://api.quotable.io/random
2. **Vous devriez voir** un JSON avec une citation aléatoire
3. **Actualisez la page** pour obtenir une nouvelle citation
4. **Si ça ne marche pas**, vérifiez votre connexion internet

## 📊 **Évaluation**

| Critère | Points | Validation |
|---------|--------|------------|
| **QCM concepts** | 21 pts | Formulaire d'évaluation (`evaluation-form.html`) |
| **Code fonctionnel** | 15 pts | Tests manuels + GitHub Pages |
| **Bonus optionnels** | 9 pts | Fonctionnalités avancées |
| **Total** | **45 pts** | **Note sur 20** |

## 🚀 **Démarrage Rapide**

### **👶 Débutant complet**
1. **🎓 Présentation concepts** (`Fichiers d'aide/presentation-atelier.html`) - 10 min
2. **📝 Guide pratique** (`Fichiers d'aide/instructions_etudiant.md`) - 45 min  
3. **📊 Auto-évaluation** (`Fichiers d'aide/evaluation-form.html`) - 10 min

### **💻 Développeur expérimenté**
1. **📝 Instructions pratiques** (`Fichiers d'aide/instructions_etudiant.md`) - 30 min
2. **🔧 Debug au besoin** (`Fichiers d'aide/debug-guide.html`)
3. **📊 Évaluation** (`Fichiers d'aide/evaluation-form.html`) - 10 min

## 🆘 **Besoin d'Aide ? Ressources Disponibles**

| Type de problème | 🌐 Fichier à ouvrir avec Live Server | 📄 Description |
|------------------|--------------------------------------|------------------|
| **🚨 Erreur JavaScript** | `debug-guide.html` | Guide interactif F12 + Console |
| **🤔 Ne sais pas coder** | Lire `instructions_etudiant.md` | Guide pas-à-pas détaillé |
| **💡 Aide au code** | Utiliser `script-avec-indices.js` | Système d'indices intégré |
| **🌐 Problème API** | `debug-guide.html` | Section Network F12 |
| **📱 Design responsive** | Inspecter avec F12 | Mode appareil mobile |

## 🛠️ **Utilisation de Live Server dans Codespace**

**Pour ouvrir une page HTML :**
1. **Clic droit** sur le fichier `.html` → `Open with Live Server`
2. **OU** : `Ctrl+Shift+P` → tapez "Live Server" → `Open with Live Server`  
3. **L'URL apparaît** dans une nouvelle fenêtre/onglet
4. **Les modifications** sont rechargées automatiquement

**📌 Important :** Pour `index.html`, testez d'abord avec Live Server pour voir l'interface, puis développez le JavaScript.

## 📦 **Livrable Final**

- ✅ **Repository GitHub** avec code source
- ✅ **Site déployé** sur GitHub Pages (automatique via Actions)
- ✅ **evaluation.json** complété via le formulaire
- ✅ **Commits Git** avec messages clairs

**🎯 Temps estimé :** 60-90 minutes  
**🏁 Deadline :** Fin de séance + 30 minutes

---

## 🚀 **RÉCAPITULATIF : Comment Démarrer ?**

### **📌 Ordre Recommandé :**

1. **🌐 Configurez votre environnement :**
   - Ouvrez le Codespace GitHub
   - Testez Live Server sur `index.html` (pour voir l'interface)

2. **📚 Comprenez les concepts :**
   - Live Server sur `Fichiers d'aide/presentation-atelier.html`

3. **💻 Développez étape par étape :**
   - **📖 Lisez** : `Fichiers d'aide/instructions_etudiant.md` ← **GUIDE PRINCIPAL**
   - **✏️ Codez** : Modifiez `script.js` selon les instructions
   - **🔧 Déboguez** : Utilisez F12 + `debug-guide.html` si nécessaire

4. **📊 Évaluez votre travail :**
   - Live Server sur `Fichiers d'aide/evaluation-form.html`

### **⚠️ Note Importante**
Ce README vous donne la **vue d'ensemble** et la **configuration technique**.  
**Les instructions détaillées de codage sont dans** : `Fichiers d'aide/instructions_etudiant.md`

---

**🚀 Prêt ? Commencez par [configurer votre Codespace](#🚀-démarrage---environnement-de-travail) !**

---
