var SiteLanguage = (function () {
    function SiteLanguage() {
    }
    SiteLanguage.prototype.SetLanguage = function () {
        if (localStorage.getItem("SiteLanguage") === "DA") {
            // Menu
            document.getElementById("lang_menu_AboutMe").innerHTML = "Introduktion";
            document.getElementById("lang_menu_Skills").innerHTML = "Evner";
            document.getElementById("lang_menu_Portfolio").innerHTML = "Portefølje";
            document.getElementById("lang_menu_Education").innerHTML = "Uddannelse";
            document.getElementById("lang_menu_WorkHistory").innerHTML = "Arbejde";
            document.getElementById("lang_menu_ContactMe").innerHTML = "Kontakt Mig";
            //document.getElementById("lang_menu_LanguageSelector").innerHTML = "Language";
            // Text
            document.getElementById("lang_sidebar_FindMeOn").innerHTML = "Find mig på";
        }
        else if (localStorage.getItem("SiteLanguage") === "EN") {
            // Menu
            document.getElementById("lang_menu_AboutMe").innerHTML = "Introduction";
            document.getElementById("lang_menu_Skills").innerHTML = "Skills";
            document.getElementById("lang_menu_Portfolio").innerHTML = "Portfolio";
            document.getElementById("lang_menu_Education").innerHTML = "Education";
            document.getElementById("lang_menu_WorkHistory").innerHTML = "Work";
            document.getElementById("lang_menu_ContactMe").innerHTML = "Contact Me";
            //document.getElementById("lang_menu_LanguageSelector").innerHTML = "Sprog";
            // Text
            document.getElementById("lang_sidebar_FindMeOn").innerHTML = "Find me on";
        }
        else {
        }
    };
    return SiteLanguage;
}());
window.onload = function () {
    // Set initial language if none set already in browser.
    if (localStorage.getItem('SiteLanguage') === null) {
        localStorage.setItem('SiteLanguage', "EN");
    }
    // Set the site language
    var lang = new SiteLanguage();
    lang.SetLanguage();
    // Start us off on the introduction page
    pageIntroduction();
};
// Changes the language on the site.
function changeLanguage(langCode) {
    localStorage.setItem('SiteLanguage', langCode);
    var lang = new SiteLanguage();
    lang.SetLanguage();
    changeLanguageOnPage();
}
//# sourceMappingURL=app.js.map