import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  authorize_clickup() {
    window.location.href = 'https://app.clickup.com/api?client_id=R09HSDA1W9P1IPDX8FBH2PGR45USO7J9&redirect_uri=localhost:8005/callback'
  }
}
