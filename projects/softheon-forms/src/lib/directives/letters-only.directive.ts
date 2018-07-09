import { Directive, ElementRef, Input, HostListener } from '@angular/core';

/**
 * The letters only directive
 */
@Directive({
  selector: '[lettersOnly]'
})
export class LettersOnlyDirective {

   /**
   * Constructs the directive
   * @param el The element
   */
  constructor(private el: ElementRef) { }

  /** True if only letters allowed */
  @Input() public lettersOnly: boolean;

  /**
   * Only allows letter inputs
   * @param event Key Event
   */
  @HostListener('keydown', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent>event;
    if (this.lettersOnly) {
      if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode === 65 && e.ctrlKey) ||
        // Allow: Ctrl+C
        (e.keyCode === 67 && e.ctrlKey) ||
        // Allow: Ctrl+X
        (e.keyCode === 88 && e.ctrlKey) ||
        //Allow: Space
        (e.keyCode === 32) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
        // let it happen, don't do anything
        return;
      }
      // Ensure that it is a letter and stop the keypress if its not a letter
      if (e.keyCode < 65 || e.keyCode > 90) {
        e.preventDefault();
      }
    }
  }

}
