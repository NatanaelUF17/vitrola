//
//  SongRequestServices.swift
//  Vitrola.Mobile
//
//  Created by Natanael Ureña Fernández  on 12/3/23.
//

import Foundation

class SongRequestServices: ObservableObject {
    @Published var songRequests = [SongRequest]()

    func getSongRequests(completation: @escaping ([SongRequest]) -> ()) {
        guard let url = URL(string: "http://localhost:3000/api/v1/song-request") else {
            print("Invalid Url...")
            return
        }
        
        URLSession.shared.dataTask(with: url) { data, response, error in
            let songRequestsResponse = try! JSONDecoder().decode([SongRequest].self, from: data!)
            print(songRequestsResponse)
            DispatchQueue.main.async {
                completation(songRequestsResponse)
            }
        }.resume()
    }
}
