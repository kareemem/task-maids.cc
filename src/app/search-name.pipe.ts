import { Pipe, PipeTransform } from '@angular/core';
import { Users } from './users';

@Pipe({
  name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {

  transform(users: Users[],searchValue:string): Users[] {
    if(searchValue==''){
      return users
    }else{
      return users.filter((element)=>{
        return element.first_name.toLowerCase().includes(searchValue.toLowerCase())
      });
    }
  }


}
