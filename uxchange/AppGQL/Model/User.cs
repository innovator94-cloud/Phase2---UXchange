using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace uxchange.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }

        

    }
}

