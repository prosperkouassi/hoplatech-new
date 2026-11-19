import Image from "next/image";
import styles from "./AtelierWorkbench.module.css";

export default function AtelierWorkbench() {
  return (
    <figure className={styles.scene} aria-label="Planche de conception de l’atelier">
      <div className={styles.board}>
        <Image
          src="/images/atelier-planche-vintage.webp"
          alt="Tableau vintage de conception web : identité, parcours utilisateur, clarté et adaptation mobile autour d’une maquette de site"
          width={1448}
          height={1086}
          priority
          sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 650px"
          className={styles.image}
        />
      </div>
    </figure>
  );
}
