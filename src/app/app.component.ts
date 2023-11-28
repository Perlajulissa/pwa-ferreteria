import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ferreteria-express';
  linkColor: string = 'grey';
  public readonly VAPID_PUBLIC_KEY ='BHJ-hP1CgzEU2piShEluCC-8zwLzV1YZLVCMisSluOpiZUE0EdDa73dcsk23GwDYWJo3cprOEDklhPSQ4aXFl_k';

  changeColor(route: string): void {
        this.linkColor = 'orange';

    }
  
    constructor(private swPush: SwPush) {
      this.subscribeToNotifications();
    }
  
    subscribeToNotifications(): any {
      const options = {
        serverPublicKey: this.VAPID_PUBLIC_KEY
      };
  
      this.swPush.requestSubscription(options)
        .then(sub => {
          const token = JSON.parse(JSON.stringify(sub));
          console.log('********OJOO********', token);
          
          // Descomenta las líneas siguientes para guardar el token utilizando el servicio apiRest
          /*
          this.apiRest.saveToken(token).subscribe(
            (rest: Object) => {
              console.log(rest);
            },
            (err) => {
              console.log('ERR', err);
            }
          );
          */
        })
        .catch(err => console.error('UPS :(', err));
    }
}