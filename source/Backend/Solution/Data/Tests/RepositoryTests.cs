using Moq;
using RepositoryHub;

namespace Tests
{
    public class RepositoryTests
    {
        private readonly IRepository<MockData> repositoryService;
        public RepositoryTests()
        {
            //var repositoryServiceMock = new Mock<IRepository<MockData>>();
            //repositoryServiceMock.Setup(r => r.Create(It.IsAny<MockData>())).ReturnsAsync(true);
            //repositoryServiceMock.Setup(r => r.Edit(1, It.IsAny<MockData>())).ReturnsAsync(true);
            //repositoryServiceMock.Setup(r => r.MarkArchived(1)).ReturnsAsync(true);
            //repositoryServiceMock.Setup(r => r.MarkDeleted(1)).ReturnsAsync(true);
            //repositoryServiceMock.Setup(r => r.Delete(1)).ReturnsAsync(1);
            //repositoryServiceMock.Setup(r => r.Get()).ReturnsAsync();
            //repositoryServiceMock.Setup(r => r.GetById(1)).ReturnsAsync();

            repositoryService = new RepositoryServiceMock<MockData>(); //repositoryServiceMock.Object;
        }
        [Fact]
        public async Task CreateUser()
        {
            // Act
            var result = await repositoryService.Create(new MockData() { Id = 4, Name = "Test"});

            // Assert
            Assert.True(result);
        }
        [Theory]
        [InlineData(1)]
        public async Task EditUser(int id)
        {
            // Act
            var editResult = await repositoryService.Edit(id, new MockData() { Name = "Test" });
            var markArchiveResult = await repositoryService.MarkArchived(id);
            var markDeleteResult = await repositoryService.MarkDeleted(id);

            // Assert
            Assert.True(editResult);
            Assert.True(markArchiveResult);
            Assert.True(markDeleteResult);
        }
        [Theory]
        [InlineData(1)]
        public async Task DeleteUser(int id)
        {
            // Act
            var result = await repositoryService.Delete(id);

            // Assert
            Assert.Equal(result, id);
        }
        [Theory]
        [InlineData(1)]
        [InlineData(0)]
        public async Task GetUserById(int id)
        {
            // Act
            var result = await repositoryService.GetById(id);

            // Assert
            if(id == 0)
            {
                Assert.Null(result);
            } else
            {
                Assert.NotNull(result);
            }
        }
        [Fact]
        public async Task GetUsers()
        {
            // Act
            var result = await repositoryService.Get();

            // Assert
            Assert.True(result.Count() > 0);
        }
    }
}