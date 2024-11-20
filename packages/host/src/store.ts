import { createPinia } from 'pinia';
import { defineStore } from 'pinia';

const pinia = createPinia();

const counterStore = defineStore('counter', {
    state: () => ({
        items: 0
    }),

    actions: {
        add() {
            this.items++;
        }
    }
});

export { counterStore, pinia };
