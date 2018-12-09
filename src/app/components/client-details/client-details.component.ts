import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.sass']
})
export class ClientDetailsComponent implements OnInit {
  id: string;
  client: Client;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Get id from url
    this.id = this.route.snapshot.params['id'];
    // Get Client
    this.clientService.getClient(this.id).subscribe(client => {
      this.client = client;
      console.log(this.client);
    });
  }

  onDeleteClick() {
    if (confirm('Bist du dir sicher ?')) {
      this.clientService.deleteClient(this.client);
      this.router.navigate(['/']);
    }
  }

}
