using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;

namespace Contacts.Entities
{
    public class Email
    {
        [BsonElement("label")]
        public string Label { get; set; }

        [BsonElement("value")]
        public string Value { get; set; }
    }
}