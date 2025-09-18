namespace ServiceCommunication
{
    public interface ICommunication<T> : ICommunicationSender<T>, ICommunicationReceiver<T>
    {
        public Task SetupCommunication();
    }
}
