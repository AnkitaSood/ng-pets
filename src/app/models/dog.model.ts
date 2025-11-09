import {HttpResourceRef} from "@angular/common/http";

export type DogBreedsListResponse = {
    message: {
        [breed: string]: string[];
    };
    status: string;
}

export type DogImageResponse = { message: string; status: string }

export type Dog = {
    breedName: string;
    imageUrl: string;
}