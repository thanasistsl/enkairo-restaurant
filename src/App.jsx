import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

const inputStyle = {
  width: "100%",
  padding: "15px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  boxSizing: "border-box",
};

const imgStyle = {
  width: "100%",
  height: "220px",
  objectFit: "cover",
  borderRadius: "15px",
  marginBottom: "15px",
};

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial",
        textAlign: "center",
        backgroundImage:
          "url('https://greekdestinations.gr/wp-content/uploads/The-city-of-Kastoria-on-Orestiada-lake.-Image-source-Dreamstime.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <nav className="navbar">
        <h2>Εν Καιρώ</h2>
        <div>
          <a href="#">Αρχική</a>
          <a href="#about">Σχετικά</a>
          <a href="#menu">Μενού</a>
          <a href="#reviews">Κριτικές</a>
          <a href="#booking">Κράτηση</a>
          <a href="#contact">Επικοινωνία</a>
        </div>
      </nav>

      <header
        className="premium-hero"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/gps-cs-s/APNQkAGjDaSQyTqGVe_k0sIztp7f_bkidnHeCjpX0zByQnueyH_ECofmS5xBS1PCQB6GC3pnL5prWFePRsOu7Rbc76TEx0BJzBchAbZ3IgFetdzvkAySAFIzR5c6l4hi5tgP0ZXlyTfsTusQYZt4=s1360-w1360-h1020-rw')",
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-badge">⭐ 4.8 / 5 από 4178+ κριτικές</div>

            <h1 className="hero-title">Εν Καιρώ</h1>

            <p className="hero-subtitle">
              Αυθεντική ελληνική κουζίνα στην καρδιά της Καστοριάς
            </p>

            <p style={{ fontSize: "18px", color: "#eee" }}>
              Ζεστή ατμόσφαιρα • Παραδοσιακές γεύσεις • Ιδανικό για παρέες
            </p>

            <div className="hero-actions">
              <button
                className="hero-button"
                onClick={() =>
                  document
                    .getElementById("booking")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                🍽️ Κράτηση Τώρα
              </button>

              <a className="hero-call" href="tel:2467027247">
                📞 Κάλεσέ μας
              </a>
            </div>
          </div>
        </div>
      </header>

      <section
        style={{
          background: "#8b4513",
          color: "white",
          padding: "50px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          <div>
            <h2 style={{ fontSize: "50px", margin: 0 }}>4178+</h2>
            <p>Κριτικές</p>
          </div>

          <div>
            <h2 style={{ fontSize: "50px", margin: 0 }}>15+</h2>
            <p>Χρόνια Εμπειρίας</p>
          </div>

          <div>
            <h2 style={{ fontSize: "50px", margin: 0 }}>100%</h2>
            <p>Ποιότητα</p>
          </div>

          <div>
            <h2 style={{ fontSize: "50px", margin: 0 }}>4.8★</h2>
            <p>Google Rating</p>
          </div>
        </div>
      </section>

      <section id="about" data-aos="fade-up" style={{ padding: "50px" }}>
        <h2>Σχετικά με εμάς</h2>

        <p
          style={{
            maxWidth: "800px",
            margin: "20px auto",
            lineHeight: "1.8",
          }}
        >
          Το Εν Καιρώ αποτελεί έναν ξεχωριστό γαστρονομικό προορισμό
          στην Καστοριά. Συνδυάζουμε την ελληνική παράδοση με σύγχρονες
          γεύσεις και ποιοτικές πρώτες ύλες.
        </p>
      </section>

      <section
  id="menu"
  data-aos="fade-up"
  style={{
    background: "#f5f5f5",
    padding: "50px",
  }}
>
  <h2 style={{ marginBottom: "40px" }}>Το Μενού μας</h2>

  {/* ΟΡΕΚΤΙΚΑ */}
  <h2 style={{ marginTop: "20px" }}>🍽️ Ορεκτικά</h2>

  <div className="menu-container">
    <div className="menu-card">
      <img
        src="/images/tzatziki.jpg"
        alt="Τζατζίκι"
        style={imgStyle}
      />
      <h3>🥒 Τζατζίκι</h3>
      <p>Παραδοσιακό γιαούρτι με αγγούρι και σκόρδο</p>
      <strong>4.00€</strong>
    </div>

    <div className="menu-card">
      <img
        src="/images/bougiourdi.jpg"
        alt="Μπουγιουρντί"
        style={imgStyle}
      />
      <h3>🧀 Μπουγιουρντί</h3>
      <p>Φέτα φούρνου με πιπεριά και μυρωδικά</p>
      <strong>4.50€</strong>
    </div>

    <div className="menu-card">
      <img
        src="/images/patatokroketes.jpg"
        alt="Πατατοκροκέτες"
        style={imgStyle}
      />
      <h3>🥔 Πατατοκροκέτες</h3>
      <p>Τραγανές πατατοκροκέτες με dip</p>
      <strong>4.50€</strong>
    </div>
  </div>

  {/* ΣΑΛΑΤΕΣ */}
  <h2 style={{ marginTop: "60px" }}>🥗 Σαλάτες</h2>

  <div className="menu-container">
    <div className="menu-card">
      <img
        src="/images/salata.jpg"
        alt="Σαλάτα Εν Καιρώ"
        style={imgStyle}
      />
      <h3>🥗 Σαλάτα Εν Καιρώ</h3>
      <p>
        Φρέσκα λαχανικά, φρούτα εποχής και ιδιαίτερο dressing
      </p>
      <strong>Σπεσιαλιτέ</strong>
    </div>
  </div>

  {/* ΚΥΡΙΩΣ ΠΙΑΤΑ */}
  <h2 style={{ marginTop: "60px" }}>🍖 Κυρίως Πιάτα</h2>

  <div className="menu-container">
    <div className="menu-card">
      <img
        src="/images/brizola.jpg"
        alt="Χοιρινή Μπριζόλα"
        style={imgStyle}
      />
      <h3>🥩 Χοιρινή Μπριζόλα</h3>
      <p>Σχάρας με πατάτες και συνοδευτικά</p>
      <strong>9.50€</strong>
    </div>

    <div className="menu-card">
      <img
        src="/images/bifteki.jpg"
        alt="Μπιφτέκι Σχάρας"
        style={imgStyle}
      />
      <h3>🍔 Μπιφτέκι Σχάρας</h3>
      <p>Χειροποίητο μπιφτέκι στη σχάρα</p>
      <strong>8.50€</strong>
    </div>

    <div className="menu-card">
      <img
        src="/images/kotosouvli.jpg"
        alt="Κοτοσούβλι"
        style={imgStyle}
      />
      <h3>🍢 Κοτοσούβλι</h3>
      <p>Ζουμερό κοτόπουλο στη σούβλα</p>
      <strong>10.00€</strong>
    </div>
  </div>

  {/* ΓΛΥΚΑ */}
  <h2 style={{ marginTop: "60px" }}>🍰 Γλυκά</h2>

  <div className="menu-container">
    <div className="menu-card">
      <img
        src="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
        alt="Κανταΐφι"
        style={imgStyle}
      />
      <h3>🍰 Κανταΐφι</h3>
      <p>Παραδοσιακό κανταΐφι με σιρόπι και φιστίκι</p>
      <strong>5.00€</strong>
    </div>
  </div>
</section>

<section id="why-us" className="fade-section">
  <h2>Γιατί να μας επιλέξετε</h2>

  <div className="menu-container">
    <div className="menu-card">
      <h3>🔥 Φρέσκα Υλικά</h3>
      <p>Χρησιμοποιούμε καθημερινά φρέσκα και ποιοτικά υλικά.</p>
    </div>

    <div className="menu-card">
      <h3>🍖 Παραδοσιακές Γεύσεις</h3>
      <p>Σπιτικές συνταγές και αυθεντική ελληνική κουζίνα.</p>
    </div>

    <div className="menu-card">
      <h3>📍 Ιδανική Τοποθεσία</h3>
      <p>Βρισκόμαστε σε εύκολα προσβάσιμο σημείο στην Καστοριά.</p>
    </div>
  </div>
</section>

      <section
        id="reviews"
        data-aos="zoom-in"
        style={{
          background: "#8b4513",
          padding: "70px 20px",
          color: "white",
        }}
      >
        <h2 style={{ color: "white" }}>Κριτικές Πελατών</h2>

        <p style={{ fontSize: "26px", color: "#ffd166" }}>⭐ 4.8 / 5</p>

        <p>Πάνω από 4.178 κριτικές από επισκέπτες</p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "25px",
            marginTop: "40px",
          }}
        >
          <div className="review-card">
            <h3>⭐⭐⭐⭐⭐</h3>
            <p>
              Υπέροχο φαγητό, ζεστός χώρος και εξαιρετική εξυπηρέτηση.
              Θα ξανάρθουμε σίγουρα!
            </p>
            <strong>— Google Review</strong>
          </div>

          <div className="review-card">
            <h3>⭐⭐⭐⭐⭐</h3>
            <p>
              Πολύ όμορφη ατμόσφαιρα και εξαιρετικές γεύσεις.
              Από τα καλύτερα μαγαζιά της Καστοριάς.
            </p>
            <strong>— Google Review</strong>
          </div>

          <div className="review-card">
            <h3>⭐⭐⭐⭐⭐</h3>
            <p>
              Άψογη ποιότητα, μεγάλες μερίδες και φιλικό προσωπικό.
            </p>
            <strong>— Google Review</strong>
          </div>
        </div>
      </section>

      <section
        id="booking"
        style={{
          background: "#1f1f1f",
          color: "white",
          padding: "70px 20px",
        }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "10px" }}>
          Κράτηση Τραπεζιού
        </h2>

        <p style={{ color: "#ccc", marginBottom: "30px" }}>
          Κλείστε εύκολα το τραπέζι σας online
        </p>

        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const formData = new FormData(e.target);

            await fetch("https://formspree.io/f/mgoqjjoy", {
              method: "POST",
              body: formData,
              headers: {
                Accept: "application/json",
              },
            });

            setShowPopup(true);
            e.target.reset();
          }}
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            background: "white",
            padding: "30px",
            borderRadius: "20px",
            color: "#333",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}
        >
          <input
            type="hidden"
            name="_subject"
            value="Νέα κράτηση από το site"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
            }}
          >
            <input
              name="name"
              type="text"
              placeholder="Ονοματεπώνυμο"
              style={inputStyle}
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Τηλέφωνο"
              style={inputStyle}
              required
            />
            <input name="date" type="date" style={inputStyle} required />
            <input name="time" type="time" style={inputStyle} required />

            <select name="people" style={inputStyle}>
              <option>2 Άτομα</option>
              <option>4 Άτομα</option>
              <option>6 Άτομα</option>
              <option>8 Άτομα</option>
              <option>10+ Άτομα</option>
            </select>

            <select name="area" style={inputStyle}>
              <option>Εσωτερικός Χώρος</option>
              <option>Εξωτερικός Χώρος</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Σχόλια ή ειδικές απαιτήσεις..."
            style={{
              ...inputStyle,
              marginTop: "15px",
              minHeight: "120px",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "18px",
              border: "none",
              borderRadius: "12px",
              background: "#d4a017",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            🍽️ Επιβεβαίωση Κράτησης
          </button>
        </form>

        {showPopup && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 999,
            }}
          >
            <div
              style={{
                background: "white",
                color: "#ad5d0d",
                padding: "35px",
                borderRadius: "20px",
                maxWidth: "400px",
                textAlign: "center",
              }}
            >
              <h2>✅ Η κράτησή σας καταχωρήθηκε!</h2>
              <p>
                Ευχαριστούμε για την προτίμησή σας. Η κράτησή σας
                καταχωρήθηκε επιτυχώς και η ομάδα μας θα επικοινωνήσει μαζί σας
                για επιβεβαίωση.
              </p>

              <p style={{ marginTop: "15px", color: "#d4a017" }}>
                📞 2467 027247
              </p>

              <button
                onClick={() => setShowPopup(false)}
                style={{
                  marginTop: "20px",
                  padding: "12px 25px",
                  border: "none",
                  borderRadius: "10px",
                  background: "#d4a017",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Κλείσιμο
              </button>
            </div>
          </div>
        )}
      </section>

      <section data-aos="fade-left" style={{ padding: "50px" }}>
        <h2>Η Ατμόσφαιρα του Εν Καιρώ</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAE0eaTUToIzBnsFyUreDCG6dqvFNA9eQlD82uoPhG8QwZ-YNRiOhUhWFsk7ntPDH4REBY-eiSBrjjfygrR2FtQ7KDhQVjCBYW2gaX8cS6YXrmswjY40E03SprXdozRJYJVxyMlDfdOD7kg4=s1360-w1360-h1020-rw"
            alt="Εν Καιρώ"
            onClick={() =>
              setSelectedImage(
                "https://lh3.googleusercontent.com/gps-cs-s/APNQkAE0eaTUToIzBnsFyUreDCG6dqvFNA9eQlD82uoPhG8QwZ-YNRiOhUhWFsk7ntPDH4REBY-eiSBrjjfygrR2FtQ7KDhQVjCBYW2gaX8cS6YXrmswjY40E03SprXdozRJYJVxyMlDfdOD7kg4=s1360-w1360-h1020-rw"
              )
            }
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              borderRadius: "15px",
              cursor: "pointer",
            }}
          />

          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAE-r8fDDuLqlBMicEIcNasGHOHQxP59UAjqTCHpV6duQEzuyeoaqOMRB5k-cpby2vjQGPq7lj0YF0AfX13mqKlERItM7Mgq-5wDmflJyPmekmY5hV_-PN86wlDNEKQH_Si3dpQ=s1360-w1360-h1020-rw"
            alt="Εν Καιρώ"
            onClick={() =>
              setSelectedImage(
                "https://lh3.googleusercontent.com/gps-cs-s/APNQkAE-r8fDDuLqlBMicEIcNasGHOHQxP59UAjqTCHpV6duQEzuyeoaqOMRB5k-cpby2vjQGPq7lj0YF0AfX13mqKlERItM7Mgq-5wDmflJyPmekmY5hV_-PN86wlDNEKQH_Si3dpQ=s1360-w1360-h1020-rw"
              )
            }
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              borderRadius: "15px",
              cursor: "pointer",
            }}
          />

          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEJVh3-d9Ly_ov3YQuEY_N-RCtBPmIwax7bv7vhEf1F7u7sHnj6UGvTNvCTJVtsGB_-4nxjtO_JycxFrGZjfwybOQ9XBZ8kRq1WQQ5U48CAGq-D0WvoiFpPAp49TH3q6XLoJhJFz_TE8vIY=s1360-w1360-h1020-rw"
            alt="Εν Καιρώ"
            onClick={() =>
              setSelectedImage(
                "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEJVh3-d9Ly_ov3YQuEY_N-RCtBPmIwax7bv7vhEf1F7u7sHnj6UGvTNvCTJVtsGB_-4nxjtO_JycxFrGZjfwybOQ9XBZ8kRq1WQQ5U48CAGq-D0WvoiFpPAp49TH3q6XLoJhJFz_TE8vIY=s1360-w1360-h1020-rw"
              )
            }
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              borderRadius: "15px",
              cursor: "pointer",
            }}
          />
        </div>
      </section>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99999,
            cursor: "pointer",
          }}
        >
          <img
            src={selectedImage}
            alt="Fullscreen"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "20px",
            }}
          />
        </div>
      )}

      <section
        data-aos="zoom-in"
        style={{ background: "#f5f5f5", padding: "50px" }}
      >
        <h2>Πού θα μας βρείτε</h2>

        <p style={{ marginBottom: "25px" }}>
          Μεγάλου Αλεξάνδρου 139, Καστοριά
        </p>

        <iframe
          title="Google Maps - Εν Καιρώ"
          src="https://www.google.com/maps?q=%CE%9C%CE%B5%CE%B3%CE%AC%CE%BB%CE%BF%CF%85%20%CE%91%CE%BB%CE%B5%CE%BE%CE%AC%CE%BD%CE%B4%CF%81%CE%BF%CF%85%20139%2C%20%CE%9A%CE%B1%CF%83%CF%84%CE%BF%CF%81%CE%B9%CE%AC&output=embed"
          width="100%"
          height="350"
          style={{
            border: "0",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <footer
        id="contact"
        style={{
          background: "#222",
          color: "white",
          padding: "30px",
        }}
      >
        <h3>Επικοινωνία</h3>
        <p>Μεγάλου Αλεξάνδρου 139, Καστοριά</p>
        <p>📞 2467 027247</p>
        <p>⭐ 4.8 / 5 από 4200+ κριτικές</p>
      </footer>

      <a
        href="tel:2467027247"
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          width: "65px",
          height: "65px",
          borderRadius: "50%",
          background: "#d4a017",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
          textDecoration: "none",
          boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
          zIndex: 9999,
        }}
      >
        📞
      </a>
    </div>
  );
}

export default App;