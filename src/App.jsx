
import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mouse as MouseIcon,
  Sparkles,
  Wand2,
  Paintbrush,
  ShoppingCart,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Palette,
  Layers,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const cx = (...classes) => classes.filter(Boolean).join(" ");

const Shell = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-600/30 via-slate-900 to-slate-950" />
        <div className="absolute -top-20 left-1/2 h-72 w-[1200px] -translate-x-1/2 rounded-[100px] bg-cyan-500/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto h-56 w-[900px] rounded-[100px] bg-emerald-400/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
};

const Glass = ({ className = "", children }) => (
  <div
    className={cx(
      "rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl shadow-cyan-900/40",
      className
    )}
  >
    {children}
  </div>
);

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 z-30 mb-8 bg-transparent/60 backdrop-blur-xl">
      <div className="flex items-center justify-between py-5">
        <button
          onClick={() => navigate("/")}
          className="group inline-flex items-center gap-2 text-xl font-semibold tracking-wide"
        >
          <MouseIcon className="h-6 w-6 text-cyan-400 group-hover:scale-110 transition" />
          <span>MouseCraft Studio</span>
        </button>
        <div className="hidden items-center gap-6 md:flex">
          {[["Home", "/"],["Producten", "/products"],["Ontwerpen", "/design"],["Galerij", "/gallery"],["Over ons", "/about"],["Contact", "/contact"],].map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                cx(
                  "rounded-full px-4 py-2 text-sm/6 transition",
                  isActive ? "bg-white/10 text-white" : "text-white/80 hover:text-white"
                )
              }
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/design"
            className="group inline-flex items-center gap-2 rounded-full bg-cyan-500/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-600/40 transition hover:bg-cyan-400"
          >
            Start ontwerpen
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <div className="mt-20 border-t border-white/10 py-10 text-sm/6 text-white/70">
    <div className="grid gap-8 md:grid-cols-3">
      <div>
        <div className="mb-2 flex items-center gap-2 text-white">
          <MouseIcon className="h-5 w-5 text-cyan-400" />
          <span className="font-semibold">MouseCraft Studio</span>
        </div>
        <p className="max-w-sm text-white/70">
          Gepersonaliseerde muismatten en deskpads met AI-gestuurde ontwerpstudio. Kwaliteit, snelheid en creativiteit.
        </p>
      </div>
      <div className="space-y-2">
        <p className="font-semibold text-white">Contact</p>
        <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-cyan-400" />
          <a className="underline-offset-2 hover:underline" href="mailto:MouseCraftStudio@hotmail.com">MouseCraftStudio@hotmail.com</a></p>
        <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-cyan-400" /><a className="underline-offset-2 hover:underline" href="tel:+32465185402">0465 18 54 02</a></p>
        <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan-400" />Ninoofsesteenweg 382, Aderlecht 1070</p>
      </div>
      <div className="space-y-2">
        <p className="font-semibold text-white">Volg ons</p>
        <div className="flex gap-3">
          <a className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:bg-white/10" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-4 w-4" /> Instagram
          </a>
          <a className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:bg-white/10" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="h-4 w-4" /> Facebook
          </a>
        </div>
      </div>
    </div>
    <p className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} MouseCraft Studio. Alle rechten voorbehouden.</p>
  </div>
);

const Hero = () => (
  <Glass className="relative overflow-hidden py-16">
    <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-20 w-3/5 rounded-full bg-cyan-300/40 blur-2xl" />
    <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 md:grid-cols-2">
      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-cyan-300/90">Nu live</p>
        <h1 className="mb-5 text-4xl font-extrabold tracking-tight md:text-5xl">
          Maak jouw <span className="text-cyan-300">custom muismat</span> met AI
        </h1>
        <p className="mb-8 max-w-lg text-white/80">
          Ontwerp in minuten. Kies formaat, upload kunst of genereer unieke beelden met AI en bestel een hoogwaardige print die jaren meegaat.
        </p>
          <div className="mt-6">
            <label htmlFor="home-prompt" className="block text-sm text-white/70">Beschrijf je design</label>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <textarea id="home-prompt" rows={2} placeholder="bijv. 'anime, neon blauw, kat in cyberpunk'" className="flex-1 rounded-xl border border-white/10 bg-white/5 p-3 outline-none" />
              <button type="button" className="rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-900 shadow-lg hover:bg-cyan-300">Genereer Design</button>
            </div>
            <p className="mt-2 text-xs text-white/60">Conceptvoorbeeld — knop en prompt werken niet, enkel voor demo.</p>
          </div>
      </div>
      <div className="">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-3xl bg-cyan-500/20 blur-2xl" />
          <Glass>
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-cyan-400/10 p-4">
                <Wand2 className="h-7 w-7 text-cyan-300" />
              </div>
              <div>
                <p className="font-semibold">Generatieve AI</p>
                <p className="text-sm text-white/70">Kies stijlen of laat ons systeem variaties voorstellen.</p>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-4">
              <div className="rounded-2xl bg-cyan-400/10 p-4">
                <Paintbrush className="h-7 w-7 text-cyan-300" />
              </div>
              <div>
                <p className="font-semibold">Pixelperfecte print</p>
                <p className="text-sm text-white/70">Professionele sublimatie voor scherpe, duurzame resultaten.</p>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-4">
              <div className="rounded-2xl bg-cyan-400/10 p-4">
                <Sparkles className="h-7 w-7 text-cyan-300" />
              </div>
              <div>
                <p className="font-semibold">Gemaakt voor gamers</p>
                <p className="text-sm text-white/70">Kleine muismatten of ruime deskpads – jij kiest.</p>
              </div>
            </div>
          </Glass>
        </div>
      </div>
    </div>
  </Glass>
);

const ProductCard = ({ title, size, price, description, onDesign }) => (
  <Glass className="relative flex flex-col gap-4">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-white/70">{size}</p>
      </div>
      <div className="rounded-2xl bg-cyan-400/10 p-3">
        <Layers className="h-6 w-6 text-cyan-300" />
      </div>
    </div>
    <p className="text-white/80">{description}</p>
    <div className="mt-auto flex items-center justify-between">
      <p className="text-2xl font-bold">€ {price}</p>
      <button onClick={onDesign} className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 font-semibold text-slate-900 shadow-lg hover:bg-cyan-300">
        Ontwerp dit
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  </Glass>
);

const galleryItems = [
  { sku: "small", title: "Nebula Burst", bg: "#06b6d4", accent: "#a5f3fc", pattern: "waves", size: "26 × 26 cm" },
  { sku: "large", title: "Midnight Grid", bg: "#4f46e5", accent: "#c7d2fe", pattern: "grid", size: "60 × 35 cm" },
  { sku: "small", title: "Sunset Dots", bg: "#f59e0b", accent: "#fde68a", pattern: "dots", size: "26 × 26 cm" },
  { sku: "large", title: "Emerald Tide", bg: "#10b981", accent: "#a7f3d0", pattern: "waves", size: "60 × 35 cm" },
];

const MousepadThumb = ({ item }) => {
  const ref = useRef(null);
  const dims = item.sku === "small" ? [320, 320] : [480, 280];
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    drawPattern(ctx, c.width, c.height, { bg: item.bg, accent: item.accent, pattern: item.pattern, text: "MouseCraft" });
  }, [item]);
  return <canvas ref={ref} width={dims[0]} height={dims[1]} className="w-full h-auto block" aria-label={`${item.title} preview`} />;
};

const Gallery = () => {
  const scrollerRef = useRef(null);
  const scroll = (dir) => scrollerRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  return (
    <div className="mt-12">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-2xl font-bold">Voorbeelden & designs</h3>
        <div className="flex gap-2">
          <button onClick={() => scroll(-1)} className="rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10"><ChevronLeft className="h-4 w-4" /></button>
          <button onClick={() => scroll(1)} className="rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10"><ChevronRight className="h-4 w-4" /></button>
        </div>
      </div>
      <div ref={scrollerRef} className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
        {galleryItems.map((it, i) => (
          <motion.div key={i} whileHover={{ scale: 1.02 }} className="min-w-[320px] snap-start">
            <Glass className="p-3">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
                <MousepadThumb item={it} />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="font-semibold">{it.title}</p>
                  <p className="text-sm text-white/70">{it.sku === "small" ? "Kleine muismat" : "Grote muismat / Deskpad"} — {it.size}</p>
                </div>
                <NavLink to={`/design?sku=${it.sku}`} className="rounded-full bg-cyan-400 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-300">Ontwerp</NavLink>
              </div>
            </Glass>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

function roundRect(ctx, x, y, w, h, r) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.lineTo(x + w - rr, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + rr);
  ctx.lineTo(x + w, y + h - rr);
  ctx.quadraticCurveTo(x + w, y + h, x + w - rr, y + h);
  ctx.lineTo(x + rr, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - rr);
  ctx.lineTo(x, y + rr);
  ctx.quadraticCurveTo(x, y, x + rr, y);
  ctx.closePath();
}

function drawMockPhoto(ctx, w, h, cfg) {
  const { sku, bg, accent, pattern, style } = cfg;
  ctx.clearRect(0, 0, w, h);
  const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
  bgGrad.addColorStop(0, "#0b1220");
  bgGrad.addColorStop(1, "#111827");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, w, h);

  ctx.save();
  ctx.translate(w / 2, h / 2);
  const angle = sku === "small" ? -0.12 : 0.08;
  ctx.rotate(angle);
  const pw = sku === "small" ? Math.min(w * 0.66, h * 0.66) : Math.min(w * 0.8, h * 0.6);
  const ph = sku === "small" ? pw : pw * 0.58;

  ctx.shadowColor = "rgba(0,0,0,0.5)";
  ctx.shadowBlur = 24;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 18;

  roundRect(ctx, -pw / 2, -ph / 2, pw, ph, 22);
  ctx.fillStyle = "#0f172a";
  ctx.fill();

  ctx.clip();
  drawPattern(ctx, w, h, { bg, accent, pattern, text: style === "plain" ? "" : style === "comic" ? "COMIC" : "ANIME" });

  if (style === "comic") {
    ctx.globalAlpha = 0.18;
    ctx.fillStyle = "#000";
    for (let y = -h; y < h; y += 20) {
      for (let x = -w; x < w; x += 20) {
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.globalAlpha = 1;
  }

  if (style === "anime") {
    ctx.globalAlpha = 0.25;
    ctx.strokeStyle = accent;
    for (let i = 0; i < 10; i++) {
      ctx.beginPath();
      ctx.moveTo(-pw / 2 + i * 14, -ph / 2);
      ctx.lineTo(-pw / 2 + i * 6, ph / 2);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  ctx.restore();

  const shine = ctx.createLinearGradient(0, 0, w, h);
  shine.addColorStop(0, "rgba(255,255,255,0.06)");
  shine.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = shine;
  roundRect(ctx, w * 0.15, h * 0.1, w * 0.7, h * 0.8, 40);
  ctx.fill();
}

const photoItems = [
  { sku: "small", title: "Comic Pop", style: "comic", bg: "#ef4444", accent: "#fde68a", pattern: "dots", size: "26 × 26 cm" },
  { sku: "large", title: "Anime Neon", style: "anime", bg: "#06b6d4", accent: "#a5f3fc", pattern: "waves", size: "60 × 35 cm" },
  { sku: "small", title: "Retro Grid", style: "plain", bg: "#22c55e", accent: "#bbf7d0", pattern: "grid", size: "26 × 26 cm" },
  { sku: "large", title: "Manga Sky", style: "anime", bg: "#8b5cf6", accent: "#ddd6fe", pattern: "waves", size: "60 × 35 cm" },
];

const MockPhoto = ({ item }) => {
  const ref = useRef(null);
  const dims = item.sku === "small" ? [560, 360] : [720, 420];
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    drawMockPhoto(ctx, c.width, c.height, item);
  }, [item]);
  return <canvas ref={ref} width={dims[0]} height={dims[1]} className="w-full h-auto block" aria-label={`${item.title} mockup`} />;
};

const PhotoGallery = () => (
  <div className="mt-12">
    <h3 className="mb-4 text-2xl font-bold">Foto‑mockups</h3>
    <div className="grid gap-4 md:grid-cols-2">
      {photoItems.map((it, i) => (
        <Glass key={i} className="p-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
            <MockPhoto item={it} />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div>
              <p className="font-semibold">{it.title}</p>
              <p className="text-sm text-white/70">{it.sku === "small" ? "Kleine muismat" : "Grote muismat / Deskpad"} — {it.size}</p>
            </div>
            <NavLink to={`/design?sku=${it.sku}`} className="rounded-full bg-cyan-400 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-300">Ontwerp</NavLink>
          </div>
        </Glass>
      ))}
    </div>
  </div>
);

const Slideshow = ({ items = photoItems }) => {
  const [sources, setSources] = useState(Array(items.length).fill(null));
  const [index, setIndex] = useState(0);
  useEffect(() => {
    let urls = [];
    items.forEach((it, i) => {
      const w = 1200, h = 675;
      const c = document.createElement("canvas");
      c.width = w; c.height = h;
      const ctx = c.getContext("2d");
      drawMockPhoto(ctx, w, h, it);
      c.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        urls.push(url);
        setSources((prev) => { const next = [...prev]; next[i] = url; return next; });
      }, "image/png");
    });
    return () => { urls.forEach((u) => URL.revokeObjectURL(u)); };
  }, [items]);
  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  useEffect(() => { const id = setInterval(next, 5000); return () => clearInterval(id); }, []);
  return (
    <Glass className="relative overflow-hidden p-0">
      <div className="relative aspect-video w-full">
        {sources[index] ? (
          <img src={sources[index]} alt={items[index].title} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full animate-pulse bg-slate-800" />
        )}
        <button aria-label="Vorige" onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 backdrop-blur hover:bg-black/60"><ChevronLeft className="h-5 w-5" /></button>
        <button aria-label="Volgende" onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 backdrop-blur hover:bg-black/60"><ChevronRight className="h-5 w-5" /></button>
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {items.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} aria-label={`Ga naar slide ${i + 1}`} className={cx("h-2 w-2 rounded-full", index === i ? "bg-white" : "bg-white/40")} />
          ))}
        </div>
      </div>
    </Glass>
  );
};

const GalleryPage = () => (
  <div>
    <h2 className="mb-6 text-3xl font-bold">Galerij</h2>
    <p className="mb-6 text-white/80">Comicbook- en anime‑ontwerpen op muismatten. Voorbeelden om te tonen hoe jouw pad eruit kan zien.</p>
    <Slideshow items={photoItems} />
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      {photoItems.map((it, i) => (
        <Glass key={i} className="p-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
            <MockPhoto item={it} />
          </div>
          <p className="mt-2 text-sm text-white/70">{it.title} — {it.sku === "small" ? "Klein 26×26" : "Groot 60×35"}</p>
        </Glass>
      ))}
    </div>
  </div>
);

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Hero />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <Glass>
          <div className="mb-3 flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-cyan-300" />
            <p className="font-semibold">Waarom MouseCraft?</p>
          </div>
          <ul className="space-y-2 text-white/80">
            <li>Volledige online ontwerpstudio met AI en presets.</li>
            <li>Premium materialen en duurzame prints.</li>
            <li>Snelle levertijd en vriendelijke service.</li>
          </ul>
        </Glass>
        <Glass>
          <div className="mb-3 flex items-center gap-3">
            <Palette className="h-6 w-6 text-cyan-300" />
            <p className="font-semibold">Voor wie?</p>
          </div>
          <p className="text-white/80">Gamers, streamers en popcultuurfans (18–35) die hun set‑up persoonlijk en strak willen maken.</p>
        </Glass>
        <Glass>
          <div className="mb-3 flex items-center gap-3">
            <ShoppingCart className="h-6 w-6 text-cyan-300" />
            <p className="font-semibold">Bestellen?</p>
          </div>
          <p className="text-white/80">Kies een formaat, ontwerp in de browser en vraag direct een offerte aan. We produceren pas na jouw akkoord – geen stock, geen verspilling.</p>
        </Glass>
      </div>

      <Gallery />

      <PhotoGallery />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <ProductCard
          title="Kleine muismat"
          size="26 × 26 cm"
          price={"34,98"}
          description="Compact, precies en perfect als cadeau. Zachte antislip‑onderlaag en randstiksel."
          onDesign={() => navigate("/design?sku=small")}
        />
        <ProductCard
          title="Grote muismat / Deskpad"
          size="60 × 35 cm"
          price={"44,98"}
          description="Ruimte voor muis én toetsenbord. Ideaal voor controle en strakke looks op je bureau."
          onDesign={() => navigate("/design?sku=large")}
        />
      </div>
    </div>
  );
};

const Products = () => {
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [sku, setSku] = useState("small");

  const unit = sku === "small" ? 34.98 : 44.98;
  const sizeLabel = sku === "small" ? "26 × 26 cm" : "60 × 35 cm";
  const total = (qty * unit).toFixed(2).replace(".", ",");

  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold">Producten & prijzen</h2>
      <Glass className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <label className="block text-sm text-white/70" htmlFor="format">Formaat</label>
          <div className="flex gap-3" id="format">
            <button onClick={() => setSku("small")} className={cx("rounded-full px-4 py-2", sku === "small" ? "bg-cyan-400 text-slate-900" : "border border-white/10 bg-white/5 text-white/90")}>Klein (26×26)</button>
            <button onClick={() => setSku("large")} className={cx("rounded-full px-4 py-2", sku === "large" ? "bg-cyan-400 text-slate-900" : "border border-white/10 bg-white/5 text-white/90")}>Groot (60×35)</button>
          </div>
          <label className="block text-sm text-white/70" htmlFor="qty">Aantal</label>
          <div className="flex max-w-xs items-center gap-3">
            <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="rounded-full border border-white/10 bg-white/5 px-3 py-2">−</button>
            <input id="qty" name="qty" type="number" min={1} value={qty} onChange={(e) => setQty(Math.max(1, Number(e.target.value)))} className="w-24 rounded-xl border border-white/10 bg-white/5 p-2 text-center outline-none" />
            <button type="button" onClick={() => setQty((q) => q + 1)} className="rounded-full border border-white/10 bg-white/5 px-3 py-2">+</button>
          </div>
          <p className="text-white/80">Eenheid: € {unit.toFixed(2).replace(".", ",")} — {sizeLabel}</p>
          <p className="text-2xl font-bold">Totaal: € {total}</p>
          <div className="flex gap-3 pt-2">
            <button onClick={() => navigate(`/design?sku=${sku}`)} className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-900 shadow-lg hover:bg-cyan-300">
              Ontwerp dit formaat <ArrowRight className="h-4 w-4" />
            </button>
            <NavLink to="/contact" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white/90 hover:bg-white/10">Vraag offerte</NavLink>
          </div>
        </div>
        <div className="space-y-3 text-white/80">
          <p><strong>Materialen:</strong> premium stofoppervlak, antislip rubber, slijtvast randstiksel.</p>
          <p><strong>Print:</strong> duurzame sublimatie met rijke kleuren en scherpe details.</p>
          <p><strong>Levertijd:</strong> 2–3 werkdagen verzending na goedkeuring ontwerp.</p>
          <p><strong>Wasbaar:</strong> gewoon met lauw water en milde zeep.</p>
        </div>
      </Glass>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <ProductCard
          title="Kleine muismat"
          size="26 × 26 cm"
          price={"34,98"}
          description="Ideaal voor beperkte bureauruimte en precieze tracking."
          onDesign={() => navigate("/design?sku=small")}
        />
        <ProductCard
          title="Grote muismat / Deskpad"
          size="60 × 35 cm"
          price={"44,98"}
          description="Ruimte voor muis + toetsenbord – uniforme look voor je set‑up."
          onDesign={() => navigate("/design?sku=large")}
        />
      </div>
    </div>
  );
};

function drawPattern(ctx, w, h, opts) {
  const { bg, accent, pattern, text } = opts;
  ctx.clearRect(0, 0, w, h);
  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, bg);
  grad.addColorStop(1, "#0f172a");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  ctx.globalAlpha = 0.25;
  ctx.strokeStyle = accent;
  ctx.fillStyle = accent;

  if (pattern === "waves") {
    for (let y = 0; y < h; y += 24) {
      ctx.beginPath();
      for (let x = 0; x <= w; x += 24) {
        const yy = y + Math.sin((x + y) / 40) * 8;
        ctx.lineTo(x, yy);
      }
      ctx.stroke();
    }
  } else if (pattern === "dots") {
    for (let y = 12; y < h; y += 24) {
      for (let x = 12; x < w; x += 24) {
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  } else if (pattern === "grid") {
    for (let x = 0; x < w; x += 28) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += 28) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
  }

  ctx.globalAlpha = 1;
  ctx.fillStyle = "white";
  ctx.shadowColor = accent;
  ctx.shadowBlur = 14;
  ctx.font = "bold 42px Inter, system-ui, sans-serif";
  ctx.fillText(text || "Jouw tekst hier", 32, h - 48);
  ctx.shadowBlur = 0;
}

const Designer = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const presetSku = urlParams.get("sku");
  const [sku, setSku] = useState(presetSku || "small");
  const [bg, setBg] = useState("#06b6d4");
  const [accent, setAccent] = useState("#a5f3fc");
  const [pattern, setPattern] = useState("waves");
  const [text, setText] = useState("MouseCraft Studio");
  const canvasRef = useRef(null);

  const dims = sku === "small" ? [600, 600] : [900, 525];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    drawPattern(ctx, canvas.width, canvas.height, { bg, accent, pattern, text });
  }, [bg, accent, pattern, text, sku]);

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `mockup-${sku}.png`;
      a.click();
      URL.revokeObjectURL(url);
    }, "image/png");
  };

  const unitPrice = sku === "small" ? 34.98 : 44.98;

  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold">Ontwerp je muismat</h2>
      <div className="grid gap-6 md:grid-cols-5">
        <Glass className="md:col-span-3">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm text-white/70">Live preview</p>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">{sku === "small" ? "26×26 cm" : "60×35 cm"}</span>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30 p-3">
            <canvas ref={canvasRef} width={dims[0]} height={dims[1]} className="mx-auto block max-w-full rounded-lg" />
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <button onClick={download} className="rounded-full bg-cyan-400 px-4 py-2 font-semibold text-slate-900 shadow-lg hover:bg-cyan-300">Download mockup</button>
            <NavLink to="/contact" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-semibold text-white/90 hover:bg-white/10">Vraag offerte</NavLink>
          </div>
        </Glass>

        <Glass className="md:col-span-2 space-y-4">
          <div>
            <label className="block text-sm text-white/70">Formaat</label>
            <div className="mt-2 flex gap-3">
              <button onClick={() => setSku("small")} className={cx("rounded-full px-4 py-2", sku === "small" ? "bg-cyan-400 text-slate-900" : "border border-white/10 bg-white/5 text-white/90")}>Klein</button>
              <button onClick={() => setSku("large")} className={cx("rounded-full px-4 py-2", sku === "large" ? "bg-cyan-400 text-slate-900" : "border border-white/10 bg-white/5 text-white/90")}>Groot</button>
            </div>
          </div>

          <div>
            <label className="block text-sm text-white/70">Achtergrondkleur</label>
            <input type="color" value={bg} onChange={(e) => setBg(e.target.value)} className="h-10 w-full cursor-pointer rounded-xl border border-white/10 bg-white/5" />
          </div>

          <div>
            <label className="block text-sm text-white/70">Accentkleur</label>
            <input type="color" value={accent} onChange={(e) => setAccent(e.target.value)} className="h-10 w-full cursor-pointer rounded-xl border border-white/10 bg-white/5" />
          </div>

          <div>
            <label className="block text-sm text-white/70">Patroon</label>
            <div className="mt-2 grid grid-cols-3 gap-3">
              {["waves", "dots", "grid"].map((p) => (
                <button key={p} onClick={() => setPattern(p)} className={cx("rounded-xl px-3 py-2 text-sm capitalize", pattern === p ? "bg-cyan-400 text-slate-900" : "border border-white/10 bg-white/5 text-white/90")}>{p}</button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-white/70" htmlFor="designer-text">Tekst</label>
            <input id="designer-text" value={text} onChange={(e) => setText(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 outline-none" />
          </div>

          <div>
            <label htmlFor="design-prompt" className="block text-sm text-white/70">Beschrijf je design</label>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <textarea id="design-prompt" rows={3} placeholder="bijv. 'anime, neon blauw, kat in cyberpunk'" className="flex-1 rounded-xl border border-white/10 bg-white/5 p-3 outline-none" />
              <button type="button" className="rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-900 shadow-lg hover:bg-cyan-300">Genereer Design</button>
            </div>
            <p className="mt-2 text-xs text-white/60">Conceptvoorbeeld — knop en prompt werken niet, enkel voor demo.</p>
          </div>

          <div className="pt-2 text-white/80">
            <p><strong>Prijs:</strong> € {unitPrice.toFixed(2).replace(".", ",")}</p>
            <p className="text-xs text-white/60">Inclusief AI‑ontwerp en preview.</p>
          </div>
        </Glass>
      </div>
    </div>
  );
};

const About = () => (
  <div>
    <h2 className="mb-6 text-3xl font-bold">Visie & aanpak</h2>
    <div className="grid gap-6 md:grid-cols-2">
      <Glass>
        <h3 className="mb-2 text-xl font-semibold">Wat we doen</h3>
        <p className="text-white/80">
          MouseCraft Studio is een marktplaats voor op maat gemaakte muismatten en deskpads. We combineren generatieve AI met een gebruiksvriendelijke ontwerpstudio zodat iedereen in minuten een uniek ontwerp kan maken – ideaal voor gamers en popcultuurfans.
        </p>
        <ul className="mt-4 list-disc pl-5 text-white/80">
          <li>Volledige creatieve suite (AI, presets, vrije upload)</li>
          <li>Print‑on‑demand: pas produceren na jouw akkoord</li>
          <li>Premium materialen en scherpe, duurzame prints</li>
        </ul>
      </Glass>
      <Glass>
        <h3 className="mb-2 text-xl font-semibold">Waar we uniek in zijn</h3>
        <ul className="space-y-2 text-white/80">
          <li><strong>AI‑ontwerpen:</strong> razendsnel variaties genereren of jouw kunst verbeteren.</li>
          <li><strong>Kwaliteit:</strong> professionele sublimatie voor een slijtvast resultaat.</li>
          <li><strong>Community‑focus:</strong> gemaakt voor gamers, streamers en verzamelaars.</li>
        </ul>
      </Glass>
      <Glass>
        <h3 className="mb-2 text-xl font-semibold">Doelgroep</h3>
        <p className="text-white/80">18–35 jaar, actief op Discord, Reddit, Steam en Twitch. Ze willen een persoonlijke set‑up en wisselen graag accessoires voor een frisse look.</p>
      </Glass>
      <Glass>
        <h3 className="mb-2 text-xl font-semibold">Roadmap</h3>
        <ul className="list-disc pl-5 text-white/80">
          <li>Soft‑launch met social posts en feedbackrondes</li>
          <li>Verbeteringen op basis van analytics en reviews</li>
          <li>Uitbreiding naar deskpads (90×40), streamer‑collabs en events</li>
        </ul>
      </Glass>
    </div>
  </div>
);

const Contact = () => {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold">Contact</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <Glass className="md:col-span-2">
          <h3 className="mb-4 text-xl font-semibold">Stuur ons een bericht</h3>
          <form onSubmit={submit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm text-white/70">Naam</label>
                <input id="name" name="name" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 p-3 outline-none" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-white/70">E‑mail</label>
                <input id="email" name="email" type="email" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 p-3 outline-none" required />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-white/70">Bericht</label>
              <textarea id="message" name="message" rows={6} className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 p-3 outline-none" required />
            </div>
            <button type="submit" className="rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-900 shadow-lg hover:bg-cyan-300">Verstuur</button>
            {sent && (
              <p className="pt-2 text-sm text-cyan-300">Bedankt! Dit demo‑formulier verzendt niet echt, maar je bericht is lokaal ontvangen. We nemen spoedig contact op.</p>
            )}
          </form>
        </Glass>
        <Glass>
          <h3 className="mb-4 text-xl font-semibold">Gegevens</h3>
          <ul className="space-y-2 text-white/80">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-cyan-300" /> <a className="underline-offset-2 hover:underline" href="mailto:MouseCraftStudio@hotmail.com">MouseCraftStudio@hotmail.com</a></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-cyan-300" /> <a className="underline-offset-2 hover:underline" href="tel:+32465185402">0465 18 54 02</a></li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan-300" /> Ninoofsesteenweg 382, Aderlecht 1070</li>
          </ul>
          <div className="mt-6 space-y-2">
            <p className="font-semibold">Social</p>
            <div className="flex gap-3">
              <a className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:bg-white/10" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:bg-white/10" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-4 w-4" /> Facebook
              </a>
            </div>
          </div>
        </Glass>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Shell>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/design" element={<Designer />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Shell>
    </Router>
  );
}
