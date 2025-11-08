export type DogBreedsListResponse = {
    message: {
        [breed: string]: string[];
    };
    status: string;
}

export type DogImageResponse = { message: string; status: string }