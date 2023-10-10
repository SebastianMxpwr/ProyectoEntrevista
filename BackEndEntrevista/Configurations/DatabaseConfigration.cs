namespace BackEndEntrevista.Configurations;

public class DatabaseSettings
{
    public string ConnectionString {get; set;} = null!;
    public string DatabaseName {get; set;} = null!;
    public string CollectionPersona {get; set;} = null!;
    public string CollectionPrestamo {get; set;} = null!;
}   
