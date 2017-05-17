import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
    private data = {
        myCarouselData: [
            { title : "Smart But Casual", content : "First Something..."},
            { title : "Second Phrase", content : "Second Something..."},
            { title : "Third Porviders", content : "Third Something..."}
        ]
    }

    constructor() {}

    public getMyCarouselData() {
        return this.data.myCarouselData;
    }
}