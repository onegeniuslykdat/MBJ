namespace ServiceCommunication
{
    public interface ICommunicationReceiver<T>
    {
        public Task<T> ReceiveMessage(T data);
    }
}
