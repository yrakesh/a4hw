import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'summary'
})

export class SummaryPipe implements PipeTransform {
    transform(value:String, limit?:number, anotherArg?:any) {
        let actualLimit = limit ? limit : 50;
        if(value) {
            return value.substr(0, actualLimit) + '...';
        }
    }
}