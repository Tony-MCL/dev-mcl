import React from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/useI18n";

const assetBase = import.meta.env.BASE_URL || "/";

// Legg disse filene i /public (samme nivå som index.html i Vite-prosjektet)
const teaserMp4 = `${assetBase}husket-teaser.mp4`;
const teaserGif = `${assetBase}husket-teaser.gif`;

const HusketPage: React.FC = () => {
  const { t } = useI18n();

  return (
    <main className="page">
      <section className="hero">
        <h1 className="hero-title">{t("husket.hero.title")}</h1>
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

      {/* Teaser: animert logo */}
      <section style={{ marginTop: "2.2rem" }}>
        <h2 style={{ marginBottom: "0.6rem" }}>{t("husket.teaser.title")}</h2>
        <p style={{ maxWidth: 820, marginTop: 0, color: "var(--mcl-text-dim)" }}>
          {t("husket.teaser.body")}
        </p>

        <div
          className="intro-card"
          style={{
            maxWidth: 720,
            padding: "1rem",
            overflow: "hidden",
          }}
        >
          {/* MP4 (best), med GIF fallback */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "12px",
              border: "1px solid var(--mcl-border)",
              background: "rgba(0,0,0,0.04)",
            }}
            onError={(e) => {
              // Hvis mp4 mangler/feiler: skjul video og vis gif-bildet under.
              (e.currentTarget as HTMLVideoElement).style.display = "none";
              const fallback = document.getElementById("husket-teaser-fallback");
              if (fallback) fallback.style.display = "block";
            }}
          >
            <source src={teaserMp4} type="video/mp4" />
          </video>

          <img
            id="husket-teaser-fallback"
            src={teaserGif}
            alt={t("husket.teaser.alt")}
            style={{
              width: "100%",
              height: "auto",
              display: "none",
              borderRadius: "12px",
              border: "1px solid var(--mcl-border)",
              background: "rgba(0,0,0,0.04)",
            }}
          />
        </div>
      </section>

      <section style={{ marginTop: "2.4rem" }}>
        <h2 style={{ marginBottom: "0.6rem" }}>{t("husket.sections.what.title")}</h2>

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

      <section style={{ marginTop: "2.4rem" }}>
        <h2 style={{ marginBottom: "0.6rem" }}>{t("husket.sections.status.title")}</h2>
        <p style={{ maxWidth: 820 }}>{t("husket.sections.status.body")}</p>

        <p style={{ marginTop: "1rem" }}>
          <Link to="/">{t("husket.backCta")}</Link>
        </p>
      </section>
    </main>
  );
};

export default HusketPage;
