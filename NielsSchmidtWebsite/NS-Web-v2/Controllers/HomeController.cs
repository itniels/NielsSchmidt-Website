using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using NS_Web_v2.Models;

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

        public ActionResult ContactSent()
        {
            GetLanguage();
            return View();
        }

        public ActionResult ContactNotSent()
        {
            GetLanguage();
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Contact(EmailFormModel model)
        {
            if (ModelState.IsValid)
            {
                var body = "<p>Email From: {0} ({1}) ("+ GetLanguage() + ")</p><p>Message:</p><p>{2}</p>";
                var message = new MailMessage();
                message.To.Add(new MailAddress(System.Configuration.ConfigurationManager.AppSettings.Get("email_address_to")));
                message.From = new MailAddress(System.Configuration.ConfigurationManager.AppSettings.Get("email_address_from"));
                message.Subject = "A " + model.Type + " inquiry from " + model.FromName;
                message.Body = string.Format(body, model.FromName, model.FromEmail, model.Message);
                message.IsBodyHtml = true;

                using (var smtp = new SmtpClient())
                {
                    smtp.UseDefaultCredentials = false;
                    var credential = new NetworkCredential
                    {
                        UserName = System.Configuration.ConfigurationManager.AppSettings.Get("email_username"),
                        Password = System.Configuration.ConfigurationManager.AppSettings.Get("email_password"),
                    };
                    smtp.Credentials = credential;
                    smtp.Host = System.Configuration.ConfigurationManager.AppSettings.Get("email_smtp");
                    smtp.Port = 587;
                    smtp.EnableSsl = true;
                    smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                    await smtp.SendMailAsync(message);
                    return RedirectToAction("ContactSent");
                }
            }
            return RedirectToAction("ContactNotSent");
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