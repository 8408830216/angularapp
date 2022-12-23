import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterass'
})
export class FilterassPipe implements PipeTransform {

  transform(data:any,searchBike:any): any {
    return data.filter(function(find){
      return find.cName.toLowerCase().indexOf(searchBike.toLowerCase()) > -1 , find.bName.toLowerCase().indexOf(searchBike.toLowerCase()) > -1
      
      
    })
  }

}
