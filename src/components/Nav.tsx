import { Link, useNavigate } from '../router';
import { colors, fonts, fontWeights } from '../styles/tokens';

const assetPathPrefix = '/assets';
const imgLinkedIn = `${assetPathPrefix}/48435.png`;
const imgGitHub = `${assetPathPrefix}/3bab9.png`;

export default function Nav() {
  const navigate = useNavigate();

  return (
    <nav
      className="border-b sticky top-0 z-50 flex items-center justify-between px-9 py-1.5 w-full"
      style={{ backgroundColor: colors.pageBg, borderColor: colors.border }}
    >
      <div className="flex gap-14 items-center" style={{ color: colors.heading }}>
        <Link
          to="/"
          style={{ fontFamily: fonts.display, fontWeight: fontWeights.bold, fontSize: 33, fontStyle: 'normal' }}
          className="hover:opacity-70 transition-opacity"
        >
          S
        </Link>
        <div
          className="flex gap-11 items-center"
          style={{ fontFamily: fonts.semibold, fontWeight: fontWeights.semibold, fontSize: 14 }}
        >
          <Link to="/" className="hover:opacity-70 transition-opacity">WORK</Link>
          <Link to="/about" className="hover:opacity-70 transition-opacity">ABOUT ME</Link>
          <Link to="/resume" className="hover:opacity-70 transition-opacity">RESUME</Link>
        </div>
      </div>

      <div className="flex gap-3.5 items-center">
        <a
          href="https://www.linkedin.com/in/stephgv/"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative size-6 shrink-0 hover:opacity-70 transition-opacity"
        >
          <img alt="LinkedIn" className="absolute inset-0 h-6 w-full object-contain pointer-events-none" src={imgLinkedIn} />
        </a>
        <a
          href="https://github.com/tefigv"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative size-6 shrink-0 hover:opacity-70 transition-opacity"
        >
          <img alt="GitHub" className="absolute inset-0 size-full object-cover pointer-events-none" src={imgGitHub} />
        </a>
      </div>
    </nav>
  );
}
