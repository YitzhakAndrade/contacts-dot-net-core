using System.Collections.Generic;

namespace Contacts.Entities
{
    public class Contact
    {
        public string Name { get; set; }

        public IEnumerable<Phone> Phones { get; set; }

        public IEnumerable<Email> Emails { get; set; }
    }
}