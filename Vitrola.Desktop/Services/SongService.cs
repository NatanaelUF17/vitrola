using System;
using System.Diagnostics;
using System.Text;
using System.Text.Json;
using Vitrola.Desktop.Models;

namespace Vitrola.Desktop.Services
{
    public class SongService : ISongService
    {
        private HttpClient _httpClient;
        private JsonSerializerOptions _serializerOptions;

        public SongService()
        {
            _httpClient = new HttpClient();
            _httpClient.BaseAddress = new Uri("http://localhost:3000/api/v1/song");
            _serializerOptions = new JsonSerializerOptions()
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                WriteIndented = true
            };
        }

        public async Task AddSongAsync(Song song)
        {
            try
            {
                string json = JsonSerializer.Serialize<Song>(song, _serializerOptions);
                StringContent content = new StringContent(json, Encoding.UTF8, "application/json");

                HttpResponseMessage response = null;

                response = await _httpClient.PostAsync(_httpClient.BaseAddress, content);

                if (response.IsSuccessStatusCode)
                    Debug.WriteLine("Song Added Succesfully");
            }
            catch (Exception ex)
            {
                Debug.WriteLine($"Error: {ex.Message}");
            }
        }

        public async Task<List<Song>> GetSongsAsync()
        {
            var songs = new List<Song>();

            try
            {
                HttpResponseMessage response = await _httpClient.GetAsync(_httpClient.BaseAddress);
                if (response.IsSuccessStatusCode)
                {
                    string content = await response.Content.ReadAsStringAsync();
                    songs = JsonSerializer.Deserialize<List<Song>>(content, _serializerOptions);
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine($"Error: {ex.Message}");
            }

            return songs;
        }

        public Task GetSongAsync(string id)
        {
            throw new NotImplementedException();
        }
    }
}

