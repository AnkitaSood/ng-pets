export type DoglistResponse = {
    message: {
        [breed: string]: string[];
    };
    status: string;
}