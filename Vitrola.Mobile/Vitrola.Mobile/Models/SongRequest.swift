//
//  SongRequest.swift
//  Vitrola.Mobile
//
//  Created by Natanael Ureña Fernández  on 12/3/23.
//

import Foundation

struct SongRequest: Codable {
    var songRequestId: String?
    var songId: String?
    var songName: String?
    var songArtist: String?
    var isForAddingNewSong: Bool
    var isForPlayingSong: Bool
    var songRequestDate: Date
}
