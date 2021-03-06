﻿using System.Diagnostics;
using System.Web;
using System.Web.Mvc;

namespace NS_Web_v2
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
            if (!Debugger.IsAttached)
            {
                GlobalFilters.Filters.Add(new RequireHttpsAttribute());
            }
                
        }
    }
}
