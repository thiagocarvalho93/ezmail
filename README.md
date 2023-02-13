# EZmail

### Compilar e publicar nova build no github pages
```
npm run build
git add -f dist
git commit -m "<mensagem>"
git subtree push --prefix dist origin gh-pages
```
