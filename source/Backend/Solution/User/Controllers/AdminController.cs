using Microsoft.AspNetCore.Mvc;
using User.DTO;
using UserNS = User.Model;
using User.Service;

namespace User.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AdminController : ControllerBase
{
    private readonly IUserService userService; 

    private readonly ILogger<AdminController> logger;

    public AdminController(ILogger<AdminController> _logger, IUserService _userService)
    {
        logger = _logger;
        userService = _userService;
    }

    [HttpGet("GetAdmins")]
    public async Task<IActionResult> GetAdmins()
    {
        try
        {
            var result = (await userService.GetUsersAsync()).Data.Where(u => u.Category == UserNS.UserCategory.Admin);

            return Ok(result);
        }
        catch (Exception e)
        {
            logger.LogError($"{nameof(GetAdmins)}: An error occurred: {e}");

            return StatusCode(500);
        }
    }
    [HttpPost("CreateAdmin")]
    public async Task<IActionResult> CreateAdmin([FromBody] AdminDTO admin)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                logger.LogError($"{nameof(CreateAdmin)}: Bad request for: {admin.Email}");
                return StatusCode(400);
            }

            UserNS.Admin newUser = new()
            {
                Email = admin.Email,
                PhoneNo = admin.PhoneNo,
                Password = admin.Password,
                FirstName = admin.FirstName,
                LastName = admin.LastName,
                AddressLine = admin.AddressLine,
                Suburb = admin.Suburb,
                State = admin.State,
                PostCode = admin.PostCode
            };
            var result = await userService.CreateUserAsync(newUser);

            return Ok(result);
        }
        catch (Exception e)
        {
            logger.LogError($"{nameof(CreateAdmin)}: An error occurred: {e}");

            return StatusCode(500);
        }
    }
    [HttpPut("LoginAdmin")]
    public async Task<IActionResult> LoginAdmin([FromBody] LoginDTO loginInfo)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                logger.LogError($"{nameof(LoginAdmin)}: Bad request for: {loginInfo.Email}");
                return StatusCode(400);
            }

            var result = await userService.LoginUserAsync(loginInfo.Email, loginInfo.Password);

            return Ok(result);
        }
        catch (Exception e)
        {
            logger.LogError($"{nameof(LoginAdmin)}: An error occurred: {e}");

            return StatusCode(500);
        }
    }
}
