import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2> Welcome {{name}} </h2>
             <h2> {{2+2}} <br>
             {{"Welcome " + name}} <br>
             {{name.length}} <br>
             {{name.toUpperCase()}} <br>
             {{greetUser()}}  <br>
             </h2>
             <input [id]="myId" type ="text" value ={{name}} >

             <input [disabled] = "isDisabled" id={{myId}} type ="text" value ={{name}} >
             <input disabled = {{isDisabled}} id={{myId}} type ="text" value ={{name}} >
             <input bind-disabled = "isDisabled" id={{myId}} type ="text" value ={{name}} >

             <!-- Class binding -->

             <h2> Welcome {{name}} </h2>
             <h2 class = "text-success">Codevolution</h2>
             <h2 [class] = "successClass">Codevolution</h2>

             <!--to check the priority -->
             <h2 class="text-danger" [class] = "successClass" >Codevolution</h2>
             <h2 [class.text-danger]="hasError">Codevolution</h2>

             <h2 [ngClass]="messageClasses" >Codevolution object implementation for multiple class</h2>

             <!-- Style binding -->
             <h2 [style.color] = "hasError ? 'red':'green'">Style Binding</h2>
             <h2 [style.color]="highlightColor">Style binding 2 </h2>
             <h2 [ngStyle]="titleStyles">Multiple styles</h2>
             
             <!-- Event binding -->
             <!-- <button (click)="onClick()" > Greet </button> -->
             <button (click)="onClick($event)" > Greet </button> <br>
             <button (click)="greeting='Welcome Ananya'" > Greet </button> <br>

             {{greeting}} <br>

             <!-- Two way binding -->
             <input #myInput type="text">
             <button (click)="logMessage(myInput.value)">Log</button> <br>

             <input [(ngModel)]="twoWayBindName" type="text"> {{twoWayBindName}} <br>

             <!-- ngIf Structural Directive -->

             <h2 *ngIf="displayName; else elseBlock"> 
               {{name}} 
             </h2>

             <ng-template #elseBlock>
              <h2>
                Name is hidden
              </h2>
             </ng-template>

             <!-- try the separate block, instead of inline -->

             <!-- ngSwitch -->
             <div [ngSwitch]="color">
              <div *ngSwitchCase="'red'"> Red </div>
              <div *ngSwitchCase="'blue'"> Blue </div>
              <div *ngSwitchCase="'green'"> Green </div>
              <div *ngSwitchDefault> Pick again </div>
             </div>


             `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {


  public name = "Ananya";
  public myId = "testId";
  public name1="Codevolution";
  public successClass="text-success";
  public isDisabled=false;
  public hasError=true;
  public isSpecial=false;
  public messageClasses ={
    "text-success": !this.hasError,
    "text-danger": !this.hasError,
    "text-special": !this.isSpecial
  };
  public highlightColor="orange";
  public titleStyles ={
    color: "blue",
    fontStyle: "italic"
  };
  public greeting="";

  public twoWayBindName ="";
  public displayName =false;
  public color = "blue";




  // onClick(){
  //   // console.log("Welcome. you clicked the button!");
  //   this.greeting="Welcome. button successfully clicked."
  // }

  onClick(event){
    console.log(event);
    // this.greeting="Welcome. button successfully clicked.";
    this.greeting=event.type;
  }

  logMessage(value){
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return "Hello " + this.name;
    
  }

}
