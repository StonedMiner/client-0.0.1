import { Injectable } from '@angular/core';
import { Settings } from '../models/Settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings = {
    allowRegistration: true
    
  }

  getSettings(): Settings {
    return this.settings;
  }

  constructor() {
    if (localStorage.getItem('settings') != null) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }
   }

  changeSettings(settings) {
    localStorage.setItem('settings', JSON.stringify(settings));
  }
}
