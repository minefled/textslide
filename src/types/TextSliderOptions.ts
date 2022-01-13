/**
 * The options passed to the TextSlider
 * 
 * @property {number} transitionSpeed   - How long the animation of each character lasts
 * @property {number} delay             - How much time is between each character's animation
 * @property {boolean} fading           - Whether the character should also fade in the animation
 */
export interface TextSliderOptions {
    transitionSpeed?:number;
    delay?:number;
    fading?:boolean;
}