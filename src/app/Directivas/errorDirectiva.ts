import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({ selector: '[customLabel]' })
export class CustomLabelDirective {

    private htmlElement?: ElementRef<HTMLElement>;

    private _color: string = 'blue';
    private _errors?: ValidationErrors | null;

    @Input()
    set color(value: string) {
        this._color = value;
        this.setColor();
    }

    @Input()
    set errors(value: ValidationErrors | null | undefined) {
        this._errors = value;
        this.setErrors();
    }

    constructor(private element: ElementRef<HTMLElement>) {

        this.htmlElement = element;

    }

    setColor() {
        if (!this.htmlElement) return;
        this.htmlElement!.nativeElement.style.color = this._color;
    }

    setErrors() {
        if (!this.htmlElement) return;
        if (!this._errors) {
            this.htmlElement.nativeElement.innerText = 'No errors'
        }

        const errors = Object.keys(this._errors!);
        console.log(errors)

        if (errors.includes('required')) {
            this.htmlElement.nativeElement.innerText = 'This field is required'
        };
        if (errors.includes('minlength')) {
            this.htmlElement.nativeElement.innerText = 'Min length is 6 characters'
        };
        if (errors.includes('email')) {
            this.htmlElement.nativeElement.innerText = 'This must be email'
        };
    }
}
