namespace RepositoryHub
{
    public interface IRepository<T> where T : BaseEntity
    {
        public Task<bool> Create(T data);
        public Task<T> Get();
        public Task<T> GetById(int id);        
        public Task<bool> Edit(int id, T newData);
        public Task<bool> MarkArchived(int id);
        public Task<bool> MarkDeleted(int id);
        public Task<int> Delete(int id);
    }
}
