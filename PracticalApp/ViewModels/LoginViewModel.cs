﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PracticalApp.ViewModels
{
    public class LoginViewModel
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        public string Password { get; set; }

        public bool RememberMe { get; set; }
    }
}
