    import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'customTitleCase'
})

export class CustomTitleCasePipe implements PipeTransform {
    transform(value:String) {
        if(value) {

            value = value.replace(/\b(\w)/g, function(v) {
                return v.toUpperCase();
            });

            if(value.match(/(of|the)/ig)) {
                value = value.replace(/(of|the)/ig, function(v) {
                    return v.toLowerCase();
                })
            }

            return value.replace(/^\w/, function(v) {
                return v.toUpperCase();
            });
        }
    }
}