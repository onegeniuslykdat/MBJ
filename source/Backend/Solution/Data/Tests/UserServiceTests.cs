using Moq;
using RepositoryHub;
using UserNS = User.Model;
using User.Service;
using User.DTO;
using User.Model;

namespace Tests
{
    /*
     *  public Task<bool> EditUser(int id, UserNS.User userData);
        public Task<bool> ToggleUserDelete(int id);
        public Task<bool> ToggleUserArchive(int id);
        public Task<IEnumerable<UserNS.User>> GetUsers();
        public Task<UserNS.User> GetUserById(int id);
     */
    public class UserServiceTests
    {
        private readonly IUserService userService;
        public UserServiceTests()
        {
            var userServiceMock = new Mock<IUserService>();
            userServiceMock.Setup(r => r.CreateUserAsync(It.IsAny<UserNS.User>())).ReturnsAsync(new ResponseDTO<UserNS.User>()
            {
                Data = It.IsAny<UserNS.User>(),
                IsSuccess = true
            });
            userServiceMock.Setup(r => r.GetUsersAsync()).ReturnsAsync(new ResponseDTO<IEnumerable<UserNS.User>>()
            {
                Data = [new UserNS.User() {
                    Id = 2,
                    Email = "email@test.com",
                    PhoneNo = "0980",
                    Password = "******",
                    FirstName = "Fname2",
                    LastName = "Lname2",
                    AddressLine = "90, Creek street",
                    Suburb = "Brisbane",
                    State = "Queensland",
                    PostCode = "4000"
                }],
                IsSuccess = true
            });
            //repositoryServiceMock.Setup(r => r.Edit(1, It.IsAny<MockData>())).ReturnsAsync(true);
            //repositoryServiceMock.Setup(r => r.MarkArchived(1)).ReturnsAsync(true);
            //repositoryServiceMock.Setup(r => r.MarkDeleted(1)).ReturnsAsync(true);
            //repositoryServiceMock.Setup(r => r.Delete(1)).ReturnsAsync(1);
            //repositoryServiceMock.Setup(r => r.Get()).ReturnsAsync();
            //repositoryServiceMock.Setup(r => r.GetById(1)).ReturnsAsync();

            userService = userServiceMock.Object;
        }
        [Fact]
        public async Task CreateUser()
        {
            // Act
            var result = await userService.CreateUserAsync(new UserNS.Admin()
            {
                Id = 1,
                Email = "anth@gmail.com",
                PhoneNo = "0660",
                Password = "****",
                FirstName = "Fname",
                LastName = "Lname",
                AddressLine = "100, Elizabeth street",
                Suburb = "Brisbane",
                State = "Queensland",
                PostCode = "4000"
            });

            // Assert
            Assert.True(result.IsSuccess);
        }
        [Theory]
        [InlineData(1)]
        public async Task EditUser(int id)
        {
            // Act
            //var editResult = await repositoryService.Edit(id, new MockData() { Name = "Test" });
            //var markArchiveResult = await repositoryService.MarkArchived(id);
            //var markDeleteResult = await repositoryService.MarkDeleted(id);

            //// Assert
            //Assert.True(editResult);
            //Assert.True(markArchiveResult);
            //Assert.True(markDeleteResult);
        }
        [Theory]
        [InlineData(1)]
        public async Task DeleteUser(int id)
        {
            // Act
            //var result = await repositoryService.Delete(id);

            //// Assert
            //Assert.Equal(result, id);
        }
        [Theory]
        [InlineData(1)]
        [InlineData(0)]
        public async Task GetUserById(int id)
        {
            // Act
            //var result = await repositoryService.GetById(id);

            //// Assert
            //if(id == 0)
            //{
            //    Assert.Null(result);
            //} else
            //{
            //    Assert.NotNull(result);
            //}
        }
        [Theory]
        [InlineData("email@test.com", "password")]
        public async Task LoginUser(string email, string password)
        {
            // Act
            //var result = await repositoryService.GetById(id);

            //// Assert
            //if(id == 0)
            //{
            //    Assert.Null(result);
            //} else
            //{
            //    Assert.NotNull(result);
            //}
        }
        [Fact]
        public async Task GetUsers()
        {
            // Act
            var result = await userService.GetUsersAsync();

            // Assert
            Assert.True(result.IsSuccess);
        }
    }
}