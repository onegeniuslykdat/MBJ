using System.ComponentModel.DataAnnotations;

namespace RepositoryHub
{
    public abstract class BaseEntity
    {
        [Key]
        public int Id { get; set; }
        public bool IsArchived { get; set; } = false;
        public bool IsDeleted { get; set; } = false;
        public DateTime Created { get; set; } = DateTime.Now;
    }
}