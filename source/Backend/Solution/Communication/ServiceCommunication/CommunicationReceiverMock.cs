using Newtonsoft.Json;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System.Text;
using System.Text.Json.Serialization;

namespace ServiceCommunication
{
    public class CommunicationReceiverMock<T> : ICommunicationReceiver<T>
    {
        public CommunicationReceiverMock(string _connectionString, string _apiKey, string _queueName, string _topicName)
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

        public async Task<T> ReceiveMessage(T data)
        {
            try
            {
                //var factory = new ConnectionFactory { HostName = "localhost" };
                //using var connection = await factory.CreateConnectionAsync();
                //using var channel = await connection.CreateChannelAsync();

                //await channel.QueueDeclareAsync(queue: QueueName, durable: false, exclusive: false, autoDelete: false,
                //arguments: null);

                //var consumer = new AsyncEventingBasicConsumer(channel);
                //consumer.ReceivedAsync += (model, ea) =>
                //{
                //    var body = ea.Body.ToArray();
                //    var message = Encoding.UTF8.GetString(body);
                //    return Task.CompletedTask;
                //};

                //await channel.BasicConsumeAsync(QueueName, autoAck: true, consumer: consumer);

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
