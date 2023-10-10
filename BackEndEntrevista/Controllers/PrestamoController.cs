
using BackEndEntrevista.Models;
using BackEndEntrevista.Services;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using System.Text.Json;
 

namespace BackEndEntrevista.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PrestamoController: ControllerBase
{
    private readonly PrestamosService _prestamoService;
    private readonly PersonaService _personaService;
    public PrestamoController(PrestamosService prestamosService, PersonaService personaService) 
    { 
        _prestamoService = prestamosService;
        _personaService = personaService;
    }

    [HttpGet("listarPrestamos")]
    public async Task<IActionResult> Get()
    {
        var prestamosExistentes = await _prestamoService.GetAsync();
        if(prestamosExistentes is null)
            return NotFound("No hay prestamos existentes");
        
        return Ok(prestamosExistentes);
    }


    [HttpGet("listarPrestamoId/{id:length(24)}")]
    public async Task<IActionResult> Get(string id)
    {
        if(id is null)
            return BadRequest("No se recibio un id");

        var prestamoExistente = await _prestamoService.GetAsync(id);
        
        if(prestamoExistente is null)
            return NotFound();

        return Ok(prestamoExistente);
    }

    [HttpGet("listarPrestamoCorreo")]
    public async Task<IActionResult> Getp(string email)
    {

        if(email is null)
            return BadRequest("No se recibio un email valido");

        
        var prestamoExistente = await _prestamoService.GetPrestamosPersonaAsync(email);
        
        if(prestamoExistente is null)
            return NotFound();

        return Ok(prestamoExistente);
    }

    [HttpPost("crearPrestamo")]
    public async Task<IActionResult> Post(Prestamo prestamo)
    {
        var fechaprestamo  = prestamo.FechaDePrestamo;
        var year = fechaprestamo.Year;
        var month = fechaprestamo.Month;
        var fechaPago =  new DateTime(year, month, prestamo.DiaDeCobro);
        var dineroPorMes = prestamo.CantidadPrestada / prestamo.MesesDelPrestamo;

        var personaPagos = await _personaService.GetAsyncEmail(prestamo.Email);
        if(personaPagos == null)
            return BadRequest("el emaill de la persona no existe");
        

        for (int i = 0; i < prestamo.MesesDelPrestamo; i++)
        {
            PagoDelPrestamo pago = new PagoDelPrestamo();
            pago.id = ObjectId.GenerateNewId().ToString();
            pago.Monto = dineroPorMes;
            pago.PeriodoDePago = i + 1;
            pago.FechaDePago = DateOnly.FromDateTime(fechaPago).AddMonths(i+1);
            pago.EnTiempo = true;
            prestamo.Pagos.Add(pago);
            personaPagos.Pagos.Add(pago);
        }
        
        await _personaService.UpdatePagoAsync(personaPagos);
        await _prestamoService.CreateAsync(prestamo);
        return CreatedAtAction(nameof(Get), new {id = prestamo.id}, prestamo);

    }

    [HttpPut("actuzalizarPrestamo/{id:length(24)}")]
    public async Task<IActionResult> Put(string id, Prestamo prestamo)
    {
        if(id is null)
            return BadRequest("No se recibio un id");

        var existingPrestamo = await _prestamoService.GetAsync(id);

        if (existingPrestamo is null)
            return BadRequest("No se pudo actulizar");

        prestamo.id = existingPrestamo.id;
        await _prestamoService.UpdateAsync(prestamo);

        return Ok();
    }


    [HttpPut("Pago/{idPersona:length(24)}")]
    public async Task<IActionResult> Put(PagoDelPrestamo pago, string idPersona)
    {
        if(idPersona is null)
            return BadRequest("No se recibio un id");

        var existingPersona = await _personaService.GetAsync(idPersona);

        if (existingPersona is null)
            return BadRequest("No esta registrada la persona o no se");
        
        var pagotmp = new PagoDelPrestamo();
        foreach (var item in existingPersona.Pagos)
        {
            if(item.id == pago.id)
                pagotmp = item;
            break;
        }
        var today = DateTime.Now.Day;
        if(today > pagotmp.FechaDePago.Day){
            pagotmp.EnTiempo = false;
        }else
        {
            pagotmp.EnTiempo = true;

        }

        await _personaService.UpdatePagoAsync(existingPersona);

        return Ok();
    }

    [HttpDelete("borrarPrestamo/{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        if(id is null)
            return BadRequest("No se recibio un id");

        var existingPrestamo = await _prestamoService.GetAsync(id);

        if (existingPrestamo is null)
            return BadRequest();

        await _prestamoService.RemoveAsync(id);

        return Ok();
    }
}