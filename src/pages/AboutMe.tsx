import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { colors, fonts, fontWeights } from '../styles/tokens';

const assetPathPrefix = '/assets';
const imgPhoto = `${assetPathPrefix}/c8079.png`;

export default function AboutMe() {
  return (
    <div className="flex flex-col min-h-screen w-full" style={{ backgroundColor: colors.pageBg }}>
      <Nav />
      <main className="flex flex-col gap-24 items-center px-6 md:px-16 xl:px-24 pt-12 pb-0 w-full max-w-[1200px] mx-auto">
        {/* Page title */}
        <div className="flex flex-col items-start w-full" style={{ fontFamily: fonts.mono, fontStyle: 'normal' }}>
          <p
            className="text-xl uppercase w-full"
            style={{ fontWeight: fontWeights.regular, color: colors.dark }}
          >
            About Me
          </p>
          <p
            className="text-[clamp(24px,3vw,40px)] tracking-[-4px] w-full"
            style={{ fontWeight: fontWeights.regular, color: colors.subheading }}
          >
            How I came to enjoy software engineering and product design
          </p>
        </div>

        {/* Body text */}
        <div
          className="flex flex-col gap-4 items-start w-full max-w-[800px]"
          style={{ fontFamily: fonts.semibold, fontWeight: fontWeights.semibold, color: colors.body, fontSize: 24 }}
        >
          <p>I design interfaces, and I build them.</p>
          <p>
            I started my computer science major because I liked the front end side of software engineering, how you make a
            change and see it immediately in the interface. In my first classes I started noticing the difference between
            websites that were beautifully designed and easy to use, and the ones that just weren't. I paid attention to
            the good ones and started asking why they worked. Then I took a human computer interaction class. I loved it,
            took every HCI class the CS department offered after that, declared a design thinking minor, and started
            working on the Cultural Exchange project.
          </p>
          <p>
            I'm finishing a degree in Computer Science with an emphasis in Software Engineering at BYU, graduating in
            December 2026. Right now I work as CTO, developer, and UX designer at GlobalHub, where I design and build
            interactive learning tools, and as a Human-Computer Interaction Research Assistant.
          </p>
        </div>

        {/* Photo */}
        <div className="relative rounded-[15px] overflow-hidden shrink-0" style={{ width: 406, maxWidth: '100%', aspectRatio: '406/547' }}>
          <img alt="Stephanie Gil Vega" className="absolute inset-0 size-full object-cover rounded-[15px]" src={imgPhoto} />
        </div>
      </main>
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}
