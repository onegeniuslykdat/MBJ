using Microsoft.EntityFrameworkCore;
using RepositoryHub;
using User.Data;
using UserNS = User.Model;

namespace User.Service
{
    public class UserRepositoryService : IRepository<UserNS.User>
    {
        private UserDbContext Db { get; }
        //Logger
        public UserRepositoryService(UserDbContext _db)
        {
            Db = _db;
        }

        public async Task<bool> CreateAsync(UserNS.User data)
        {
            try
            {
                Db.Users.Add(data);
                await Db.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public async Task<IEnumerable<UserNS.User>> GetAsync()
        {
            var result = await Db.Users.ToListAsync();

            return result;
        }
        public async Task<UserNS.User> GetByIdAsync(int id)
        {
            try
            {
                var result = await GetAsync();
                if (result.Any())
                {
                    var user = result.FirstOrDefault(e => e.Id == id);
                    return user;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception)
            {
                return null;
            }

        }
        public async Task<bool> EditAsync(int id, UserNS.User newData)
        {
            try
            {
                var result = await GetAsync();
                if (result.Any())
                {
                    var user = result.FirstOrDefault(e => e.Id == id);
                    user = newData; //***
                    user.Id = id;
                    Db.Update(user);
                    await Db.SaveChangesAsync();
                    return true;
                }
                else
                {
                    return false;
                }
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
                var result = await GetAsync();
                if (result.Any())
                {
                    var user = result.FirstOrDefault(e => e.Id == id);
                    user.IsArchived = !user.IsArchived;
                    Db.Update(user);
                    await Db.SaveChangesAsync();
                    return true;
                }
                else
                {
                    return false;
                }
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
                var result = await GetAsync();
                if (result.Any())
                {
                    var user = result.FirstOrDefault(e => e.Id == id);
                    user.IsDeleted = true;
                    Db.Update(user);
                    await Db.SaveChangesAsync();
                    return true;
                }
                else
                {
                    return false;
                }
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
                var result = await GetAsync();
                if (result.Any())
                {
                    var user = result.FirstOrDefault(e => e.Id == id);
                    Db.Remove(user);
                    await Db.SaveChangesAsync();
                    return id;
                }
                else
                {
                    return 0;
                }
            }
            catch (Exception)
            {
                return 0;
            }
        }
    }
}
