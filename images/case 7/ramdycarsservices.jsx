import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MoveRight, CalendarCheck2, Phone, Wrench, Gauge, Car, Sparkles, MapPin, Mail, Clock } from "lucide-react";

// ---- Simple bilingual copy ----
const copy = {
  en: {
    brand: "Ramdy Car Services",
    nav: { services: "Services", about: "About", reviews: "Reviews", contact: "Contact" },
    hero: {
      kicker: "Luxury care for hard‑working cars",
      title: "Premium Auto Service, Sharp Look",
      subtitle:
        "Performance maintenance, diagnostics, and cosmetic upgrades — all executed with precision and style.",
      book: "Book Appointment",
      call: "Call Now",
    },
    services: {
      title: "Our Signature Services",
      items: [
        { icon: <Wrench className="w-6 h-6" />, title: "Complete Diagnostics", desc: "OBD-II scan, electrical, noise & vibration analysis." },
        { icon: <Gauge className="w-6 h-6" />, title: "Performance Tune‑Ups", desc: "Intake, plugs, timing, fluid service, road test." },
        { icon: <Car className="w-6 h-6" />, title: "Brakes & Suspension", desc: "Pads/rotors, calipers, coilovers, alignments." },
        { icon: <Sparkles className="w-6 h-6" />, title: "Detail & Aesthetics", desc: "Paint correction, ceramic coat, tint, LEDs." },
      ],
    },
    about: {
      title: "Elegance meets engineering",
      body:
        "We combine dealer‑level tools with boutique service. Transparent pricing, OEM or premium aftermarket parts, and craftsmanship that honors your vehicle.",
    },
    reviews: { title: "Client Reviews", a: "Flawless brake job and immaculate detail.", b: "They diagnosed in minutes what others missed.", c: "Fair pricing, luxury finish, zero hassle." },
    contact: {
      title: "Contact & Hours",
      sub: "Questions? Want a quote? Reach out — we respond fast.",
      address: "123 Redline Ave, Suite R, Provo, UT",
      hours: [
        ["Mon–Fri", "8:30a – 6:00p"],
        ["Saturday", "9:00a – 2:00p"],
        ["Sunday", "Closed"],
      ],
      form: { name: "Name", email: "Email", phone: "Phone", message: "What does your car need?", send: "Send Request" },
    },
    footer: { line: "Certified techs • Premium parts • Transparent quotes" },
    switchTo: "ES",
  },
  es: {
    brand: "Ramdy Car Services",
    nav: { services: "Servicios", about: "Nosotros", reviews: "Reseñas", contact: "Contacto" },
    hero: {
      kicker: "Cuidado de lujo para autos de batalla",
      title: "Servicio Automotriz Premium, Estilo Impecable",
      subtitle:
        "Mantenimiento de alto rendimiento, diagnóstico y mejoras estéticas — con precisión y estilo.",
      book: "Agendar Cita",
      call: "Llamar Ahora",
    },
    services: {
      title: "Servicios Destacados",
      items: [
        { icon: <Wrench className="w-6 h-6" />, title: "Diagnóstico Completo", desc: "Escáner OBD‑II, eléctrico, ruidos y vibraciones." },
        { icon: <Gauge className="w-6 h-6" />, title: "Puesta a Punto", desc: "Admisión, bujías, sincronización, fluidos y prueba." },
        { icon: <Car className="w-6 h-6" />, title: "Frenos y Suspensión", desc: "Pastillas/rotors, calipers, coilovers y alineación." },
        { icon: <Sparkles className="w-6 h-6" />, title: "Detalle y Estética", desc: "Corrección de pintura, cerámica, polarizado y LEDs." },
      ],
    },
    about: {
      title: "Elegancia y precisión",
      body:
        "Unimos herramientas de nivel agencia con atención boutique. Precios claros, refacciones OEM o premium, y mano de obra que honra tu vehículo.",
    },
    reviews: { title: "Opiniones", a: "Frenos perfectos y detallado impecable.", b: "Diagnosticaron en minutos lo que otros no vieron.", c: "Precio justo, acabado de lujo, cero estrés." },
    contact: {
      title: "Contacto y Horarios",
      sub: "¿Dudas? ¿Cotización? Escríbenos — respondemos rápido.",
      address: "123 Redline Ave, Suite R, Provo, UT",
      hours: [
        ["Lun–Vie", "8:30a – 6:00p"],
        ["Sábado", "9:00a – 2:00p"],
        ["Domingo", "Cerrado"],
      ],
      form: { name: "Nombre", email: "Correo", phone: "Teléfono", message: "¿Qué necesita tu auto?", send: "Enviar Solicitud" },
    },
    footer: { line: "Técnicos certificados • Refacciones premium • Cotizaciones claras" },
    switchTo: "EN",
  },
} as const;

export default function LuxuryMechanicBilingual() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const t = useMemo(() => copy[lang], [lang]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600/40">
      <header className="sticky top-0 z-40 backdrop-blur bg-black/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-red-600 grid place-items-center shadow-[0_0_40px_rgba(220,38,38,0.6)]">
              <Wrench className="w-5 h-5" />
            </div>
            <div className="leading-tight">
              <div className="text-xs tracking-widest text-white/60">{t.hero.kicker}</div>
              <div className="font-black text-lg">{t.brand}</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {Object.entries(t.nav).map(([key, label]) => (
              <a key={key} href={`#${key}`} className="text-white/80 hover:text-white transition">{label}</a>
            ))}
          </nav>
          <Button onClick={() => setLang(lang === "en" ? "es" : "en")} className="bg-white text-black hover:bg-white/90 rounded-2xl">
            {t.switchTo}
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.25),transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-red-500 tracking-widest text-xs md:text-sm uppercase mb-3">{t.hero.kicker}</p>
            <h1 className="text-4xl md:text-6xl font-black leading-[1.05] mb-4">{t.hero.title}</h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-prose">{t.hero.subtitle}</p>
            <div className="flex flex-wrap items-center gap-3">
              <Button className="rounded-2xl bg-red-600 hover:bg-red-700 text-white px-6 py-6 text-base md:text-lg shadow-[0_0_50px_rgba(220,38,38,0.5)]">
                <CalendarCheck2 className="w-5 h-5 mr-2" /> {t.hero.book}
              </Button>
              <Button variant="outline" className="rounded-2xl border-white/20 text-white hover:bg-white/10">
                <Phone className="w-5 h-5 mr-2" /> {t.hero.call}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-white/10 bg-zinc-950/60">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-black mb-8">{t.services.title}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.services.items.map((s, i) => (
              <Card key={i} className="bg-black/60 border-white/10 rounded-3xl hover:border-red-600/60 transition">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 grid place-items-center mb-4">{s.icon}</div>
                  <div className="font-semibold text-lg">{s.title}</div>
                  <p className="text-white/70 text-sm mt-1">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">{t.about.title}</h2>
            <p className="text-white/80 text-lg">{t.about.body}</p>
          </div>
        </div>
      </section>

      <section id="reviews" className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-black mb-8">{t.reviews.title}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[t.reviews.a, t.reviews.b, t.reviews.c].map((text, i) => (
              <Card key={i} className="bg-black/60 border-white/10 rounded-3xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-red-600/30" />
                    <div className="font-semibold">★★★★★</div>
                  </div>
                  <p className="text-white/80">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-zinc-950/60">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">{t.contact.title}</h2>
            <p className="text-white/70 mb-6">{t.contact.sub}</p>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-red-500" /> {t.contact.address}</div>
              <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-red-500" /> (801) 555‑0123</div>
              <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-red-500" /> service@ramdycars.com</div>
              <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-red-500" />
                <div>
                  {t.contact.hours.map(([d, h], i) => (
                    <div key={i} className="flex gap-2"><span className="w-20 text-white/60">{d}</span><span>{h}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget as HTMLFormElement);
              console.log(Object.fromEntries(data.entries()));
              alert(lang === 'en' ? 'Request sent! We\'ll be in touch.' : '¡Solicitud enviada! Te contactaremos.');
            }}
            className="p-6 rounded-3xl border border-white/10 bg-black/60 space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" placeholder={t.contact.form.name} className="px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 outline-none focus:border-red-600" />
              <input name="email" placeholder={t.contact.form.email} type="email" className="px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 outline-none focus:border-red-600" />
              <input name="phone" placeholder={t.contact.form.phone} className="px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 outline-none focus:border-red-600 md:col-span-2" />
              <textarea name="message" placeholder={t.contact.form.message} rows={5} className="px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 outline-none focus:border-red-600 md:col-span-2" />
            </div>
            <Button type="submit" className="rounded-2xl bg-red-600 hover:bg-red-700 text-white w-full py-6 text-base">
              {t.contact.form.send}
            </Button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/60 text-sm">© {new Date().getFullYear()} {t.brand}</div>
          <div className="text-center text-sm">{t.footer.line}</div>
        </div>
      </footer>
    </div>
  );
}
