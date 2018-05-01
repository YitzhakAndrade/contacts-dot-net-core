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
using Microsoft.Extensions.Configuration;

namespace Contacts.Controllers
{
    [Route("api/[controller]")]
    public class ContactsController : Controller
    {
        private readonly IConfiguration configuration;

        public ContactsController(IConfiguration config)
        {
            configuration = config;
        }

        private IMongoDatabase GetDatabase()
        {
            var connStr = configuration.GetConnectionString("Contacts");
            MongoClientSettings settings = MongoClientSettings.FromUrl(
                new MongoUrl(connStr)
            );
            settings.SslSettings = new SslSettings() { EnabledSslProtocols = SslProtocols.Tls12 };
            var client = new MongoClient(settings);
            var db = client.GetDatabase("contacts");
            return db;
        }

        // GET api/contacts
        [HttpGet]
        public IEnumerable<Contact> Get()
        {
            var db = GetDatabase();
            var collection = db.GetCollection<Contact>("contacts");

            //collection.Find(new BsonDocument());
            var contacts = collection.Find(_ => true).ToList();

            return contacts;
        }

        // GET api/contacts/5ae26000bf45d42870615f3e
        [HttpGet("{id}")]
        public Contact Get(string id)
        {
            var db = GetDatabase();
            var collection = db.GetCollection<Contact>("contacts");

            var contact = collection.Find(c => c.Id == ObjectId.Parse(id)).FirstOrDefault();
            return contact;
        }

        // POST api/contacts
        [HttpPost]
        public Contact Post([FromBody]Contact contact)
        {
            var db = GetDatabase();
            var collection = db.GetCollection<Contact>("contacts");
            contact.GenerateNewIdForUpserting();
            var filter = Builders<Contact>.Filter.Eq(c => c.Id, contact.Id);
            var options = new FindOneAndReplaceOptions<Contact, Contact> { IsUpsert = true,  };
            var result = collection.FindOneAndReplace(filter, contact, options);
            return result;
        }

        // DELETE api/contacts/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            var db = GetDatabase();
            var collection = db.GetCollection<Contact>("contacts");
            var filter = Builders<Contact>.Filter.Eq(c => c.Id, ObjectId.Parse(id));
            collection.FindOneAndDelete(filter);
        }
    }
}
