import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
    // Tracks the variable to reupdate components that rely on this
    @tracked isLarge = false;

    @action toggleSize() {
        this.isLarge = !this.isLarge;
    }
}