import { Component } from '@angular/core';
import { LoggingService } from 'app/logging.service';
import { AccountsService } from './account.service';
//import { LoggingService } from 'app/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers:[LoggingService]
})
export class NewAccountComponent {
  

  constructor(private loggingService : LoggingService, private accountService : AccountsService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    

    //const service = new LoggingService();
    //service.logStatusChange(accountStatus);
    this.accountService.addAccount(accountName,accountStatus);
    //this.loggingService.logStatusChange(accountStatus);
  }
}
