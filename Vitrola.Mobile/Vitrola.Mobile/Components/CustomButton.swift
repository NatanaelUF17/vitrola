//
//  CustomButton.swift
//  Vitrola.Mobile
//
//  Created by Natanael Ureña Fernández  on 12/3/23.
//

import SwiftUI

struct CustomButton: View {
    var text: String
    var title: String
    var message: String
    var actionText: String
    var action: () -> Void
    
    @State var showingAlertParam: Bool
    
    var body: some View {
        Button {
            action()
        } label: {
            Text("\(text)")
        }
        .frame(alignment: .init(horizontal: .trailing, vertical: .center))
        .alert(isPresented: $showingAlertParam) {
            Alert(title: Text("\(title)"),
                  message: Text("\(message)"),
                  dismissButton: .default(Text("\(actionText)")))
        }
    }
}

struct CustomButton_Previews: PreviewProvider {
    static func test() -> Void {
        print("Test")
    }
    
    static var previews: some View {
        CustomButton(text: "Test",
                     title: "Title Test",
                     message: "Test Message",
                     actionText: "Ok",
                     action: { test() },
                     showingAlertParam: true)
    }
}
