using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NS_Web_v2.Controllers
{
    public class PortfolioController : Controller
    {
        // GET: Portfolio
        public ActionResult Web()
        {
            if (GetLanguage() == "DA")
                return PartialView("_Web_DA");

            return PartialView("_Web_EN");
        }

        public ActionResult Wpf()
        {
            if (GetLanguage() == "DA")
                return PartialView("_Wpf_DA");

            return PartialView("_Wpf_EN");
        }

        public ActionResult Nuget()
        {
            if (GetLanguage() == "DA")
                return PartialView("_Nuget_DA");

            return PartialView("_Nuget_EN");
        }

        public ActionResult Winforms()
        {
            if (GetLanguage() == "DA")
                return PartialView("_Winforms_DA");

            return PartialView("_Winforms_EN");
        }

        private string GetLanguage()
        {

            if (HttpContext.Request.Cookies["language"] != null)
            {
                HttpCookie cookie = HttpContext.Request.Cookies.Get("language");
                Session["language"] = cookie.Value;
                return cookie.Value;
            }
            else
            {
                return "EN";
            }
        }
    }
}