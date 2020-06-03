﻿using System;
using System.Collections.Generic;

namespace GraduationProject.Models
{
    public partial class UserProduct
    {
        public UserProduct()
        {
            Buys = new HashSet<Buys>();
            UserProductImages = new HashSet<UserProductImages>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int Condition { get; set; }
        public string UserId { get; set; }
        public int ProductId { get; set; }

        public virtual Product Product { get; set; }
        public virtual ApplicationUser User { get; set; }
        public virtual ICollection<Buys> Buys { get; set; }
        public virtual ICollection<UserProductImages> UserProductImages { get; set; }
    }
}
