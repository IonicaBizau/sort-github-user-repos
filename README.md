
# sort-github-user-repos

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/sort-github-user-repos.svg)](https://www.npmjs.com/package/sort-github-user-repos) [![Downloads](https://img.shields.io/npm/dt/sort-github-user-repos.svg)](https://www.npmjs.com/package/sort-github-user-repos)

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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:



## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
