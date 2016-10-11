
# sort-github-user-repos

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][paypal-donations] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/sort-github-user-repos.svg)](https://www.npmjs.com/package/sort-github-user-repos) [![Downloads](https://img.shields.io/npm/dt/sort-github-user-repos.svg)](https://www.npmjs.com/package/sort-github-user-repos) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Sort GitHub repositories by stars for user.

## :cloud: Installation

```sh
$ npm i --save sort-github-user-repos
```


## :clipboard: Example



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

## :memo: Documentation


### `sortByStars(username, token, callback)`
Sorts the user repos by stars.

#### Params
- **String** `username`: The GitHub username.
- **String** `token`: An optional access token.
- **Function** `callback`: The callback function.

#### Return
- **gh.js** The `gh.js` instance.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
