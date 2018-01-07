import { Time } from "@angular/common/src/i18n/locale_data_api";

interface CourseInerface {
    id: number,
    duration: Time,
    name: string,
    creationDate: Date
}

export class Course implements CourseInerface {
    id: number;
    duration: Time;
    name: string;
    creationDate: Date;
}