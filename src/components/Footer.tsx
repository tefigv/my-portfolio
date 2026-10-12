import { Link } from '../router';
import { colors, fonts, fontWeights } from '../styles/tokens';

export default function Footer() {
  return (
    <footer
      className="border-t flex flex-wrap gap-16 lg:gap-0 items-start justify-between px-10 md:px-28 xl:px-40 py-16 w-full"
      style={{ backgroundColor: colors.pageBg, borderColor: colors.border }}
    >
      {/* Connect column */}
      <div className="flex flex-col gap-6 items-start">
        <div className="flex flex-col gap-2 items-start">
          <p
            className="text-2xl"
            style={{ fontFamily: fonts.body, fontWeight: fontWeights.regular, color: colors.headingDark }}
          >
            Happy you made it here.
          </p>
          <p
            className="text-base"
            style={{ fontFamily: fonts.body, fontWeight: fontWeights.regular, color: colors.muted }}
          >
            Let's connect!
          </p>
        </div>
        <div
          className="flex flex-col gap-1.5 items-start text-base"
          style={{ fontFamily: fonts.mono, fontStyle: 'normal', fontWeight: fontWeights.regular, color: '#000' }}
        >
          <a
            href="https://www.linkedin.com/in/stephgv/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity"
          >
            LINKEDIN
          </a>
          <a
            href="https://github.com/tefigv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity"
          >
            GITHUB
          </a>
          <a href="mailto:stephgv2001@gmail.com" className="hover:opacity-60 transition-opacity">
            EMAIL
          </a>
        </div>
      </div>

      {/* Navigation column */}
      <div className="flex flex-col gap-3 items-start">
        <p
          className="text-2xl"
          style={{ fontFamily: fonts.body, fontWeight: fontWeights.regular, color: colors.headingDark }}
        >
          Navigation
        </p>
        <div
          className="flex flex-col gap-1.5 items-start text-base"
          style={{ fontFamily: fonts.mono, fontStyle: 'normal', fontWeight: fontWeights.regular, color: '#000' }}
        >
          <Link to="/" className="hover:opacity-60 transition-opacity">WORK</Link>
          <Link to="/about" className="hover:opacity-60 transition-opacity">ABOUT ME</Link>
          <Link to="/resume" className="hover:opacity-60 transition-opacity">RESUME</Link>
        </div>
      </div>

      {/* Signature column */}
      <div className="flex flex-col items-start" style={{ color: '#000' }}>
        <p
          className="text-xs"
          style={{ fontFamily: fonts.mono, fontStyle: 'normal', fontWeight: fontWeights.regular }}
        >
          Made with &lt;3,
        </p>
        <p
          className="text-sm"
          style={{ fontFamily: fonts.hand, fontStyle: 'normal', fontWeight: fontWeights.regular }}
        >
          Stephanie Gil Vega
        </p>
        <p
          className="text-xs"
          style={{ fontFamily: fonts.mono, fontStyle: 'normal', fontWeight: fontWeights.regular }}
        >
          2026
        </p>
      </div>
    </footer>
  );
}
