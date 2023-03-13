//
//  ContentView.swift
//  Vitrola.Mobile
//
//  Created by Natanael Ureña Fernández  on 28/2/23.
//

import SwiftUI

struct ContentView: View {
    
    @State var songs = [Song]()
    @State private var showingAlert: Bool = false
    
    func toggle() -> Void {
        showingAlert = true
    }
    
    var body: some View {
        VStack {
            
            HStack {
                CustomButton(text: "Request Song",
                             title: "Request Song",
                             message: "Should request a song",
                             actionText: "Ok", action: toggle,
                             showingAlertParam: showingAlert)
                .buttonStyle(.borderedProminent)
                
                CustomButton(text: "Request Song",
                             title: "Request Song",
                             message: "Should request a song",
                             actionText: "Ok", action: toggle,
                             showingAlertParam: showingAlert)
                .buttonStyle(.borderedProminent)
                
            }
            

            List(songs) { song in
                Text("\(song.name)")
            }
            .onAppear() {
                SongServices().getSongs(completation: { (songs) in
                    self.songs = songs
                })
            }.navigationTitle("Songs List")
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
