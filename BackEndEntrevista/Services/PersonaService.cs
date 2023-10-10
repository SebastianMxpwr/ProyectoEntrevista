using BackEndEntrevista.Configurations;
using MongoDB.Driver;
using BackEndEntrevista.Models;
using Microsoft.Extensions.Options;

namespace BackEndEntrevista.Services;

public class PersonaService
{
    private readonly IMongoCollection<Persona> _personaCollection;
    
    public PersonaService(IOptions<DatabaseSettings> databaSettings)
    {
        var mongoClient = new MongoClient(databaSettings.Value.ConnectionString);
        var mongoDb = mongoClient.GetDatabase(databaSettings.Value.DatabaseName);
        _personaCollection = mongoDb.GetCollection<Persona>(databaSettings.Value.CollectionPersona);
    }

    public async Task<List<Persona>> GetAsync() => await _personaCollection.Find(_=> true).ToListAsync();

    public async Task<Persona> GetAsync(string id) => await _personaCollection.Find(x=> x.id == id).FirstOrDefaultAsync();

    public async Task<Persona> GetAsyncEmail(string email) => await _personaCollection.Find(x=> x.Email == email).FirstOrDefaultAsync();

    public async Task CreateAsync(Persona persona) => await _personaCollection.InsertOneAsync(persona);

    public async Task UpdateAsync(Persona persona)=> await _personaCollection.ReplaceOneAsync(x=> x.id == persona.id, persona);
    
    public async Task UpdatePagoAsync(Persona persona)=> await _personaCollection.ReplaceOneAsync(x=> x.id == persona.id, persona);

    public async Task RemoveAsync(string id) => await _personaCollection.DeleteOneAsync(x=> x.id == id);
}