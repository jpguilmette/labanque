<script setup lang="ts">
import { Theme } from '../domaine/models/Theme';
import { useAppStore } from '../store/store';

const store = useAppStore();
</script>

<template>
    <h2>Paramètres</h2>
    <form>
        <!-- <div>
            <label for="theme">Langue</label>
            <div name="theme" id="theme">
                <input type="radio" name="langue" value="fr" />Français
                <input type="radio" name="langue" value="en" />English
            </div>
        </div> -->

        <div>
            <label for="theme">Thème</label>
            <div name="theme" id="theme">
                <div v-for="theme in Object.values(Theme)">
                    <input
                        type="radio"
                        name="theme"
                        :value="theme"
                        :checked="store.theme === theme"
                        @change="store.changerTheme(theme)"
                    />
                    {{ theme }}
                </div>
            </div>
        </div>
    </form>
</template>

<style scoped></style>
../domaine/models/Theme
