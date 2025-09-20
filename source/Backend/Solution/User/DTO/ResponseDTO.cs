namespace User.DTO
{
    public class ResponseDTO<T>
    {
        public T? Data { get; set; }
        public bool IsSuccess { get; set; }
        public string? ErrorMessage { get; set; }
        public DateTime ResponseDate { get; set; }
    }
}
