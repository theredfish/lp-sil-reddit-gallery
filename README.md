IUT Nantes LP : SIL ~ Reddit Gallery project.

# Known issues
## Fetch
Unfortunately some browsers can't use fetch function with "file" and "ftp" URLs [(see fetch spec)](https://fetch.spec.whatwg.org/#basic-fetch).

After some tests, Fetch is **supported** with "file:" protocol by these browsers : Chromium(v 47), Iceweasel(v 38.5.0).

# Quick start
## Interface without JavaScript
Open `interface.html` with your favorite browser.

Note : This gallery is responsive with an effect "on click". I tried to implement some cool features. For that reason you will not see "filter by size" button.

## Interface with JavaScript
### Install dependencies
- Launch `npm install` to install node modules (Babel, presets, bower, ...) necessary to the project.
- Then, the command `bower install` offers React, ReactDOM and Fetch modules.


### Build the project
- Open a terminal, 
- `cd` into "lp-sil-reddit-gallery" project and launch
`gulp build`. 

Now you should have "build" folder in your "js" parent folder.

If you need, you can launch `gulp watch` to detect when changes occurs in `resources/**/*.js`. This command is useful during development.

### App.html
Finally, open `app.html` with a browser which support fetch with
"file:" protocol.
