using System.Text.Json.Nodes;
using BackEndEntrevista.Models;
using BackEndEntrevista.Services;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace BackEndEntrevista.Controllers;

[ApiController]
[Route("api/[controller]")]

public class PersonaController: ControllerBase
{
    private readonly PersonaService _personaService;

    public PersonaController(PersonaService personaService) => _personaService = personaService;

    [HttpGet("listarPersonas")]
    public async Task<IActionResult> Get()
    {
        var personasExistentes = await _personaService.GetAsync();
        if(personasExistentes is null)
            return NotFound();
        
        return Ok(personasExistentes);
    }


    [HttpGet("listarPersona/{id:length(24)}")]
    public async Task<IActionResult> Get(string id)
    {
        if(id is null)
            return BadRequest("No se recibio un id");

        var personaExistente = await _personaService.GetAsync(id);
        
        if(personaExistente is null)
            return NotFound();

        return Ok(personaExistente);
    }

    [HttpPost("crearPersona")]
    public async Task<IActionResult> Post(Persona persona)
    {

        var existingPersona = await _personaService.GetAsyncEmail(persona.Email);
        if(existingPersona != null)
            return BadRequest("Ya existe esta persona");

        await _personaService.CreateAsync(persona);
        return CreatedAtAction(nameof(Get), new {id = persona.id}, persona);

    }

    [HttpPut("ActualizarPersona/{id:length(24)}")]
    public async Task<IActionResult> Put(Persona persona, string id)
    {
        if(id is null)
            return BadRequest("No se recibio un id");

        var existingPersona = await _personaService.GetAsync(id);

        if (existingPersona is null)
            return BadRequest("No se pudo actulizar");

        persona.id = existingPersona.id;
        await _personaService.UpdateAsync(persona);

        return Ok();
    }

    [HttpDelete("BorrarPersona/{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        if(id is null)
            return BadRequest("No se recibio un id");

        var existingPersona = await _personaService.GetAsync(id);

        if (existingPersona is null)
            return BadRequest("No existe la persona");
        
        await _personaService.RemoveAsync(id);

        return Ok();
    }
}