
class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

class SiteLanguage {

    SetLanguage() {
        if (localStorage.getItem("SiteLanguage") === "DA") {
            // Menu
            document.getElementById("lang_menu_AboutMe").innerHTML = "Introduktion";
            document.getElementById("lang_menu_Skills").innerHTML = "Evner";
            document.getElementById("lang_menu_Portfolio").innerHTML = "Portefølje";
            document.getElementById("lang_menu_Education").innerHTML = "Uddannelse";
            document.getElementById("lang_menu_WorkHistory").innerHTML = "Arbejde";
            document.getElementById("lang_menu_ContactMe").innerHTML = "Kontakt Mig";
        }
        else if (localStorage.getItem("SiteLanguage") === "EN") {
            // Menu
            document.getElementById("lang_menu_AboutMe").innerHTML = "Introduction";
            document.getElementById("lang_menu_Skills").innerHTML = "Skills";
            document.getElementById("lang_menu_Portfolio").innerHTML = "Portfolio";
            document.getElementById("lang_menu_Education").innerHTML = "Education";
            document.getElementById("lang_menu_WorkHistory").innerHTML = "Work";
            document.getElementById("lang_menu_ContactMe").innerHTML = "Contact Me";
        } else {
            
        }
    }

}

window.onload = () => {
    //var el = document.getElementById("content");
    //var greeter = new Greeter(el);
    //greeter.start();
    // Set initial language
    if (localStorage.getItem('SiteLanguage') === null) {
        localStorage.setItem('SiteLanguage', "EN");
    }
    var lang = new SiteLanguage();
    lang.SetLanguage();
    pageIntroduction();
};

function changeLanguage(langCode) {
    localStorage.setItem('SiteLanguage', langCode);
    var lang = new SiteLanguage();
    lang.SetLanguage();
    changeLanguageOnPage();
}

function translatePage() {
    var lang = new SiteLanguage();
    lang.SetLanguage();
}