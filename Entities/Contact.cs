using System.Collections.Generic;
using System.Runtime.Serialization;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Contacts.Entities
{
    public class Contact
    {
        public ObjectId Id { get; set; }

        public void GenerateNewIdForUpserting(){
            if (Id == ObjectId.Empty) {
                Id = ObjectId.GenerateNewId();
            }
        }

        [DataMember, BsonIgnore]
        public string MongoId
        {
            get { return Id.ToString(); }
            set { Id = ObjectId.Parse(value); }
        }

        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("phones")]
        public IEnumerable<Phone> Phones { get; set; }

        [BsonElement("emails")]
        public IEnumerable<Email> Emails { get; set; }
    }
}