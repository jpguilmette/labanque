export interface Utilisateur {
    id: number;
    nom?: string;
    prenom: string;
    identifiant: string;
    motDePasse: string;
    avatar?: string;
    bossBanque: boolean;
    compte: Compte;
    compteBoss?: CompteBoss;
}

export interface Compte {
    carteCredit: number;
    carteCreditMax: number;
    pointsRecompenses: number;
    totalAideJouer: number;
    totalElectronique: number;
}

export interface CompteBoss {
    employesNouveau: number;
    employes: number;
    billets: number;
    equilibre: number;
}

export const UTILISATEURS: Utilisateur[] = [
    {
        id: 0,
        prenom: 'Jake',
        identifiant: 'jake@labanque.com',
        motDePasse: 'j1o1w@/1',
        bossBanque: true,
        compte: {
            carteCredit: 0,
            carteCreditMax: 100,
            pointsRecompenses: 0,
            totalAideJouer: 100,
            totalElectronique: 100,
        },
        compteBoss: {
            employesNouveau: 0,
            employes: 0,
            billets: 0,
            equilibre: 0,
        },
    },
    {
        id: 1,
        prenom: 'Flore',
        identifiant: 'flore@labanque.com',
        motDePasse: 'fw@/858',
        bossBanque: true,
        compte: {
            carteCredit: 0,
            carteCreditMax: 100,
            pointsRecompenses: 0,
            totalAideJouer: 100,
            totalElectronique: 100,
        },
        compteBoss: {
            employesNouveau: 0,
            employes: 0,
            billets: 0,
            equilibre: 0,
        },
    },
    {
        id: 2,
        prenom: 'Stephanie',
        identifiant: 'stephanie@labanque.com',
        motDePasse: 's433/$#@',
        bossBanque: false,
        compte: {
            carteCredit: 0,
            carteCreditMax: 100,
            pointsRecompenses: 0,
            totalAideJouer: 100,
            totalElectronique: 100,
        },
    },
    {
        id: 3,
        prenom: 'Tristan',
        identifiant: 'tristan@labanque.com',
        motDePasse: 'twe”!r4dc',
        bossBanque: true,
        compte: {
            carteCredit: 0,
            carteCreditMax: 100,
            pointsRecompenses: 0,
            totalAideJouer: 100,
            totalElectronique: 100,
        },
        compteBoss: {
            employesNouveau: 0,
            employes: 0,
            billets: 0,
            equilibre: 0,
        },
    },
    {
        id: 4,
        prenom: 'Mila',
        identifiant: 'mila@labanque.com',
        motDePasse: 'm?gd534!#',
        bossBanque: false,
        compte: {
            carteCredit: 0,
            carteCreditMax: 100,
            pointsRecompenses: 0,
            totalAideJouer: 100,
            totalElectronique: 100,
        },
    },
    {
        id: 5,
        prenom: 'Leia',
        identifiant: 'leia@labanque.com',
        motDePasse: 'l321#/$jkt',
        bossBanque: false,
        compte: {
            carteCredit: 0,
            carteCreditMax: 100,
            pointsRecompenses: 0,
            totalAideJouer: 100,
            totalElectronique: 100,
        },
    },
    {
        id: 6,
        prenom: 'Émile',
        identifiant: 'emile@labanque.com',
        motDePasse: 'e32$/9584',
        bossBanque: false,
        compte: {
            carteCredit: 0,
            carteCreditMax: 100,
            pointsRecompenses: 0,
            totalAideJouer: 100,
            totalElectronique: 100,
        },
    },
    {
        id: 7,
        prenom: 'Justine',
        identifiant: 'justine@labanque.com',
        motDePasse: 'jj4322635#//!$',
        bossBanque: false,
        compte: {
            carteCredit: 0,
            carteCreditMax: 100,
            pointsRecompenses: 0,
            totalAideJouer: 100,
            totalElectronique: 100,
        },
    },
    {
        id: 8,
        prenom: 'Arthur',
        identifiant: 'arthur@labanque.com',
        motDePasse: 'a476//!!#',
        bossBanque: false,
        compte: {
            carteCredit: 0,
            carteCreditMax: 100,
            pointsRecompenses: 0,
            totalAideJouer: 100,
            totalElectronique: 100,
        },
    },
    {
        id: 9,
        prenom: 'Simonne',
        identifiant: 'simonne@labanque.com',
        motDePasse: 'sshgfc5567!!/$#',
        bossBanque: false,
        compte: {
            carteCredit: 0,
            carteCreditMax: 100,
            pointsRecompenses: 0,
            totalAideJouer: 100,
            totalElectronique: 100,
        },
    },
    {
        id: 10,
        prenom: 'Talissa',
        identifiant: 'talissa@labanque.com',
        motDePasse: 'tt74756479!@/',
        bossBanque: true,
        compte: {
            carteCredit: 0,
            carteCreditMax: 100,
            pointsRecompenses: 0,
            totalAideJouer: 100,
            totalElectronique: 100,
        },
        compteBoss: {
            employesNouveau: 0,
            employes: 0,
            billets: 0,
            equilibre: 0,
        },
    },
    {
        id: 11,
        prenom: 'Marie-Soleil',
        identifiant: 'mariesoleil@labanque.com',
        motDePasse: 'mm25746!!/',
        bossBanque: false,
        compte: {
            carteCredit: 0,
            carteCreditMax: 100,
            pointsRecompenses: 0,
            totalAideJouer: 100,
            totalElectronique: 100,
        },
    },
    {
        id: 12,
        prenom: 'Adèle',
        identifiant: 'adele@labanque.com',
        motDePasse: 'aa5632!/',
        bossBanque: false,
        compte: {
            carteCredit: 0,
            carteCreditMax: 100,
            pointsRecompenses: 0,
            totalAideJouer: 100,
            totalElectronique: 100,
        },
    },
    {
        id: 13,
        prenom: 'Mion',
        identifiant: 'mion@labanque.com',
        motDePasse: 'mmm34453!/',
        bossBanque: false,
        compte: {
            carteCredit: 0,
            carteCreditMax: 100,
            pointsRecompenses: 0,
            totalAideJouer: 100,
            totalElectronique: 100,
        },
    },
];
