//
//  Song.swift
//  Vitrola.Mobile
//
//  Created by Natanael Ureña Fernández  on 12/3/23.
//

import Foundation

struct Song: Codable, Identifiable {
    var id: String
    var songId: String
    var name: String
    var songUrl: String
    var thumbnailUrl: String
}
