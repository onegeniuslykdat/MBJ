using User.DTO;
using UserNS = User.Model;

namespace User.Service
{
    public interface IUserService
    {
        public Task<ResponseDTO<UserNS.User>> CreateUserAsync(UserNS.User newUser);
        public Task<ResponseDTO<UserNS.User>> EditUserAsync(int id, UserNS.User userData);
        public Task<ResponseDTO<bool>> ToggleUserDeleteAsync(int id);
        public Task<ResponseDTO<bool>> ToggleUserArchiveAsync(int id);
        public Task<ResponseDTO<IEnumerable<UserNS.User>>> GetUsersAsync();
        public Task<ResponseDTO<UserNS.User>> GetUserByIdAsync(int id);
        public Task<ResponseDTO<UserNS.User>> LoginUserAsync(string email, string password);
    }
}
