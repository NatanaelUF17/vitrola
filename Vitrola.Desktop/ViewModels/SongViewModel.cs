using System;
using System.Diagnostics;
using System.Windows.Input;
using Vitrola.Desktop.Models;
using Vitrola.Desktop.Services;
using Vitrola.Desktop.Views;

namespace Vitrola.Desktop.ViewModels
{
	public class SongViewModel : BaseViewModel
	{
        private Song Song { get; set; } = new Song();

        public Command SaveSongCommand { get; }

        private ISongService _songService = new SongService();

        public SongViewModel()
		{
            SaveSongCommand = new Command(SaveSong, IsValid);
            PropertyChanged += (_, __) => SaveSongCommand.ChangeCanExecute();
		}

		public string Name
		{
			get => Song.Name;
			set
			{
				if (Song.Name == value) return;
				Song.Name = value;
				OnPropertyChanged();
            }
		}

        public string SongUrl
        {
            get => Song.SongUrl;
            set
            {
                if (Song.SongUrl == value) return;
                Song.SongUrl = value;
                OnPropertyChanged();
            }
        }

        public string ThumbnailUrl
        {
            get => Song.ThumbnailUrl;
            set
            {
                if (Song.ThumbnailUrl == value) return;
                Song.ThumbnailUrl = value;
                OnPropertyChanged();
            }
        }

        private bool IsValid()
        {
            return !String.IsNullOrEmpty(Name)
                && !String.IsNullOrEmpty(SongUrl)
                && !String.IsNullOrEmpty(ThumbnailUrl);
        }

        private async void SaveSong()
        {
            await _songService.AddSongAsync(Song);
            await Shell.Current.GoToAsync($"{nameof(MainPage)}");
        }
    }
}

