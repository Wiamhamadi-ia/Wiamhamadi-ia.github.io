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

Déposer le fichier sous le nom exact `assets/CV_Wiam_Hamadi.pdf`. Les deux boutons « Voir le CV » (accueil et contact) pointent déjà vers ce fichier.

### Captures de l'application (projet Instagram)

Les fichiers sont dans `assets/projets/instagram/` :

- `capture-*.png` et `parcours.gif` : originaux ;
- `capture-*-web.webp` : versions allégées (1400 px de large) affichées sur le site ;
- `parcours-fin.webp` : dernière image du GIF, affichée à la place de l'animation si le visiteur a désactivé les animations.

Pour remplacer une capture : déposer le nouvel original, régénérer la version `-web.webp` (1400 px de large), puis mettre à jour `width`/`height` et le texte alternatif dans `index.html`.

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
