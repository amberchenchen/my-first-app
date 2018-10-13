import { Component, OnInit } from '@angular/core';

@Component({
  selector:'app-servers',
  // selector: '[app-servers]', for html tag attribute
  // selector:'.app-servers',   for html tag class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowAddServer = true;
  serverCreationStatus = "Not Server Create";
  serverName = 'TestServer';
  serverCreated = false;
  bgColor = 'grey';
  onLine = 'testNgClass';
  servers = ['TestServer','TestServer 2'];
  details = [];
  count = 1;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.allowAddServer = false;
    }, 2000);
  }

  onCreate(){
    this.serverCreationStatus = "Server Created ! " + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  updateServerName(ev:Event){
    this.serverName = (<HTMLInputElement>ev.target).value;
  }

  onReset(){
    this.serverName = '';
  }

  getColor(){
    return this.bgColor;
  }

  onDisplay(){
      this.details.push(new Date());
  }
}
