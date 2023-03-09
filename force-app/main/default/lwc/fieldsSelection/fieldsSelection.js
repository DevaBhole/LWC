import { api, LightningElement, track, wire } from "lwc";
import getFields from "@salesforce/apex/getFields.getFields";
export default class FieldsSelection extends LightningElement {
  
  @track objName;
 /* handleCustomEvent(event) {
    this.objName = event.detail;
    console.log(this.objName);
 }*/
 @api
getSelectedObj(str){
 this.objName= str;
}
 @track objectFields = [];
  @wire(getFields, { selectedObjName: "$objName" })
  selectObjectName({data,error}){
    if(data){
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
 
  selectedFields(event){
    this.template.querySelector('c-display-Records').getSelectedFields(event.detail.value);
    console.log('in field selected');
  }

  getRecords(){
    this.template.querySelector('c-display-Records').getRecords(this.objectFields);
  }
    
}
  

