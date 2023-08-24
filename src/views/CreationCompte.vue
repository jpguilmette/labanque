<script setup lang="ts"></script>

<template>
    <h2>Se créer un compte</h2>

    <form class="form">
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
