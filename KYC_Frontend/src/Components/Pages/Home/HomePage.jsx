import React, { useEffect, useState } from "react";
import {
  Shield,
  Lock,
  Users,
  Scan,
  ChevronRight,
  Globe,
  Zap,
  CheckCircle,
  Activity,
  Building,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import "./HomePage.css";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home-container">
      <div className="gradient-bg">
        <div className="gradient-circle c1"></div>
        <div className="gradient-circle c2"></div>
        <div className="gradient-circle c3"></div>
      </div>

      <nav className="navbar">
        <div className="logo">
          <div className="logo-wrapper">
            <Shield className="logo-icon" />
            <span>Pratyaksha</span>
          </div>
          <div className="nav-links">
            <a href="#solutions">Solutions</a>
            <a href="#industries">Industries</a>
            <a href="/about">About Us</a>
            <a href="#resources">Resources</a>
          </div>
        </div>
        <div className="auth-buttons">
          <button className="demo-btn">Request Demo</button>
          <button className="login-btn">Login</button>
        </div>
      </nav>

      <main>
        <section className="hero-section">
          <div className={`content ${isVisible ? "visible" : ""}`}>
            <div className="hero-badge">
              <Zap className="badge-icon" />
              <span>Next-Gen Identity Verification</span>
            </div>
            <h1>
              Building a world
              <div className="gradient-text">of instant trust</div>
              <div className="sub-heading">Verification Reimagined</div>
            </h1>
            <p>
              Pratyaksha develops high-performance biometric solutions used by
              governments, businesses and law enforcement agencies to keep
              people safe, onboard new customers, and build institutional trust.
            </p>
            <div className="cta-group">
              <button
                className="cta-button"
                onClick={() => (window.location.href = "/getStarted")}
              >
                Get Started
                <ChevronRight className="arrow-icon" />
              </button>
              <div className="stats-group">
                <div className="stat-item">
                  <span className="stat-number">99.9%</span>
                  <span className="stat-label">Accuracy Rate</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">2.5s</span>
                  <span className="stat-label">Verification Time</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`illustration-container ${isVisible ? "visible" : ""}`}
          >
            <div className="cyber-card">
              <div className="card-header">
                <div className="status-dot"></div>
                <span>Live Verification</span>
              </div>
              <div className="verification-progress">
                <div className="scan-ring"></div>
                <Scan className="scan-icon" />
                <div className="progress-circles">
                  <span className="progress-circle"></span>
                  <span className="progress-circle"></span>
                  <span className="progress-circle"></span>
                </div>
              </div>
              <div className="verification-steps">
                <div className="step completed">
                  <CheckCircle className="step-icon" />
                  <span>Identity Verified</span>
                </div>
                <div className="step active">
                  <Activity className="step-icon" />
                  <span>Processing Documents</span>
                </div>
                <div className="step">
                  <Globe className="step-icon" />
                  <span>Global Check</span>
                </div>
              </div>
            </div>
            <div className="floating-elements">
              <div className="float-card fc-1">
                <Shield className="float-icon" />
                <span>256-bit Encryption</span>
              </div>
              <div className="float-card fc-2">
                <Users className="float-icon" />
                <span>10M+ Verifications</span>
              </div>
              <div className="float-card fc-3">
                <Lock className="float-icon" />
                <span>ISO 27001</span>
              </div>
            </div>
          </div>
        </section>

        <section className="trusted-by">
          <h2>Trusted by Industry Leaders</h2>
          <div className="logos-grid">
            <div className="trusted-logo">Fortune 500 Companies</div>
            <div className="trusted-logo">Government Agencies</div>
            <div className="trusted-logo">Financial Institutions</div>
            <div className="trusted-logo">Healthcare Providers</div>
          </div>
        </section>

        <section className="features">
          <div className="section-header">
            <h2>Why Choose Pratyaksha</h2>
            <p>Next-generation features for seamless identity verification</p>
          </div>
          <div className="feature-grid">
            {[
              {
                icon: <Shield />,
                title: "Military-Grade Security",
                desc: "Bank-level encryption with advanced threat protection",
              },
              {
                icon: <Zap />,
                title: "Lightning Fast",
                desc: "Complete verification in seconds, not hours",
              },
              {
                icon: <Globe />,
                title: "Global Coverage",
                desc: "Support for 190+ countries and 4000+ document types",
              },
              {
                icon: <Activity />,
                title: "Real-time Monitoring",
                desc: "Advanced analytics and instant notifications",
              },
            ].map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon-wrapper">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
                <div className="feature-hover"></div>
              </div>
            ))}
          </div>
        </section>

        <section className="industries" id="industries">
          <div className="section-header">
            <h2>Industries We Serve</h2>
            <p>Tailored solutions for every sector</p>
          </div>
          <div className="industries-grid">
            {[
              {
                icon: <Building />,
                title: "Banking & Finance",
                desc: "Secure KYC solutions for financial institutions",
              },
              {
                icon: <Briefcase />,
                title: "Enterprise",
                desc: "Large-scale identity verification solutions",
              },
              {
                icon: <Shield />,
                title: "Government",
                desc: "Secure citizen identity management",
              },
              {
                icon: <Users />,
                title: "Healthcare",
                desc: "HIPAA-compliant identity verification",
              },
            ].map((industry, index) => (
              <div className="industry-card" key={index}>
                <div className="industry-icon">{industry.icon}</div>
                <h3>{industry.title}</h3>
                <p>{industry.desc}</p>
                <a href="#" className="learn-more">
                  Learn more <ArrowRight className="arrow-icon" />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="success-metrics">
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>120+</h3>
              <p>Countries Served</p>
            </div>
            <div className="metric-card">
              <h3>1B+</h3>
              <p>Verifications</p>
            </div>
            <div className="metric-card">
              <h3>10K+</h3>
              <p>Enterprise Clients</p>
            </div>
            <div className="metric-card">
              <h3>99.9%</h3>
              <p>Accuracy Rate</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to get started?</h2>
            <p>Experience the future of identity verification today</p>
            <button className="cta-button">
              Schedule a Demo
              <ArrowRight className="arrow-icon" />
            </button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-wrapper">
              <Shield className="logo-icon" />
              <span>Pratyaksha</span>
            </div>
            <p>
              Building a world of instant trust through advanced biometric
              solutions.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Solutions</h4>
            <ul>
              <li>
                <a href="#">Identity Verification</a>
              </li>
              <li>
                <a href="#">Document Verification</a>
              </li>
              <li>
                <a href="#">Biometric Authentication</a>
              </li>
              <li>
                <a href="#">Fraud Prevention</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">Case Studies</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <p>
                <Phone className="contact-icon" /> +91 86240-70061
              </p>
              <p>
                <Mail className="contact-icon" /> contact@trustkyc.com
              </p>
              <p>
                <MapPin className="contact-icon" /> 123 Innovation Street, Tech
                City, TC 12345
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
          <p className="copyright">© 2024 Pratyaksha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
