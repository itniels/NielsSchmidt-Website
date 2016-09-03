class SiteLanguage {

    SetLanguage() {
        if (localStorage.getItem("SiteLanguage") === "DA") {
            // Menu
            document.getElementById("lang_menu_AboutMe").innerHTML = "Introduktion";
            document.getElementById("lang_menu_Skills").innerHTML = "Færdigheder";
            document.getElementById("lang_menu_Portfolio").innerHTML = "Portefølje";
            document.getElementById("lang_menu_Education").innerHTML = "Uddannelse";
            document.getElementById("lang_menu_WorkHistory").innerHTML = "Arbejde";
            document.getElementById("lang_menu_ContactMe").innerHTML = "Kontakt";
            // footer
            document.getElementById("lang_footer_long").innerHTML = "Designet, skrevet og programeret af Niels Schmidt - &copy; Copyright 2016.";
            document.getElementById("lang_footer_short").innerHTML = "Lavet af Niels Schmidt - &copy; Copyright 2016.";
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
            // footer
            document.getElementById("lang_footer_long").innerHTML = "Created, written and programmed by Niels Schmidt - &copy; Copyright 2016.";
            document.getElementById("lang_footer_short").innerHTML = "Created by Niels Schmidt - &copy; Copyright 2016.";
            // Text
            document.getElementById("lang_sidebar_FindMeOn").innerHTML = "Find me on";
        } else {
            
        }
    }

}

window.onload = () => {
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