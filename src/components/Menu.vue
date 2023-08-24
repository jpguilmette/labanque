<script setup lang="ts">
export interface MenuItem {
    titre: string;
    name: string;
}

defineProps<{ items: MenuItem[] }>();
</script>

<template>
    <ul class="menu">
        <li class="menu__item" v-for="item in items">
            <router-link class="menu__lien" :to="{name: item.name}">
                {{ item.titre }}
            </router-link>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.menu {
    padding: 0;
    margin: 0;
    list-style: none;

    &__item {
        margin: 0 0 16px;
    }

    &__lien {
        color: #fff;
        text-decoration: none;
        font-size: 1rem;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
