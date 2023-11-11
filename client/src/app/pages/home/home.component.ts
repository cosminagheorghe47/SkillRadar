import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  authorize_clickup() {
    window.location.href = 'https://app.clickup.com/api?client_id=R09HSDA1W9P1IPDX8FBH2PGR45USO7J9&redirect_uri=localhost:8005/callback'
  }
}
