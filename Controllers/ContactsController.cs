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
        private string connectionString = @"mongodb://contacts-dot-net-core:cmuV6hrpBuy8IksvIkMOZUnzpNQPY4oZ77q9wbD8GocK94ztJZJjLok7pRxVLRBIBMXHAFm0oARQFbYdo785zA==@contacts-dot-net-core.documents.azure.com:10255/?ssl=true&replicaSet=globaldb";

        private IMongoDatabase GetDatabase()
        {
            MongoClientSettings settings = MongoClientSettings.FromUrl(
                new MongoUrl(connectionString)
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
        public void Post([FromBody]Contact contact)
        {
            var db = GetDatabase();
            var collection = db.GetCollection<Contact>("contacts");
            var filter = Builders<Contact>.Filter.Eq(c => c.Id, contact.Id);
            collection.FindOneAndReplace(filter, contact);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
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
