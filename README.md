sort-github-user-repos
======================

Sort GitHub repositories by stars for user.

## Live demo
http://jsfiddle.net/UFYW4/

## Code

### HTML

```html
<!-- https://github.com/IonicaBizau/sort-github-user-repos -->

<div class="repo template">
    <span class="stars">
        <span class="count"></span> ★
    </span>
    <a target="blank" class="name"></a>
</div>
```

### JavaScript (requires jQuery)

```js
function getAllRepos (user, callback, page, repos) {
    page = page || 1;
    repos = repos || [];
    $.getJSON("https://api.github.com/users/" + user + "/repos?per_page=100&page=" + page, function (newRepos) {
        if (newRepos.length) {
            repos = repos.concat(newRepos);
            return getAllRepos (user, callback, ++page, repos);
        }
        callback (null, repos);
    });
}

var $repoTempl = $(".repo.template").clone().removeClass("template");
$(".repo.template").remove();

getAllRepos ("IonicaBizau", function (err, repos) {
    console.log(repos);
    
    repos.sort (function (a, b) {
        return (a.stargazers_count < b.stargazers_count) ? 1 : -1;
    });
    
    for (var i = 0; i < repos.length; ++i) {
        var cRepo = repos[i]
          , $newRepo = $repoTempl.clone()
          ;
        
        $newRepo.find(".stars .count").text(cRepo.stargazers_count);
        $newRepo.find(".name").text(cRepo.name);
        $newRepo.find(".name").attr({
            href: cRepo.html_url
        });
        $("body").append($newRepo);
    }
});
```
