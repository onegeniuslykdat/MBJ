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
        public void CreateUser()
        {
            // Act
            var result = repositoryService.Create(new MockData() { Id = 4, Name = "Test"}).Result;

            // Assert
            Assert.True(result);
        }
        [Theory]
        [InlineData(1)]
        public void EditUser(int id)
        {
            // Act
            var editResult = repositoryService.Edit(id, new MockData() { Name = "Test" }).Result;
            var markArchiveResult = repositoryService.MarkArchived(id).Result;
            var markDeleteResult = repositoryService.MarkDeleted(id).Result;

            // Assert
            Assert.True(editResult);
            Assert.True(markArchiveResult);
            Assert.True(markDeleteResult);
        }
        [Theory]
        [InlineData(1)]
        public void DeleteUser(int id)
        {
            // Act
            var result = repositoryService.Delete(id).Result;

            // Assert
            Assert.Equal(result, id);
        }
        [Theory]
        [InlineData(1)]
        [InlineData(0)]
        public void GetUserById(int id)
        {
            // Act
            var result = repositoryService.GetById(id).Result;

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
        public void GetUsers()
        {
            // Act
            var result = repositoryService.Get().Result;

            // Assert
            Assert.True(result.Count() > 0);
        }
    }
}