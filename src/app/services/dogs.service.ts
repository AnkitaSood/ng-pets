import { Injectable, inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Dog, DogBreedsListResponse, DogImageResponse} from "../models/dog.model";
import {forkJoin, map, Observable, switchMap} from "rxjs";

@Injectable({providedIn: 'root'})
export class DogsService {
    private readonly http = inject(HttpClient);
    private readonly breedsUrl = 'https://dog.ceo/api/breeds/list/all';
    private readonly breedImageUrl = 'https://dog.ceo/api/breed';

    getAllBreedsWithImages(): Observable<Dog[]> {
        return this.http.get<DogBreedsListResponse>(this.breedsUrl).pipe(
            switchMap(response => {
                const breeds = Object.keys(response.message);
                const imageRequests = breeds.map(breed =>
                    this.http.get<DogImageResponse>(`${this.breedImageUrl}/${breed}/images/random`).pipe(
                        map(imgResponse => ({
                            breedName: breed,
                            imageUrl: imgResponse.message
                        }))
                    )
                );
                return forkJoin(imageRequests);
            })
        );
    }
}