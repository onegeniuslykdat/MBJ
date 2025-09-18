namespace ServiceCommunication
{
    public interface ICommunicationSender<T>
    {
        public Task<T> SendMessage(T data);
    }
}
