using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Data;
using DatingApp.API.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _repo;
        private readonly IMapper _mapper;

        public UsersController(IUserRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }
        [HttpGet()]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _repo.GetUsersAsync();
            var usersReturn = _mapper.Map<IEnumerable<UserForListDTO>>(users);

            return Ok(usersReturn);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUserAsync(id);
            var userReturn = _mapper.Map<UserForDetailDTO>(user);
            return Ok(userReturn);
        }
    }
}