import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(val:any,searchTerm:any): any {
    return val.filter(function(search){
      return search.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    });
  }

}
