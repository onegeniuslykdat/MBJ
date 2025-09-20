using RepositoryHub;
using User.DTO;
using UserNS = User.Model;

namespace User.Service
{
    public class UserService : IUserService
    {
        private readonly IRepository<UserNS.User>? userRepo;
        private readonly ILogger<UserService>? logger;
        public UserService(IRepository<UserNS.User> _userRepo, ILogger<UserService>? _logger)
        {
            userRepo = _userRepo;
            logger = _logger;
        }
        public async Task<ResponseDTO<UserNS.User>> CreateUserAsync(UserNS.User newUser)
        {
            try
            {
                var result = await userRepo.CreateAsync(newUser);
                
                var errorMsg = result ? $"{nameof(CreateUserAsync)}: Successfully created user with email {newUser.Email}."
                    : $"{nameof(CreateUserAsync)}: Could not create user with email {newUser.Email}.";
                logger.LogInformation(errorMsg);

                return new ResponseDTO<UserNS.User>()
                {
                    Data = result ? newUser : null,
                    IsSuccess = result,
                    ErrorMessage = result ? String.Empty : errorMsg
                };
            }
            catch (Exception e)
            {
                logger.LogError($"{nameof(CreateUserAsync)}: Could not create user with email {newUser.Email}. " + e);
                return new ResponseDTO<UserNS.User>()
                {
                    Data = null,
                    IsSuccess = false,
                    ErrorMessage = String.Empty
                }; ;
            }
        }

        public Task<ResponseDTO<UserNS.User>> EditUserAsync(int id, UserNS.User userData)
        {
            throw new NotImplementedException();
        }

        public async Task<ResponseDTO<IEnumerable<UserNS.User>>> GetUsersAsync()
        {
            try
            {
                var result = await userRepo.GetAsync();

                var errorMsg = result.Any() ? $"{nameof(GetUsersAsync)}: Successfully retrieved users."
                    : $"{nameof(GetUsersAsync)}: Could not retrieve users.";
                logger.LogInformation(errorMsg);

                return new ResponseDTO<IEnumerable<UserNS.User>>()
                {
                    Data = result,
                    IsSuccess = result.Any(),
                    ErrorMessage = result.Any() ? errorMsg : String.Empty
                };
            }
            catch (Exception e)
            {
                logger.LogError($"{nameof(GetUsersAsync)}: Could not retrieve users. " + e);
                return new ResponseDTO<IEnumerable<UserNS.User>>()
                {
                    Data = null,
                    IsSuccess = false,
                    ErrorMessage = String.Empty
                }; ;
            }
        }

        public Task<ResponseDTO<UserNS.User>> GetUserByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<ResponseDTO<bool>> ToggleUserArchiveAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<ResponseDTO<bool>> ToggleUserDeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<ResponseDTO<UserNS.User>> LoginUserAsync(string email, string password)
        {
            throw new NotImplementedException();
        }
    }
}
