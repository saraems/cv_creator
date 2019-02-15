## CV creator

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It is a single page app hosted on GitHub Pages in which user can prepare personal resume and download it in .pdf format. 


The user should be able to insert data manually or by using LinkedIn account. 

However, according to GitHub Pages: 

`#### Notes on client-side routing
 GitHub Pages doesn’t support routers that use the HTML5 `pushState` history API under the hood (for example, React Router using `browserHistory`). This is because when there is a fresh page load for a url like `http://user.github.io/todomvc/todos/42`, where `/todos/42` is a frontend route, the GitHub Pages server returns 404 because it knows nothing of `/todos/42`. If you want to add a router to a project hosted on GitHub Pages, here are a couple of solutions:
 * You could switch from using HTML5 history API to routing with hashes. If you use React Router, you can switch to `hashHistory` for this effect, but the URL will be longer and more verbose (for example, `http://user.github.io/todomvc/#/todos/42?_k=yknaj`). [Read more](https://reacttraining.com/react-router/web/api/Router) about different history implementations in React Router.
 * Alternatively, you can use a trick to teach GitHub Pages to handle 404 by redirecting to your `index.html` page with a special redirect parameter. You would need to add a `404.html` file with the redirection code to the `build` folder before deploying your project, and you’ll need to add code handling the redirect parameter to `index.html`. You can find a detailed explanation of this technique [in this guide](https://github.com/rafrex/spa-github-pages).

In the other hand, LinkedIn oAuth2.0 process does not allow as a redirection uri a path with '#', which is integral part of `hashRouting` for react-router-dom.

Please treat connect with LinkedIn feature, as a demo feature which could be run on proper server instead of GitHub Pages.




## Libraries
 [`jsPDF`](https://www.npmjs.com/package/jspdf) 
[`html2canvas`](https://html2canvas.hertzen.com/)
[`query-string`](https://www.npmjs.com/package/query-string)
[`react-router-dom`](https://www.npmjs.com/package/react-router-dom)
[`node-sass`](https://www.npmjs.com/package/node-sass?activeTab=versions)
[`gh-pages`](https://www.npmjs.com/package/gh-pages)
 



