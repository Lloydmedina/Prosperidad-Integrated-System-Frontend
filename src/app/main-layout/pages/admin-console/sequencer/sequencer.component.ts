import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ApplicationService } from 'src/core/services/application/application.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { SequencerService } from 'src/core/services/sequencer/sequencer.service';
import { UserService } from 'src/core/services/user/user.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-sequencer',
  templateUrl: './sequencer.component.html',
  styleUrls: ['./sequencer.component.css']
})
export class SequencerComponent implements OnInit {

  limit = 12
  parentList: any = []
  childrenList: any = []
  grandChildrenList: any = []

  formLists:any = []
  constructor(private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
    private viewContainerRef: ViewContainerRef,
    private route: ActivatedRoute,
    private modal: NzModalService,
    private notification: NzNotificationService,
    private pathService: PathsegmentService,
    private auth: AuthService,
    private seqService: SequencerService,) { }

    forms:any = []
  ngOnInit() {
    
    this.forms = JSON.parse(localStorage.getItem('auth-user') || '{}')[3].forms;
    this.parentList = this.forms

    this.parentList = this.setListLimit(this.parentList)
  }


 setListLimit(list:any){
    if(list.length < this.limit)
    { 
      let num = this.limit - list.length

      for(let x = 1; x <= num; x++){
        list.push({
          form_name: ''
        })
      }
    }

    return list
  }

  
parentDrop(event: CdkDragDrop<string[]>): void {
  console.log(event)
  moveItemInArray(this.parentList, event.previousIndex, event.currentIndex);
  console.log(this.parentList)
}

childDrop(event: CdkDragDrop<string[]>): void {
  moveItemInArray(this.childrenList, event.previousIndex, event.currentIndex);
}
grandChildDrop(event: CdkDragDrop<string[]>): void {
  moveItemInArray(this.grandChildrenList, event.previousIndex, event.currentIndex);
}

parentSelect(data:any){
  this.grandChildrenList = []
  console.log(data)
  this.childrenList = data.child
  this.childrenList = this.setListLimit(this.childrenList)
}
childSelect(data:any){
  if(data.child != null){
    this.grandChildrenList = data.child
    this.grandChildrenList = this.setListLimit(this.grandChildrenList)
  }
}

submit(){
  let parent = 1
  let child = 1
  let gchild = 1
  console.log(this.parentList)
  this.parentList.forEach((el:any) => {
    if(el.form_guid){
      this.formLists.push({
        domain_id: el.domain_guid,
        form_id: el.form_guid,
        order: parent
      })

      el.child.forEach((c:any) => {
        if(c.form_guid){

          this.formLists.push({
            domain_id: c.domain_guid,
            form_id: c.form_guid,
            order: child
          })
  
          if(c.child != null){
            c.child.forEach((g:any) => {
              if(g.form_guid){

                this.formLists.push({
                  domain_id: g.domain_guid,
                  form_id: g.form_guid,
                  order: gchild
                })
        
                gchild++
              }
            });
          }
          
          gchild = 1
          child++
        }
      });
      child = 1
      parent++
    }
  });
  this.seqService.saveSequence({ seq_list: this.formLists}).subscribe(async (data: any) => {
    this.modal.success({
      nzTitle: 'Successfully saved!',
      nzContent: 'You will have to re-login to apply these changes.',
      nzOnOk: () => {
        this.auth.logout()
        this.router.navigate(["/login"])
      },
      nzOnCancel: () => {

      }
      
    });
  },
  async error => {
   await this.notification.create(
      "error",
      'Unsuccessfully Saved',
      'Fees Charges Record has not been saved.'
    );
  });
}

}
