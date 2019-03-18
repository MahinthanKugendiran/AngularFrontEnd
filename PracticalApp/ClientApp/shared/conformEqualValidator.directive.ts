import { Validator, NG_VALIDATORS, AbstractControl, ControlContainer } from "@angular/forms";
import { Directive, Input } from "@angular/core";

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfirmEqualValidatorDirective,
        multi: true
    }]
})
export class ConfirmEqualValidatorDirective implements Validator {

    @Input() appConfirmEqualValidator: string;
    validate(control: AbstractControl): { [key: string]: any } | null {
        const controllToCompare = control.parent.get(this.appConfirmEqualValidator);
        if ( controllToCompare && controllToCompare.value !== control.value) {
            return { 'notEqual': true }
        }
        return null;
    }
}