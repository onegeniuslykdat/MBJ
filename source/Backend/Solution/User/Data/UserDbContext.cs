using Microsoft.EntityFrameworkCore;
using UserNS = User.Model;

namespace User.Data
{
    public class UserDbContext: DbContext
    {
        private readonly string? connectionstring;
        public UserDbContext(IConfiguration _config)
        {
            connectionstring = _config.GetConnectionString("UserDb");
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(connectionstring);
            //optionsBuilder.LogTo(Console.WriteLine, Microsoft.Extensions.Logging.LogLevel.Information);
            base.OnConfiguring(optionsBuilder);
        }
        public DbSet<UserNS.User> Users { get; set; }
    }
}
