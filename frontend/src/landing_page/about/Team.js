import React from "react";

const team = [
  {
    name: "Aman Sinha",
    role: "Founder & CEO",
    img: "media/images/aman.jpg",
    bio: [
      "Aman bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade-long stint as a trader. Today, Zerodha has fundamentally changed the landscape of the Indian broking industry.",
      "He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).",
      "Playing basketball is his zen.",
    ],
    links: [
      { label: "Homepage", href: "#" },
      { label: "TradingQnA", href: "#" },
      { label: "Twitter", href: "#" },
    ],
  },
];

function Team() {
  return (
    <section className="ab-team">
      <div className="ab-inner">
        <div className="ab-team__header">
          <span className="ab-eyebrow">The people</span>
          <h2 className="ab-section-title">Meet the team</h2>
        </div>

        <div className="ab-team__grid">
          {team.map(({ name, role, img, bio, links }) => (
            <div key={name} className="ab-member-card">
              {/* Avatar */}
              <div className="ab-member-card__avatar-wrap">
                <img
                  src={img}
                  alt={name}
                  className="ab-member-card__avatar"
                />
              </div>

              {/* Info */}
              <div className="ab-member-card__info">
                <div className="ab-member-card__meta">
                  <h3 className="ab-member-card__name">{name}</h3>
                  <span className="ab-member-card__role">{role}</span>
                </div>

                <div className="ab-member-card__bio">
                  {bio.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <div className="ab-member-card__links">
                  <span className="ab-member-card__connect">Connect →</span>
                  {links.map(({ label, href }) => (
                    <a key={label} href={href} className="ab-member-link">
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;