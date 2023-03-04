using System;
namespace Vitrola.Desktop.Models
{
	public class Admin
	{
		public string Id { get; set; }
		public string AdminId { get; set; }
		public string Name { get; set; }
		public string LastName { get; set; }
		public string Role { get; set; }
		public string Username { get; set; }
		public string Password { get; set; }

		public string FullName => $"{Name} {LastName}";
	}
}

