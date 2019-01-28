using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    public interface IUserRepository
    {
        void Add<T>(T entity) where T : class;
        void ADelete<T>(T entity) where T : class;
        Task<bool> SaveAllAsync();
        Task<IEnumerable<User>> GetUsersAsync();
        Task<User> GetUserAsync(int id);
        Task<Photo> GetPhotoAsync(int id);
        Task<Photo> GetMainPhotoAsync(int userId);
    }
}