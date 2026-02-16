import React from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/useI18n";

const assetBase = import.meta.env.BASE_URL || "/";

const teaserMp4 = `${assetBase}husket-teaser.mp4`;
const teaserGif = `${assetBase}husket-teaser.gif`;

const AnimatedLogo: React.FC = () => (
  <>
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      style={{
        width: "160px",
        height: "auto",
        display: "block",
        borderRadius: "14px",
      }}
      onError={(e) => {
        (e.currentTarget as HTMLVideoElement).style.display = "none";
        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
        if (fallback) fallback.style.display = "block";
      }}
    >
      <source src={teaserMp4} type="video/mp4" />
    </video>

    <img
      src={teaserGif}
      alt="husk'et logo animation"
      style={{
        width: "160px",
        height: "auto",
        display: "none",
        borderRadius: "14px",
      }}
    />
  </>
);

const HusketPage: React.FC = () => {
  const { t } = useI18n();

  return (
    <main className="page">
      <section className="hero">
        <h1 className="hero-title">{t("husket.hero.title")}</h1>

        {/* LOGO SOM VISUELL OVERSKRIFT */}
        <div style={{ margin: "1.2rem 0", display: "flex", justifyContent: "center" }}>
          <AnimatedLogo />
        </div>

        <p className="hero-tagline">{t("husket.hero.tagline")}</p>

        <p className="hero-sub" style={{ maxWidth: 820 }}>
          {t("husket.hero.sub")}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
          <span className="badge">{t("husket.badge")}</span>

          <Link
            to="/kontakt"
            style={{
              alignSelf: "center",
              fontSize: "0.95rem",
              textDecoration: "underline",
            }}
          >
            {t("husket.hero.contactCta")}
          </Link>
        </div>
      </section>

      <section style={{ marginTop: "2.4rem" }}>
        <h2 style={{ marginBottom: "0.6rem" }}>
          {t("husket.sections.what.title")}
        </h2>

        <section className="intro-grid">
          <div className="intro-card">
            <h3>{t("husket.cards.moreThanPhoto.title")}</h3>
            <p>{t("husket.cards.moreThanPhoto.body")}</p>
          </div>

          <div className="intro-card">
            <h3>{t("husket.cards.calmControl.title")}</h3>
            <p>{t("husket.cards.calmControl.body")}</p>
          </div>

          <div className="intro-card">
            <h3>{t("husket.cards.everyday.title")}</h3>
            <p>{t("husket.cards.everyday.body")}</p>
          </div>
        </section>
      </section>

      {/* LOGO GJENBRUKT LENGER NEDE */}
      <section style={{ marginTop: "2.8rem", textAlign: "center" }}>
        <AnimatedLogo />
      </section>

      <section style={{ marginTop: "2.4rem" }}>
        <h2 style={{ marginBottom: "0.6rem" }}>
          {t("husket.sections.status.title")}
        </h2>
        <p style={{ maxWidth: 820 }}>{t("husket.sections.status.body")}</p>

        <p style={{ marginTop: "1rem" }}>
          <Link to="/">{t("husket.backCta")}</Link>
        </p>
      </section>
    </main>
  );
};

export default HusketPage;
