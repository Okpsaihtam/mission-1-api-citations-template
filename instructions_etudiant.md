# 💬 Mission 1 : Générateur de Citations avec API REST

> **Objectif :** Créer une application web qui consomme une API REST avec JavaScript moderne

## 🎯 **Vue d'Ensemble**

Vous allez développer une application qui récupère et affiche des citations inspirantes depuis l'API [quotable.io](https://quotable.io), avec gestion d'erreurs et design responsive.

**🎓 Concepts clés :** API REST • fetch() • async/await • Manipulation DOM • Gestion d'erreurs

## 📋 **Workflow de Travail**

```
🚀 DÉMARRER
    ↓
📖 README.md (vous êtes ici !)
    ↓
🎓 presentation-atelier.html ──→ Concepts théoriques (10 min)
    ↓
📝 instructions_etudiant.md ──→ Guide pratique étapes 1-4 (45 min)
    ↓
💻 DÉVELOPPEMENT
    ├─ script.js (code principal)
    ├─ index.html + style.css (structure)
    └─ Tests F12 (console + network)
    ↓
❓ PROBLÈME ?
    ├─ 🚨 Erreur → 🔧 debug-guide.html
    ├─ 🤔 Bloqué → 💡 script-avec-indices.js  
    └─ ✅ OK → Continuer
    ↓
🧪 TESTS MANUELS
    ├─ Fonctionnalités
    ├─ Responsive
    └─ Gestion erreurs
    ↓
🚀 DÉPLOIEMENT GitHub Pages (10 min)
    ↓
📊 evaluation-form.html ──→ QCM + Auto-évaluation (10 min)
    ↓
🎉 MISSION TERMINÉE !
```

## 🎯 **Points d'Entrée selon votre Besoin**

| Situation | 👉 Commencez par |
|-----------|------------------|
| **🆕 Je découvre** | [📖 Vue d'ensemble](#📁-structure-du-projet) puis [🎓 Présentation](Fichiers%20d'aide/presentation-atelier.html) |
| **💻 Je veux coder** | [📝 Instructions pratiques](Fichiers%20d'aide/instructions_etudiant.md) |
| **🆘 Je suis bloqué** | [🔧 Debug F12](Fichiers%20d'aide/debug-guide.html) ou [💡 Aide interactive](Fichiers%20d'aide/script-avec-indices.js) |
| **📊 J'évalue mon travail** | [📊 Formulaire d'évaluation](Fichiers%20d'aide/evaluation-form.html) |

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

**Réponse type :**
```json
{
  "content": "Le succès c'est d'aller d'échec en échec sans perdre son enthousiasme.",
  "author": "Winston Churchill",
  "length": 65
}
```

## 📊 **Évaluation**

| Critère | Points | Validation |
|---------|--------|------------|
| **QCM concepts** | 21 pts | [📊 Formulaire](Fichiers%20d'aide/evaluation-form.html) |
| **Code fonctionnel** | 15 pts | Tests manuels + GitHub Pages |
| **Bonus optionnels** | 9 pts | Fonctionnalités avancées |
| **Total** | **45 pts** | **Note sur 20** |

## 🚀 **Démarrage Rapide**

### **👶 Débutant complet**
1. [🎓 Présentation concepts](Fichiers%20d'aide/presentation-atelier.html) (10 min)
2. [📝 Guide pratique](Fichiers%20d'aide/instructions_etudiant.md) (45 min)
3. [📊 Auto-évaluation](Fichiers%20d'aide/evaluation-form.html) (10 min)

### **💻 Développeur expérimenté**
1. [📝 Instructions pratiques](Fichiers%20d'aide/instructions_etudiant.md) (30 min)
2. [🔧 Debug au besoin](Fichiers%20d'aide/debug-guide.html)
3. [📊 Évaluation](Fichiers%20d'aide/evaluation-form.html) (10 min)

## 🆘 **Besoin d'Aide ?**

| Type de problème | 👉 Solution |
|------------------|-------------|
| **🚨 Erreur JavaScript** | [🔧 Debug Guide](Fichiers%20d'aide/debug-guide.html) |
| **🤔 Ne sais pas comment faire** | [💡 Script avec indices](Fichiers%20d'aide/script-avec-indices.js) |
| **🌐 Problème API/Network** | Console F12 + [🔧 Debug Guide](Fichiers%20d'aide/debug-guide.html) |
| **📱 Design responsive** | Inspectez avec F12 + [📝 Instructions CSS](Fichiers%20d'aide/instructions_etudiant.md) |

## 📦 **Livrable Final**

- ✅ **Repository GitHub** avec code source
- ✅ **Site déployé** sur GitHub Pages 
- ✅ **evaluation.json** complété via le formulaire
- ✅ **README personnalisé** avec votre nom

**🎯 Temps estimé :** 60-90 minutes  
**🏁 Deadline :** Fin de séance + 30 minutes

---

**🚀 Prêt à commencer ? Suivez le [workflow ci-dessus](#📋-workflow-de-travail) selon votre niveau !**

---
*Mission créée par l'équipe pédagogique BTS SIO SLAM 2025-26*