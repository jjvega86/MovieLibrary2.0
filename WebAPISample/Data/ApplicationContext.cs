using Microsoft.EntityFrameworkCore;
using WebAPISample.Models;

namespace WebAPISample.Data
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions options)
            :base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Movie>().HasData(new Movie { MovieId = 1,  Title = "The Departed", Director = "Martin Scorcese" });
            modelBuilder.Entity<Movie>().HasData(new Movie { MovieId = 2, Title = "Star Wars", Director = "George Lucas" });
            modelBuilder.Entity<Movie>().HasData(new Movie { MovieId = 3, Title = "Fellowship of the Ring", Director = "Peter Jackson" });

        }

        public DbSet<Movie> Movies { get; set; }
    }
}
