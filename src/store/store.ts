import { defineStore } from 'pinia';
import { AppState, BanqueState } from './state';
import { useAppActions, useBanqueActions } from './actions';

export const useAppStore = defineStore('appStore', () => {
    const state = new AppState();
    const actions = useAppActions(state);

    return { ...state, ...actions };
});

export const useBanqueStore = defineStore('banqueStore', () => {
    const state = new BanqueState();
    const actions = useBanqueActions(state);

    return { ...state, ...actions };
});
