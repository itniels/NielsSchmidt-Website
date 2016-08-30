function changeLanguageOnPage() {
    if (localStorage.getItem('SitePage') === "introduction") {
        pageIntroduction();
    }
}

function pageIntroduction() {
    if (localStorage.getItem('SiteLanguage') === "EN") {
        $("#content").load("/Views/_introduction_EN.html");
    }
    else if (localStorage.getItem('SiteLanguage') === "DA") {
        $("#content").load("/Views/_introduction_DA.html");
    } else {
        $("#content").load("/Views/_ERROR.html");
    }
    localStorage.setItem('SitePage', "introduction");
}