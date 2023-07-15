import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPipe'
})

export class MaskPipe implements PipeTransform {
  transform(value: string, args: boolean = true): string {
    let tranform = value.replace(/(.{4})/g, '$1 ');

    return tranform
  }
}


@Pipe({
  name: 'datePipe'
})

export class datePipe implements PipeTransform {
  transform(value: string, args: boolean = true): string {
    let tranform = value.replace(/(\d{2})(\d{2})/, '$1/$2');

    return tranform
  }
}



@Pipe({
  name: 'creditNPipe'
})

export class creditNPipe implements PipeTransform {
  transform(value: string, args: boolean = true): string {
    let tranform = value.replace(/^(\d{12})/, '************');

    return tranform
  }
}





















































// import { Directive, ElementRef, Input } from '@angular/core';

// @Directive({ selector: '[creditCarFormat]' })
// export class formato {
// private htmlElement?: ElementRef<HTMLInputElement>
// private stilos: string = ''

// @Input()
// set format(value: string){
//   this.stilos = value
//   this.setformato()
// }






//   constructor(private element: ElementRef<HTMLInputElement>) {this.htmlElement = element }

// setformato(){
//   console.log(this.stilos)
// this.htmlElement!.nativeElement.value = this.stilos.replace(/(.{4})/g, '$1 ');

// }
// }
