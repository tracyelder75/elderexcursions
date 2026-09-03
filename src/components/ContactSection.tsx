import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Mail, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  journey: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    try {
      const body = new URLSearchParams({
        "form-name": "contact",
        ...Object.fromEntries(
          Object.entries(data).filter(([, v]) => v !== undefined && v !== "")
        ),
      });
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      toast.error("Something went wrong. Please try emailing us directly.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-accent text-base tracking-[0.2em] uppercase font-medium mb-3">
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
                href="mailto:tracyelder75@gmail.com"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} className="text-accent" aria-hidden="true" />
                <span className="text-base">tracyelder75@gmail.com</span>
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
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 bg-background rounded-lg p-8"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label htmlFor="contact-name" className="block text-base font-medium text-foreground mb-1.5">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    {...register("name")}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    aria-invalid={!!errors.name}
                    autocomplete="name"
                    className={`w-full px-4 py-2.5 rounded-md border bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-ring ${errors.name ? "border-destructive" : "border-border"}`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="mt-1 text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-base font-medium text-foreground mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    {...register("email")}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    aria-invalid={!!errors.email}
                    autocomplete="email"
                    className={`w-full px-4 py-2.5 rounded-md border bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-ring ${errors.email ? "border-destructive" : "border-border"}`}
                    placeholder="you@email.com"
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="mt-1 text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-base font-medium text-foreground mb-1.5">
                    Phone (optional)
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    {...register("phone")}
                    autocomplete="tel"
                    className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="contact-journey" className="block text-base font-medium text-foreground mb-1.5">
                    Which journey interests you?
                  </label>
                  <select
                    id="contact-journey"
                    {...register("journey")}
                    className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a journey</option>
                    <option>2027 – England &amp; Wales</option>
                    <option>2028 – Scotland</option>
                    <option>2029 – Ireland</option>
                    <option>Washington D.C.</option>
                    <option>The Ark Experience</option>
                    <option>Dollywood</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-base font-medium text-foreground mb-1.5">
                    Message (optional)
                  </label>
                  <textarea
                    id="contact-message"
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Any questions or special interests?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-md font-medium text-base hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting && <Loader2 size={18} className="animate-spin" aria-hidden="true" />}
                  {isSubmitting ? "Sending…" : "Send My Information"}
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
