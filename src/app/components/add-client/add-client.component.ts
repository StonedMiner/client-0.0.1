import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';

import { Client } from '../../models/Client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.sass']
})
export class AddClientComponent implements OnInit {

  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    firm: ''
  };

  @ViewChild('clientForm') form: any;

  constructor(private clientService: ClientService, private router: Router) {
    
   }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: Client, valid: boolean}) {
    if (!valid) {
      // error ausschmeißen
    } else {
      // Benutzer hinzufügen
      this.clientService.newClient(value);
      // zu dashboard 
      this.router.navigate(['/']);
    }
  }

}
