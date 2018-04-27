using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Authentication;
using System.Threading.Tasks;
using Contacts.Entities;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Core;

namespace Contacts.Controllers
{
    [Route("api/[controller]")]
    public class ContactsController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<object> Get()
        {
            string connectionString = @"";
            MongoClientSettings settings = MongoClientSettings.FromUrl(
                new MongoUrl(connectionString)
            );
            settings.SslSettings = new SslSettings() { EnabledSslProtocols = SslProtocols.Tls12 };
            var client = new MongoClient(settings);
            var db = client.GetDatabase("contacts");
            var collection = db.GetCollection<Contact>("contacts");

            //collection.Find(new BsonDocument());
            var contacts = collection.Find(_ => true).ToList();

            return contacts;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
