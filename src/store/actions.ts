import { Theme } from '../domaine/models/Theme';
import { UTILISATEURS } from '../domaine/models/Utilisateur';
import { AppState, BanqueState } from './state';

export const useAppActions = (state: AppState) => {
    const changerTheme = (theme: Theme): void => {
        state.theme.value = theme;
    };

    return { changerTheme };
};

export const useBanqueActions = (state: BanqueState) => {
    const seConnecter = (identifiant: string, motDePasse: string): void => {
        const utilisateurs = UTILISATEURS.filter(
            (u) => u.identifiant === identifiant && u.motDePasse === motDePasse
        );

        if (utilisateurs.length > 0) {
            state.utilisateur.value = utilisateurs[0];
        } else {
            state.utilisateur.value = null;
            const erreur = new Error('Identifiant ou mot de passe incorrect');
            erreur.name = 'UtilisateurInconnu';
            throw erreur;
        }
    };

    return { seConnecter };
};
