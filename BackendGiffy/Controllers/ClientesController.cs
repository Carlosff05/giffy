using BackendGiffy.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace BackendGiffy.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClientesController : ControllerBase
    {
        private static List<Cliente> clientes = new List<Cliente>
        {
            new Cliente { Id = 1, Nombre = "Juan Pérez", Contrasenna = "Hola"},
            new Cliente { Id = 2, Nombre = "María López", Contrasenna = "Mundo"}
        };

        [HttpGet]
        public ActionResult<IEnumerable<Cliente>> GetClientes()
        {
            return Ok(clientes);
        }

        [HttpGet("{id}")]
        public ActionResult<Cliente> GetCliente(int id)
        {
            var cliente = clientes.FirstOrDefault(c => c.Id == id);

            if (cliente == null)
                return NotFound();

            return Ok(cliente);
        }

        [HttpPost]
        public ActionResult<Cliente> CreateCliente([FromBody] ClienteDTO clienteDTO)
        {
            int id = clientes.Any() ? clientes.Max(c => c.Id) + 1 : 1;
            Cliente nuevoCliente = new Cliente{Id = id, Nombre = clienteDTO.Nombre, Contrasenna = clienteDTO.Contrasenna};
            clientes.Add(nuevoCliente);

            return CreatedAtAction(nameof(GetCliente), new { id = nuevoCliente.Id }, nuevoCliente);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateCliente(int id, [FromBody] Cliente clienteActualizado)
        {
            var cliente = clientes.FirstOrDefault(c => c.Id == id);

            if (cliente == null)
                return NotFound();

            cliente.Nombre = clienteActualizado.Nombre;

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCliente(int id)
        {
            var cliente = clientes.FirstOrDefault(c => c.Id == id);

            if (cliente == null)
                return NotFound();

            clientes.Remove(cliente);

            return NoContent();
        }
    }
}