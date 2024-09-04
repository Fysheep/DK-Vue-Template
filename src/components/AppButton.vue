<script lang="ts">
export default {

}
</script>

<template>
    <button clickable>
        <slot />
    </button>
</template>

<style scoped>
button {
    background: var(--button-bg);
    filter: drop-shadow(0 0 5px var(--shadow-color));
    padding: .5rem 1rem;
    border: none;

    border-radius: var(--button-radius);

    transition: .1s ease-out all;
    color: var(--button-text-color)
}

button:hover {
    filter: drop-shadow(0 0 10px var(--shadow-color));
}
</style>