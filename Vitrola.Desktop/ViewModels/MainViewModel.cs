using System;
using System.Collections.ObjectModel;
using System.Windows.Input;
using Vitrola.Desktop.Models;
using Vitrola.Desktop.Services;
using Vitrola.Desktop.Views;

namespace Vitrola.Desktop.ViewModels
{
	public class MainViewModel : BaseViewModel
	{
        public ObservableCollection<Song> Songs { get; } = new ObservableCollection<Song>();
        public ICommand AddSongCommand { get; }
        public ICommand GetSongsCommand { get; }

        private ISongService _songService = new SongService();

        public MainViewModel()
		{
            AddSongCommand = new Command(AddSong);
            GetSongsCommand = new Command(async () => await GetSongs());
        }

        async void AddSong()
        {
            await Shell.Current.GoToAsync($"//{nameof(SongPage)}");
        }

        async Task GetSongs()
        {
            var songs = await _songService.GetSongsAsync();
            foreach (var song in songs)
            {
                Songs.Add(song);
            }
        }
    }
}

