"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Zap, Sparkles, Crown } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="large"
      sizing="small"
      background="fluid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="SaaS Pro"
          navItems={[
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="SAAS PRO"
          description="Streamline your business with our intelligent SaaS platform. Automate workflows, increase productivity, and scale effortlessly."
          buttons={[
            {
              text: "Start Free Trial",
              href: "pricing"
            },
            {
              text: "Watch Demo",
              href: "features"
            }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763828202874-v4ord9we.jpg",
              imageAlt: "SaaS dashboard interface"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763828203661-syoqv5d6.jpg",
              imageAlt: "Cloud computing technology"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763828204407-sx40s66q.jpg",
              imageAlt: "Digital transformation solution"
            }
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="About Us"
          description="We believe every business deserves world-class software solutions. SaaS Pro empowers teams to work smarter, not harder. With intuitive design and powerful automation, we help you achieve more in less time."
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Powerful Features"
          description="Everything you need to transform your business operations"
          tag="Capabilities"
          features={[
            {
              title: "Advanced Analytics",
              description: "Get real-time insights into your business performance with comprehensive dashboards and detailed reporting.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763828205203-fd3z6jxo.jpg",
              imageAlt: "Analytics dashboard"
            },
            {
              title: "Enterprise Security",
              description: "Bank-level encryption and compliance standards keep your data safe. SOC 2 certified and GDPR compliant.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763828205869-2p1vzeq8.jpg",
              imageAlt: "Security protection"
            },
            {
              title: "Seamless Integration",
              description: "Connect with your favorite tools. API-first architecture makes integration simple and powerful.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763828206407-g0ej5g1p.jpg",
              imageAlt: "API integration"
            },
            {
              title: "24/7 Support",
              description: "Our expert support team is always ready to help. Live chat, email, and phone support available round the clock.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763828205203-fd3z6jxo.jpg",
              imageAlt: "Customer support"
            }
          ]}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Simple, Transparent Pricing"
          description="Choose the plan that works best for your business. All plans include 14-day free trial."
          tag="Plans"
          plans={[
            {
              id: "startup",
              badge: "Startup",
              badgeIcon: Zap,
              price: "$49/mo",
              subtitle: "Perfect for getting started",
              buttons: [
                {
                  text: "Start Free Trial",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "#"
                }
              ],
              features: [
                "Up to 5 team members",
                "10GB storage",
                "Basic analytics",
                "Email support",
                "Core integrations"
              ]
            },
            {
              id: "professional",
              badge: "Professional",
              badgeIcon: Sparkles,
              price: "$149/mo",
              subtitle: "Best for growing teams",
              buttons: [
                {
                  text: "Start Free Trial",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "#"
                }
              ],
              features: [
                "Up to 25 team members",
                "500GB storage",
                "Advanced analytics",
                "Priority support",
                "All integrations",
                "Custom workflows"
              ]
            },
            {
              id: "enterprise",
              badge: "Enterprise",
              badgeIcon: Crown,
              price: "Custom",
              subtitle: "For large organizations",
              buttons: [
                {
                  text: "Contact Sales",
                  href: "contact"
                },
                {
                  text: "Request Demo",
                  href: "#"
                }
              ],
              features: [
                "Unlimited team members",
                "Unlimited storage",
                "Custom analytics",
                "24/7 dedicated support",
                "Custom integrations",
                "White-label options",
                "SLA guarantee"
              ]
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="Trusted by Industry Leaders"
          description="See what customers are saying about SaaS Pro"
          tag="Testimonials"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "TechVenture Inc",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763828207106-klj3mcv1.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Operations Director",
              company: "Global Solutions Ltd",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763828207776-haecnk89.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "VP Product",
              company: "InnovateLab",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763828208434-87llu903.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Founder",
              company: "StartupXYZ",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763828209268-0x1289s3.jpg",
              imageAlt: "David Kim"
            }
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofTwo
          title="Trusted by Leading Companies"
          description="Join thousands of successful businesses using SaaS Pro"
          tag="Partners"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763828209951-fxuqug1i.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763828210564-d2gtg5gd.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763828211416-2vcl0xyj.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763828212222-eat4wddx.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763828213083-r4g5lhk5.jpg"
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about SaaS Pro"
          tag="Help"
          faqs={[
            {
              id: "1",
              title: "What is included in the free trial?",
              content: "Our 14-day free trial includes full access to all features across any plan tier. No credit card required to get started. You'll get a dedicated onboarding specialist to help you succeed."
            },
            {
              id: "2",
              title: "Can I change plans anytime?",
              content: "Yes, absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll adjust your billing accordingly."
            },
            {
              id: "3",
              title: "What payment methods do you accept?",
              content: "We accept all major credit cards, bank transfers, and wire payments for enterprise customers. Monthly and annual billing options are available."
            },
            {
              id: "4",
              title: "Is my data secure?",
              content: "Security is our top priority. We use AES-256 encryption, maintain SOC 2 Type II compliance, and conduct regular third-party security audits. Your data is always encrypted in transit and at rest."
            },
            {
              id: "5",
              title: "How long does setup take?",
              content: "Most teams are up and running within minutes. Our intuitive onboarding process guides you through setup, and our support team can help with integrations and customization."
            },
            {
              id: "6",
              title: "Do you offer API access?",
              content: "Yes, our comprehensive REST API is available on all paid plans. Full documentation and code examples are provided to help you integrate SaaS Pro with your existing tools."
            }
          ]}
          textboxLayout="default"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Transform Your Business?"
          description="Join thousands of teams that are already saving time and increasing productivity. Get started today with a free 14-day trial."
          inputs={[
            {
              name: "fullName",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Work Email",
              required: true
            },
            {
              name: "company",
              type: "text",
              placeholder: "Company Name",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your business and goals...",
            rows: 5,
            required: false
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763828215132-q5h6amou.jpg"
          imageAlt="Professional team collaboration"
          mediaPosition="right"
          buttonText="Start Free Trial"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          copyrightText="© 2025 SaaS Pro. All rights reserved."
          columns={[
            {
              title: "Product",
              items: [
                {
                  label: "Features",
                  href: "features"
                },
                {
                  label: "Pricing",
                  href: "pricing"
                },
                {
                  label: "Security",
                  href: "#"
                },
                {
                  label: "Roadmap",
                  href: "#"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About",
                  href: "about"
                },
                {
                  label: "Blog",
                  href: "#"
                },
                {
                  label: "Careers",
                  href: "#"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Privacy Policy",
                  href: "#"
                },
                {
                  label: "Terms of Service",
                  href: "#"
                },
                {
                  label: "Cookie Policy",
                  href: "#"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}