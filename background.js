chrome.action.onClicked.addListener(tab => {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        let site = url.split("/")[2];
        if (site == "9anime.to") {
            let anime = (((url.split("/")[4]).split(".")[0]).replace(/-/g, " ")).replace(/ /g, "+");
            let episode = (url.split("/")[5]).split("-")[1];
            let link = "https://www.reddit.com/r/anime/search?q=" + anime + "+episode+" + episode + "+discussion&restrict_sr=on&include_over_18=on&sort=relevance&t=all";
            chrome.tabs.create({ url: link });
        } else if (site == "mangadex.org") {
            let title = tabs[0].title;
            let manga = ((title.split("-")[1]).slice(1)).replace(/ /g, "+");
            let chapter = title.split(" ")[3];
            let link = "https://www.reddit.com/r/manga/search?q=" + manga + "chapter+" + chapter + "+DISC&restrict_sr=on&include_over_18=on&sort=relevance&t=all";
            chrome.tabs.create({ url: link });
        }
    });
});