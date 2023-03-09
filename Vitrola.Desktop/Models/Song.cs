using System;
namespace Vitrola.Desktop.Models
{
	public class Song
	{
		public string Id { get; set; } = string.Empty;
		public string SongId { get; set; } = string.Empty;
		public string Name { get; set; }
		public string SongUrl { get; set; }
		public string ThumbnailUrl { get; set; }
    }
}

