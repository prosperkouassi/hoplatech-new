import Link from "next/link";
import AtelierMobileCarousel from "./AtelierMobileCarousel";
import styles from "./AtelierNeedBoards.module.css";

const boards = [
  {
    label: "Présence en ligne",
    title: "Être visible et inspirer confiance",
    text: "Un site professionnel à l’image de votre entreprise.",
    href: "/solutions-digitales/site-vitrine-corporate",
    note: "Votre vitrine",
  },
  {
    label: "Parcours clients",
    title: "Vendre et recevoir des réservations",
    text: "Une boutique, un hôtel, un restaurant : facilitez le passage à l’action.",
    href: "/solutions-digitales",
    note: "Du premier clic à l’action",
  },
  {
    label: "Logiciels métiers",
    title: "Simplifier le travail au quotidien",
    text: "Centralisez les informations et les tâches de votre activité.",
    href: "/solutions",
    note: "Tout s’organise",
  },
  {
    label: "Suivi technique",
    title: "Faire vivre un outil existant",
    text: "Maintenance, sécurité et évolutions de vos sites et logiciels.",
    href: "/maintenance-site-web",
    note: "On veille au grain",
  },
];

function Sketch({ kind }: { kind: number }) {
  return (
    <svg
      viewBox="0 0 240 145"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {kind === 0 && (
        <>
          <path d="M24 21 214 18 218 121 27 125Z M25 39 214 36" />
          <circle cx="36" cy="30" r="2" />
          <circle cx="46" cy="30" r="2" />
          <circle cx="56" cy="29" r="2" />
          <path d="m39 51 160-2 2 48-161 2Z m7 38 41-31 28 21 22-14 45 26 M42 109h64m-64 7h42m47-9h68m-68 7h47" />
          <circle cx="166" cy="63" r="7" />
          <path d="m203 23 8 8m-14-7 14 14m-20-14 10 10" strokeOpacity=".3" />
        </>
      )}
      {kind === 1 && (
        <>
          <circle cx="41" cy="90" r="12" />
          <path
            d="M20 125c1-24 41-26 43-1Z M66 106c28-61 63 44 100-13"
            strokeDasharray="4 6"
          />
          <path d="m74 22 7 2 7 23h27l8-19H83m8 26h23" />
          <circle cx="93" cy="61" r="2" />
          <circle cx="113" cy="61" r="2" />
          <rect x="151" y="42" width="66" height="65" rx="5" />
          <path d="M151 61h66m-53-28v19m39-19v19m-40 22h7v7h-7Zm18 0h7v7h-7Zm18 0h7v7h-7Zm-36 17h7v7h-7Zm18 0h7v7h-7Z m37-71 6-8m-18 8 1-10m23 21 9-3" />
        </>
      )}
      {kind === 2 && (
        <>
          <path d="M54 46c0 30 31 2 37 24m96-24c0 30-31 2-37 24M54 111c0-25 34-1 37-24m96 24c0-25-34-1-37-24" />
          <rect x="82" y="52" width="78" height="49" rx="4" />
          <path d="M82 64h78m-67 10h5v5h-5Zm14 2h39m-53 10h5v5h-5Zm14 2h30" />
          <rect x="24" y="12" width="54" height="37" rx="5" />
          <circle cx="50" cy="25" r="5" />
          <path d="M38 40c1-11 24-11 25 0M33 22a4 4 0 1 1 0 8m36-8a4 4 0 1 0 0 8" />
          <rect x="164" y="12" width="54" height="37" rx="5" />
          <path d="M175 38V28h5v10m8 0V22h5v16m8 0V18h5v20" />
          <rect x="24" y="107" width="54" height="31" rx="4" />
          <path d="m34 129 3-12h30l-3 12Zm2-12v-4h12l4 4" />
          <rect x="164" y="107" width="54" height="31" rx="4" />
          <path d="m177 120 8 8 20-17" />
        </>
      )}
      {kind === 3 && (
        <>
          <path
            d="m85 22 6-12h23l5 13 16 5 12-6 17 16-6 13 6 16 13 5v23l-14 5-6 15 6 12-17 16-12-6-16 5H96l-6-14-16-5-12 6-16-16 6-13-5-16-14-5V60l14-5 5-16-6-12 17-16 13 6Z"
            transform="translate(20 0) scale(.85)"
          />
          <path d="m69 118 62-64a29 29 0 0 1 36-34l-18 20 14 15 20-18a29 29 0 0 1-35 34l-61 63a12 12 0 0 1-18-16Z" />
          <circle cx="79" cy="124" r="3" />
          <path d="m192 20 6-11m-19 8 1-11m22 25 11-4" />
        </>
      )}
    </svg>
  );
}

export default function AtelierNeedBoards() {
  return (
    <AtelierMobileCarousel label="Vos besoins" desktopClassName={styles.grid}>
      {boards.map((board, index) => (
        <Link className={styles.board} href={board.href} key={board.href}>
          <span className={styles.corner} aria-hidden="true" />
          <span className={styles.label}>{board.label}</span>
          <h3>{board.title}</h3>
          <span className={styles.rule} aria-hidden="true" />
          <p>{board.text}</p>
          <div className={styles.sketch}>
            <Sketch kind={index} />
            <span>{board.note}</span>
          </div>
          <span className={styles.cta}>Trouver ma solution</span>
        </Link>
      ))}
    </AtelierMobileCarousel>
  );
}
