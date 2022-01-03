export class Weather {
   id = 0;
   main = '';
   description = '';
   icon = '';

   constructor(object: any) {
     this.setValues(object.id, object.main, object.description, object.icon)
   }

   setValues(id: number, main: string, description: string, icon: string) {
     this.id = id;
     this.main = main;
     this.description = description;
     this.icon = icon;
   }
}
