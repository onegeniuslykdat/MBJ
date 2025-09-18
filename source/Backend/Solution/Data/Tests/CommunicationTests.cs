using Moq;
using ServiceCommunication;

namespace Tests;
public class CommunicationTests
{
    private ICommunicationSender<string> communicationSenderService;
    private ICommunicationReceiver<string> communicationReceiverService;
    private readonly string conenctionString = "test";
    private readonly string apiKey = "test";
    private readonly string queueName = "test";
    private readonly string topicName = "test";
    public CommunicationTests()
    {
        //var communicationSenderServiceMock = new Mock<ICommunicationSender<string>>();
        //communicationSenderServiceMock.Setup(r => r.SendMessage(It.IsAny<string>())).ReturnsAsync("Test Message Sending");
        //repositoryServiceMock.Setup(r => r.Edit(1, It.IsAny<MockData>())).ReturnsAsync(true);
        //repositoryServiceMock.Setup(r => r.MarkArchived(1)).ReturnsAsync(true);
        //repositoryServiceMock.Setup(r => r.MarkDeleted(1)).ReturnsAsync(true);
        //repositoryServiceMock.Setup(r => r.Delete(1)).ReturnsAsync(1);
        //repositoryServiceMock.Setup(r => r.Get()).ReturnsAsync();
        //repositoryServiceMock.Setup(r => r.GetById(1)).ReturnsAsync();

        communicationSenderService = new CommunicationSenderMock<string>(conenctionString, apiKey, queueName, topicName); //communicationSenderServiceMock.Object;
        communicationReceiverService = new CommunicationReceiverMock<string>(conenctionString, apiKey, queueName, topicName);
    }
    [Fact]
    public async Task SendMessage()
    {
        // Act
        string result = await communicationSenderService.SendMessage("Testing. Testing");

        // Assert
        Assert.NotNull(result);
    }
    [Fact]
    public async Task ReceiveMessgae()
    {
        // Act
        string result = await communicationReceiverService.ReceiveMessage("Testing. Testing");

        // Assert
        Assert.NotNull(result);
    }
}
