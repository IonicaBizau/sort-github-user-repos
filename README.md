# sort-github-user-repos [![Support this project][donate-now]][paypal-donations]

Sort GitHub repositories by stars for user.

## Installation

```sh
$ npm i --save sort-github-user-repos
```

## Example

```js
const sortGhRepos = require("sort-github-user-repos")
    , emojic = require("emojic")
    ;

// Sort @alysonla repos by stars
sortGhRepos("alysonla", (err, repos) => {
    console.log(err || repos.map(function (c) {
        return `${c.stargazers_count} ${emojic.star} ${c.full_name}`;
    }).join("\n"));
});
// =>
// 23 ⭐ alysonla/hubber-memory-game
// 6 ⭐ alysonla/hackday-card
// 4 ⭐ alysonla/travel
// 2 ⭐ alysonla/all-the-things
// 2 ⭐ alysonla/drizzydrakefanpage
// 1 ⭐ alysonla/back-office
// 1 ⭐ alysonla/sffoodtrucks
// 1 ⭐ alysonla/mojibar
// 1 ⭐ alysonla/alysonla.github.io
// 0 ⭐ alysonla/dotfiles
// 0 ⭐ alysonla/hub
// 0 ⭐ alysonla/css-robot
// 0 ⭐ alysonla/intro-class
// 0 ⭐ alysonla/johnny-cash
// 0 ⭐ alysonla/auditing
// 0 ⭐ alysonla/choose-your-own-adventure
// 0 ⭐ alysonla/motivational-text
// 0 ⭐ alysonla/oh-no-broken-code
// 0 ⭐ alysonla/patchwork
// 0 ⭐ alysonla/rap-city
// 0 ⭐ alysonla/html-css-resume-template
// 0 ⭐ alysonla/resume
// 0 ⭐ alysonla/heygirl
// 0 ⭐ alysonla/Casper
// 0 ⭐ alysonla/hello-world
// 0 ⭐ alysonla/sheetsee.js
// 0 ⭐ alysonla/hb-intro-final-project
// 0 ⭐ alysonla/student-sites
// 0 ⭐ alysonla/developer.github.com
// 0 ⭐ alysonla/suggestotron
// 0 ⭐ alysonla/github-for-developers-7
// 0 ⭐ alysonla/terminal-commands
// 0 ⭐ alysonla/github-for-developers-1
// 0 ⭐ alysonla/bottletodo
// 0 ⭐ alysonla/git-it
// 0 ⭐ alysonla/twitter.github.com
// 0 ⭐ alysonla/Full-Stack
// 0 ⭐ alysonla/TwitterWebDataConnector
// 0 ⭐ alysonla/eshas-restaurant
// 0 ⭐ alysonla/wwc-calendar
// 0 ⭐ alysonla/madlibs
// 0 ⭐ alysonla/zipfian-application-test
// 0 ⭐ alysonla/httparty
```

## Documentation

### `sortByStars(username, token, callback)`
Sorts the user repos by stars.

#### Params
- **String** `username`: The GitHub username.
- **String** `token`: An optional access token.
- **Function** `callback`: The callback function.

#### Return
- **gh.js** The `gh.js` instance.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md