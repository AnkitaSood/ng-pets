import {Injectable} from "@angular/core";
import {httpResource} from "@angular/common/http";
import {DogBreedsListResponse} from "../models/dog.model";

@Injectable({ providedIn: 'root'})
export class DogsService {
    private readonly url = "https://dog.ceo/api/breeds/list/all"
    dogsResource = httpResource<DogBreedsListResponse>(()=>this.url);
}