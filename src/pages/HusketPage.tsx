import React from "react";
import { Link } from "react-router-dom";

const HusketPage: React.FC = () => {
  return (
    <main className="page">
      <section className="hero">
        <h1 className="hero-title">Husket</h1>

        <p className="hero-tagline">Et bilde alene er ikke et minne.</p>

        <p className="hero-sub" style={{ maxWidth: 820 }}>
          Husket er en rolig måte å lagre øyeblikk på – med kontekst. Du tar et
          bilde, og velger det lille ekstra som gjør at du faktisk husker:
          vurdering, kategori, kommentar – og (valgfritt) sted.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
          <span className="badge">Kommer snart</span>

          <Link
            to="/kontakt"
            style={{
              alignSelf: "center",
              fontSize: "0.95rem",
              textDecoration: "underline",
            }}
          >
            Vil du ha beskjed ved lansering? Ta kontakt →
          </Link>
        </div>
      </section>

      <section>
        <h2 style={{ marginBottom: "0.6rem" }}>Hva Husket er</h2>

        <section className="intro-grid">
          <div className="intro-card">
            <h3>Mer enn et bilde</h3>
            <p>
              Et bilde alene sier ofte lite senere. Husket lar deg legge ved
              det som betyr noe: en følelse, en rating, en kommentar – eller
              bare en liten “aha”.
            </p>
          </div>

          <div className="intro-card">
            <h3>Ro og kontroll</h3>
            <p>
              Dette er ikke et sosialt feed-system. Det er en privat samling –
              bygget for å føles ryddig og trygg, uten støy og mas.
            </p>
          </div>

          <div className="intro-card">
            <h3>Bygget for hverdagen</h3>
            <p>
              Lav terskel. Raskt å lagre. Enkelt å finne igjen. Husket skal
              fungere når du faktisk lever – ikke bare når du har tid til å
              “organisere livet”.
            </p>
          </div>
        </section>
      </section>

      <section>
        <h2 style={{ marginBottom: "0.6rem" }}>Status</h2>
        <p style={{ maxWidth: 820 }}>
          Husket er under bygging. Denne siden er ment som en landingsside for
          QR-koder og tidlig interesse. Når appen er lansert, kommer det tydelige
          knapper her for App Store og Google Play.
        </p>

        <p style={{ marginTop: "1rem" }}>
          <Link to="/">← Tilbake til Morning Coffee Labs</Link>
        </p>
      </section>
    </main>
  );
};

export default HusketPage;

