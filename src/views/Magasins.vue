<script setup lang="ts">
import {
    CubeIcon,
    PencilSquareIcon,
    QuestionMarkCircleIcon,
    MagnifyingGlassCircleIcon,
} from '@heroicons/vue/24/outline';
</script>

<template>

    <h3 class="magasins__titre">Les pages des magasins ne sont pas encore disponibles</h3>
    <ul class="menu-principal">
        <li class="menu-principal__item">
            <span class="menu-principal__lien" to="/elements"
                ><CubeIcon class="menu-principal__icone" />Les
                élements</span
            >
        </li>
        <li class="menu-principal__item">
            <span class="menu-principal__lien" to="/artiste"
                ><PencilSquareIcon class="menu-principal__icone" />Les
                artistes</span
            >
        </li>
        <li class="menu-principal__item">
            <span class="menu-principal__lien" to="/aide-jouer"
                ><QuestionMarkCircleIcon class="menu-principal__icone" />Aide à
                jouer</span
            >
        </li>
        <li class="menu-principal__item">
            <span class="menu-principal__lien" to="/cours-espion"
                ><MagnifyingGlassCircleIcon
                    class="menu-principal__icone"
                />Cours d'espion</span
            >
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.magasins__titre {
    text-align: center;
}
.menu-principal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0;
    margin: 0;
    list-style: none;

    &__item {
        min-width: 400px;
        margin: 16px 0;
    }

    &__lien {
        display: flex;
        align-items: center;
        padding: 16px;
        color: #fff;
        text-decoration: none;
        font-size: 1.5rem;
        border: 1px solid #fff;
        border-radius: 32px;
        gap: 16px;
        opacity: 0.5;
    }

    &__lien:hover {
        background-color: rgba($color: #fff, $alpha: 0.2);

        .menu-principal__icone {
            transform: rotate(20deg);
        }
    }

    &__icone {
        width: 50px;
        transition: transform 0.2s ease-in-out;
    }
}
</style>
