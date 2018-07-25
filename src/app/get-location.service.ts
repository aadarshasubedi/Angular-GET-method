import { Injectable } from "@angular/core";
import { Http} from "@angular/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GetLocationService {

  constructor(public http: Http){}

  getLocation(){
    return this.http.get("http://api.ebusnepal.com/v1/busrouteinfos").pipe(map(res=>res.json()));
}

}
