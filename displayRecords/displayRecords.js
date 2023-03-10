import { LightningElement, track, api } from "lwc";
import recordsFetch from "@salesforce/apex/getRecords.recordsFetch";

export default class DisplayRecords extends LightningElement {
  @track fieldsSelected = [];
  @track recordsFet = [];
  @track labelValue = [];
  @track columnsData = [];
  //@track isShow = false;
  @track columnsName = [];
  @api selectedFields;
//   @api
//   getSelectedFields(field) {
//     // this.columnObj  = columnObj;
//     // this.abc = str;
//     //this.isShow = false;
//     // this.fieldsSelected.push({
//     //c/fieldsSelection  fieldName: field,
//     //label: field
//     // })
//     this.fieldsSelected = field;
//     // eslint-disable-next-line guard-for-in
//    console.log(JSON.stringify(field));
//   }
  //this.isShow = true;
  //console.log('dsd'+JSON.stringify(this.fieldsSelected));

  @track selectObject;
  @api
    getRecord(objecName,selectedFinalField) {
      this.selectObject = objecName;
      this.fieldsSelected =selectedFinalField;
     console.log(this.selectObject);
     console.log(this.fieldsSelected);

     this.labelValue = this.fieldsSelected;
           this.columnsName = this.fieldsSelected.map((value, index) => ({
           label: this.labelValue[index],
           fieldname: value
        }))
          this.columnsData = this.columnsName;

    recordsFetch({objname:this.selectObject,fields:this.fieldsSelected}).then(result => {
        if (result) {
            this.recordsFet = [];
            this.recordsFet = result;
            console.log(JSON.stringify(this.recordsFet))
          
        } else {
            console.log('error occurred');
        }
    })
    .catch(error => {
        console.log('Error on record method: ' + error.message);
    });
       
}
//   @api
//   getRecords(objectName) {
//     this.selectObject = objectName;
//     console.log(objectName);
//   }
//   @track recordsFetched = [];
//   @wire(recordsFetch, { objname: "$selectObject", fields: "$fieldsSelected" })
//   records({ data, error }) {
//     if (data) {
//       console.log("In Records Fetched");
//       this.recordsFetched = [];
//       this.recordsFetched = data;
//       // eslint-disable-next-line guard-for-in
//       //for(let record in data){
//       //   this.recordsFetched.push({label:record,value:record});}
//       console.log('Filed madhe ahe' + this.fieldsSelected);
//       this.labelValue = this.fieldsSelected;
//       this.columnsName = this.fieldsSelected.map((value, index) => ({
//         label: this.labelValue[index],
//         fieldname: value
//       }))
//       this.columnsData = this.columnsName;

      
//       //let fettched = this.recordsFetched ;
//       //this.recordsFet = fettched.map((_, index) => {
//       //   return {data};
//       // });
//       console.log(data);
//       console.log(JSON.stringify(data));
//       // this.columnsName=({fieldName:data,label:data})
//     } else if (error) {
//       console.log(error);
//       console.log("In get Record Error");
//     }
//   }
  
}
