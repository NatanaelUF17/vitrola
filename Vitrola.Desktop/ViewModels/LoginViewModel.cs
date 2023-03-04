using System;
using System.Windows.Input;
using Vitrola.Desktop.Views;

namespace Vitrola.Desktop.ViewModels
{
	public class LoginViewModel : BaseViewModel
	{
		public Command LoginCommand { get; }

		private string userName;
		public string UserName
		{
			get => userName;
			set
			{
				userName = value;
				OnPropertyChanged();
            }
		}
		private string password;
		public string Password
		{
			get => password;
			set
			{
				password = value;
				OnPropertyChanged();
			}
		}

		private bool IsValid()
		{
			return !string.IsNullOrWhiteSpace(UserName) && !string.IsNullOrWhiteSpace(Password);
		}

		public LoginViewModel()
		{
			LoginCommand = new Command(OnLogin, IsValid);
			this.PropertyChanged += (_, __) => LoginCommand.ChangeCanExecute();
		}

		private async void OnLogin()
		{
			await Shell.Current.GoToAsync($"//{nameof(MainPage)}", true);
		}
	}
}

