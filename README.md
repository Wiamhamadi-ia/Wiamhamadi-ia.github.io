# wiamhamadi-ia.github.io

Site portfolio de Wiam Hamadi — https://wiamhamadi-ia.github.io

Site statique : HTML + CSS (+ un peu de JavaScript), sans framework ni étape de build.

```
index.html   tout le contenu, une section par bloc commenté (ACCUEIL, 01 — À PROPOS, …)
styles.css   palette (variables en haut du fichier), typographie, mise en page, animation
script.js    menu mobile et visionneuse des captures
assets/      CV et captures d'écran
```

## Modifier le contenu

1. Ouvrir `index.html` et chercher la section voulue (blocs repérés par `<!-- ===== … ===== -->`).
2. Modifier le texte directement dans le HTML.
3. Les éléments à compléter sont marqués `<!-- TODO: … -->`, avec le code à décommenter. Pour les retrouver : `grep -n "TODO" index.html`.

### Ajouter le CV

Déposer le fichier sous le nom exact `assets/CV_Wiam_Hamadi.pdf`. Les deux boutons « Télécharger le CV » (accueil et contact) pointent déjà vers ce fichier.

### Ajouter les captures de l'application

1. Déposer les images dans `assets/` (par exemple `capture-predire.png`, `capture-explorer.png`, `capture-limites.png`).
2. Dans `index.html`, section 03 — Projets, décommenter le bloc « Aperçu » ; ajuster les noms de fichiers et écrire un texte alternatif descriptif (`alt`) pour chaque image.
3. La visionneuse fonctionne automatiquement (fermeture par bouton, touche Échap ou clic à l'extérieur).

### Après une modification de `styles.css` ou `script.js`

Dans `index.html`, changer le suffixe de version (`styles.css?v=…`, `script.js?v=…`), par exemple avec la date du jour. Sinon, les navigateurs peuvent garder l'ancienne version en cache pendant quelques minutes et afficher la page de travers.

Aperçu local : ouvrir `index.html` dans un navigateur, ou lancer `python3 -m http.server` puis aller sur http://localhost:8000.

## Redéployer

GitHub Pages publie la branche `main` (dossier racine) :

```
git add .
git commit -m "Mise à jour du contenu"
git push origin main
```

Le site est à jour une à deux minutes après le push.
Réglage (une seule fois) : Settings → Pages → Source : « Deploy from a branch », branche `main`, dossier `/ (root)`.
