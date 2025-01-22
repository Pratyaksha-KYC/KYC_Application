import React, { useState, useEffect } from "react";
import "./GetStarted.css";
import {
  Shield,
  Upload,
  CheckCircle2,
  ArrowRight,
  FileCheck,
  Lock,
  Globe,
  Fingerprint,
  Rocket,
  CheckSquare,
  Zap,
  Award,
  Target,
  Sparkles,
  Users,
  Key,
  Search,
  Clock,
  CheckCheck,
} from "lucide-react";

function GetStarted() {
  const [accepted, setAccepted] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [visibleSections, setVisibleSections] = useState({
    features: false,
    steps: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const featuresSection = document.getElementById("features");
      const stepsSection = document.getElementById("steps");

      if (featuresSection) {
        const featuresBounds = featuresSection.getBoundingClientRect();
        if (featuresBounds.top < window.innerHeight * 0.75) {
          setVisibleSections((prev) => ({ ...prev, features: true }));
        }
      }

      if (stepsSection) {
        const stepsBounds = stepsSection.getBoundingClientRect();
        if (stepsBounds.top < window.innerHeight * 0.75) {
          setVisibleSections((prev) => ({ ...prev, steps: true }));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="getstarted-page">
      {/* Hero Section */}
      <section className="getstarted-hero">
        <div className="getstarted-hero-background">
          <div className="getstarted-hero-gradient" />
          <div className="getstarted-hero-blob getstarted-hero-blob-1" />
          <div className="getstarted-hero-blob getstarted-hero-blob-2" />
          <div className="getstarted-hero-blob getstarted-hero-blob-3" />
        </div>

        <div className="getstarted-container">
          <div className="getstarted-hero-content">
            <div className="getstarted-hero-text">
              <div className="getstarted-hero-badge">
                <Sparkles size={16} />
                <span>Next Generation KYC</span>
              </div>

              <h1 className="getstarted-hero-title">
                Welcome to
                <span className="getstarted-hero-highlight"> Pratyaksha</span>
              </h1>

              <p className="getstarted-hero-subtitle">
                Your journey to secure and seamless KYC begins here
              </p>

              <div className="getstarted-hero-stats">
                <div className="getstarted-hero-stat">
                  <Users className="getstarted-hero-stat-icon" size={20} />
                  <span>10K+ Users</span>
                </div>
                <div className="getstarted-hero-stat">
                  <Shield className="getstarted-hero-stat-icon" size={20} />
                  <span>99.9% Secure</span>
                </div>
                <div className="getstarted-hero-stat">
                  <Globe className="getstarted-hero-stat-icon" size={20} />
                  <span>Global</span>
                </div>
              </div>
            </div>

            <div className="getstarted-hero-illustration">
              <div className="getstarted-hero-circle">
                <Shield
                  className="getstarted-animate-float"
                  size={128}
                  strokeWidth={1}
                />
                <div className="getstarted-hero-particles">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className={`getstarted-particle p${i + 1}`} />
                  ))}
                </div>
              </div>
              <Lock
                className="getstarted-animate-pulse getstarted-delay-100"
                size={48}
              />
              <Key
                className="getstarted-animate-float getstarted-delay-200"
                size={40}
              />
              <Search className="getstarted-animate-spin" size={36} />
              <Clock
                className="getstarted-animate-pulse getstarted-delay-300"
                size={32}
              />
              <CheckCheck className="getstarted-animate-bounce" size={44} />
            </div>
          </div>
        </div>

        <div className="getstarted-hero-scroll">
          <div className="getstarted-scroll-indicator" />
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className={`getstarted-features ${
          visibleSections.features ? "getstarted-section-visible" : ""
        }`}
      >
        <div className="getstarted-container">
          <div className="getstarted-features-header">
            <h2 className="getstarted-section-title">
              <Target size={32} className="getstarted-section-icon" />
              Why Choose Pratyaksha?
            </h2>
            <p className="getstarted-section-subtitle">
              Experience the future of KYC verification with our cutting-edge
              platform
            </p>
          </div>

          <div className="getstarted-features-showcase">
            <div className="getstarted-features-cards">
              {[
                {
                  icon: FileCheck,
                  title: "Smart Document Processing",
                  description:
                    "AI-powered document verification with 99.9% accuracy",
                  color: "blue",
                },
                {
                  icon: Shield,
                  title: "Bank-Grade Security",
                  description:
                    "Enterprise-level encryption and data protection",
                  color: "purple",
                },
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Complete verification in under 3 minutes",
                  color: "yellow",
                },
                {
                  icon: Globe,
                  title: "Global Coverage",
                  description:
                    "Support for 195+ countries and 100+ document types",
                  color: "green",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`getstarted-feature-card getstarted-feature-${
                    feature.color
                  } ${
                    activeFeature === index ? "getstarted-feature-active" : ""
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className="getstarted-feature-icon">
                    <feature.icon size={32} />
                  </div>
                  <h3 className="getstarted-feature-title">{feature.title}</h3>
                  <p className="getstarted-feature-description">
                    {feature.description}
                  </p>
                  <div className="getstarted-feature-shine" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section
        id="steps"
        className={`getstarted-steps ${
          visibleSections.steps ? "getstarted-section-visible" : ""
        }`}
      >
        <div className="getstarted-container">
          <div className="getstarted-steps-header">
            <h2 className="getstarted-section-title">
              <Award size={32} className="getstarted-section-icon" />
              How It Works?
            </h2>
            <p className="getstarted-section-subtitle">
              Four simple steps to complete your verification
            </p>
          </div>

          <div className="getstarted-steps-timeline">
            {[
              {
                icon: Rocket,
                title: "Quick Registration",
                description: "Sign up in seconds with your email",
                color: "blue",
              },
              {
                icon: Upload,
                title: "Document Upload",
                description: "Securely submit your documents",
                color: "purple",
              },
              {
                icon: Search,
                title: "Smart Verification",
                description: "AI-powered document analysis",
                color: "yellow",
              },
              {
                icon: CheckCircle2,
                title: "Instant Approval",
                description: "Get verified in minutes",
                color: "green",
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`getstarted-step-card getstarted-step-${step.color}`}
              >
                <div className="getstarted-step-content">
                  <div className="getstarted-step-number">{index + 1}</div>
                  <div className="getstarted-step-icon">
                    <step.icon size={32} />
                  </div>
                  <h3 className="getstarted-step-title">{step.title}</h3>
                  <p className="getstarted-step-description">
                    {step.description}
                  </p>
                </div>
                <div className="getstarted-step-progress" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Section */}
      <section className="getstarted-action">
        <div className="getstarted-container">
          <div className="getstarted-action-card">
            <div className="getstarted-checkbox-wrapper">
              <label className="getstarted-checkbox-label">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="getstarted-checkbox"
                />
                <CheckSquare className="getstarted-checkbox-icon" size={24} />
                <span>
                  I accept the{" "}
                  <a href="#" className="getstarted-link">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="getstarted-link">
                    Terms of Service
                  </a>
                </span>
              </label>
            </div>

            <button
              className={`getstarted-continue-button ${
                !accepted ? "getstarted-button-disabled" : ""
              }`}
              disabled={!accepted}
            >
              Get Started Now
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GetStarted;
