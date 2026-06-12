![Version](https://img.shields.io/badge/version-3.1-purple)
![SvxLink](https://img.shields.io/badge/SvxLink-2%20(24.02%2B)-blue)
![Debian](https://img.shields.io/badge/Debian-12%20%7C%2013-red)
![License](https://img.shields.io/badge/license-MIT-green)

# 🔗 Interface-EchoLink-Logs V3.1

<img src="https://flagcdn.com/w20/us.png" width="20"/> **[English](#english)** | <img src="https://flagcdn.com/w20/fr.png" width="20"/> **[Français](#français)**


## <img src="https://flagcdn.com/w20/us.png" width="30"/> English

> Lightweight web interface to display and manage EchoLink connection/disconnection logs from **SvxLink**, developed by [**CN8VX**](https://www.qrz.com/db/CN8VX).

---

## ⚠️ Compatibility

> **Interface-EchoLink-Logs V3.1 is compatible only with SvxLink version 2 (24.02) and later, running on Debian 12 and 13.**

---

## 🧩 Features

- 🔍 **EchoLink log reading**:
  - `/var/log/svxlink`
  - `/var/log/svxlink.1`
- ⚙️ **SvxLink configuration reading**:
  - `/etc/svxlink/svxlink.conf`
- 🖼️ **Custom display**:
  - Title: `Connection logs for EchoLink from Svxlink`
  - Custom logo: `img/M.A.R.R.I_trans.png`
  - Sysop name in footer: `CN8VX`
- 🔄 **Auto-refresh** every **5 seconds**
- 🔐 **User authentication**:
  - Can be enabled or disabled via configuration
  - Displays the logged-in username
  - Simple system based on a `username => password` array
- 🌐 **IP address column** — can be shown or hidden

---

## 🚀 Installation

### 1. Clone the repository

Navigate to your web server root directory:

```bash
cd /var/www/html
git clone https://github.com/CN8VX/echolinksvx echolinksvx
```

### 2. Set permissions

```bash
sudo chmod 777 -R /var/www/html/echolinksvx
```

### 3. Edit the configuration

Open the main configuration file:

```bash
sudo nano /var/www/html/echolinksvx/include/config.php
```

You can customize:

| Parameter | Description |
|-----------|-------------|
| Log paths | Set the paths to the log files |
| SvxLink config path | Set the path to `svxlink.conf` |
| Users & passwords | Define allowed credentials |
| Logo | Change the displayed logo |
| Sysop name | Change the name shown in the footer |
| IP display | Enable/disable the IP address column |
| Authentication | Enable/disable the login page |

### 4. Access the interface

Open your browser and go to one of these addresses:

```
http://[ip_address]/echolinksvx
http://[repeater-hostname]/echolinksvx
```

---

## ⚙️ User credentials configuration

In `config.php`, under the `login` section:

```php
'users' => [
    "admin" => "admin",
    "user"  => "123456",
    "user1" => "user123"
]
```

---

## 🏁 Default settings

| Parameter | Default value |
|-----------|---------------|
| Authentication | ❌ Disabled |
| IP address column | ❌ Hidden |
| Default username | `admin` |
| Default password | `admin` |

---

## 🛡️ Security

This system is basic and intended for **private or local use**.  
For a public production deployment, it is recommended to add:

- 🔒 **Password hashing** (bcrypt or equivalent)
- 🌐 **HTTPS** protection via Apache or Nginx with a TLS certificate
- 🧱 **Firewall rules** or access via **VPN**

---

## 📬 Author

- **Sysop**: CN8VX
- **Email**: [cn8vx.ma@gmail.com](mailto:cn8vx.ma@gmail.com)
- **Project**: Web interface for EchoLink based on [SvxLink](https://www.svxlink.org/)

---

*Interface-EchoLink-Logs V3.1 — [**CN8VX**](https://www.qrz.com/db/CN8VX)*

---

## <img src="https://flagcdn.com/w20/fr.png" width="30"/> Français
# 🔗 Interface-EchoLink-Logs V3.1

> Interface web légère pour afficher et gérer les logs de connexion/déconnexion EchoLink depuis **SvxLink**, développée par [**CN8VX**](https://www.qrz.com/db/CN8VX).

---

## ⚠️ Compatibilité

> **Interface-EchoLink-Logs V3.1 est compatible uniquement avec SvxLink version 2 (24.02) et ultérieures, sous Debian 12 et 13.**

---

## 🧩 Fonctionnalités

- 🔍 **Lecture des logs EchoLink** :
  - `/var/log/svxlink`
  - `/var/log/svxlink.1`
- ⚙️ **Lecture de la configuration SvxLink** :
  - `/etc/svxlink/svxlink.conf`
- 🖼️ **Affichage personnalisé** :
  - Titre : `Connection logs for EchoLink from Svxlink`
  - Logo personnalisé : `img/M.A.R.R.I_trans.png`
  - Nom du sysop en footer : `CN8VX`
- 🔄 **Rafraîchissement automatique** toutes les **5 secondes**
- 🔐 **Authentification utilisateur** :
  - Activable ou désactivable via la configuration
  - Affichage du nom de l'utilisateur connecté
  - Système basé sur un tableau de paires `utilisateur => mot de passe`
- 🌐 **Affichage des adresses IP** activable/désactivable

---

## 🚀 Installation

### 1. Cloner le dépôt

Placez-vous dans le répertoire racine de votre serveur web :

```bash
cd /var/www/html
git clone https://github.com/CN8VX/echolinksvx echolinksvx
```

### 2. Vérifier les permissions

```bash
sudo chmod 777 -R /var/www/html/echolinksvx
```

### 3. Modifier la configuration

Éditez le fichier de configuration principal :

```bash
sudo nano /var/www/html/echolinksvx/include/config.php
```

Vous pouvez personnaliser :

| Paramètre | Description |
|-----------|-------------|
| Chemins des logs | Modifier les chemins vers les fichiers de logs |
| Chemin conf SvxLink | Modifier le chemin vers `svxlink.conf` |
| Utilisateurs & mots de passe | Définir les identifiants autorisés |
| Logo | Changer le logo affiché |
| Nom du sysop | Modifier le nom affiché en footer |
| Affichage IP | Activer/désactiver la colonne des adresses IP |
| Authentification | Activer/désactiver la page de login |

### 4. Accéder à l'interface

Ouvrez votre navigateur et rendez-vous à l'une de ces adresses :

```
http://[adresse_ip]/echolinksvx
http://[hostname-du-repeteur]/echolinksvx
```

---

## ⚙️ Configuration des identifiants

Dans le fichier `config.php`, section `login` :

```php
'users' => [
    "admin" => "admin",
    "user"  => "123456",
    "user1" => "user123"
]
```

---

## 🏁 Paramètres par défaut

| Paramètre | Valeur par défaut |
|-----------|-------------------|
| Authentification | ❌ Désactivée |
| Colonne adresses IP | ❌ Masquée |
| Nom d'utilisateur par défaut | `admin` |
| Mot de passe par défaut | `admin` |

---

## 🛡️ Sécurité

Ce système est basique et destiné à un **usage privé ou local**.  
Pour un déploiement en production publique, il est recommandé d'ajouter :

- 🔒 Un **chiffrement des mots de passe** (bcrypt ou équivalent)
- 🌐 Une protection **HTTPS** via Apache ou Nginx avec un certificat TLS
- 🧱 Des **règles de firewall** ou un accès via **VPN**

---

## 📬 Auteur

- **Sysop** : CN8VX
- **Email** : [cn8vx.ma@gmail.com](mailto:cn8vx.ma@gmail.com)
- **Projet** : Interface web pour EchoLink basée sur [SvxLink](https://www.svxlink.org/)

---

*Interface-EchoLink-Logs V3.1 — [**CN8VX**](https://www.qrz.com/db/CN8VX)*
