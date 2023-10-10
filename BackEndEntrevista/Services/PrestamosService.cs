using BackEndEntrevista.Configurations;
using MongoDB.Driver;
using BackEndEntrevista.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson;

namespace BackEndEntrevista.Services;

public class PrestamosService
{
    private readonly IMongoCollection<Prestamo> _prestamoCollection;
    
    public PrestamosService(IOptions<DatabaseSettings> databaSettings)
    {
        var mongoClient = new MongoClient(databaSettings.Value.ConnectionString);
        var mongoDb = mongoClient.GetDatabase(databaSettings.Value.DatabaseName);
        _prestamoCollection = mongoDb.GetCollection<Prestamo>(databaSettings.Value.CollectionPrestamo);
    }

    public async Task<List<Prestamo>> GetAsync() => await _prestamoCollection.Find(_=> true).ToListAsync();

    public async Task<List<Prestamo>> GetPrestamosPersonaAsync(string correo) => await _prestamoCollection.Find(x=> x.Email == correo).ToListAsync();
    
    public async Task<Prestamo> GetAsync(string id) => await _prestamoCollection.Find(x=> x.id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Prestamo prestamo) => await _prestamoCollection.InsertOneAsync(prestamo);

    public async Task UpdateAsync(Prestamo prestamo)=> await _prestamoCollection.ReplaceOneAsync(x=> x.id == prestamo.id, prestamo);

    public async Task RemoveAsync(string id) => await _prestamoCollection.DeleteOneAsync(x=> x.id == id);
}