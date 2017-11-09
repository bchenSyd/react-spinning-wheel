cd styleguide
git init
git add . 
git commit -m 'init'
git remote add origin https://git.heroku.com/bo-react-components.git
git push origin head -f
heroku logs --tail