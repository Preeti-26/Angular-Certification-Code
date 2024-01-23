import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rangeWithUnits',
  standalone: true
})
export class RangeWithUnitsPipe implements PipeTransform {
  transform(value: number, unit: string = ''): string {
    return `${value} ${unit}`;
  }
}