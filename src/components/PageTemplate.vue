<script setup lang="ts">
defineProps<{ titre: string }>();
</script>

<template>
    <header>
        <h1>
            <router-link class="page-titre" to="/banque">
                {{ titre }}
            </router-link>
        </h1>
    </header>

    <div class="template">
        <div class="menu">
            <slot name="menu" />
        </div>
        <div class="page">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.template {
    display: flex;
    height: 100%;
    gap: 24px;
}

.page-titre {
    color: #fff;
    text-decoration: none;

    &:hover {
        cursor: pointer;
    }
}

.menu {
    display: flex;
    flex: 1;
    height: 100%;
    padding: 24px 0 12px;
    border-right: 1px solid #fff;
}

.page {
    flex: 3;
    padding: 12px 0;
}
</style>
