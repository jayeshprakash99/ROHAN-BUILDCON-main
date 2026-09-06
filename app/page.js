'use client'

import { useEffect, useMemo, useState } from 'react'
import { ArrowDown, ArrowRight, Award, Building2, Check, ChevronDown, Compass, Hammer, Instagram, Mail, MapPin, Menu, MessageCircle, Phone, Play, Quote, ShieldCheck, Sparkles, Star, X, Wrench } from 'lucide-react'

const images = {
  hero: 'https://images.unsplash.com/photo-1602757115429-b4190ae087be?auto=format&fit=crop&w=2200&q=85',
  home: '/images/Hasanji Nagar.jpg',
  commercial: '/images/meridian.jpg',
  interior: '/images/oyester.png',
  detail: '/images/Detail.jpg',
  cranes: '/images/Cranes.jpg',
  tower: '/images/Sayaji Hotel.jpg',
  interiors: '/images/IMG_3886.PNG',
}

const navItems = ['About', 'Services', 'Projects', 'Process', 'Why Us', 'Testimonials', 'Contact']
const services = [
  [
    'Civil Construction',
    'End-to-end construction for luxury villas, bungalows and residential complexes, built to drawing with specified high-grade materials.',
    Building2
  ],

  [
    'High-End Interior Execution',
    'Premium interior execution seamlessly coordinated with structural works, from detailed planning to the final finish.',
    Hammer
  ],

  [
    'Regulatory Approvals & Liaison',
    'Regulatory approvals and liaison managed by one accountable team for smooth, compliant project delivery.',
    ShieldCheck
  ],
]
const projects = [
  { title: 'Hassanji Nagar Villa', type: 'Residential', location: 'Indore, India', image: images.home},
  { title: 'The Meridian', type: 'High Rise', location: 'Indore, India', image: images.commercial},
  { title: 'Sayaji Hotel', type: 'Hotels & Resorts', location: 'Indore, India', image: images.tower},
  { title: 'Oyster Retreat', type: 'Interiors', location: 'Indore, India', image: images.interior},
  { title: 'Ratnalok', type: 'Commercial', location: 'Indore, India', image: images.interiors},
]
const steps = ['Consultation', 'Planning', 'Design', 'Approvals', 'Construction', 'Quality inspection', 'Handover']

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
        Built for better living
      </p>

      <h1 className="font-serif text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-[100px]">
        Building dreams.
        <br />
        <span className="text-[#EF4136]">Constructing</span> excellence.
      </h1>

      <p className="mt-7 max-w-xl text-base leading-7 text-white/75 lg:text-lg">
        Custom-built luxury villas, bungalows and duplexes, delivered
        end-to-end with quality construction, refined interiors and a
        clear, accountable process.
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
            2012
          </strong>

          <span className="text-right text-[10px] font-medium uppercase leading-4 tracking-wider text-white/60">
            Building since
          </span>
        </div>

        {/* Regions */}
        <div className="flex min-h-[64px] items-center justify-between gap-4 py-4">
          <strong className="shrink-0 font-serif text-2xl font-bold text-white">
            3
          </strong>

          <span className="text-right text-[10px] font-medium uppercase leading-4 tracking-wider text-white/60">
            Regions served
          </span>
        </div>

        {/* Accountability */}
        <div className="flex min-h-[64px] items-center justify-between gap-4 py-4">
          <strong className="shrink-0 font-serif text-2xl font-bold text-white">
            1 Team
          </strong>

          <span className="max-w-[150px] text-right text-[10px] font-medium uppercase leading-4 tracking-wider text-white/60">
            One accountable team
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
      ['2012', 'Building since'],
      ['3', 'Regions served'],
      ['TURNKEY', 'End-to-end solutions'],
      ['1 TEAM', 'One accountable team'],
      ['HIGH-GRADE', 'Specified materials'],
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
  className="container mx-auto grid gap-12 px-5 py-24 lg:grid-cols-2 lg:gap-24 lg:px-10 lg:py-36"
>
  {/* Image */}
  <div className="relative">
    <img
      src={'images/Sayaji Hotels.jpg'}
      alt="Luxury custom home built by Rohan Buildcon"
      className="h-[450px] w-full object-cover lg:h-[630px]"
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

    <h2 className="font-serif text-4xl font-bold leading-tight text-[#003E73] lg:text-6xl">
      More than a home.
      <br />
      <span className="text-[#EF4136]">
        A commitment to building it right.
      </span>
    </h2>

    <p className="mt-7 text-base leading-8 text-[#1F1F1F]/65">
      Rohan Buildcon is a custom home builder based in Indore, delivering
      luxury villas, bungalows and duplexes on a complete turnkey basis.
      Since 2012, we have brought together civil construction, high-end
      interior execution and regulatory approvals under one accountable team.
    </p>

    <p className="mt-5 text-base leading-8 text-[#1F1F1F]/65">
      Every home is built to drawing, with specified high-grade materials,
      clear scope and defined timelines. With the director personally
      involved at every stage, we take each project from foundation to final
      finish with a focus on refined design, structural quality and clean,
      on-time delivery.
    </p>

    {/* Stats */}
    <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#F2F2F2] pt-7">
      <div>
        <strong className="font-serif text-4xl text-[#003E73]">
          2012
        </strong>
        <span className="mt-1 block text-[10px] font-bold uppercase tracking-widest text-[#1F1F1F]/50">
          Building since
        </span>
      </div>

      <div>
        <strong className="font-serif text-4xl text-[#003E73]">
          3
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
      Discuss your home
      <ArrowRight size={17} />
    </a>
  </div>
</section>

    <section id="services" className="bg-[#F2F2F2] py-24 lg:py-32"><div className="container mx-auto px-5 lg:px-10"><div className="mb-14 flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#EF4136]">What we do</p><h2 className="font-serif text-4xl font-bold text-[#003E73] lg:text-6xl">Made for your<br />next chapter.</h2></div><p className="max-w-sm text-sm leading-7 text-[#1F1F1F]/60">From foundation to finish, our integrated approach turns ambitious ideas into exceptional places.</p></div><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map(([title, description, Icon], index) => <div key={title} className="group bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl lg:p-9"><div className="mb-12 flex items-start justify-between"><div className="flex h-12 w-12 items-center justify-center bg-[#003E73] text-white transition group-hover:bg-[#EF4136]"><Icon size={21} strokeWidth={1.5} /></div><span className="font-serif text-3xl text-[#003E73]/15">0{index + 1}</span></div><h3 className="font-serif text-2xl font-bold text-[#003E73]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#1F1F1F]/60">{description}</p><div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#EF4136]">Learn more <ArrowRight size={14} className="transition group-hover:translate-x-1" /></div></div>)}</div></div></section>

    <section id="projects" className="container mx-auto px-5 py-24 lg:px-10 lg:py-36"><div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#EF4136]">Selected work</p><h2 className="font-serif text-4xl font-bold text-[#003E73] lg:text-6xl">Places with<br />a point of view.</h2></div><div className="flex flex-wrap gap-2">{['All', 'Residential', 'Commercial', 'High Rise', 'Hotels & Resorts','Interiors'].map((item) => <button onClick={() => setFilter(item)} key={item} className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition ${filter === item ? 'bg-[#003E73] text-white' : 'bg-[#F2F2F2] text-[#003E73] hover:bg-[#EF4136] hover:text-white'}`}>{item}</button>)}</div></div><div className="mt-12 grid gap-5 md:grid-cols-2">{filteredProjects.map((project, index) => <article key={project.title} className={`group relative overflow-hidden ${index === 0 ? 'md:row-span-2' : ''}`}><img src={project.image} alt={project.title} className={`w-full object-cover transition duration-700 group-hover:scale-105 ${index === 0 ? 'h-[540px] md:h-full' : 'h-[260px]'}`} /><div className="absolute inset-0 bg-gradient-to-t from-[#003E73]/90 via-transparent to-transparent opacity-90" /><div className="absolute bottom-0 left-0 p-6 text-white lg:p-8"><p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#EF4136]">{project.type}</p><h3 className="font-serif text-2xl font-bold">{project.title}</h3><div className="mt-3 flex gap-5 text-[10px] uppercase tracking-wider text-white/65"><span>{project.location}</span><span>{project.area}</span></div></div><span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center bg-white text-[#003E73] opacity-0 transition group-hover:opacity-100"><ArrowRight size={17} /></span></article>)}</div></section>

    <section id="process" className="bg-[#003E73] py-24 text-white lg:py-32"><div className="container mx-auto px-5 lg:px-10"><div className="mb-16 max-w-2xl"><p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#EF4136]">How we work</p><h2 className="font-serif text-4xl font-bold lg:text-6xl">Clarity at every<br /><span className="text-[#EF4136]">single step.</span></h2></div><div className="grid gap-0 md:grid-cols-4 lg:grid-cols-7">{steps.map((step, i) => <div key={step} className="relative border-l border-white/20 px-5 py-5 first:border-l-0 md:min-h-[180px]"><span className="font-serif text-4xl text-[#EF4136]">0{i + 1}</span><h3 className="mt-8 text-sm font-bold uppercase tracking-wider">{step}</h3>{i < steps.length - 1 && <ArrowRight className="absolute right-3 top-1/2 hidden text-white/30 lg:block" size={18} />}</div>)}</div></div></section>

    <section id="why-us" className="container mx-auto grid gap-12 px-5 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-10 lg:py-36"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#EF4136]">The difference</p><h2 className="font-serif text-4xl font-bold text-[#003E73] lg:text-6xl">Built on trust.<br />Proven in detail.</h2><p className="mt-7 max-w-md text-sm leading-7 text-[#1F1F1F]/60">A premium build is not about the loudest promise. It is about the quiet confidence that comes from getting every detail right.</p><a href="#contact" className="mt-8 inline-flex items-center gap-3 bg-[#EF4136] px-6 py-4 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#003E73]">Start a conversation <ArrowRight size={16} /></a></div><div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">{['Premium materials', 'Experienced engineers', 'Transparent pricing', 'Quality assurance', 'Modern technology', 'Timely delivery', 'Dedicated project manager', 'Regular site updates'].map((item, i) => <div key={item} className="flex gap-4 border-b border-[#F2F2F2] pb-6"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F2F2F2] text-[#EF4136]"><Check size={15} /></span><div><span className="font-serif text-xl text-[#003E73]">0{i + 1}</span><h3 className="mt-1 text-sm font-bold text-[#1F1F1F]">{item}</h3></div></div>)}</div></section>

    <section id="testimonials" className="bg-[#F2F2F2] py-24 lg:py-32"><div className="container mx-auto grid gap-12 px-5 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:px-10"><div className="relative"><img src={'images/kamal ahuja.jpg'} alt="Architectural detail" className="h-[430px] w-full object-cover" /><div className="absolute bottom-5 left-5 bg-[#EF4136] p-5 text-white"><div className="flex gap-1">{[1, 2, 3, 4, 5].map((i) => <Star key={i} size={13} fill="currentColor" />)}</div><span className="mt-2 block text-[10px] font-bold uppercase tracking-widest">Client stories</span></div></div><div className="lg:pl-8"><Quote className="text-[#EF4136]" size={45} fill="currentColor" /><blockquote className="mt-5 font-serif text-3xl font-bold leading-tight text-[#003E73] lg:text-5xl">“They did not just build our home. They understood how we wanted to live in it.”</blockquote><div className="mt-8 flex items-center gap-4"><div className="h-11 w-11 rounded-full bg-[#003E73]" /><div><p className="text-sm font-bold text-[#1F1F1F]">Kamal Ahuja</p><p className="mt-1 text-[10px] uppercase tracking-widest text-[#1F1F1F]/50">Indore</p></div></div></div></div></section>

    <section id="contact" className="bg-white py-24 lg:py-36"><div className="container mx-auto grid gap-16 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-10"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#EF4136]">Your project starts here</p><h2 className="font-serif text-4xl font-bold leading-tight text-[#003E73] lg:text-6xl">Let’s build<br /><span className="text-[#EF4136]">something lasting.</span></h2><p className="mt-7 max-w-sm text-sm leading-7 text-[#1F1F1F]/60">Tell us a little about your vision. Our team will get back to you within one business day.</p><div className="mt-12 space-y-5 text-sm"><div className="flex items-center gap-4"><Phone size={18} className="text-[#EF4136]" /><span>+91 9926347973</span></div><div className="flex items-center gap-4"><Mail size={18} className="text-[#EF4136]" /><span>rohanbuildconofficial@gmail.com</span></div><div className="flex items-center gap-4"><MapPin size={18} className="text-[#EF4136]" /><span>60, Prakash Nagar Rd, Navlakha, Indore, Madhya Pradesh 452001</span></div></div></div><form onSubmit={submitInquiry} className="grid gap-5 border border-[#F2F2F2] p-6 shadow-sm sm:grid-cols-2 lg:p-10"><div><label htmlFor="name">Your name</label><input id="name" name="name" required placeholder="e.g. Aarav Sharma" /></div><div><label htmlFor="phone">Phone number</label><input id="phone" name="phone" required placeholder="+91 99263 47973" /></div><div><label htmlFor="email">Email address</label><input id="email" name="email" type="email" required placeholder="you@email.com" /></div><div><label htmlFor="projectType">Project type</label><select id="projectType" name="projectType" required defaultValue=""><option value="" disabled>Select one</option><option>Civil Construction</option><option>High-End Interior Execution</option><option>Regulatory Approvals & Liaison</option></select></div><div className="sm:col-span-2"><label htmlFor="location">Project location</label><input id="location" name="location" placeholder="City or locality" /></div><div className="sm:col-span-2"><label htmlFor="message">Tell us about your project</label><textarea id="message" name="message" rows="4" placeholder="A few details about your vision, timeline or budget..." /></div><div className="sm:col-span-2 flex flex-col items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center"><button disabled={formState.loading} className="inline-flex items-center gap-3 bg-[#EF4136] px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#003E73] disabled:opacity-60" type="submit">{formState.loading ? 'Sending...' : 'Send enquiry'} <ArrowRight size={16} /></button>{formState.success && <p className="text-sm text-[#003E73]" role="status">{formState.success}</p>}{formState.error && <p className="text-sm text-[#EF4136]" role="alert">{formState.error}</p>}</div></form></div></section>

    <footer className="bg-[#003E73] py-14 text-white"><div className="container mx-auto px-5 lg:px-10"><div className="flex flex-col justify-between gap-10 border-b border-white/15 pb-12 lg:flex-row"><div><div className="inline-block bg-white p-3"><Logo /></div><p className="mt-6 max-w-xs text-sm leading-6 text-white/55">Crafting spaces with integrity, precision and a point of view.</p></div><div className="grid grid-cols-2 gap-x-14 gap-y-4 text-xs font-bold uppercase tracking-widest sm:grid-cols-3"><div><p className="mb-4 text-[#EF4136]">Explore</p><a href="#about" className="block py-1 text-white/65 hover:text-white">About us</a><a href="#projects" className="block py-1 text-white/65 hover:text-white">Our projects</a><a href="#process" className="block py-1 text-white/65 hover:text-white">Our process</a></div><div><p className="mb-4 text-[#EF4136]">Connect</p><a href="#contact" className="block py-1 text-white/65 hover:text-white">Get in touch</a><a href="#contact" className="block py-1 text-white/65 hover:text-white"></a></div><div><p className="mb-4 text-[#EF4136]">Follow</p><div className="flex gap-3"><a href="https://www.instagram.com/rohanbuildcon?igsi=MWdpYTYxOW94YjdpNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={16} /></a></div></div></div></div><div className="flex flex-col justify-between gap-4 pt-7 text-[10px] font-bold uppercase tracking-widest text-white/45 sm:flex-row"><span>© 2026 Rohan Buildcon. All rights reserved.</span><a href="https://webytesolutions.in" target="_blank" rel="noopener noreferrer">
  <span>Built by Webyte Solutions</span>
</a></div></div></footer>
    <a href="https://wa.me/919926347973" aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#EF4136] text-white shadow-lg transition hover:scale-105"><MessageCircle /></a>
  </main>
}
