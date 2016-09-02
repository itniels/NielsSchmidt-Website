function setPage(url) {
    $("#content").load(url);
    $("#content-xs").load(url);
}
function changeLanguageOnPage() {
    if (localStorage.getItem('SitePage') === "introduction")
        pageIntroduction();
    else if (localStorage.getItem('SitePage') === "skills")
        pageSkills();
    else if (localStorage.getItem('SitePage') === "portfolio")
        pagePortfolio();
    else if (localStorage.getItem('SitePage') === "education")
        pageEducation();
    else if (localStorage.getItem('SitePage') === "work")
        pageWork();
    else if (localStorage.getItem('SitePage') === "contact")
        pageContact();
    else
        setPage("/Views/_ERROR.html");
}
function pageIntroduction() {
    if (localStorage.getItem('SiteLanguage') === "EN") {
        setPage("/Views/_introduction_EN.html");
    }
    else if (localStorage.getItem('SiteLanguage') === "DA") {
        setPage("/Views/_introduction_DA.html");
    }
    else {
        setPage("/Views/_ERROR.html");
    }
    localStorage.setItem('SitePage', "introduction");
}
function pageSkills() {
    if (localStorage.getItem('SiteLanguage') === "EN") {
        setPage("/Views/_skills_EN.html");
    }
    else if (localStorage.getItem('SiteLanguage') === "DA") {
        setPage("/Views/_skills_DA.html");
    }
    else {
        setPage("/Views/_ERROR.html");
    }
    localStorage.setItem('SitePage', "skills");
}
function pagePortfolio() {
    if (localStorage.getItem('SiteLanguage') === "EN") {
        setPage("/Views/_portfolio_EN.html");
    }
    else if (localStorage.getItem('SiteLanguage') === "DA") {
        setPage("/Views/_portfolio_DA.html");
    }
    else {
        setPage("/Views/_ERROR.html");
    }
    localStorage.setItem('SitePage', "portfolio");
}
function pageEducation() {
    if (localStorage.getItem('SiteLanguage') === "EN") {
        setPage("/Views/_education_EN.html");
    }
    else if (localStorage.getItem('SiteLanguage') === "DA") {
        setPage("/Views/_education_DA.html");
    }
    else {
        setPage("/Views/_ERROR.html");
    }
    localStorage.setItem('SitePage', "education");
}
function pageWork() {
    if (localStorage.getItem('SiteLanguage') === "EN") {
        setPage("/Views/_work_EN.html");
    }
    else if (localStorage.getItem('SiteLanguage') === "DA") {
        setPage("/Views/_work_DA.html");
    }
    else {
        setPage("/Views/_ERROR.html");
    }
    localStorage.setItem('SitePage', "work");
}
function pageContact() {
    if (localStorage.getItem('SiteLanguage') === "EN") {
        setPage("/Views/_contact_EN.html");
    }
    else if (localStorage.getItem('SiteLanguage') === "DA") {
        setPage("/Views/_contact_DA.html");
    }
    else {
        setPage("/Views/_ERROR.html");
    }
    localStorage.setItem('SitePage', "contact");
}
//# sourceMappingURL=Controller.js.map