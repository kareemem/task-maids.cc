import { Pipe, PipeTransform } from '@angular/core';
import { Users } from './users';

@Pipe({
  name: 'searchemail'
})
export class SearchemailPipe implements PipeTransform {

  transform(users: Users[],searchValue:string): Users[] {
    if(searchValue==''){
      return users
    }else{
      return users.filter((element)=>{
        return element.email.toLowerCase().includes(searchValue.toLowerCase())
      });
    }
  }


}
