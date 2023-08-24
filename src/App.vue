<script setup lang="ts">
import { useAppStore } from './store/store';

const store = useAppStore();
</script>

<template>
    <div class="app" :class="store.theme">
        <div class="contenu">
            <router-view />
        </div>
    </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;1,800&display=swap');

.app {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    &.sombre {
        background-color: #212121;
        color: #fff;
    }

    &.clair {
        background-color: #fff;
        color: #212121;

        a, 
        .page-titre,
        .menu-principal__lien {
            color: #212121;
        }
        
        .menu-principal__lien {
            border-color: #212121;
        }
    }

    &.ensoleille {
        background-color: #f46524;
        color: #fff;
    }

    .contenu {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        max-width: 1024px;
        margin: 0 auto;
    }
}
</style>
