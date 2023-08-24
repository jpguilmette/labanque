<script setup lang="ts">
import { ChevronDoubleRightIcon } from '@heroicons/vue/24/outline';
import { useBanqueStore } from '../store/store';

const store = useBanqueStore();
</script>

<template>
    <nav class="navigation">
        <ChevronDoubleRightIcon class="navigation__icon" />
        <router-link class="navigation__lien" :to="{ name: 'Compte' }">
            Retourner à son compte personnel
        </router-link>
    </nav>
    <h2>Compte boss de {{ store.utilisateur?.prenom }}</h2>

    <ul>
        <li>
            Nombre de billet fait :
            {{ store.utilisateur?.compteBoss?.billets }} $
        </li>
        <li>
            Rapports du nombre d'employés :
            {{ store.utilisateur?.compteBoss?.employesNouveau }} +
            {{ store.utilisateur?.compteBoss?.employes }} =
            {{
                (store.utilisateur?.compteBoss?.employesNouveau ?? 0) +
                (store.utilisateur?.compteBoss?.employes ?? 0)
            }}
        </li>
        <li>
            Équibre nombre d'argent :
            {{ store.utilisateur?.compteBoss?.equilibre }} $
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.navigation {
    margin-bottom: 6px;

    &__lien {
        display: inline-block;
        text-decoration: none;
        color: #fff;

        &:hover {
            text-decoration: underline;
        }
    }

    &__icon {
        width: 20px;
        margin-right: 3px;
    }
}
</style>
