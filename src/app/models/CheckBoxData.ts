//hepls to manipulate forms with checkbox
export class CheckBoxData {
    name: string;
    value: boolean;
  
    constructor(name: string='', value: boolean=false){
      this.name = name;
      this.value = value;
    }
  
};