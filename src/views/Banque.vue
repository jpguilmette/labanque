<script setup lang="ts">
import Menu, { MenuItem } from '../components/Menu.vue';
import PageTemplate from '../components/PageTemplate.vue';
// import { useBanqueStore } from '../store/store';

// const store = useBanqueStore();

const items: MenuItem[] = [
    { titre: 'Se connecter', name: 'Connecter' },
    // {
    //     titre: 'Se créer un compte à la banque',
    //     name: 'CreationCompte',
    // },
    // { titre: 'Chercher un travail à la banque', name: 'Emplois' },
    { titre: 'Les magasins', name: 'Magasins' },
    { titre: 'Paramètres', name: 'Parametres' },
];
</script>

<template>
    <PageTemplate titre="La banque">
        <template #menu>
            <Menu :items="items" />
        </template>
        <div>
            <router-view />
        </div>
    </PageTemplate>
</template>

<style scoped></style>
