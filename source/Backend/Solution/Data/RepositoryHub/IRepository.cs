namespace RepositoryHub
{
    public interface IRepository<T> where T : BaseEntity
    {
        public Task<bool> CreateAsync(T data);
        public Task<IEnumerable<T>> GetAsync();
        public Task<T> GetByIdAsync(int id);        
        public Task<bool> EditAsync(int id, T newData);
        public Task<bool> MarkArchivedAsync(int id);
        public Task<bool> MarkDeletedAsync(int id);
        public Task<int> DeleteAsync(int id);
    }
}
