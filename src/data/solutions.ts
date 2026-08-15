// src/data/solutions.ts

export interface Solution {
  slug: string;
  title: string;
  image: string;      // ✅ NOUVEAU CHAMP : Chemin vers l'image
  accroche: string;
  problemeResolu: string;
  publicCible: string;
  statut: string[];
  fonctionnalites: string;
  tarif: string;
}

export const solutions: Solution[] = [
  {
    slug: "gestion-locative",
    title: "Gestion Locative",
    image: "/images/gestion-locative.jpg", // ️ Remplace par ton vrai fichier image
    accroche: "Simplifiez la gestion de vos biens immobiliers, automatisez vos tâches et gardez le contrôle sur votre activité depuis une seule plateforme.",
    problemeResolu: "<p>Informations dispersées entre plusieurs fichiers et outils</p><p>Difficulté à suivre les loyers, échéances et impayés</p><p>Gestion chronophage des locataires et des contrats</p><p>Manque de visibilité sur la rentabilité des biens</p>",
    publicCible: "<p>Agences immobilières</p><p>Administrateurs de biens et gestionnaires locatifs</p><p>Propriétaires bailleurs</p><p>Promoteurs immobiliers</p>",
    statut: ["disponible"],
    fonctionnalites: "<p>Gestion centralisée des biens et des locataires</p><p>Suivi des loyers, paiements, charges et impayés</p><p>Création et gestion des contrats de location</p><p>Alertes automatiques pour les échéances importantes</p>",
    tarif: "Consultez-nous"
  },
  {
    slug: "gestion-scolaire",
    title: "Gestion Scolaire",
    image: "/images/gestion-scolaire.jpg", // ⚠️ Remplace par ton vrai fichier image
    accroche: "Automatisez vos tâches administratives et gardez le contrôle sur votre établissement scolaire depuis une seule plateforme.",
    problemeResolu: "<p>Gestion complexe des inscriptions et dossiers élèves</p><p>Suivi difficile des présences et absences</p><p>Communication laborieuse avec les parents</p><p>Facturation et recouvrement chronophages</p>",
    publicCible: "<p>Écoles primaires et secondaires</p><p>Établissements privés</p><p>Centres de formation</p><p>Universités et grandes écoles</p>",
    statut: ["disponible"],
    fonctionnalites: "<p>Gestion complète des dossiers élèves</p><p>Suivi des présences et absences en temps réel</p><p>Portail parents sécurisé</p><p>Facturation automatique et rappels de paiement</p>",
    tarif: "Sur devis"
  },
  {
    slug: "gestion-asso",
    title: "Gestion Asso",
    image: "/images/gestion-asso.jpg", // ⚠️ Remplace par ton vrai fichier image
    accroche: "Centralisez la gestion de votre association, simplifiez l'adhésion et pilotez votre impact social efficacement.",
    problemeResolu: "<p>Liste d'adhérents éparpillée dans Excel</p><p>Cotisations difficiles à suivre et relancer</p><p>Communication inefficace avec les membres</p><p>Rapports d'activité longs à produire</p>",
    publicCible: "<p>Associations loi 1901</p><p>ONG et organisations caritatives</p><p>Clubs sportifs et culturels</p><p>Syndicats et groupements professionnels</p>",
    statut: ["disponible"],
    fonctionnalites: "<p>Base adhérents centralisée et sécurisée</p><p>Gestion automatisée des cotisations</p><p>Outils de communication intégrés (email/SMS)</p><p>Tableau de bord financier et rapports automatiques</p>",
    tarif: "À partir de 29€/mois"
  }
];