IUT Nantes LP : SIL ~ Reddit Gallery project.

# GitHub link
You can find this project on my [GitHub](https://github.com/theredfish/lp-sil-reddit-gallery) page.

# Known issues
## Fetch
Unfortunately some browsers can't use fetch function with "file" and "ftp" URLs [(see fetch spec)](https://fetch.spec.whatwg.org/#basic-fetch).

After some tests fetch is supported with "file:" protocol by these browsers : Chromium(v 47), Iceweasel(v 38.5.0).

# Quick start
## Interface without JavaScript
Open `interface.html` with your favorite browser.

## Interface with JavaScript
### Build the project
Open a terminal, `cd` into the lp-sil-reddit-gallery project and launch
`gulp build`. Now you should have "build" folder in your "js" parent folder.

If you need, you can launch `gulp watch` or `gulp` to rebundle the project when changes occurs in `resources/**/*.js`. 

### Install dependencies
Next, launch `npm install` to install node modules (React, ReactDOM, Fetch polyfill, Babel, ...) necessary to the project.

### App.html
Finally, open `app.html` with a browser which support fetch with
"file:" protocol.
