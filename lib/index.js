const GitHub = require("gh.js");

/**
 * sortByStars
 * Sorts the user repos by stars.
 *
 * @name sortByStars
 * @function
 * @param {String} username The GitHub username.
 * @param {String} token An optional access token.
 * @param {Function} callback The callback function.
 * @return {gh.js} The `gh.js` instance.
 */
function sortByStars(username, token, callback) {
    if (typeof token === "function") {
        callback = token;
        token = undefined;
    }

    var gh = new GitHub({ token: token });
    gh.get(`users/${username}/repos`, { all: true }, (err, repos) => {
        if (err) { return callback(err); }
        repos.sort(function (a, b) {
            return a.stargazers_count < b.stargazers_count ? 1 : -1;
        });
        callback(null, repos);
    });

    return gh;
}

module.exports = sortByStars;
