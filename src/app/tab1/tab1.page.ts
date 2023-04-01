import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyServicioService } from '../explore-container/my-servicio.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab1Page implements OnInit {
  constructor(
    private servicioR: MyServicioService
  ) {  }
  allCharacters: any;

  ngOnInit() {
    this.servicioR.getAllCharacters().then( (res: any) => {
      this.allCharacters = res;
      console.log (this.allCharacters);
    });
  }
}
