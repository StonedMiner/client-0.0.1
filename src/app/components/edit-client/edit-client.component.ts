import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.sass']
})
export class EditClientComponent implements OnInit {
  id: string;
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    firm: ''
  };

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Get id from url
    this.id = this.route.snapshot.params['id'];
    // Get Client
    this.clientService.getClient(this.id).subscribe(client => this.client = client);
  }

  onSubmit({value, valid}: {value: Client, valid: boolean}) {
    // Id zu Kunden hinzufügen
    value.id = this.id;
    // update
    this.clientService.updateClient(value);
    this.router.navigate([`/client/` + this.id]);
  }

}
