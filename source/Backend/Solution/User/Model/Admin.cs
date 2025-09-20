namespace User.Model
{
    public class Admin : User
    {
        public new UserCategory Category { get; } = UserCategory.Admin;
    }
}
