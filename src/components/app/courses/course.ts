import { Time } from "@angular/common/src/i18n/locale_data_api";
//import { Stream } from "stream";

interface CourseInerface {
    id: number,
    name: string,
    duration: number,
    creationDate: Date,
    description: string
}

export class Course implements CourseInerface {
    id: number;
    name: string;
    duration: number;
    creationDate: Date;
    description: string;

    constructor (id: number, nams: string, duration: number, creationDate: Date, description: string) {
        this.id = id;
        this.name = name;
        this.duration = duration;
        this.creationDate = new Date(creationDate);
        this.description = description;
    }
};