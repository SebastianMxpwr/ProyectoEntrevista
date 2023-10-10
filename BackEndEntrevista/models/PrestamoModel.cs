using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace BackEndEntrevista.Models;

public class PagoDelPrestamo 
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string id {get;set;}
    [BsonElement("monto")] public decimal Monto {get; set;}
    [BsonElement("periodoPago")] public int PeriodoDePago {get; set;}
    [BsonElement("fechaPago")] public DateOnly FechaDePago {get; set;}
    [BsonElement("enTiempo")] public bool EnTiempo {get; set;}
}

public class Prestamo
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? id {get; set;}
    [BsonElement("pagos")] public List<PagoDelPrestamo> Pagos {get; set;}
    [BsonElement("cl")] public string Cl {get; set;} = "asd";
    [BsonElement("nombre")] public string Nombre {get; set;} = null!;
    [BsonElement("apellidopaterno")] public string ApellidoPaterno {get; set;} = null!;
    [BsonElement("apellidomaterno")] public string ApellidoMaterno {get; set;} = null!;
    [BsonElement("cantidadprestada")] public decimal CantidadPrestada {get; set;}
    [BsonElement("telefono")] public string Telefono {get; set;} = "";
    [BsonElement("email")] public string Email {get; set;} = null!;
    [BsonElement("fechaDePrestamo")] public DateOnly FechaDePrestamo {get; set;}
    [BsonElement("diaDeCobro")] public int DiaDeCobro {get; set;}
    [BsonElement("mesesDelPrestamo")] public int MesesDelPrestamo {get; set;}
    [BsonElement("intereses")] public int Intereses {get; set;}


}

