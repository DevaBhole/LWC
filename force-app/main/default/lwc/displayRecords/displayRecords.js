import { LightningElement ,track,api, wire} from 'lwc';
import { getRecord} from 'lightning/uiRecordApi';

export default class DisplayRecords extends LightningElement {
    @track fieldsSelected = [];
    //@track isShow = false;
    @track data;
    // @track abc;
    @track columnObj = {
        fieldName: 'Name', 
        label: 'Name', 
        type: 'text'
    };
    @api
    getSelectedFields(str){
        // this.columnObj  = columnObj;
        // this.abc = str;
       // this.isShow = false;
       this.fieldsSelected.push({
        fieldName: str, 
        label: str
    });
       //this.isShow = true;
       console.log('dsd'+JSON.stringify(this.fieldsSelected));

    }

    @track selectedObject;
    @api
    getRecords(objectName){
       this.selectedObject = objectName;
    }


}