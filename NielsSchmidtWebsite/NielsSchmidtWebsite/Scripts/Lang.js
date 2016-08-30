var GetLanguage = (function () {
    function GetLanguage() {
    }
    GetLanguage.prototype.demo = function (lang) {
        if (lang == "en")
            return "This is a demo";
        if (lang == "da")
            return "Dette er en demo";
        return "unknown";
    };
    return GetLanguage;
}());
//# sourceMappingURL=Lang.js.map