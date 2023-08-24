import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Accueil',
            redirect: '/banque',
        },
        {
            path: '/banque',
            component: () => import('./views/Banque.vue'),
            children: [
                // {
                //     path: '',
                //     name: 'Bienvenue',
                //     component: () => import('./views/Bienvenue.vue'),
                // },
                {
                    path: 'connecter',
                    name: 'Connecter',
                    component: () => import('./views/Connecter.vue'),
                },
                {
                    path: 'creation-compte',
                    name: 'CreationCompte',
                    component: () => import('./views/CreationCompte.vue'),
                },
                {
                    path: 'compte',
                    name: 'Compte',
                    component: () => import('./views/Compte.vue'),
                    meta: { requiresAuth: true },
                },
                {
                    path: 'compte-boss',
                    name: 'CompteBoss',
                    component: () => import('./views/CompteBoss.vue'),
                    meta: { requiresAuth: true },
                },
                {
                    path: 'magasins',
                    name: 'Magasins',
                    component: () => import('./views/Magasins.vue'),
                },
                {
                    path: 'parametres',
                    name: 'Parametres',
                    component: () => import('./views/Parametres.vue'),
                    meta: { requiresAuth: true },
                },
            ],
        },
        // {
        //     path: '/emplois',
        //     name: 'Emplois',
        //     component: () => import('./views/Emplois.vue'),
        // },
        // {
        //     path: '/creation-compte',
        //     name: 'CreationCompte',
        //     component: () => import('./views/CreationCompte.vue'),
        // },
        // {
        //     path: '/magasins',
        //     name: 'Magasins',
        //     component: () => import('./views/Magasins.vue'),
        // },
        // {
        //     path: '/parametres',
        //     name: 'Parametres',
        //     component: () => import('./views/Parametres.vue'),
        // },
        // {
        //     path: '*',
        //     name: 'Erreur404',
        //     component: () => import('./views/Erreur404.vue'),
        // },
    ],
});
