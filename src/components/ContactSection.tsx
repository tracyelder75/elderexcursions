import { useState } from "react";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-3">
              Get in Touch
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Start Your Journey
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Interested in joining an upcoming trip or want to learn more? Fill
              out the form and Tracy will personally reach out to you.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:elderexcursions@gmail.com"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} className="text-accent" />
                <span className="text-sm">elderexcursions@gmail.com</span>
              </a>
              <a
                href="tel:706-207-2885"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Phone size={18} className="text-accent" />
                <span className="text-sm">706-207-2885</span>
              </a>
            </div>
          </div>
          <div>
            {submitted ? (
              <div className="bg-primary/10 rounded-lg p-8 text-center">
                <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                  Thank You!
                </h3>
                <p className="text-muted-foreground">
                  We've received your information and Tracy will be in touch soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 bg-background rounded-lg p-8"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Which journey interests you?
                  </label>
                  <select
                    className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a journey</option>
                    <option>2027 – England & Wales</option>
                    <option>2028 – Scotland</option>
                    <option>2029 – Ireland</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Message (optional)
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Any questions or special interests?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  Send My Information
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
