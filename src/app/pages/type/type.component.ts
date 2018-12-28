import { Component, OnInit, ViewChild } from '@angular/core';
import {SuiModalService, TemplateModalConfig, ModalTemplate} from 'ng2-semantic-ui';

export interface IContext {
  data:string;
}

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
  @ViewChild('modalTemplate')
  modalTemplate:ModalTemplate<IContext, string, string>

  constructor(private modalService:SuiModalService) { }

  ngOnInit() {

  }


  openModal(){
    const config = new TemplateModalConfig<IContext, string, string>(this.modalTemplate);
    config.closeResult = "closed!";
    config.context = { data: "dynamicContent" };
    this.modalService
    .open(config)
    .onApprove(result => { /* approve callback */ })
    .onDeny(result => { /* deny callback */});
  }

}
