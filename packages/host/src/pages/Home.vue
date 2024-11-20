<template>
    <h1>Host Home</h1>
    <h2>{{ store.items }}</h2>
    <button @click="store.add">Counter++</button>
</template>

<script setup lang="ts">
import { counterStore } from 'host/store'
const store = counterStore();
</script>
