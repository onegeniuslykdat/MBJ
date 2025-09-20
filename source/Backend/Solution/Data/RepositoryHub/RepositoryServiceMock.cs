namespace RepositoryHub
{
    public class RepositoryServiceMock<T>: IRepository<MockData>
    {
        private List<MockData> testData = new List<MockData>
        {
            new MockData
            {
                Id = 1, Name = "Anthony"
            },
            new MockData
            {
                Id = 2, Name = "Ud"
            },
            new MockData
            {
                Id = 3, Name = "Ony"
            }
        };
        public async Task<bool> CreateAsync(MockData data)
        {
            try
            {
                testData.Add(data);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public async Task<IEnumerable<MockData>> GetAsync()
        {
            return testData;
        }
        public async Task<MockData> GetByIdAsync(int id)
        {
            try
            {
                var item = testData.FirstOrDefault(d => d.Id == id);
                return item;
            }
            catch (AggregateException)
            {
                return null;
            }
            
        }
        public async Task<bool> EditAsync(int id, MockData newData)
        {
            try
            {
                foreach (var item in testData.Where(d => d.Id == id)) {
                    item.Name = newData.Name;
                }
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public async Task<bool> MarkArchivedAsync(int id)
        {
            try
            {
                foreach (var item in testData.Where(d => d.Id == id))
                {
                    item.IsArchived = true;
                }
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public async Task<bool> MarkDeletedAsync(int id)
        {
            try
            {
                foreach (var item in testData.Where(d => d.Id == id))
                {
                    item.IsDeleted = true;
                }
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public async Task<int> DeleteAsync(int id)
        {
            try
            {
                var item = testData.First(d => d.Id == id);
                var result = testData.Remove(item);
                return result ? id : 0;
            }
            catch (Exception)
            {
                return 0;
            }
        }
    }
}
