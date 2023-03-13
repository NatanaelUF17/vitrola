//
//  SongService.swift
//  Vitrola.Mobile
//
//  Created by Natanael Ureña Fernández  on 12/3/23.
//

import Foundation

class SongServices: ObservableObject {
    @Published var songs = [Song]()

    func getSongs(completation: @escaping ([Song]) -> ()) {
        guard let url = URL(string: "http://localhost:3000/api/v1/song") else {
            print("Invalid Url...")
            return
        }
        
        URLSession.shared.dataTask(with: url) { data, response, error in
            let songsResponse = try! JSONDecoder().decode([Song].self, from: data!)
            print(songsResponse)
            DispatchQueue.main.async {
                completation(songsResponse)
            }
        }.resume()
    }
}
