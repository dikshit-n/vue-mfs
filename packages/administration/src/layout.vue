<template>
    <header>
        <h1>
            Administration App
        </h1>
        <div class="actions">
            <router-link to="/administration/new">
                <button>Create New</button>
            </router-link>
            <div class="counter">
                <h2>{{ store.items }}</h2>
                <button @click="store.add">
                    Counter++
                </button>
            </div>
        </div>
    </header>
    <main>
        <slot></slot>
    </main>
</template>

<script setup lang="ts">
import { counterStore } from 'host/store'

const store = counterStore();

</script>

<style scoped>
header {
    background-color: #333;
    color: #fff;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.actions, .counter {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
</style>
