import Mixin from 'ember-metal/mixin';
import computed from 'ember-computed';

export default Mixin.create({
    showSettingsMenu: false,

    isViewingSubview: computed('showSettingsMenu', {
        get() {
            return false;
        },
        set(key, value) {
            // Not viewing a subview if we can't even see the PSM
            if (!this.get('showSettingsMenu')) {
                return false;
            }
            return value;
        }
    }),

    actions: {
        showSubview() {
            this.set('isViewingSubview', true);
        },

        closeSubview() {
            this.set('isViewingSubview', false);
        }
    }
});
