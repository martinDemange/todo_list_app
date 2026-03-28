# Welcome to **todo_list_app**

## Presentation

This project is a REACT based app, that consist of a todo list.<br/>
For using this app, refere to the section **Available Scripts**.

## Functionalities

> HonHonHon, its fr*nch, sorry,

- Lorsque j'arrive sur l'application, je peux choisir de charger le backup (fichier JSON) ou de repartir de zéro. En option, une confirmation utilisateur est demandée pour le reset.

- Par défaut, je suis en mode Tache et je vois toutes les Taches non terminées ("filtre actif par défaut" = tache.etat ne se trouve pas dans ETAT_TERMINE). Je vois les Taches en cours, avec les 2 premières catégories (mode simple), triées par date d'échéance décroissante.

- En option, je peux basculer sur la vue des Dossiers à l'aide d'un bouton de mon choix.

- Juste au-dessus de la liste des Taches, si je suis en mode Tache (condition utile uniquement si option / par défaut sinon), j'ai accès aux élément de Tri / Filtre. Je peux trier par Date création, Date échéance, Nom. Je peux aussi filtrer par Dossiers (0, 1 ou n), Etats (0, 1 ou n), ou En cours (le "filtre actif par défaut") ; chaque action sur un élément du filtre en change son statut.

- En haut de la page (Header), je vois le Nb total de Taches (sans filtre), et le Nb non finis (cf "filtre par défaut"). En option, j'ai un camembert qui me donne la répartition exacte par Etat (dans la liste des Enums).

- En bas de page (Footer), j'ai un bouton "+" qui permet d'afficher dans une popup (composant Modal), le formulaire de création de Tache (Task). En option, je peux ajouter un Dossier (Folder).

- Chaque Tache affiche le titre, la date d'échéance ainsi que les 2 premiers dossier ("mode Simple"). Un triangle permet de basculer en "mode Complet", ce qui affiche tous les dossiers et la description. En option, un clic sur un dossier permet d'activer un filtre dessus.

- En mode Complet, je peux également ajouter un dossier ou basculer en mode édition afin de modifier les champs utiles (titre, description et date échéance).

- En option, les taches dont la date d'échéance est passée depuis une semaine ne sont plus affichées

Proposition de WireFrame :

(en cours)

Précisions :

- Si on relance l'application, on perd nos modifications en cours => c'est normal !!
- Chaque composant est dans un fichier avec son nom ; si j'ai du CSS à part, je mets les 2 dans un dossier au nom du composant.

## Available Scripts

> **NOTE :**<br/>
> See the file [start_note.md](./start_note.md) for more information.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

