import Link from "next/link";
import Image from "next/image";
import styles from "./AtelierFinalCTA.module.css";

export default function AtelierFinalCTA({
  whatsappHref,
}: {
  whatsappHref: string;
}) {
  return (
    <section
      className={styles.section}
      aria-labelledby="contact-title"
    >
      <div className={styles.layout}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            Tout commence par un échange
          </p>

          <h2 id="contact-title">
            Votre idée mérite
            <br />
            <em>son premier croquis</em>
          </h2>

          <p className={styles.description}>
            Un site, une application, un outil métier… Posons les
            premières lignes de votre projet ensemble.
          </p>

          <div className={styles.actions}>
            <Link
              href="/contact"
              className={styles.primary}
            >
              Parlons de votre projet
            </Link>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Échanger sur WhatsApp
            </a>
          </div>

          <p className={styles.signature}>
            À vous l’idée. À nous de lui donner forme.
          </p>
        </div>

        <div className={styles.drawing}>
          <Image
            src="/images/premier-croquis-transparent.webp"
            alt="Le premier croquis : votre besoin, nos idées et la suite ensemble, illustrés sur une planche de travail"
            width={1290}
            height={1219}
            sizes="(max-width: 700px) calc(100vw - 36px), (max-width: 1050px) 48vw, 600px"
            className={styles.illustration}
          />
        </div>
      </div>
    </section>
  );
}