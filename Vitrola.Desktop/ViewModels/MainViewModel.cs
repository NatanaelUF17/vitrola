using System;
using System.Windows.Input;
using Vitrola.Desktop.Views;

namespace Vitrola.Desktop.ViewModels
{
	public class MainViewModel : BaseViewModel
	{
        public List<object> mockData { get; set; }
        public ICommand AddSongCommand { get; }

        public MainViewModel()
		{
            mockData = new List<object>()
            {
                new { Name = "Nate", LastName = "Urena", FirstLetter = "N" },
                new { Name = "Cristal", LastName = "Alonzo", FirstLetter = "C" },
                new { Name = "Enmanuel", LastName = "Gonzalez", FirstLetter = "E" },
                new { Name = "Minely", LastName = "Urena", FirstLetter = "M" },
                new { Name = "Minelfy", LastName = "Urena", FirstLetter = "M" }
            };
            AddSongCommand = new Command(AddSong);
        }

        async void AddSong()
        {
            await Shell.Current.GoToAsync($"//{nameof(SongPage)}");
        }
	}
}

