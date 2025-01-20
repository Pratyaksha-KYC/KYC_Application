import React from "react";
import "./AboutUs.css";
import {
  Shield,
  Users,
  Globe,
  Lock,
  Building2,
  Award,
  ArrowRight,
  Network,
  LockKeyhole,
  CheckCircle2,
  Fingerprint,
  Scan,
  ShieldCheck,
} from "lucide-react";

function AboutUs() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-background">
          <div className="about-hero-gradient" />
          <div className="about-hero-blob about-hero-blob-1" />
          <div className="about-hero-blob about-hero-blob-2" />
        </div>
        <div className="about-container">
          <div className="about-hero-content">
            <div className="about-hero-text">
              <h1 className="about-hero-title">
                Securing Digital Identity,
                <br />
                Empowering Global Trust
              </h1>
              <p className="about-hero-description">
                We're revolutionizing the way businesses verify and trust their
                customers through advanced KYC solutions.
              </p>
            </div>
            <div className="about-hero-illustration">
              <Network
                className="about-animate-spin"
                size={192}
                strokeWidth={1}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LockKeyhole size={96} />
              </div>
              <div style={{ position: "absolute", top: 0, right: 0 }}>
                <CheckCircle2
                  className="about-animate-bounce"
                  size={48}
                  color="#22c55e"
                />
              </div>
              <div style={{ position: "absolute", bottom: 0, left: 0 }}>
                <Shield
                  className="about-animate-pulse"
                  size={48}
                  color="#a855f7"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="about-container">
          <div className="about-stats-grid">
            <div className="about-stat-card">
              <div className="about-stat-icon">
                <Users size={48} />
              </div>
              <div className="about-stat-number">500+</div>
              <div className="about-stat-label">Global Clients</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-icon">
                <Scan size={48} />
              </div>
              <div className="about-stat-number">10M+</div>
              <div className="about-stat-label">Verifications Completed</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-icon">
                <ShieldCheck size={48} />
              </div>
              <div className="about-stat-number">99.9%</div>
              <div className="about-stat-label">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="about-container">
          <div className="about-mission-grid">
            <div>
              <h2 className="about-mission-title">Our Mission</h2>
              <p className="about-mission-text">
                We're on a mission to make digital identity verification
                seamless, secure, and accessible globally. Our cutting-edge KYC
                solutions help businesses comply with regulations while
                providing an exceptional user experience.
              </p>
              <div className="about-mission-features">
                {[
                  { icon: Shield, text: "Industry-leading security protocols" },
                  { icon: Globe, text: "Global compliance coverage" },
                  { icon: Users, text: "Seamless user experience" },
                ].map((item, index) => (
                  <div key={index} className="about-mission-feature">
                    <item.icon className="about-feature-icon" size={24} />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-mission-illustration">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2rem",
                }}
              >
                <Fingerprint
                  className="about-animate-pulse"
                  size={128}
                  strokeWidth={1}
                />
                <div style={{ display: "flex", gap: "1.5rem" }}>
                  <Shield
                    className="about-animate-bounce about-delay-100"
                    size={64}
                    color="#a855f7"
                  />
                  <Globe
                    className="about-animate-bounce about-delay-200"
                    size={64}
                    color="#3b82f6"
                  />
                  <Lock
                    className="about-animate-bounce about-delay-300"
                    size={64}
                    color="#22c55e"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="about-features">
        <div className="about-container">
          <h2 className="about-features-title">Why Choose Us</h2>
          <div className="about-features-grid">
            {[
              {
                icon: Lock,
                title: "Advanced Security",
                description:
                  "Bank-grade encryption and security measures to protect sensitive data",
              },
              {
                icon: Building2,
                title: "Enterprise Ready",
                description:
                  "Scalable solutions that grow with your business needs",
              },
              {
                icon: Award,
                title: "Certified Excellence",
                description:
                  "ISO certified with industry-leading compliance standards",
              },
            ].map((feature, index) => (
              <div key={index} className="about-feature-card">
                <div className="about-feature-card-icon">
                  <feature.icon size={64} />
                </div>
                <h3 className="about-feature-card-title">{feature.title}</h3>
                <p className="about-feature-card-description">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-cta-background">
          <div className="about-cta-gradient" />
          <div className="about-hero-blob about-hero-blob-1" />
          <div className="about-hero-blob about-hero-blob-2" />
        </div>
        <div className="about-container">
          <div className="about-cta-content">
            <h2 className="about-cta-title">
              Ready to Transform Your KYC Process?
            </h2>
            <p className="about-cta-description">
              Join hundreds of businesses that trust us with their verification
              needs
            </p>
            <button className="about-cta-button">
              Get Started
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
