using Newtonsoft.Json;
using RabbitMQ.Client;
using System.Text;
using System.Text.Json.Serialization;

namespace ServiceCommunication
{
    public class CommunicationSenderMock<T> : ICommunicationSender<T>
    {
        public CommunicationSenderMock(string _connectionString, string _apiKey, string _queueName, string _topicName)
        {
            ConnectionString = _connectionString;
            ApiKey = _apiKey;
            QueueName = _queueName;
            TopicName = _topicName;
        }

        public string ConnectionString { get; }
        public string ApiKey { get; }
        public string QueueName { get; }
        public string TopicName { get; }

        public async Task<T> SendMessage(T data)
        {
            try
            {
                //var factory = new ConnectionFactory { HostName = "localhost" };
                //using var connection = await factory.CreateConnectionAsync();
                //using var channel = await connection.CreateChannelAsync();

                //await channel.QueueDeclareAsync(queue: QueueName, durable: false, exclusive: false, autoDelete: false,
                //arguments: null);

                string messageAsString = JsonConvert.SerializeObject(data);
                byte[] body = Encoding.UTF8.GetBytes(messageAsString);

                //await channel.BasicPublishAsync(exchange: string.Empty, routingKey: QueueName, body: body);

                return data;
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception: ", e);
                return data;
            }
        }
    }
}
