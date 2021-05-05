import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSource:BehaviorSubject<string>;
  public currentTheme:Observable<string>;
  constructor() { 
    this.themeSource = new BehaviorSubject(window.localStorage.getItem('theme') || 'light');
    this.currentTheme = this.themeSource.asObservable();
  }
  
  setTheme(theme: string){
    this.themeSource.next(theme);
  }
}
