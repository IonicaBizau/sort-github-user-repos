const sortGhRepos = require("../lib")
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
