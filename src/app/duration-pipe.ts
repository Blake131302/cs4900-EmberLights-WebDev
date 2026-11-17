import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {
  transform(value: number[] | null | undefined): string {
    if (!value || value.length < 3) {
      return '00:00:00';
    }

    const [hours, minutes, seconds] = value;

    //Make sure there's always 2 digits
    const pad = (num: number) => String(num).padStart(2, '0');

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
}
