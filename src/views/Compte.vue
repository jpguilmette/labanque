<script setup lang="ts">
// import { ChevronDoubleRightIcon } from '@heroicons/vue/24/outline';
import { useBanqueStore } from '../store/store';

const store = useBanqueStore();
</script>

<template>
    <!-- <nav class="navigation" v-if="store.utilisateur?.bossBanque">
        <ChevronDoubleRightIcon class="navigation__icon" />
        <router-link class="navigation__lien" :to="{ name: 'CompteBoss' }">
            Accéder à son compte Boss
        </router-link>
    </nav> -->
    <h2>Compte personnel de {{ store.utilisateur?.prenom }}</h2>

    <ul>
        <li>
            Tu as : {{ (store.utilisateur?.compte.carteCreditMax ?? 0) - (store.utilisateur?.compte.carteCredit ?? 0) }} $ restant sur ta carte de crédit
        </li>
        <li>
            Tu as : {{ store.utilisateur?.compte.pointsRecompenses }} points récompenses
        </li>
        <li>
            Tu as : {{ store.utilisateur?.compte.totalAideJouer }} $ chez aide à
            jouer
        </li>
        <li>
            Tu as : {{ store.utilisateur?.compte.totalElectronique }} $
            électronique
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
