using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace BackEndEntrevista.Models;

// public class Pagos
// {
//     [BsonElement("monto")] public decimal Monto {get; set;}
//     [BsonElement("periodoPago")] public int PeriodoPago {get; set;}
//     [BsonElement("fechaPago")] public DateOnly FechaPago {get; set;}
//     [BsonElement("enTiempo")] public bool EnTiempo {get; set;}

// }

public class Persona
{
    [BsonId][BsonRepresentation(BsonType.ObjectId)]public string? id {get; set;}
    [BsonElement("nombre")] public string Nombre {get; set;} = null!;
    [BsonElement("apellidopaterno")] public string ApellidoPaterno {get; set;} = null!;
    [BsonElement("apellidomaterno")] public string ApellidoMaterno {get; set;} = null!;
    [BsonElement("email")] public string Email {get; set;} = null!;
    [BsonElement("pagos")] public List<PagoDelPrestamo> Pagos {get; set;} = null!;



}

