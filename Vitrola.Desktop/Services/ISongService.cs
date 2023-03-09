using System;
using Vitrola.Desktop.Models;

namespace Vitrola.Desktop.Services
{
	public interface ISongService
	{
		Task<List<Song>> GetSongsAsync();
		Task GetSongAsync(string id);
		Task AddSongAsync(Song song);
	}
}

