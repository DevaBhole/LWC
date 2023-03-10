import { api, LightningElement, track, wire } from "lwc";
import getFields from "@salesforce/apex/getFields.getFields";
export default class FieldsSelection extends LightningElement {
  
  @track objName;
 /* handleCustomEvent(event) {
    this.objName = event.detail;
    console.log(this.objName);
 }*/
 @track selectedFinalField=[];
 @api
  getSelectedObj(name){
  this.objName= name;
 }
 @track objectFields = [];
  @wire(getFields, { selectedObjName: "$objName" })
  selectObjectName({data,error}){
    if(data){
      console.log('In GetFields');
      this.objectFields = [];
      // eslint-disable-next-line guard-for-in
      for(let field in data){
        this.objectFields.push({label:field , value:field});
      }
    }
    else if(error){
      console.log(error);
    }
  }
 
  // selectedFields(event){
  //   this.template.querySelector('c-display-Records').getSelectedFields(event.detail.value);
  //   console.log(event.detail.value);
  // }

   selectedFields(event){
    this.selectedFinalField.push(event.detail.value);
    //console.log(JSON.stringify(this.selectedFinalField));
   }
  // getRecords(){
  //   this.template.querySelector('c-display-Records').getRecords(this.objName);
  //   console.log('Button Click');
  // }
  getRecords(){
    this.template.querySelector('c-display-Records').getRecord(this.objecName,this.selectedFinalField);
    console.log('Button Click');
  }
    
}
  

