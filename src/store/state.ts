import { StateTree } from 'pinia';
import { ref } from 'vue';
import { Theme } from '../domaine/models/Theme';
import { Utilisateur } from '../domaine/models/Utilisateur';

export class AppState implements StateTree {
    public theme = ref<Theme>(Theme.Ensoleille);

    public $reset(): void {
        this.theme.value = Theme.Ensoleille;
    }
}

export class BanqueState implements StateTree {
    public utilisateur = ref<Utilisateur | null>(null);

    public $reset(): void {
        this.utilisateur.value = null;
    }
}
