<script setup lang="ts">
import { router } from '../router';
import { useBanqueStore } from '../store/store';

const store = useBanqueStore();

const onConnecter = (event: Event) => {
    event.preventDefault();

    const identifiant = (event.target as HTMLFormElement).identifiant.value;
    const motDePasse = (event.target as HTMLFormElement).motDePasse.value;

    try {
        store.seConnecter(identifiant, motDePasse);
        router.push({ name: 'Compte' });
    } catch (error) {
        console.error(error);
    }
};
</script>

<template>
    <h2>Se connecter</h2>

    <form class="form" @submit="onConnecter">
        <div>
            <label for="identifiant" class="form__label">Identifiant</label>
            <input
                type="text"
                name="identifiant"
                id="identifiant"
                class="form__input"
            />
        </div>

        <div>
            <label for="motDePasse" class="form__label">Mot de passe</label>
            <input
                type="password"
                name="motDePasse"
                id="motDePasse"
                class="form__input"
            />
        </div>

        <div>
            <button type="submit">Se connecter</button>
        </div>
    </form>
</template>

<style lang="scss" scoped>
.form {
    display: flex;
    flex-direction: column;
    gap: 12px;

    &__label {
        display: block;
    }

    &__input {
        font-size: 1rem;
    }
}
</style>
