import { useState, type ReactNode } from 'react'
import { gameTiles, img, type GameTile } from './assets'

function StarRating({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={15}
      height={14}
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M7.5 11.7246L11.1374 13.873C11.8035 14.2668 12.6186 13.6847 12.4433 12.9486L11.4792 8.90845L14.6959 6.18649C15.2831 5.69003 14.9676 4.74846 14.1963 4.68855L9.96291 4.3376L8.30636 0.519999C8.00836 -0.173333 6.99164 -0.173333 6.69364 0.519999L5.03709 4.32904L0.803695 4.67999C0.0323925 4.7399 -0.28314 5.68147 0.304101 6.17793L3.52078 8.89989L2.55665 12.94C2.38136 13.6762 3.19648 14.2582 3.86261 13.8645L7.5 11.7246Z"
        fill="#FF975D"
      />
    </svg>
  )
}

function FiveStars({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className ?? ''}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarRating key={i} className="drop-shadow-[0_0_10px_rgba(255,92,0,0.4)]" />
      ))}
    </div>
  )
}

function NavLink({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
      className="font-body text-white font-bold uppercase tracking-[0.02em] text-sm hover:text-[#ff975d] transition-colors"
    >
      {children}
    </button>
  )
}

function BtnPrimary({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <button
      type="button"
      className={`rounded-3xl border-2 border-[#ff975d] bg-gradient-to-r from-[#ff5c00] to-[#a32d05] px-8 py-5 font-body text-white text-base md:text-xl font-bold uppercase tracking-[0.02em] shadow-[0_4px_64px_rgba(255,92,0,0.55)] hover:brightness-110 transition-[filter] ${className ?? ''}`}
    >
      {children}
    </button>
  )
}

function BtnSecondary({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <button
      type="button"
      className={`rounded-3xl border-2 border-[#ff975d] bg-[rgba(23,25,31,0.5)] backdrop-blur-sm px-8 py-5 font-body text-white text-base md:text-xl font-bold uppercase tracking-[0.02em] shadow-[0_4px_44px_rgba(255,92,0,0.2)] hover:bg-[rgba(35,35,48,0.65)] transition-colors ${className ?? ''}`}
    >
      {children}
    </button>
  )
}

function BtnOutlineSmall({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
      className="rounded-3xl border-2 border-[#ff975d] backdrop-blur-sm px-6 py-3 font-body text-white text-xs md:text-base font-bold uppercase tracking-[0.02em] shadow-[0_4px_44px_rgba(255,92,0,0.2)]"
    >
      {children}
    </button>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#232330]/95 backdrop-blur-xl">
      <div className="relative mx-auto flex min-h-[72px] max-w-[1920px] items-center px-4 py-4 md:min-h-[136px] md:px-10 lg:px-20">
        <div className="relative z-10 flex min-w-0 flex-1 flex-wrap items-center gap-3 md:gap-6 lg:gap-8">
          <BtnOutlineSmall>select your game</BtnOutlineSmall>
          <div className="hidden items-center gap-6 lg:flex">
            <NavLink>about us</NavLink>
            <NavLink>how it works</NavLink>
          </div>
        </div>

        <a
          href="/"
          className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 shrink-0"
          aria-label="OGEdge home"
        >
          <img
            src="/Logotype-White@2x.png"
            alt="OGEdge"
            className="h-9 w-auto md:h-[58px]"
            width={376}
            height={117}
            decoding="async"
          />
        </a>

        <div className="relative z-10 flex min-w-0 flex-1 flex-wrap items-center justify-end gap-3 md:gap-6 lg:gap-8">
          <div className="hidden items-center gap-6 xl:flex">
            <NavLink>blog</NavLink>
            <NavLink>Contact Us</NavLink>
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-[#383852] px-3 py-2 text-white">
            <span className="text-lg font-normal" aria-hidden>
              $
            </span>
            <span className="font-body text-lg">USD</span>
            <span className="text-xs opacity-80" aria-hidden>
              ▾
            </span>
          </div>
          <button
            type="button"
            className="relative flex h-[53px] items-center gap-2 rounded-2xl border border-[#383852] px-3 text-white"
            aria-label="Cart, 2 items"
          >
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M5.588 21.413C5.196 21.021 5 20.55 5 20C5 19.45 5.196 18.9793 5.588 18.588C5.98 18.1967 6.45067 18.0007 7 18C7.54933 17.9993 8.02033 18.1953 8.413 18.588C8.80567 18.9807 9.00133 19.4513 9 20C8.99867 20.5487 8.803 21.0197 8.413 21.413C8.023 21.8063 7.552 22.002 7 22C6.448 21.998 5.97733 21.8023 5.588 21.413ZM15.588 21.413C15.196 21.021 15 20.55 15 20C15 19.45 15.196 18.9793 15.588 18.588C15.98 18.1967 16.4507 18.0007 17 18C17.5493 17.9993 18.0203 18.1953 18.413 18.588C18.8057 18.9807 19.0013 19.4513 19 20C18.9987 20.5487 18.803 21.0197 18.413 21.413C18.023 21.8063 17.552 22.002 17 22C16.448 21.998 15.9773 21.8023 15.588 21.413ZM5.2 4H19.95C20.3333 4 20.625 4.171 20.825 4.513C21.025 4.855 21.0333 5.20067 20.85 5.55L17.3 11.95C17.1167 12.2833 16.871 12.5417 16.563 12.725C16.255 12.9083 15.9173 13 15.55 13H8.1L7 15H19V17H7C6.25 17 5.68333 16.671 5.3 16.013C4.91667 15.355 4.9 14.7007 5.25 14.05L6.6 11.6L3 4H1V2H4.25L5.2 4Z"
                fill="white"
              />
            </svg>
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-xl border-2 border-[#252430] bg-[#ff5c00] px-1 text-[10px] font-bold uppercase">
              2
            </span>
          </button>
          <button
            type="button"
            className="rounded-3xl border-2 border-[#ff975d] bg-gradient-to-r from-[#ff5c00] to-[#a32d05] px-6 py-3 font-body text-white text-sm font-bold uppercase shadow-[0_4px_64px_rgba(255,92,0,0.4)]"
          >
            login
          </button>
        </div>
      </div>
    </header>
  )
}

function GameCard({ tile }: { tile: GameTile }) {
  return (
    <div className="group relative aspect-[302/180] w-full cursor-pointer overflow-hidden rounded-3xl ring-2 ring-transparent shadow-none transition-[box-shadow,ring-color] duration-200 hover:shadow-[0_4px_16px_rgba(250,70,9,0.32)] hover:ring-[#ffa182]">
      <img
        src={tile.backing}
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#ff5c00]/45 to-[#a32d05]/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        aria-hidden
      />
      <div className="absolute inset-0 z-[2] flex items-center justify-center p-4">
        <img src={tile.logo} alt={tile.alt} className="max-h-[40%] max-w-[70%] object-contain drop-shadow-sm" />
      </div>
    </div>
  )
}

const reviewBody =
  'Amazing experience, consectetur adipiscing elit. Sed sed felis vel eros eleifend fermentum. Nulla id iaculis dui. Morbi maximus placerat augue, in euismod felis facilisis sit amet. Quisque efficitur egestas magna nec posuere.'

function ReviewCard({ emphasized }: { emphasized?: boolean }) {
  return (
    <article
      className={`flex w-[min(100%,430px)] shrink-0 flex-col gap-4 rounded-3xl border p-8 backdrop-blur-xl ${
        emphasized
          ? 'border-[#ff975d] bg-gradient-to-br from-[rgba(56,56,82,0.5)] via-[rgba(43,45,77,0.5)] to-[rgba(13,15,21,0.5)]'
          : 'border-[#6d6d96] bg-gradient-to-br from-[rgba(56,56,82,0.5)] via-[rgba(43,45,77,0.5)] to-[rgba(13,15,21,0.5)]'
      }`}
    >
      <div className="flex items-center gap-2">
        <img
          src={img.avatar}
          alt=""
          className="size-8 rounded-full object-cover bg-neutral-600"
          width={32}
          height={32}
        />
        <div>
          <p className="font-body text-base font-medium text-white">Robert Johnson</p>
          <p className="font-body text-sm text-[#ff975d]">Platinum III to Diamond III</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <FiveStars />
        <time className="font-body text-sm text-[#aaa]" dateTime="2020-12-08">
          2020-12-08
        </time>
      </div>
      <p className="font-body text-base leading-6 text-white">{reviewBody}</p>
      <p className="font-body text-sm text-[#aaa]">
        <span className="text-[#aaa]">Purchased:</span>{' '}
        <span className="text-white">Game</span>
      </p>
      <div className="flex flex-wrap gap-2">
        <span className="rounded-lg bg-[rgba(26,173,25,0.2)] px-2 py-2 font-body text-xs font-medium text-[#1aad19]">
          Verified Purchase
        </span>
        <span className="rounded-lg bg-[rgba(81,79,79,0.2)] px-2 py-2 font-body text-xs font-medium text-[#aaa]">
          Rank Boost
        </span>
      </div>
    </article>
  )
}

const steps = [
  {
    title: 'Choose Your Game & Target Rank',
    body: 'Select your game — Valorant, League of Legends, Overwatch 2, or EA FC — and customize your rank, leveling, or coaching service. Our real-time calculator shows your exact price instantly. No surprises.',
  },
  {
    title: 'Checkout Securely in Seconds',
    body: 'We safely support Visa, Mastercard, PayPal, Crypto, and more. Every transaction is SSL-encrypted and your payment data is never stored on our servers. The price you see is the price you pay — no hidden fees, ever.',
  },
  {
    title: 'Watch Your Rank Climb Live',
    body: 'Access your private dashboard immediately after checkout. Track your boost in real-time, chat directly with your assigned Pro, and get notified the moment your target rank is reached.',
  },
] as const

function IconCart() {
  return (
    <svg className="shrink-0" width={50} height={50} viewBox="0 0 50 50" fill="none" aria-hidden>
      <path
        d="M47.0906 30.8757V12.9342L11.7462 6.55255V4.34687C11.7462 1.95003 9.79632 0 7.39948 0H2.91016V2.94536H7.39938C8.17215 2.94536 8.80088 3.5741 8.80088 4.34687V31.5429C8.80088 34.6825 11.3551 37.2368 14.4948 37.2368H15.6734V40.5932C15.0717 40.3295 14.4078 40.1821 13.7098 40.1821C11.003 40.1821 8.80088 42.3843 8.80088 45.0911C8.80088 47.7978 11.003 50 13.7098 50C16.251 50 18.3471 48.0591 18.5941 45.5819H18.6188V37.2368H44.1452V40.5932C43.5435 40.3295 42.8796 40.1821 42.1817 40.1821C39.4749 40.1821 37.2727 42.3843 37.2727 45.0911C37.2727 47.7978 39.4749 50 42.1817 50C44.7228 50 46.8189 48.0591 47.066 45.5819H47.0906V34.2914H14.4948C12.9792 34.2914 11.7462 33.0585 11.7462 31.5429V30.3848L47.0906 30.8757Z"
        fill="#FF975D"
      />
    </svg>
  )
}

function IconShield() {
  return (
    <svg className="shrink-0" width={50} height={50} viewBox="0 0 50 50" fill="none" aria-hidden>
      <path
        d="M15.1965 15.7034C15.1965 14.2084 13.9804 12.9922 12.4854 12.9922H8.59399C7.09899 12.9922 5.88281 14.2084 5.88281 15.7034V19.1045C5.88281 20.5995 7.09899 21.8157 8.59399 21.8157H12.4854C13.9804 21.8157 15.1965 20.5995 15.1965 19.1045V15.7034ZM12.2554 18.8745H8.82399V15.9334H12.2554V18.8745Z"
        fill="#FF975D"
      />
      <path d="M5.88281 24.7559H11.7652V27.697H5.88281V24.7559Z" fill="#FF975D" />
      <path d="M14.7031 24.7559H20.5855V27.697H14.7031V24.7559Z" fill="#FF975D" />
      <path
        d="M47.0588 24.7562V23.1455C47.0588 19.4976 44.5555 16.4235 41.1765 15.5505V8.09816C41.1765 5.93111 39.4134 4.16797 37.2463 4.16797H3.9302C1.76304 4.16797 0 5.93101 0 8.09816V29.6495C0 31.8167 1.76304 33.5797 3.9302 33.5797H28.4314V35.0503C28.4314 40.9968 33.2692 45.8346 39.2157 45.8346C45.1621 45.8346 50 40.9968 50 35.0503V24.7562H47.0588Z"
        fill="#FF975D"
      />
      <path
        d="M38.1816 38.5468L44.1207 33.2017L42.153 31.0156L38.2881 34.494L36.3335 32.5394L34.2539 34.619L38.1816 38.5468Z"
        fill="#FF975D"
      />
    </svg>
  )
}

function IconSteps() {
  return (
    <svg className="shrink-0" width={50} height={50} viewBox="0 0 50 50" fill="none" aria-hidden>
      <path
        d="M44.6076 25.7344C41.9693 25.7344 39.769 27.6396 39.3065 30.1461H30.3011C29.8385 27.6396 27.6382 25.7344 24.9999 25.7344C22.3616 25.7344 20.1613 27.6396 19.6987 30.1461H10.6933C10.2308 27.6396 8.03049 25.7344 5.39216 25.7344C2.41892 25.7344 0 28.1533 0 31.1265C0 34.0998 2.41892 36.5187 5.39216 36.5187C7.67372 36.5187 9.62745 35.0936 10.4136 33.0873H19.9785C20.7647 35.0936 22.7184 36.5187 25 36.5187C27.2816 36.5187 29.2353 35.0936 30.0215 33.0873H39.5864C40.3725 35.0936 42.3263 36.5187 44.6078 36.5187C47.5811 36.5187 50 34.0998 50 31.1265C50 28.1533 47.5809 25.7344 44.6076 25.7344Z"
        fill="#FF975D"
      />
      <path
        d="M10.2923 19.8526H7.3511V8.08789H1.46875V11.0291H4.40993V19.8526H1.46875V22.7938H10.2923V19.8526Z"
        fill="#FF975D"
      />
      <path
        d="M29.4134 19.8526H23.531V18.2462L29.4134 14.8149V8.08789H20.5898V11.0291H26.4722V13.1256L20.5898 16.557V22.7938H29.4134V19.8526Z"
        fill="#FF975D"
      />
      <path d="M20.5859 38.9707H29.4095V41.9119H20.5859V38.9707Z" fill="#FF975D" />
      <path
        d="M48.5267 8.08789H39.7031V11.0291H45.5855V13.9702H41.1737V16.9114H45.5855V19.8526H39.7031V22.7938H48.5267V8.08789Z"
        fill="#FF975D"
      />
    </svg>
  )
}

const stepIcons = [IconCart, IconShield, IconSteps] as const

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: string[]
}) {
  return (
    <div className="flex min-w-[140px] flex-col gap-4">
      <h3 className="font-body text-base font-bold text-[#fa4609]">{title}</h3>
      <ul className="flex flex-col gap-1">
        {links.map((label) => (
          <li key={label}>
            <a href="#" className="font-body text-sm text-white/90 hover:text-[#ff975d]">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function LandingPage() {
  const [slide, setSlide] = useState(0)

  return (
    <div className="min-h-screen bg-[#17191f] text-white">
      <Header />

      <section className="relative isolate overflow-hidden">
        <img
          src={img.heroBg}
          alt=""
          className="absolute inset-0 size-full max-h-[900px] object-cover md:max-h-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#17191f]/50 to-[#17191f]" />
        <div className="relative mx-auto flex max-w-[1100px] flex-col items-center gap-10 px-4 pb-28 pt-16 text-center md:pb-36 md:pt-24">
          <div className="flex max-w-4xl flex-col items-center gap-3">
            <h1 className="font-display text-3xl font-black leading-tight tracking-tight text-[#ff975d] md:text-5xl">
              OGEdge your competitive edge, delivered
            </h1>
            <p className="max-w-2xl font-body text-lg text-white md:text-2xl">
              Two decades of dominance. Providing elite coaching, boosting, and leveling since 2006
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-[#ff975d]">
            <StarRating className="drop-shadow-[0_0_10px_rgba(255,92,0,0.4)]" />
            <span className="font-body text-lg font-bold">4.9 Star Rating</span>
            <span className="font-body text-lg font-medium text-white">10k Reviews</span>
          </div>
          <BtnPrimary>get started now</BtnPrimary>
        </div>

        <div className="relative z-10 mx-auto -mt-16 max-w-[1280px] px-4 pb-16 md:-mt-24">
          <div className="rounded-3xl border border-[#17191f] bg-[rgba(23,25,31,0.5)] p-6 backdrop-blur-xl md:p-10">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {gameTiles.map((t) => (
                <GameCard key={t.alt} tile={t} />
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <BtnSecondary>show all 19 games</BtnSecondary>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <img src={img.whyChoose} alt="Why choose OGEdge" className="block w-full object-cover" />
      </section>

      <section className="relative overflow-hidden bg-[#17191f] py-16 md:py-24">
        <div className="pointer-events-none absolute left-10 top-20 size-72 rounded-full bg-[#ff5c00]/20 blur-[100px]" />
        <div className="relative mx-auto flex max-w-[1280px] flex-col gap-12 px-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="relative mx-auto max-w-[380px] lg:mx-0">
            <div className="absolute left-1/2 top-1/2 size-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5c00]/40 blur-[80px]" />
            <img
              src={img.reviewCharacter}
              alt=""
              className="relative z-[1] w-full max-w-[380px]"
            />
          </div>
          <div className="flex flex-1 flex-col gap-8 lg:max-w-[760px]">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <h2 className="font-display text-2xl font-bold text-white md:text-4xl">
                What our players are saying
              </h2>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 rounded-3xl border-2 border-[#ff975d] bg-[rgba(23,25,31,0.5)] px-4 py-3 shadow-[0_4px_44px_rgba(255,92,0,0.2)] backdrop-blur-sm">
                  <FiveStars />
                  <span className="font-body text-base font-bold text-[#ff975d] drop-shadow-[0_0_10px_rgba(255,92,0,0.4)]">
                    4.9 Star Rating
                  </span>
                  <span className="font-body text-sm font-medium text-white">10k Reviews</span>
                  <span className="text-white/60">|</span>
                  <span className="font-body text-base font-bold uppercase tracking-wide">see all</span>
                  <span aria-hidden className="text-white">
                    →
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-stretch gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <ReviewCard />
              <ReviewCard emphasized />
              <ReviewCard />
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[560px] overflow-hidden md:min-h-[700px]">
        <img src={img.stepsBg} alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-[#17191f]/70" />
        <div className="relative mx-auto flex max-w-[1280px] flex-col gap-12 px-4 py-16 md:flex-row md:items-center md:py-24">
          <div className="flex flex-1 flex-col gap-10">
            <h2 className="font-display text-2xl font-bold md:text-4xl">
              Get your service now in 3 simple steps!
            </h2>
            <div className="flex flex-col gap-8">
              {steps.map((s, i) => {
                const Icon = stepIcons[i]
                return (
                  <div key={s.title} className="flex gap-8 md:gap-10">
                    <Icon />
                    <div>
                      <h3 className="font-body text-lg font-bold text-[#ff975d]">{s.title}</h3>
                      <p className="mt-1 font-body text-lg leading-7 text-white">{s.body}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center gap-6 md:items-end">
            <button
              type="button"
              className="flex items-center gap-6 rounded-full border border-white/10 bg-black/20 p-4 backdrop-blur-sm transition hover:bg-black/30"
              aria-label="Watch the video"
            >
              <svg width={120} height={120} viewBox="0 0 150 150" fill="none" aria-hidden>
                <path
                  d="M150 75C150 33.6439 116.356 0 75 0C33.6439 0 0 33.6439 0 75C0 116.356 33.6439 150 75 150C116.356 150 150 116.356 150 75Z"
                  fill="white"
                  fillOpacity={0.15}
                />
                <path
                  d="M59.1099 112.268H59.4205L58.6958 110.042C56.7647 109.935 54.948 109.092 53.6194 107.686C52.2908 106.28 51.5513 104.419 51.553 102.485V47.4642C51.553 44.8714 52.5855 42.3864 54.4189 40.5529C56.2524 38.7195 58.7374 37.6871 61.3303 37.6816C63.0432 37.687 64.7234 38.1517 66.1957 39.0274L108.277 63.3028L106.828 65.0108L64.0271 39.0274C62.5548 38.1517 60.8746 37.687 59.1617 37.6816C57.1967 39.9211 55.31 40.6795 53.8821 42.0295C53.141 42.7265 52.5516 43.5689 52.1509 44.504C51.7501 45.4391 51.5465 46.4469 51.553 47.4642V102.485C51.5513 104.419 52.2908 106.28 53.6194 107.686C54.948 109.092 56.7647 109.935 58.6958 110.042L59.1099 112.268Z"
                  fill="#BF3126"
                />
                <path
                  d="M110.509 81.5738L66.875 106.781L67.5996 108.903L111.647 83.4889C114.893 80.4338 116.44 76.2528 116.44 76.2528L113.562 68.0645L112.165 69.7725C113.591 71.5869 114.321 73.7769 114.267 76.0844C114.106 77.2273 113.683 78.3176 113.031 79.2699C112.38 80.2222 111.516 81.0108 110.509 81.5738Z"
                  fill="#FA4609"
                />
              </svg>
              <span className="max-w-[10rem] text-left font-body text-xl font-semibold leading-snug">
                WATCH THE VIDEO
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="relative bg-[#17191f] py-16 md:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[10%] top-[20%] size-64 rounded-full bg-[#ff5c00]/20 blur-[100px]" />
          <div className="absolute right-[15%] top-[40%] size-64 rounded-full bg-[#ff5c00]/20 blur-[100px]" />
        </div>
        <div className="relative mx-auto flex max-w-[1220px] flex-col gap-10 px-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="font-display text-4xl font-bold text-[#ff975d]">01</p>
            <h2 className="mt-2 font-display text-2xl font-bold leading-snug md:text-4xl">
              <span className="text-white">We provide </span>
              <span className="text-[#ff975d]">fast</span>
              <span className="text-white">, </span>
              <span className="text-[#ff975d]">easy</span>
              <span className="text-white"> and </span>
              <span className="text-[#ff975d]">secure</span>
              <span className="text-white"> boost</span>
            </h2>
            <p className="mt-4 font-body text-lg leading-7 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed felis vel eros
              eleifend fermentum. Nulla id iaculis dui. Morbi maximus placerat augue, in euismod
              felis facilisis sit amet. Quisque efficitur egestas magna nec posuere.
            </p>
            <div className="mt-6 flex gap-2">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSlide(i)}
                  className={`h-0.5 rounded-full transition-all ${
                    slide === i ? 'w-20 bg-[#ff975d]' : 'w-5 bg-[#383852]'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[640px]">
            <div className="relative aspect-[727/461] w-full">
              <img
                src={img.highlightLeft}
                alt=""
                className="absolute left-0 top-0 w-[22%] drop-shadow-xl"
              />
              <img
                src={img.highlightMain}
                alt="Service highlight"
                className="absolute left-[12%] top-[7%] w-[66%] drop-shadow-2xl"
              />
              <img
                src={img.highlightRight}
                alt=""
                className="absolute bottom-[8%] right-0 w-[22%] drop-shadow-xl"
              />
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-12 flex max-w-[1220px] justify-between px-8">
          <button
            type="button"
            className="flex size-14 items-center justify-center rounded-full shadow-[0_4px_16px_rgba(250,70,9,0.32)] backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <span className="text-2xl text-[#ff5c00]">‹</span>
          </button>
          <button
            type="button"
            className="flex size-14 items-center justify-center rounded-full border border-[#ffa384] bg-white/10 shadow-[0_4px_16px_rgba(250,70,9,0.32)] backdrop-blur-sm"
            aria-label="Next slide"
          >
            <span className="text-2xl text-[#ff5c00]">›</span>
          </button>
        </div>
      </section>

      <section className="w-full bg-[#17191f]">
        <img src={img.faq} alt="Frequently asked questions" className="block w-full object-cover" />
      </section>

      <section className="w-full bg-[#17191f]">
        <img src={img.blog} alt="Blog" className="block w-full object-cover" />
      </section>

      <footer className="bg-black px-4 py-12 md:px-16 lg:px-28">
        <div className="mx-auto flex max-w-[1350px] flex-col gap-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <img src={img.logoFooter} alt="OGEdge" className="h-14 w-auto" width={180} height={58} />
            <div className="flex flex-wrap gap-12 lg:gap-16">
              <div>
                <h3 className="font-body text-base font-bold text-[#fa4609]">Social</h3>
                <div className="mt-4 flex gap-2">
                  {['Facebook', 'X', 'TikTok', 'Instagram'].map((network) => (
                    <a
                      key={network}
                      href="#"
                      className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-xs hover:bg-white/20"
                    >
                      {network[0]}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-body text-base font-bold text-[#fa4609]">Payment Methods</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Visa', 'Mastercard', 'PayPal', 'Apple Pay', 'Google Pay', 'Crypto'].map(
                    (p) => (
                      <span
                        key={p}
                        className="rounded border border-white/10 bg-white/5 px-2 py-1 font-body text-[11px] text-white/90"
                      >
                        {p}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          <hr className="border-[#333]" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">
            <FooterColumn
              title="OGEdge"
              links={['Services', 'Reviews', 'FAQ', 'Blog']}
            />
            <FooterColumn
              title="Popular Games"
              links={[
                'Apex Legends',
                'Call of Duty: Black Ops Cold War',
                'Call of Duty: Modern Warfare',
                'Destiny 2',
                'DOTA2',
                'Escape From Tarkov',
                'Everquest',
                'All games',
              ]}
            />
            <FooterColumn
              title="Coaching"
              links={[
                'League of Legends',
                'Valorant',
                'Call of Duty',
                'FIFA 21',
                'Destiny 2',
                'Apex Legends',
              ]}
            />
            <FooterColumn title="Help" links={['FAQ', 'Contact Us']} />
          </div>

          <hr className="border-[#333]" />

          <div className="grid gap-8 lg:grid-cols-4 lg:gap-16">
            <FooterColumn
              title="OGEdge"
              links={[
                'About Us',
                'Safety',
                'Order Now',
                'F.A.Q.',
                'Contact Us',
                'Jobs',
                'Terms and Conditions',
                'Privacy Policy',
              ]}
            />
            <FooterColumn
              title="Popular Games"
              links={[
                'Apex Legends',
                'Call of Duty: Black Ops Cold War',
                'Call of Duty: Modern Warfare',
                'Destiny 2',
                'DOTA2',
                'Escape From Tarkov',
                'Everquest',
                'All games',
              ]}
            />
            <FooterColumn
              title="Coaching"
              links={[
                'League of Legends',
                'Valorant',
                'Call of Duty',
                'FIFA 21',
                'Destiny 2',
                'Apex Legends',
              ]}
            />
            <FooterColumn
              title="Blog"
              links={['How we keep your account safe', 'EA Backup codes', 'Playing with us']}
            />
          </div>

          <hr className="border-[#333]" />

          <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:gap-12">
            <p className="max-w-3xl font-body text-xs leading-relaxed text-white/90">
              Overwatch, Hearthstone, WoW Classic, are trademarks and/or registered trademarks of
              Blizzard Entertainment Inc. Counter-Strike and Dota are trademarks and/or registered
              trademarks of the Valve Corporation. Destiny 2 is a trademark and/or registered trademark
              of Bungie. PLAYERUNKNOWN&apos;S BATTLEGROUNDS is a registered trademark, trademark or
              service mark of Bluehole, Inc. and its affiliates.
            </p>
            <div className="flex flex-col items-start gap-3 lg:items-end">
              <p className="font-body text-xs text-white/90">@2026 OGEdge all rights reserved</p>
              <div className="flex flex-wrap gap-6 font-body text-xs text-white/90">
                <a href="#" className="hover:text-[#ff975d]">
                  Terms
                </a>
                <a href="#" className="hover:text-[#ff975d]">
                  Refund Policy
                </a>
                <a href="#" className="hover:text-[#ff975d]">
                  Privacy
                </a>
                <a href="#" className="hover:text-[#ff975d]">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
