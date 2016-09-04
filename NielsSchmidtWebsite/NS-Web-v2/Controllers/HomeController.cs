using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NS_Web_v2.Controllers
{
    public class HomeController : Controller
    {
        public RedirectResult Index()
        {
            return Redirect("/Home/Introduction");
        }

        public ActionResult Introduction()
        {
            if (GetLanguage() == "DA")
                return View("Index_DA");

            return View("Index_EN");
        }

        public ActionResult Skills()
        {
            if (GetLanguage() == "DA")
                return View("Skills_DA");

            return View("Skills_EN");
        }

        public ActionResult Portfolio()
        {
            if (GetLanguage() == "DA")
                return View("Portfolio_DA");

            return View("Portfolio_EN");
        }

        public ActionResult Education()
        {
            if (GetLanguage() == "DA")
                return View("Education_DA");

            return View("Education_EN");
        }

        public ActionResult Work()
        {
            if (GetLanguage() == "DA")
                return View("Work_DA");

            return View("Work_EN");
        }

        public ActionResult Contact()
        {
            if (GetLanguage() == "DA")
                return View("Contact_DA");

            return View("Contact_EN");
        }

        public void ChangeLanguage(string language)
        {
            if (language == "DA")
            {
                HttpCookie cookie = new HttpCookie("language");
                cookie.Value = "DA";
                HttpContext.Response.Cookies.Remove("language");
                HttpContext.Response.SetCookie(cookie);
                Session["language"] = "DA";
            }
            else
            {
                HttpCookie cookie = new HttpCookie("language");
                cookie.Value = "EN";
                HttpContext.Response.Cookies.Remove("language");
                HttpContext.Response.SetCookie(cookie);
                Session["language"] = "EN";
            }
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
                ChangeLanguage("EN");
                return "EN";
            }
        }
    }
}