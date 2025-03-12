# 🚑 Système d’Alerte pour les Urgences

Une application permettant d’envoyer une alerte géolocalisée aux hôpitaux et ambulances les plus proches en un clic. 
Conçue pour être minimaliste et réactive, elle assure une utilisation rapide et efficace en situation d’urgence.

## 📌 Fonctionnalités
- 📍 **Bouton d’urgence** : Envoi instantané d’une alerte.
- 🗺️ **GPS intégré** : Géolocalisation précise de l’utilisateur.
- 🔔 **Notification** : Alerte envoyée aux hôpitaux et ambulances les plus proches.
- 🏥 **Liste des hôpitaux** : Affichage des établissements de santé à proximité.

## 📱 Côté patient (mobile – React Native)  
- Déclenchement d’une alerte avec localisation GPS.  
- Sélection du type d’urgence.  
- Envoi d’un message aux secours.  

## 🏥 Côté hôpital (web – React.js)  
- Réception et gestion des alertes en temps réel.  
- Affichage de la localisation sur Google Maps.  
- Communication avec le patient via messagerie.

## 🛠️ Technologies utilisées
- **Frontend** : React Native (Interface mobile), React.js (Interface web)
- **Backend** : Node.js avec Express
- **Base de données** : PostgreSQL / Firebase
- **API** : Google Maps API (pour la géolocalisation et l’affichage des hôpitaux)

## 🚀 Installation et démarrage
### Prérequis
- Node.js installé
- Un compte Google Cloud pour l’API Google Maps
- Un environnement React Native configuré

### Installation
```bash
# Cloner le projet
git clone https://git@github.com:2MJ-DEV/My-App-React.git
cd emergency-alert

# Installer les dépendances
npm install
```

### Lancement du projet
#### Pour le frontend mobile (React Native)
```bash
cd mobile
expo start
```

#### Pour le frontend web (React.js)
```bash
cd web
npm start
```

#### Pour le backend (Node.js)
```bash
cd backend
npm run dev
```

## 📷 Aperçu


## 📜 Licence
Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📖 Wiki
 [Consulter le Wiki du projet](https://github.com/2MJ-DEV/Academic-project/wiki)

## 👨‍💻 Contributeurs
- **Jules MUKADI** - Développeur principal.

## 📩 Contact
📧 Email : julesmukadi.dev@gmail.com
🌐 Site Web : [Mon Site web](https://julesmukadi.me)
