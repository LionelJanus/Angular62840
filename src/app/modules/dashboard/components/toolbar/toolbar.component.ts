import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Renderer2 } from '@angular/core';


@Component({
  selector: 'app-toolbar',
  standalone: false,
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  isDarkTheme = false; // Variable para gestionar el estado del tema oscuro
  router: any;

  constructor(private dialog: MatDialog, private renderer: Renderer2, ) {
    // Verificar el tema guardado en localStorage al inicio
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkTheme = true;
      this.renderer.addClass(document.body, 'dark-theme');
    }
  }

  // Función que cambia el tema
  toggleTheme() {
    if (this.isDarkTheme) {
      this.renderer.addClass(document.body, 'dark-theme');
      localStorage.setItem('theme', 'dark'); // Guardar la preferencia en localStorage
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
      localStorage.setItem('theme', 'light'); // Guardar la preferencia en localStorage
    }
  }

}
