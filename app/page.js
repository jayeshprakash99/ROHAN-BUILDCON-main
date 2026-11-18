'use client'

import { useEffect, useMemo, useState } from 'react'
import { ArrowDown, ArrowRight, Award, House, Key, Building2, Check, ChevronDown, Compass, Hammer, Instagram,Facebook, Mail, MapPin, Menu, MessageCircle, Phone, Play, Quote, ShieldCheck, Sparkles, Star, X, Wrench } from 'lucide-react'

const images = {
  hero: 'https://images.unsplash.com/photo-1602757115429-b4190ae087be?auto=format&fit=crop&w=2200&q=85',
  home: '/images/Hasanji Nagar.jpg',
  commercial: '/images/Residential-Tower_02.jpg',
  interior: '/images/oyester.png',
  detail: '/images/Detail.jpg',
  cranes: '/images/Cranes.jpg',
  tower: '/images/Boutique-Hotel-Dewas_Hero.jpg',
  interiors: '/images/IMG_3886.PNG',
  shivalay: '/images/Shivalay_03.jpg',
  ivory: '/images/Ivory-Residence_05.jpg',
  ahuja: '/images/The-Ahuja-Residence_Hero.jpg',
}


const testimonialImages = {
  husain:
    "/images/Hussain Datarwala farmhouse.jpeg",

  vaibhav: "/images/Vaibhav Bhargav.JPEG",

  murtaza:
    "/images/Murtaza malik residential.jpeg",

  rajendra:
    "/images/Rajendra golcha.jpeg",

  mayur:
    "/images/Mayur jethani.jpeg",

  prateek:
    "/images/Prateek yadav.jpeg",

  fairdeal:
    "/images/Fairdeal Group.jpeg",
};

const testimonials = [
  {
    name: "Husain Datarwala",
    project: "Farmhouse",
    image: testimonialImages.husain,
    quote:
      "I was worried a farmhouse on open land would need constant repairs. Rohan's team planned for that from day one. It was built exactly as discussed.",
  },
  {
    name: "Vaibhav Bhargav",
    organization: "Ratnalok",
    project: "Commercial",
    image: testimonialImages.vaibhav,
    quote:
      "On a commercial project, every week of delay costs money. They kept us updated daily and handed over on time.",
  },
  {
    name: "Murtaza Malekwala",
    project: "Residential",
    image: testimonialImages.murtaza,
    quote:
      "Structure and interiors by one team meant I made one phone call, not ten",
  },
  {
    name: "Rajendra Golcha",
    project: "Residential",
    image: testimonialImages.rajendra,
    quote:
      "I saw the brands on the estimate and the same brands on site. That kind of honesty is rare.",
  },
  {
    name: "Mayur Jethani",
    project: "Residential",
    image: testimonialImages.mayur,
    quote:
      "I couldn't visit the site often. The daily photos meant I never felt out of the loop.",
  },
  {
    name: "Prateek Yadav",
    project: "Residential",
    image: testimonialImages.prateek,
    quote:
      "Our home came out exactly as it was drawn. Guests still ask who built it.",
  },
  {
    name: "Fairdeal Group",
    project: "Commercial",
    image: testimonialImages.fairdeal,
    quote:
      "A construction partner that respects deadlines and builds to spec. We would work with them again.",
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        (current + 1) % testimonials.length
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const active = testimonials[activeIndex];
return (
    <section
      id="testimonials"
      className="bg-[#F2F2F2] py-24 lg:py-32"
    >
      <div className="container mx-auto grid gap-12 px-5 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:px-10">

        {/* Left image */}
        <div className="relative flex min-h-[430px] w-full items-center justify-center bg-gray-50">
          <img
            key={activeIndex}
            src={active.image}
            alt={`${active.name} — ${active.project} project`}
            className="max-h-[550px] w-full object-contain transition-opacity duration-500"
          />

          <div className="absolute bottom-5 left-5 bg-[#EF4136] p-5 text-white">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={13} fill="currentColor" />
              ))}
            </div>

            <span className="mt-2 block text-[10px] font-bold uppercase tracking-widest">
              Client stories
            </span>
          </div>
        </div>

        {/* Right testimonial */}
        <div className="lg:pl-8">
          <Quote
            className="text-[#EF4136]"
            size={45}
            fill="currentColor"
          />

          <div
            key={activeIndex}
            className="testimonial-fade"
            aria-live="polite"
            aria-atomic="true"
          >
            <blockquote className="mt-5 font-serif text-base font-medium leading-relaxed text-[#003E73] md:text-lg lg:text-xl">
              “{active.quote}”
            </blockquote>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#003E73] text-sm font-bold text-white">
                {active.name
                  .split(" ")
                  .filter((word) => word !== "Ar.")
                  .map((word) => word[0])
                  .slice(0, 2)
                  .join("")}
              </div>

              <div>
                <p className="text-sm font-bold text-[#1F1F1F]">
                  {active.name}
                </p>

                {active.organization && (
                  <p className="mt-1 text-xs font-medium text-[#1F1F1F]/70">
                    {active.organization}
                  </p>
                )}

                <p className="mt-1 text-[10px] uppercase tracking-widest text-[#1F1F1F]/50">
                  {active.project} Project
                </p>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="mt-8 flex items-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial from ${testimonial.name}`}
                aria-pressed={activeIndex === index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-[#EF4136]"
                    : "w-2 bg-[#003E73]/25 hover:bg-[#003E73]/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 

const navItems = ['About', 'Services', 'Projects', 'Process', 'Why Us', 'Testimonials', 'Contact']
const services = [
  [
    'Civil Construction',
    'Foundation, RCC frame, brickwork and plaster, built exactly to drawing with branded materials. Every stage is checked before the next one begins.',
    House
  ],

  [
    'Commercial Construction ',
    'Offices, showrooms and commercial buildings delivered on a fixed timeline, so your business opens when you planned it to.',
    Building2
  ],

  [
    'Interior Works',
    'Woodwork, false ceilings, flooring, lighting and finishes, done by our in-house team and planned alongside the structure from day one.',
    Hammer
  ],

  [
    'Landscaping Works',
    'Lawns, pathways, planting and outdoor lighting, designed to suit your plot and finished at the same time as your build.',
    Sparkles
  ],

  [
    'Peb Structures',
    'Pre-engineered steel buildings for warehouses, factories and large commercial spaces. They go up faster, span wider and cost less to maintain.',
    Wrench
  ],

  [
    'Renovation and Expansion',
    'Additions, extensions and renovations to existing structures, done with minimal disruption to your daily life.',
    Key
  ],
]
const projects = [
  { title: 'Hassanji Nagar Villa', type: 'Residential', location: 'Indore, India', image: images.home},
  { title: 'Residential Tower', type: 'High Rise', location: 'Indore, India', image: images.commercial},
  { title: 'Boutique Hotel', type: 'Hotels & Resorts', location: 'Dewas, India', image: images.tower},
  { title: 'Oyster Retreat', type: 'Interiors', location: 'Indore, India', image: images.interior},
  { title: 'Ratnalok', type: 'Commercial', location: 'Indore, India', image: images.interiors},
  // Three additional projects
  { title: 'The Ahuja Residence', type: 'Residential', location: 'Indore, India', image: images.ahuja },
  { title: 'Ivory-Residence', type: 'Residential', location: 'Indore, India', image: images.ivory },
  { title: 'Shivalay', type: 'Residential', location: 'Indore, India', image: images.shivalay },
];
const steps = ['Consultation', 'Planning', 'Design', 'Approvals', 'Civil Construction', 'Interior Design', 'Quality inspection', 'Handover']

function Logo() {
  return (
    <a
      href="#home"
      aria-label="Rohan Buildcon home"
      className="flex h-[70px] w-[100px] items-center justify-center bg-white sm:h-[80px] sm:w-[110px] md:h-[80px] md:w-[120px]"
    >
      <img
        src="/logo.png"
        alt="Rohan Buildcon"
        className="h-full w-full object-contain p-2"
      />
    </a>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [filter, setFilter] = useState('All')
  const [openFaq, setOpenFaq] = useState(0)
  const [formState, setFormState] = useState({ loading: false, success: '', error: '' })
  const [visibleProjects, setVisibleProjects] = useState(5);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const filteredProjects = useMemo(() => filter === 'All' ? projects : projects.filter((project) => project.type === filter), [filter])

  async function submitInquiry(event) {
  event.preventDefault()

  setFormState({ loading: true, success: '', error: '' })

  const form = new FormData(event.currentTarget)
  const formData = Object.fromEntries(form.entries())

  const whatsappMessage = `
Hello Rohan Buildcon,

I would like to enquire about a project.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Project Type:* ${formData.projectType}
*Built-up Area:* ${formData.builtUpArea}
*Project Start Timeline:* ${formData.startDate}
*Project Location:* ${formData.location || 'Not provided'}

*Project Details:*
${formData.message || 'Not provided'}

Thank you.
  `.trim()

  const whatsappUrl =
    `https://wa.me/919926347973?text=${encodeURIComponent(whatsappMessage)}`

  // Open WhatsApp
  window.open(whatsappUrl, '_blank')

  // Reset form
  event.currentTarget.reset()

  setFormState({
    loading: false,
    success: 'Opening WhatsApp...',
    error: ''
  })
}

  return <main className="overflow-hidden bg-white text-[#1F1F1F]">
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 shadow-sm backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-[76px] items-center justify-between px-5 lg:h-[88px] lg:px-10"><Logo />
        <nav className="hidden items-center gap-7 lg:flex">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className={`text-[11px] font-bold uppercase tracking-[0.13em] transition-colors hover:text-[#EF4136] ${scrolled ? 'text-[#1F1F1F]' : 'text-white'}`}>{item}</a>)}<a href="#contact" className="rounded-sm bg-[#EF4136] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.13em] text-white transition hover:bg-[#003E73]">Get free quote</a></nav>
        <button className={`lg:hidden ${scrolled ? 'text-[#003E73]' : 'text-white'}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && <div className="border-t border-[#F2F2F2] bg-white px-5 py-5 lg:hidden">{navItems.map((item) => <a onClick={() => setMenuOpen(false)} key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="block border-b border-[#F2F2F2] py-3 text-xs font-bold uppercase tracking-widest text-[#003E73]">{item}</a>)}<a href="#contact" className="mt-4 block bg-[#EF4136] px-5 py-4 text-center text-xs font-bold uppercase tracking-widest text-white">Get free quote</a></div>}
    </header>
<section
  id="home"
  className="relative flex min-h-[720px] items-end overflow-hidden bg-[#003E73] pb-16 pt-40 lg:min-h-screen lg:pb-24"
>
  {/* Hero Image */}
  <img
    src={images.hero}
    alt="Rohan Buildcon luxury residential project"
    className="absolute inset-0 h-full w-full object-cover opacity-45"
  />

  {/* Left-to-right overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#003E73] via-[#003E73]/75 to-[#003E73]/20" />

  {/* Bottom overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#003E73]/90 via-transparent to-[#003E73]/30" />

  {/* Main Content */}
  <div className="container relative z-10 mx-auto grid items-end gap-12 px-5 lg:grid-cols-[minmax(0,1fr)_310px] lg:gap-16 lg:px-10">

    {/* Left Content */}
    <div className="max-w-3xl">

      <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#EF4136]">
        <span className="h-px w-10 bg-[#EF4136]" />
        TURNKEY CONSTRUCTION · INDORE
      </p>

      <h1 className="font-serif text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-[100px]">
        Building dreams.
        <br />
        <span className="text-[#EF4136]">Constructing</span> excellence.
      </h1>

      <p className="mt-7 max-w-xl text-base leading-7 text-white/75 lg:text-lg">
        Homes, farmhouses and commercial buildings across Madhya Pradesh and Chhattisgarh. Civil work and interiors by our own in-house team, so you never chase five contractors again.
      </p>

      {/* Buttons */}
      <div className="mt-9 flex flex-wrap gap-3">
        <a
          href="#contact"
          className="group inline-flex items-center gap-3 bg-[#EF4136] px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-[#003E73]"
        >
          Get free consultation
          <ArrowRight
            size={16}
            className="transition group-hover:translate-x-1"
          />
        </a>

        <a
          href="#projects"
          className="inline-flex items-center gap-3 border border-white/40 px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:border-white hover:bg-white/10"
        >
          Explore projects
        </a>
      </div>
    </div>

    {/* Rohan Standard */}
    <div className="w-full border border-white/20 bg-[#003E73]/55 p-6 backdrop-blur-md lg:mb-3 lg:w-[310px]">

      <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-white/60">
        The Rohan Standard
      </p>

      <div className="divide-y divide-white/15">

        {/* 2012 */}
        <div className="flex min-h-[64px] items-center justify-between gap-4 py-4">
          <strong className="shrink-0 font-serif text-2xl font-bold text-white">
            10+
          </strong>

          <span className="text-right text-[10px] font-medium uppercase leading-4 tracking-wider text-white/60">
            Years of experience
          </span>
        </div>

        {/* Regions */}
        <div className="flex min-h-[64px] items-center justify-between gap-4 py-4">
          <strong className="shrink-0 font-serif text-2xl font-bold text-white">
            MP & CG
          </strong>

          <span className="text-right text-[10px] font-medium uppercase leading-4 tracking-wider text-white/60">
            Regions served
          </span>
        </div>

        {/* Accountability */}
        <div className="flex min-h-[64px] items-center justify-between gap-4 py-4">
          <strong className="shrink-0 font-serif text-2xl font-bold text-white">
            1 
          </strong>

          <span className="max-w-[150px] text-right text-[10px] font-medium uppercase leading-4 tracking-wider text-white/60">
            One stop solution
          </span>
        </div>

        {/* Turnkey */}
        <div className="flex min-h-[64px] items-center justify-between gap-4 py-4">
          <strong className="shrink-0 font-serif text-2xl font-bold text-white">
            Turnkey
          </strong>

          <span className="max-w-[150px] text-right text-[10px] font-medium uppercase leading-4 tracking-wider text-white/60">
            Foundation to final finish
          </span>
        </div>

        {/* Work Done */}
        <div className="flex min-h-[64px] items-center justify-between gap-4 py-4">
          <strong className="shrink-0 font-serif text-2xl font-bold text-white">
            2 lakh+ sqft
          </strong>

          <span className="max-w-[150px] text-right text-[10px] font-medium uppercase leading-4 tracking-wider text-white/60">
            Work Done
          </span>
        </div>

      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <a
    href="#trust"
    className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 transition hover:text-white lg:flex"
  >
    Scroll to explore
    <ArrowDown size={15} className="animate-bounce" />
  </a>
</section>

<section
  id="trust"
  className="border-b border-[#F2F2F2] bg-white"
>
  <div className="container mx-auto grid grid-cols-2 gap-px bg-[#F2F2F2] px-5 lg:grid-cols-6 lg:px-10">
    {[
      ['10+', 'Years of experience'],
      ['MP & CG', 'Regions served'],
      ['TURNKEY', 'End-to-end solutions'],
      ['1', 'One stop solution'],
      ['HIGH-GRADE', 'Branded materials'],
      ['ON-TIME', 'Delivery focused'],
    ].map(([big, small]) => (
      <div
        key={small}
        className="bg-white px-4 py-7 text-center"
      >
        <span className="font-serif text-2xl font-bold text-[#003E73]">
          {big}
        </span>

        <span className="mt-1 block text-[9px] font-bold uppercase tracking-widest text-[#1F1F1F]/50">
          {small}
        </span>
      </div>
    ))}
  </div>
</section>

<section
  id="about"
  className="container mx-auto grid gap-12 px-5 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-10 lg:py-36"
>
  {/* Image */}
  <div className="relative">
    <img
      src={'images/About Image.jpeg'}
      alt="Luxury custom home built by Rohan Buildcon"
      className="h-[450px] w-full object-contain lg:h-[630px]"
    />

    {/* Experience badge */}
    <div className="absolute -bottom-8 -right-4 bg-[#EF4136] p-6 text-white lg:-right-8">
      <strong className="block font-serif text-4xl">2012</strong>
      <span className="text-[10px] font-bold uppercase tracking-widest">
        Building since
      </span>
    </div>
  </div>

  {/* Content */}
  <div className="flex flex-col justify-center">
    <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#EF4136]">
      Who we are
    </p>

    <h2 className="font-serif text-4xl font-bold leading-tight text-[#003E73] lg:text-4xl">
      Most construction problems start with too many hands.
      <span className="text-[#EF4136]">
          We keep it to one.
      </span>
    </h2>

    <p className="mt-7 text-base leading-8 text-[#1F1F1F]/65">
      Building usually means one contractor for the structure, another for interiors and a dozen vendors in between. When something goes wrong, everyone points at someone else.
      Rohan Buildcon was built to fix that. For over 10 years, our in-house team has delivered homes, farmhouses and commercial spaces across MP and Chhattisgarh, with civil work and interiors under one roof.
    </p>

    <p className="mt-5 text-base leading-8 text-[#1F1F1F]/65">
      You get one point of contact, one written scope and one team accountable for the result. Rohan stays personally involved at every stage, and every project passes 25 quality checks before you get the keys.
    </p>

    {/* Stats */}
    <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#F2F2F2] pt-7">
      <div>
        <strong className="font-serif text-4xl text-[#003E73]">
          10+
        </strong>
        <span className="mt-1 block text-[10px] font-bold uppercase tracking-widest text-[#1F1F1F]/50">
          Years of experience
        </span>
      </div>

      <div>
        <strong className="font-serif text-4xl text-[#003E73]">
          MP & CG
        </strong>
        <span className="mt-1 block text-[10px] font-bold uppercase tracking-widest text-[#1F1F1F]/50">
          Regions served
        </span>
      </div>
    </div>

    {/* CTA */}
    <a
      href="#contact"
      className="mt-10 inline-flex w-fit items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-[#003E73] hover:text-[#EF4136]"
    >
      Talk to our team
      <ArrowRight size={17} />
    </a>
  </div>
</section>

    <section id="services" className="bg-[#F2F2F2] py-24 lg:py-32"><div className="container mx-auto px-5 lg:px-10"><div className="mb-14 flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#EF4136]">What we do</p><h2 className="font-serif text-4xl font-bold text-[#003E73] lg:text-6xl">Made for your<br />next chapter.</h2></div><p className="max-w-sm text-sm leading-7 text-[#1F1F1F]/60">From foundation to finish, our integrated approach turns ambitious ideas into exceptional places.</p></div><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map(([title, description, Icon], index) => <div key={title} className="group bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl lg:p-9"><div className="mb-12 flex items-start justify-between"><div className="flex h-12 w-12 items-center justify-center bg-[#003E73] text-white transition group-hover:bg-[#EF4136]"><Icon size={21} strokeWidth={1.5} /></div><span className="font-serif text-3xl text-[#003E73]/15">0{index + 1}</span></div><h3 className="font-serif text-2xl font-bold text-[#003E73]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#1F1F1F]/60">{description}</p><div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#EF4136]">Learn more <ArrowRight size={14} className="transition group-hover:translate-x-1" /></div></div>)}</div></div></section>


    <section id="projects" className="container mx-auto px-5 py-24 lg:px-10 lg:py-36">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#EF4136]">
            Selected work
          </p>
          <h2 className="font-serif text-4xl font-bold text-[#003E73] lg:text-6xl">
            Places with<br />a point of view.
          </h2>
        </div>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <article
            key={project.title}
            className={`group relative overflow-hidden ${
              index === 0 ? 'md:row-span-2' : ''
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
                index === 0 ? 'h-[540px] md:h-full' : 'h-[260px]'
              }`}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#003E73]/90 via-transparent to-transparent opacity-90" />

            <div className="absolute bottom-0 left-0 p-6 text-white lg:p-8">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#EF4136]">
                {project.type}
              </p>
              <h3 className="font-serif text-2xl font-bold">{project.title}</h3>

              <div className="mt-3 flex gap-5 text-[10px] uppercase tracking-wider text-white/65">
                <span>{project.location}</span>
                {project.area && <span>{project.area}</span>}
              </div>
            </div>

            <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center bg-white text-[#003E73] opacity-0 transition group-hover:opacity-100">
              <ArrowRight size={17} />
            </span>
          </article>
        ))}
      </div>

      {visibleProjects < projects.length && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() =>
              setVisibleProjects((current) =>
                Math.min(current + 2, projects.length)
              )
            }
            className="inline-flex items-center gap-3 bg-[#003E73] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#EF4136]"
          >
            View More <ArrowRight size={16} />
          </button>
        </div>
      )}
    </section>

    <section id="process" className="bg-[#003E73] py-24 text-white lg:py-32"><div className="container mx-auto px-5 lg:px-10"><div className="mb-16 max-w-2xl"><p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#EF4136]">How we work</p><h2 className="font-serif text-4xl font-bold lg:text-6xl">Clarity at every<br /><span className="text-[#EF4136]">single step.</span></h2></div><div className="grid gap-0 md:grid-cols-4 lg:grid-cols-8">{steps.map((step, i) => <div key={step} className="relative border-l border-white/20 px-5 py-5 first:border-l-0 md:min-h-[180px]"><span className="font-serif text-4xl text-[#EF4136]">0{i + 1}</span><h3 className="mt-8 text-sm font-bold uppercase tracking-wider">{step}</h3>{i < steps.length - 1 && <ArrowRight className="absolute right-3 top-1/2 hidden text-white/30 lg:block" size={18} />}</div>)}</div></div></section>

    <section id="why-us" className="container mx-auto grid gap-12 px-5 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-10 lg:py-36"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#EF4136]">The difference</p><h2 className="font-serif text-4xl font-bold text-[#003E73] lg:text-6xl">Built on trust.<br />Proven in detail.</h2><p className="mt-7 max-w-md text-sm leading-7 text-[#1F1F1F]/60">A premium build is not about the loudest promise. It is about the quiet confidence that comes from getting every detail right.</p><a href="#contact" className="mt-8 inline-flex items-center gap-3 bg-[#EF4136] px-6 py-4 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#003E73]">Start a conversation <ArrowRight size={16} /></a></div><div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">{['Branded materials', 'Experienced team', 'On time delivery', '25+ Quality checks', 'No hidden charges', 'Modern Technology', 'Dedicated site supervisor', 'Daily site updates'].map((item, i) => <div key={item} className="flex gap-4 border-b border-[#F2F2F2] pb-6"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F2F2F2] text-[#EF4136]"><Check size={15} /></span><div><span className="font-serif text-xl text-[#003E73]">0{i + 1}</span><h3 className="mt-1 text-sm font-bold text-[#1F1F1F]">{item}</h3></div></div>)}</div></section>

    <Testimonials />


    <section id="contact" className="bg-white py-24 lg:py-36">
      <div className="container mx-auto px-5 lg:px-10">
        {/* Contact details and enquiry form */}
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left: Contact details */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#EF4136]">
              Your project starts here
            </p>

            <h2 className="font-serif text-4xl font-bold leading-tight text-[#003E73] lg:text-6xl">
              Let’s build
              <br />
              <span className="text-[#EF4136]">something lasting.</span>
            </h2>

            <p className="mt-7 max-w-sm text-sm leading-7 text-[#1F1F1F]/60">
              Tell us a little about your vision. Our team will get back to you
              within one business day.
            </p>

            <div className="mt-12 space-y-5 text-sm">
              <div className="flex items-center gap-4">
                <Phone size={18} className="shrink-0 text-[#EF4136]" />
                <span>+91 9926347973</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail size={18} className="shrink-0 text-[#EF4136]" />
                <span>rohanbuildconofficial@gmail.com</span>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={18} className="mt-1 shrink-0 text-[#EF4136]" />
                <span>
                  60, Prakash Nagar Rd, Navlakha, Indore, Madhya Pradesh 452001
                </span>
              </div>
            </div>
          </div>

          {/* Right: Existing enquiry form */}
          <form
            onSubmit={submitInquiry}
            className="grid gap-5 border border-[#F2F2F2] p-6 shadow-sm sm:grid-cols-2 lg:p-10"
          >
            <div>
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" required placeholder="e.g. Aarav Sharma" />
            </div>

            <div>
              <label htmlFor="phone">Phone number</label>
              <input id="phone" name="phone" required placeholder="+91 99263 47973" />
            </div>

            <div>
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" required placeholder="you@email.com" />
            </div>

            <div>
              <label htmlFor="projectType">Project type</label>
              <select id="projectType" name="projectType" required defaultValue="">
                <option value="" disabled>Select one</option>
                <option>Construction</option>
                <option>Interior</option>
              </select>
            </div>

            <div>
              <label htmlFor="builtUpArea">Built-up area</label>
              <select
                id="builtUpArea"
                name="builtUpArea"
                required
                defaultValue=""
              >
                <option value="" disabled>Select one</option>
                <option>Up to 2,000 sq ft</option>
                <option>2,000 – 5,000 sq ft</option>
                <option>5,000+ sq ft</option>
              </select>
            </div>

            <div>
              <label htmlFor="startDate">When do you want to start?</label>
              <select
                id="startDate"
                name="startDate"
                required
                defaultValue=""
              >
                <option value="" disabled>Select one</option>
                <option>Immediately</option>
                <option>Within 3 months</option>
                <option>6 months or later</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="location">Project location</label>
              <input id="location" name="location" placeholder="City or locality" />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message">Tell us about your project</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="A few details about your vision, timeline or budget..."
              />
            </div>

            <div className="sm:col-span-2 flex flex-col items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
              <button
                disabled={formState.loading}
                className="inline-flex items-center gap-3 bg-[#EF4136] px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#003E73] disabled:opacity-60"
                type="submit"
              >
                {formState.loading ? "Sending..." : "Send enquiry"}
                <ArrowRight size={16} />
              </button>

              {formState.success && (
                <p className="text-sm text-[#003E73]" role="status">
                  {formState.success}
                </p>
              )}

              {formState.error && (
                <p className="text-sm text-[#EF4136]" role="alert">
                  {formState.error}
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Google Map: full width below both columns */}
        <div className="mt-16 lg:mt-24">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#EF4136]">
                Find us
              </p>

              <div className="flex items-center gap-3">
                <MapPin size={28} className="shrink-0 text-[#EF4136]" />
                <h3 className="font-serif text-3xl font-bold text-[#003E73]">
                  Rohan Buildcon
                </h3>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/EPx9oXE5aNYJCqTPA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#003E73] transition hover:text-[#EF4136]"
            >
              Get Directions ↗
            </a>
          </div>

          <div className="h-[320px] w-full overflow-hidden rounded-xl border border-[#F2F2F2] sm:h-[400px] lg:h-[450px]">
            <iframe
              src="https://maps.google.com/maps?q=22.6965468,75.8805124&z=17&output=embed"
              title="Rohan Buildcon Office Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>

    <footer className="bg-[#003E73] py-14 text-white">
      <div className="container mx-auto px-5 lg:px-10">
        <div className="flex flex-col justify-between gap-10 border-b border-white/15 pb-12 lg:flex-row">
          {/* Logo and description */}
          <div>
            <div className="inline-block bg-white p-3">
              <Logo />
            </div>

            <p className="mt-6 max-w-xs text-sm leading-6 text-white/55">
              Crafting spaces with integrity, precision and a point of view.
            </p>
          </div>

          {/* Footer links */}
          <div className="grid grid-cols-2 gap-x-14 gap-y-4 text-xs font-bold uppercase tracking-widest sm:grid-cols-3">
            <div>
              <p className="mb-4 text-[#EF4136]">Explore</p>
              <a href="#about" className="block py-1 text-white/65 hover:text-white">
                About us
              </a>
              <a href="#projects" className="block py-1 text-white/65 hover:text-white">
                Our projects
              </a>
              <a href="#process" className="block py-1 text-white/65 hover:text-white">
                Our process
              </a>
            </div>

            <div>
              <p className="mb-4 text-[#EF4136]">Connect</p>
              <a href="#contact" className="block py-1 text-white/65 hover:text-white">
                Get in touch
              </a>
            </div>

            {/* Social media */}
            <div>
              <p className="mb-4 text-[#EF4136]">Follow</p>

              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/rohanbuildcon?igsi=MWdpYTYxOW94YjdpNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="transition-colors hover:text-[#EF4136]"
                >
                  <Instagram size={18} />
                </a>

                <a
                  href="https://www.facebook.com/share/18YGMLWV5w/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="transition-colors hover:text-[#EF4136]"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and credit */}
        <div className="flex flex-col justify-between gap-4 pt-7 text-[10px] font-bold uppercase tracking-widest text-white/45 sm:flex-row">
          <span>© 2026 Rohan Buildcon. All rights reserved.</span>

          <a
            href="https://webytesolutions.in"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Built by Webyte Solutions
          </a>
        </div>
      </div>
    </footer>

    <a
      href="https://wa.me/919926347973"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
    >
      <MessageCircle size={26} />
    </a>
</main>
}