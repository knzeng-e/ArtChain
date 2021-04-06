# ArtChain
A simple NFT exploration project

## Installation des dépendances

- [nodejs](https://nodejs.org/en/)
- truffle: ```npm install -g truffle```
- [infura](https://infura.io/)
- vscode

## Environnement

- Récupérer le répertoire principal sur github; dans un terminal, taper:
  - ```git clone "lien github"```
  - s'assurer qu'un fichier .gitignore existe, contenant au moins: "node_modules", ".env", ".gitignore", "build".
- créer un compte infura et lancer un nouveau projet; récuprérer la 'clé API' et le 'ID du projet'
  
### Initialisation

```javascript
npm install
```
NB: vérifier que le fichier "package.json" contient le module "dotenv" dans ses "dependencies". Si ce n'est pas le cas, taper la commande:
```npm install --save dotenv```

créer un fichier nommé ".env" et y fournir les informations suivantes:

- ```INFURA_KEY="_id infura_"```
-  ```INFURA_URL="https://rinkeby.infura.io/v3/_id_infura_"```
- ```MNEMONIC="_mnemonic du wallet metamask_"```
- ```OWNER_ADDRESS="_addresse du compte ethereum proprietaire_"```
- ```NFT_CONTRACT_ADDRESS="_Adresse du smart contrat: A reneigner après déploiement du smart contrat_"```
- ```API_TOKEN_URL="https://powerful-oasis-48134.herokuapp.com/DerWanderer/api/asset/"```
- ```NETWORK="rinkeby"```

### Déploiement

 - exécuter la commande: ```truffle deploy --network rinkeby [--reset] [--skip-dry-run]```
(l'option --reset est à positionner si des modifications du smart contrat ont eu lieu et que vous voulez déployer une nouvelle version)
- A la fin du déploiement, **copier**, dans les données affichées dans le terminal, **l'adresse du contrat qui vient d'être déployé**
- **Coller** cette addresse dans le fichier .env, entre les guillemets dans le champs **NFT_CONTRACT_ADDRESS**.

- Importer cette addresse dans le storefront d'opensea

### Configurer les méta-data des tokens

- Suivre les instructions [ici](https://dashboard.heroku.com/apps/powerful-oasis-48134/deploy/heroku-git) pour se connecter au git de Heroku
 - fichier metadata.js à adapater dans le dossier "backend"
 -déploiment sur héroku en 3 étapes:
    - ```git add .```
    - ```git commit -m "_message identifiant la modification a effectuer_"```
    - ```git push heroku master```

### Minter des tokens

- Ouvrir le fichier _mint.js_ présent dans le dossier _scripts_ et régler les valeurs des champs selon le paramétrage désiré:
  - const NUM_CREATURES: nombre de tokens à minter
  - const NUM_LOOTBOXES: nombre de tokens par lootbox 
