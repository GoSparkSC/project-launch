### To Run
1. `npm install`
2. `foundation-watch` - This command's current utility is to create a local server, which allows you to update code, detect changes, and refresh the page automatically (hit the local server) in the event of changes. In other words, this will refresh the page every time you make an update to html or sass  _As a side note: this specific utility is called browserify, although you don't need to know anything about it to use it._

### To Deploy
1. `gulp build` - The purpose of this is to compile sass to css and multiple js files into a bundle before deploying.
2. Then push to master and merge to the gh-pages branch


### Additional Information

Do not use the css files but rather sass files under `scss/`. Also JS updates should go in `js/app.js`.
