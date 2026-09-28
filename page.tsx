import type { ReactNode } from "react";

/* ---------- tiny icon set (no extra dependencies) ---------- */
const paths: Record<string, ReactNode> = {
  megaphone: <><path d="M3 11v3a1 1 0 0 0 1 1h2l5 4V7L6 10H4a1 1 0 0 0-1 1z"/><path d="M15 9a4 4 0 0 1 0 6"/><path d="M18 6.5a8 8 0 0 1 0 11"/></>,
  pin: <><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></>,
  tank: <><path d="M5 20V9l7-5 7 5v11"/><path d="M3 20h18"/><path d="M9 20v-7h6v7"/></>,
  truck: <><path d="M2 6h11v10H2z"/><path d="M13 9h4l3 3v4h-7"/><circle cx="6.5" cy="17.5" r="1.8"/><circle cx="16.5" cy="17.5" r="1.8"/></>,
  bell: <><path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 21h4"/></>,
  pencil: <><path d="M4 20l1-4L16 5l3 3L8 19z"/><path d="M13 8l3 3"/></>,
  user: <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
  map: <><path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/></>,
  users: <><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0 1 14 0"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14a5 5 0 0 1 5 6"/></>,
  edit: <><rect x="4" y="5" width="15" height="15" rx="2"/><path d="M9 15l1-3 8-8 2 2-8 8z"/></>,
  alert: <><path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.5"/></>,
};

function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      {paths[name]}
    </svg>
  );
}

function Drop({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 48" className={className} aria-hidden>
      <defs>
        <linearGradient id="dg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#38bdf8" /><stop offset="1" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      <path d="M20 2C20 2 4 20 4 30a16 16 0 0 0 32 0C36 20 20 2 20 2z" fill="url(#dg)" />
      <path d="M12 32a8 8 0 0 0 8 8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity=".8" />
    </svg>
  );
}

/* ---------- data ---------- */
const features = [
  { icon: "megaphone", bg: "bg-blue-100 text-blue-600", title: "Report Water Shortages", text: "Let us know when and where water is needed. Upload photos and mark the location." },
  { icon: "pin", bg: "bg-green-100 text-green-600", title: "Interactive Water Map", text: "See available water sources, refilling stations, and areas experiencing shortages." },
  { icon: "tank", bg: "bg-blue-100 text-blue-600", title: "Monitor Water Supply", text: "Track the status of reservoirs and tanks in real-time." },
  { icon: "truck", bg: "bg-purple-100 text-purple-600", title: "Emergency Distribution", text: "Check distribution schedules and locations during water crises." },
  { icon: "bell", bg: "bg-amber-100 text-amber-500", title: "Get The Latest Updates", text: "Receive alerts on interruptions, shortages, and important announcements." },
];

const steps = [
  { icon: "pencil", title: "Report", text: "Submit a water issue with details and location." },
  { icon: "user", title: "Verify", text: "Our team reviews and validates the report." },
  { icon: "map", title: "Take Action", text: "The issue is marked on the map and proper response is initiated." },
  { icon: "users", title: "Stay Informed", text: "Residents receive updates and distribution schedules." },
];

const nav = ["Home", "Report", "Map", "Updates", "About"];

/* ---------- hero mockups ---------- */
function Laptop() {
  const reports = [
    ["bg-red-500", "No water supply", "Brgy. San Isidro", "2h ago"],
    ["bg-amber-400", "Low water pressure", "Brgy. San Roque", "6h ago"],
    ["bg-blue-500", "Contaminated water", "Brgy. Poblacion", "6h ago"],
  ];
  return (
    <div className="w-[500px]">
      <div className="rounded-t-2xl border-[7px] border-slate-900 bg-white p-3 shadow-2xl">
        <div className="mb-2 flex items-center gap-1.5 text-[9px] font-semibold text-slate-800">
          <Drop className="h-3 w-3" /> WaterWatch
        </div>
        <div className="flex gap-2">
          <ul className="w-24 space-y-2 text-[7px] text-slate-500">
            {["Dashboard", "Reports", "Map", "Announcements", "Water Sources", "Analytics", "Settings"].map((t, i) => (
              <li key={t} className={`rounded px-1.5 py-1 ${i === 0 ? "bg-blue-50 font-semibold text-blue-600" : ""}`}>{t}</li>
            ))}
          </ul>
          <div className="relative h-40 flex-1 overflow-hidden rounded-lg bg-[#e8efe6]">
            <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "linear-gradient(#fff 2px,transparent 2px),linear-gradient(90deg,#fff 2px,transparent 2px)", backgroundSize: "28px 28px" }} />
            {[["left-[35%] top-[18%]", "bg-red-500"], ["left-[62%] top-[12%]", "bg-green-500"], ["left-[75%] top-[35%]", "bg-amber-400"], ["left-[55%] top-[48%]", "bg-green-500"], ["left-[68%] top-[65%]", "bg-blue-500"], ["left-[28%] top-[50%]", "bg-amber-400"]].map(([pos, c]) => (
              <span key={pos} className={`absolute h-3.5 w-3.5 rounded-full border-2 border-white shadow ${pos} ${c}`} />
            ))}
          </div>
          <div className="w-32 space-y-2">
            <div className="rounded-lg border border-slate-100 p-2 text-[7px] text-slate-500">
              Water Supply Status
              <div className="mt-1 flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-full border-4 border-green-500 text-[7px] font-bold text-slate-700">78%</span>
                <b className="text-[9px] text-green-600">Normal</b>
              </div>
            </div>
            <div className="text-[7px] font-semibold text-slate-700">Recent Reports</div>
            {reports.map(([c, t, l, a]) => (
              <div key={t} className="flex items-center gap-1.5 text-[7px]">
                <span className={`h-3 w-3 shrink-0 rounded-full ${c}`} />
                <span className="flex-1"><b className="block text-slate-700">{t}</b><span className="text-slate-400">{l}</span></span>
                <span className="text-slate-400">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-[-24px] h-3 rounded-b-2xl bg-gradient-to-b from-slate-300 to-slate-400 shadow-xl" />
    </div>
  );
}

function Phone() {
  return (
    <div className="absolute -right-6 bottom-[-40px] w-[160px] rounded-[26px] border-[5px] border-slate-900 bg-white p-3 shadow-2xl">
      <div className="mx-auto mb-2 h-3 w-14 rounded-full bg-slate-900" />
      <div className="mb-2 flex items-center gap-1 text-[8px] font-semibold"><Drop className="h-3 w-3" /> WaterWatch</div>
      <div className="rounded-lg bg-blue-600 p-2 text-[6.5px] leading-snug text-white">
        <b className="flex items-center gap-1 text-[7.5px]"><Icon name="alert" className="h-2.5 w-2.5" /> Water Shortage Alert</b>
        Brgy. San Isidro is experiencing water shortage. Please conserve water and check the distribution schedule.
        <div className="mt-1 font-semibold">View Details →</div>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-1.5 text-center text-[6px] text-slate-600">
        {[["edit", "Report Issue"], ["pin", "Water Map"], ["bell", "Announcements"], ["user", "My Requests"]].map(([i, t]) => (
          <div key={t} className="rounded-lg border border-slate-100 py-2 shadow-sm">
            <Icon name={i} className="mx-auto mb-0.5 h-3.5 w-3.5 text-blue-600" />{t}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- page ---------- */
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-700">
      {/* Header */}
      <header className="relative z-20 bg-[#eef4fb]">
        <div className="mx-auto flex h-[77px] max-w-[1320px] items-center justify-between px-6">
          <a href="#" className="flex items-center gap-3">
            <Drop className="h-11 w-9" />
            <span className="leading-tight">
              <span className="block text-[26px] font-bold text-blue-900">WaterWatch</span>
              <span className="block text-[12px] text-slate-600">Stronger Communities. Safer Water.</span>
            </span>
          </a>
          <nav className="hidden gap-10 text-[15px] md:flex">
            {nav.map((n, i) => (
              <a key={n} href="#" className={`py-6 ${i === 0 ? "border-b-2 border-blue-600 text-blue-700" : "text-slate-700 hover:text-blue-700"}`}>{n}</a>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[15px]">Login</a>
            <a href="#" className="rounded-xl bg-blue-600 px-6 py-2.5 text-[15px] font-medium text-white hover:bg-blue-700">Sign Up</a>
          </div>
        </div>
      </header>

      {/* Hero — drop your photo at /public/hero.jpg to replace the gradient */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/hero.jpg'), linear-gradient(180deg,#8ec5ea 0%,#c9e3f4 45%,#7fb3d6 62%,#3f86b8 100%)",
          backgroundSize: "cover", backgroundPosition: "center",
        }}
      >
        {/* Full-width transparent image layer covering all the blue — put your photo at /public/mockup-bg.jpg */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: "url('/mockup-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 mx-auto grid max-w-[1320px] items-center gap-8 px-6 pb-28 pt-20 lg:grid-cols-2">
          <div>
            <p className="text-[14px] font-medium tracking-[0.2em] text-blue-800">COMMUNITY WATER CRISIS SOLUTION</p>
            <h1 className="mt-4 text-[56px] font-extrabold leading-[1.05] tracking-tight text-blue-950 sm:text-[68px]">
              Report. Monitor.<br />Get Water.
            </h1>
            <p className="mt-6 max-w-[470px] text-[19px] leading-8 text-slate-700">
              WaterWatch is a web application that helps communities report water shortages, monitor water sources, and stay informed during water crises.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#" className="flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-3.5 font-medium text-white shadow-lg hover:bg-blue-700">
                <Icon name="edit" className="h-5 w-5" /> Report a Water Issue
              </a>
              <a href="#" className="flex items-center gap-3 rounded-xl border-2 border-blue-600 bg-white/80 px-7 py-3.5 font-medium text-blue-700 hover:bg-white">
                <Icon name="pin" className="h-5 w-5" /> View Water Map
              </a>
            </div>
          </div>
          <div className="relative hidden justify-center lg:flex">
            <div className="relative">
              <Laptop />
              <Phone />
            </div>
          </div>
        </div>
        {/* wave */}
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="absolute bottom-0 left-0 z-10 h-20 w-full" aria-hidden>
          <path d="M0 60 C 240 10 520 20 800 55 S 1250 90 1440 40 L1440 90 L0 90 Z" fill="#fff" />
        </svg>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-[1320px] gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-5">
        {features.map((f) => (
          <div key={f.title}>
            <div className={`grid h-[70px] w-[70px] place-items-center rounded-full ${f.bg}`}>
              <Icon name={f.icon} className="h-8 w-8" />
            </div>
            <h3 className="mt-5 text-[19px] font-bold text-blue-950">{f.title}</h3>
            <p className="mt-3 text-[15px] leading-7 text-slate-600">{f.text}</p>
          </div>
        ))}
      </section>

      {/* How it works */}
      <section className="bg-[#eef4fb]">
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-6 py-14 lg:grid-cols-[1fr_2.4fr]">
          <div>
            <p className="text-[12px] font-medium tracking-[0.15em] text-blue-700">SIMPLE STEPS. BIG IMPACT.</p>
            <h2 className="mt-3 text-[34px] font-bold text-blue-950">How It Works</h2>
            <p className="mt-4 max-w-[330px] text-[17px] leading-8 text-slate-600">
              Together, we can build a more resilient and water-secure community.
            </p>
          </div>
          <ol className="grid gap-8 sm:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="relative text-center">
                <div className="flex items-center justify-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-blue-600 text-[12px] font-semibold text-white">{i + 1}</span>
                  <Icon name={s.icon} className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mt-4 text-[17px] font-semibold text-blue-950">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-[210px] text-[14px] leading-6 text-slate-500">{s.text}</p>
                {i < steps.length - 1 && <span className="absolute -right-4 top-10 hidden text-slate-400 sm:block">›</span>}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}