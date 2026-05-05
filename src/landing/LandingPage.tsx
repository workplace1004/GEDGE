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
      className="font-body text-white font-bold uppercase tracking-[0.02em] text-[16px] hover:text-[#ff975d] transition-colors"
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
      className={`rounded-3xl border-2 border-[#ff975d] bg-[rgba(23,25,31,0.5)] backdrop-blur-sm min-w-[267px] h-[72px] font-body text-white text-base md:text-xl font-bold uppercase tracking-[0.02em] shadow-[0_4px_44px_rgba(255,92,0,0.2)] hover:bg-[rgba(35,35,48,0.65)] transition-colors ${className ?? ''}`}
    >
      {children}
    </button>
  )
}

function BtnOutlineSmall({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
      className="rounded-[24px] border-2 border-[#ff975d] backdrop-blur-sm min-w-[222px] min-h-[67px] font-body text-white text-xs md:text-base font-bold uppercase tracking-[0.02em] shadow-[0_4px_44px_rgba(255,92,0,0.2)]"
    >
      {children}
    </button>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#232330]/95 backdrop-blur-xl">
      <div className="relative mx-auto flex min-h-[72px] max-w-[1920px] items-center px-4 md:min-h-[136px] md:px-10 lg:px-20">
        <div className="relative z-10 flex min-w-0 flex-1 flex-wrap items-center gap-3 md:gap-6 lg:gap-[48px]">
          <BtnOutlineSmall>select your game</BtnOutlineSmall>
          <div className="hidden items-center gap-[48px] lg:flex">
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

        <div className="relative z-10 flex min-w-0 flex-1 flex-wrap items-center justify-end gap-3 md:gap-6 lg:gap-[48px]">
          <div className="hidden items-center gap-6 xl:flex">
            <NavLink>blog</NavLink>
            <NavLink>Contact Us</NavLink>
          </div>
          <div className="flex items-center gap-2 px-[16px] py-[12px] rounded-2xl border border-[#383852] min-w-[115px] justify-center h-[53px] text-white">
            <span className="text-[24px] font-normal" aria-hidden>
              $
            </span>
            <span className="font-body text-[24px]">USD</span>
            <svg
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
              aria-hidden="true"
            >
              <path
                d="M4.5 7.5L9 12L13.5 7.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <button
            type="button"
            className="relative flex h-[53px] items-center justify-center gap-2 rounded-2xl border border-[#383852] w-[56px] text-white"
            aria-label="Cart, 2 items"
          >
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M5.588 21.413C5.196 21.021 5 20.55 5 20C5 19.45 5.196 18.9793 5.588 18.588C5.98 18.1967 6.45067 18.0007 7 18C7.54933 17.9993 8.02033 18.1953 8.413 18.588C8.80567 18.9807 9.00133 19.4513 9 20C8.99867 20.5487 8.803 21.0197 8.413 21.413C8.023 21.8063 7.552 22.002 7 22C6.448 21.998 5.97733 21.8023 5.588 21.413ZM15.588 21.413C15.196 21.021 15 20.55 15 20C15 19.45 15.196 18.9793 15.588 18.588C15.98 18.1967 16.4507 18.0007 17 18C17.5493 17.9993 18.0203 18.1953 18.413 18.588C18.8057 18.9807 19.0013 19.4513 19 20C18.9987 20.5487 18.803 21.0197 18.413 21.413C18.023 21.8063 17.552 22.002 17 22C16.448 21.998 15.9773 21.8023 15.588 21.413ZM5.2 4H19.95C20.3333 4 20.625 4.171 20.825 4.513C21.025 4.855 21.0333 5.20067 20.85 5.55L17.3 11.95C17.1167 12.2833 16.871 12.5417 16.563 12.725C16.255 12.9083 15.9173 13 15.55 13H8.1L7 15H19V17H7C6.25 17 5.68333 16.671 5.3 16.013C4.91667 15.355 4.9 14.7007 5.25 14.05L6.6 11.6L3 4H1V2H4.25L5.2 4Z"
                fill="white"
              />
            </svg>
            <span className="absolute right-2 top-1 flex min-h-[16px] min-w-[16px] items-center justify-center rounded-xl border-2 border-[#252430] bg-[#ff5c00] px-1 text-[10px] font-bold uppercase">
              2
            </span>
          </button>
          <button
            type="button"
            className="rounded-[24px] border-2 border-[#ff975d] bg-gradient-to-r from-[#ff5c00] to-[#a32d05] min-w-[111px] h-[72px] font-body text-white text-sm font-bold uppercase shadow-[0_4px_64px_rgba(255,92,0,0.4)]"
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
        style={{ transform: `scale(${tile.backingScale ?? 1})` }}
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
      className={`flex z-20 max-h-[355px] w-[430px] shrink-0 flex-col gap-3 rounded-3xl border p-8 backdrop-blur-xl ${emphasized
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
      <p className="line-clamp-5 font-medium text-[16px] min-h-[120px] text-white">{reviewBody}</p>
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

const stepIcons = ['/icon/Group (1).png', '/icon/Group (2).png', '/icon/Group.png'] as const
const faqCategoryIcons = [
  '/question/icons (1).png',
  '/question/icons.png',
  '/question/icons (2).png',
  '/question/icons (3).png',
  '/question/icons (4).png',
  '/question/icons (5).png',
  '/question/icons (6).png',
] as const

const faqCategories: Array<{
  label: string
  count: number
  iconPath: string
  active?: boolean
}> = [
  { label: 'General', count: 25, active: true, iconPath: faqCategoryIcons[0] },
  { label: 'Account Safety', count: 12, iconPath: faqCategoryIcons[1] },
  { label: 'Boosting', count: 10, iconPath: faqCategoryIcons[2] },
  { label: 'Order Process', count: 10, iconPath: faqCategoryIcons[3] },
  { label: 'Payments', count: 3, iconPath: faqCategoryIcons[4] },
  { label: 'Games & Services', count: 3, iconPath: faqCategoryIcons[5] },
  { label: 'Discounts & Loyalty', count: 3, iconPath: faqCategoryIcons[6] },
]

const faqItems: Array<{
  question: string
  answer?: string
  open?: boolean
}> = [
  {
    question: 'How does boosting work?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed felis vel eros eleifend fermentum. Nulla id iaculis dui. Morbi maximus placerat augue, in euismod felis facilisis sit amet. Quisque efficitur egestas magna nec posuere. Mauris auctor, nisi nec luctus pharetra, dui sem eleifend justo, eget euismod augue enim non ante.',
    open: true,
  },
  { question: 'Can I play with my booster?' },
  { question: 'How much do I have to wait for my order to start after buying?' },
  { question: 'How do you ensure the safety of my account?' },
  { question: 'How can I track my order?' },
  { question: 'Can I choose a specific booster and the roles or heroes which I want him to play?' },
]

const paymentCardIcons = [
  'Page 1 (1).png',
  'master_card.png',
  'Page 1.png',
  'Слой 2.png',
  'Слой 2 (2).png',
  'Слой 2 (1).png',
] as const

const socialIcons = [
  'facebook.png',
  'x (1).png',
  'x.png',
  'Слой 2 (3).png',
] as const

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
  const whyChooseItems: Array<{
    title: string
    description: string
    iconPath?: string
  }> = [
    {
      title: '24/7 Live Support',
      description: 'Real humans, real help-anytime you need it.',
      iconPath: '/icon/streamline-plump_call-center-support-service-solid.png',
    },
    {
      title: 'Order Protection Guarantee',
      description: 'You only pay when the job is done-period.',
      iconPath: '/icon/icon-park-solid_file-protection.png',
    },
    {
      title: '20+ Years of Experience',
      description: 'Proven expertise you can trust.',
      iconPath: '/icon/mingcute_check-2-fill.png',
    },
    {
      title: 'Secure Boosting',
      description: '100% safe methods-no bots, no shortcuts.',
      iconPath: '/icon/Vector.png',
    },
    {
      title: 'USA-Based Operations',
      description: 'Reliable service backed by a trusted location.',
      iconPath: '/icon/fa6-solid_flag-usa.png',
    },
    {
      title: 'Loyalty Rewards',
      description: 'Get rewarded for staying with us.',
      iconPath: '/icon/streamline-ultimate_reward-stars-4-bold.png',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[#17191f] text-white">
      <Header />

      <section className="relative isolate overflow-hidden min-h-[1288px]">
        <img
          src={img.heroBg}
          alt=""
          className="absolute inset-0 size-full max-h-[900px] object-cover md:max-h-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#17191f]/50 to-[#17191f]" />
        <div className="relative mx-auto flex max-w-[1100px] flex-col items-center gap-3 px-4 pb-28 pt-16 text-center md:pb-[190px] md:pt-[190px]">
          <div className="flex max-w-5xl flex-col items-center gap-3">
            <h1 className="font-display text-[48px] font-black leading-tight tracking-tight text-white">
              OGEdge your competitive edge,&nbsp;
              <span className="font-display text-[48px] font-black leading-tight tracking-tight text-[#FFA282]">delivered</span>
            </h1>
            <p className="max-w-2xl font-body text-[24px] text-white md:text-2xl">
              Two decades of dominance. Providing elite coaching, boosting, and leveling since 2006
            </p>
          </div>
          <div className="flex flex-wrap mb-[32px] items-center justify-center gap-3 text-[#ff975d]">
            <StarRating className="drop-shadow-[0_0_10px_rgba(255,92,0,0.4)]" />
            <span className="font-body text-[20px] font-bold">4.9 Star Rating</span>
            <span className="font-body text-[20px] font-medium text-white">10k Reviews</span>
          </div>
          <BtnPrimary>get started now</BtnPrimary>
        </div>

        <div className="rounded-3xl absolute bottom-0 border w-full flex flex-col items-center border-[#17191f] min-h-[616px] bg-[rgba(23,25,31,0.5)] p-6 backdrop-blur-xl md:p-[64px]">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 w-[1280px] h-[384px]">
            {gameTiles.map((t) => (
              <GameCard key={t.alt} tile={t} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <BtnSecondary>show all 19 games</BtnSecondary>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#17191f] px-4 py-12 md:px-0 md:py-[120px]">
        <div className="mx-auto flex w-full max-w-[1920px] justify-center">
          <div className="relative flex w-full max-w-[1445px] flex-col items-center gap-10 md:min-h-[601px] lg:flex-row lg:items-start lg:justify-center">
            <div className="relative z-10 w-full max-w-[880px] lg:-mr-[110px]">
              <div className="flex flex-col gap-[80px]">
                <h2 className="font-display text-[48px] font-light leading-[45px] text-[#ff5c00] md:text-[36px]">
                  Why&nbsp;
                  <span className='text-white'>Customers Choose</span>
                  &nbsp;OGEdge
                </h2>
                <div className="grid gap-6 md:grid-cols-2 md:gap-x-20 md:gap-y-6 max-h-[474px] min-w-[880px]">
                  {whyChooseItems.map(({ title, description, iconPath }) => (
                    <article key={title} className="flex flex-col gap-4">
                      <div className="flex size-16 items-center justify-center rounded-[124px] bg-[rgba(255,92,0,0.2)]">
                        {iconPath ? (
                          <img
                            src={iconPath}
                            alt=""
                            className="size-8 object-contain"
                            loading="lazy"
                          />
                        ) : (
                          <span className="font-body text-[28px] leading-none text-[#ff5c00]">★</span>
                        )}
                      </div>
                      <div className="flex flex-col gap-[2px]">
                        <h3 className="font-body text-[24px] font-bold leading-8 text-[#ff5c00]">{title}</h3>
                        <p className="font-body text-[18px] leading-7 text-white">{description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 w-full max-w-[902px] lg:mt-[-22px]">
              <div className="pointer-events-none absolute left-[75%] top-[20%] hidden h-[350px] w-[210px] -translate-x-1/2 rounded-[128px] bg-[#ff5c00] blur-[107px] md:block" />
              <div className="pointer-events-none absolute left-[64%] top-[30%] hidden h-[216px] w-[250px] -translate-x-1/2 rounded-[128px] bg-[#ff5c00] blur-[107px] md:block" />
              <img
                src="/Adobe Express - file 1.png"
                alt="OGEdge specialists"
                className="relative z-[1] mx-auto h-auto w-full min-w-[790px] min-h-[621px] max-h-[621px] max-w-[790px] object-contain"
              />
              <div className="pointer-events-none absolute bottom-[-6px] left-1/2 z-[2] hidden h-[172px] w-full max-w-[902px] -translate-x-1/2 bg-gradient-to-t from-[#17191f] to-[#17191f]/20 blur-[35px] md:block" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#17191f] py-12 md:min-h-[900px] md:py-0">
        <div className="pointer-events-none absolute left-[344px] top-[230px] hidden size-[317px] rounded-full bg-[#ff5c00] blur-[107px] md:block" />
        <div className="relative mx-auto flex h-full max-w-[1920px] flex-col px-4 py-10 md:px-0 md:py-0">
          <div className="flex flex-col gap-8 md:absolute md:left-[754px] md:top-[217px] md:w-[846px]">
            <h2 className="font-display text-3xl font-bold leading-[45px] text-white md:text-[36px]">
              What our players are saying
            </h2>
            <div className="flex w-fit items-center gap-2 rounded-3xl bg-[rgba(23,25,31,0.5)] border-2 border-[#ffa384] min-w-[438px] h-[72px] shadow-[0_4px_44px_rgba(255,92,0,0.2)] backdrop-blur-[3px] md:h-[72px] md:w-[438px] md:px-8 md:py-6">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <StarRating className="drop-shadow-[0_0_10px_rgba(255,92,0,0.4)]" />
                  <span className="font-body text-lg font-bold leading-[30px] text-[#ff975d] drop-shadow-[0_0_10px_rgba(255,92,0,0.4)] md:text-[20px]">
                    4.9 Star Rating
                  </span>
                </div>
                <span className="font-body text-sm font-medium leading-6 text-white md:text-[16px]">10k Reviews</span>
                <span className="font-body text-sm font-medium text-white md:text-[16px]">|</span>
              </div>
              <span className="font-body text-base font-bold uppercase tracking-[0.02em] text-white md:text-[20px]">
                see all
              </span>
              <span aria-hidden className="text-white">→</span>
            </div>
          </div>

          <div className="relative mx-auto mt-6 w-full max-w-[1562px] md:absolute md:left-[155px] md:top-[466px] md:mt-0">
            <button
              type="button"
              className="absolute left-0 top-1/2 z-20 hidden size-16 -translate-y-1/2 items-center justify-center rounded-[56px] shadow-[0_4px_16px_rgba(250,70,9,0.32)] backdrop-blur-[3px] md:flex"
              aria-label="Previous reviews"
            >
              <span className="text-[42px] leading-none text-[#ff5c00]">‹</span>
            </button>

            <div className="flex ml-[120px] items-stretch z-[50] gap-4 overflow-x-auto pb-2 md:w-[1562px] h-[355px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <ReviewCard />
              <ReviewCard emphasized />
              <ReviewCard />
            </div>

            <button
              type="button"
              className="absolute right-0 top-1/2 z-20 hidden size-16 -translate-y-1/2 items-center justify-center rounded-[56px] border border-[#ffa384] bg-white/10 shadow-[0_4px_16px_rgba(250,70,9,0.32)] backdrop-blur-[3px] md:flex"
              aria-label="Next reviews"
            >
              <span className="text-[42px] leading-none text-[#ff5c00]">›</span>
            </button>
          </div>

          <div className="pointer-events-none mx-auto mt-10 max-w-[420px] md:absolute md:left-[201px] md:top-[79px] md:mt-0 md:w-[526px]">
            <img src="/character.png" alt="" className="relative z-[1] w-full" />
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[560px] justify-center items-center overflow-hidden md:min-h-[700px] max-h-[700px]">
        <img src={img.stepsBg} alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-[#17191f]/30" />
        <div className="relative flex min-w-[1280px] max-w-[1280px] h-[504px] flex-col gap-12 px-4 py-16 md:flex-row md:items-center justify-between md:py-24">
          <div className="flex w-[716px] h-[504px] flex-col gap-10">
            <h2 className="font-display text-2xl font-bold md:text-4xl">
              Get your service now in 3 simple steps!
            </h2>
            <div className="flex flex-col gap-8">
              {steps.map((s, i) => {
                const iconPath = stepIcons[i]
                return (
                  <div key={s.title} className="flex gap-8 md:gap-10">
                    <img
                      src={iconPath}
                      alt=""
                      className="h-[50px] w-[50px] shrink-0 object-contain"
                      loading="lazy"
                    />
                    <div>
                      <h3 className="font-body text-lg font-bold text-[#ff975d]">{s.title}</h3>
                      <p className="mt-1 font-body text-lg leading-7 text-white">{s.body}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col items-center max-w-[300px] h-[150px] gap-6">
            <button
              type="button"
              className="flex items-center gap-[30px]"
              aria-label="Watch the video"
            >
              <img
                src="/icon/play-icon.png"
                alt=""
                className="h-[150px] w-[150px] rounded-full object-contain"
                loading="lazy"
              />
              <span className="max-w-[10rem] text-left font-semibold text-[24px] font-semibold leading-snug">
                WATCH THE VIDEO
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="relative bg-[#17191f] py-16 md:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[10%] top-[40%] size-64 rounded-full bg-[#ff5c00]/20 blur-[100px]" />
          <div className="absolute right-[15%] top-[40%] size-64 rounded-full bg-[#ff5c00]/20 blur-[100px]" />
        </div>
        <div className="relative mx-auto flex max-w-[1220px] flex-col gap-10 px-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-[400px] h-[373px]">
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
                  className={`h-0.5 rounded-full transition-all ${slide === i ? 'w-20 bg-[#ff975d]' : 'w-5 bg-[#383852]'
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
                className="absolute z-10 left-0 top-0 w-[22%] drop-shadow-xl"
              />
              <img
                src={img.highlightMain}
                alt="Service highlight"
                className="absolute left-[12%] top-[7%] w-[66%] drop-shadow-2xl"
              />
              <img
                src={img.highlightRight}
                alt=""
                className="absolute bottom-[8%] -right-5 w-[22%] drop-shadow-xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-1/2 min-w-[1600px] left-0 right-0 mx-auto mt-12 flex max-w-[1220px] justify-between px-8">
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

      <section className="bg-[#17191f] px-4 py-12 md:px-0 md:py-16">
        <div className="mx-auto flex w-full max-w-[1920px] justify-center">
          <div className="flex w-full max-w-[1280px] flex-col items-center gap-12">
            <h2 className="w-full text-center font-display text-3xl font-bold leading-[45px] text-white md:text-[36px]">
              Frequently Asked Questions
            </h2>

            <div className="flex w-full flex-col items-center gap-8">
              <div className="flex max-w-[1280px] flex-wrap items-start gap-2">
                {faqCategories.map((c) => (
                  <button
                    key={c.label}
                    type="button"
                    className={`flex h-[50px] items-center justify-center gap-2 rounded-2xl px-4 ${c.active
                        ? 'bg-black/20 text-[#ff5c00] shadow-[0_4px_14px_rgba(255,92,0,0.3)] border'
                        : 'border border-[#383852] bg-black/20 text-white shadow-[0_4px_16px_rgba(0,0,0,0.15)]'
                      }`}
                  >
                    <img
                      src={c.iconPath}
                      alt=""
                      className="h-5 w-5 object-contain"
                      loading="lazy"
                    />
                    <span className="font-body text-base font-medium">{c.label}</span>
                    <span className={`rounded-md px-1 py-[2px] text-xs font-medium ${c.active ? 'bg-[#ff5c00] text-white' : 'bg-[#383852] text-white'
                      }`}>
                      {c.count}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex w-full flex-col gap-4">
                {faqItems.map((item) =>
                  item.open ? (
                    <article
                      key={item.question}
                      className="rounded-2xl bg-gradient-to-br from-[rgba(56,56,82,0.5)] via-[rgba(43,45,77,0.5)] to-[rgba(13,15,21,0.5)] px-8 py-6"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-body text-xl font-medium text-white">{item.question}</h3>
                        <span className="text-white" aria-hidden>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M5 12l5-5 5 5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                  
                      </div>
                      <p className="mt-4 font-body text-base leading-6 text-white/90">{item.answer}</p>
                    </article>
                  ) : (
                    <button
                      key={item.question}
                      type="button"
                      className="flex min-h-[72px] w-full items-center justify-between gap-4 rounded-2xl bg-gradient-to-br from-[rgba(56,56,82,0.5)] via-[rgba(43,45,77,0.5)] to-[rgba(13,15,21,0.5)] px-8 py-6 text-left"
                    >
                      <span className="font-body text-xl font-semibold text-white">{item.question}</span>
                      <span className="text-white" aria-hidden>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M5 8l5 5 5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                
                    </button>
                  ),
                )}
              </div>

              <button type="button" className="flex items-center gap-2 font-body text-base font-bold uppercase tracking-[0.02em] text-white">
                show all questions
                <span aria-hidden>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#17191f] px-4 py-12 md:px-0 md:py-16">
        <div className="mx-auto flex w-full max-w-[1920px] justify-center">
          <div className="flex w-full max-w-[1280px] flex-col gap-8">
            <h2 className="w-full text-center font-display text-3xl font-bold leading-[45px] text-white md:text-[36px]">
              Blog Posts
            </h2>

            <div className="flex flex-col gap-8">
              <article className="flex flex-col gap-8 rounded-3xl p-8 md:h-[364px] md:flex-row">
                <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gradient-to-br from-[rgba(56,56,82,0.5)] via-[rgba(43,45,77,0.5)] to-[rgba(13,15,21,0.5)] p-6">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2 font-body text-xs text-white/80">
                      <span>Call of Duty</span>
                      <span className="text-[4px]">●</span>
                      <span>10.03.2026</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-display text-[30px] font-bold leading-[38px] text-white">Call of Duty Boosting</h3>
                      <p className="font-body text-sm leading-5 text-white">
                        Pellentesque posuere ullamcorper nulla sed accumsan. Morbi id justo pharetra, faucibus urna vitae, mollis orci. Aliquam a imperdiet odio. Ut venenatis auctor sem, vel auctor nunc mattis quis.
                      </p>
                    </div>
                  </div>
                  <button type="button" className="mt-5 inline-flex items-center gap-2 font-body text-base font-bold uppercase tracking-[0.02em] text-white md:mt-0">
                    read more
                    <span aria-hidden>→</span>
                  </button>
                </div>
                <img
                  src="/photo.png"
                  alt="Highlighted blog post"
                  className="h-[300px] flex-1 rounded-2xl object-cover"
                />
              </article>

              <div className="grid gap-8 md:grid-cols-3 min-w-[1280px]">
                {[
                  { title: 'Valorant Boosting', image: '/blog-post.png' },
                  { title: 'LoL Ranked Journey', image: '/blog-post.png', highlighted: true },
                  { title: 'EA FC Tips & Meta', image: '/blog-post.png' },
                ].map((post) => (
                  <article
                    key={post.title}
                    className="relative rounded-3xl p-8 "
                  >
                    <div className="flex h-full flex-col">
                      <div className="relative">
                        <img src={post.image} alt={post.title} className="h-[470px] min-w-[406px] rounded-2xl object-cover" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <button type="button" className="mx-auto inline-flex items-center gap-2 font-body text-base font-bold uppercase tracking-[0.02em] text-white">
              show all blog posts
              <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-black px-4 py-12 md:px-16 lg:px-28">
        <div className="mx-auto flex max-w-[1350px] flex-col gap-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <img src={img.logoFooter} alt="OGEdge" className="h-14 w-auto" width={180} height={58} />
            <div className="flex flex-wrap gap-12 lg:gap-16">
              <div>
                <h3 className="font-body text-base font-bold text-[#fa4609]">Social</h3>
                <div className="mt-4 flex gap-1">
                  {socialIcons.map((fileName) => (
                    <a
                      key={fileName}
                      href="#"
                      className="flex size-9 items-center justify-center overflow-hidden rounded-lg"
                    >
                      <img
                        src={`/social/${encodeURIComponent(fileName)}`}
                        alt=""
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-body text-base font-bold text-[#fa4609]">Payment Methods</h3>
                <div className="mt-4 flex flex-wrap gap-1">
                  {paymentCardIcons.map((fileName) => (
                    <div
                      key={fileName}
                      className="flex min-h-[25px] min-w-[40px] items-center justify-center overflow-hidden rounded border border-white/10 bg-white/5"
                    >
                      <img
                        src={`/card/${encodeURIComponent(fileName)}`}
                        alt=""
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
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
