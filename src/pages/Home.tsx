import { Link } from '../router';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import WorkDescription from '../components/WorkDescription';
import { colors, fonts, fontWeights } from '../styles/tokens';

const assetPathPrefix = '/assets';
const imgCulturalExchange = `${assetPathPrefix}/da1ab.png`;
const imgCoquitoLeft = `${assetPathPrefix}/d1788.png`;
const imgPhoneFrame = `${assetPathPrefix}/9e1d7.png`;
const imgCoquitoRight = `${assetPathPrefix}/448f9.png`;
const imgCloset1 = `${assetPathPrefix}/6c0bd.png`;
const imgCloset2 = `${assetPathPrefix}/43b90.png`;
const imgProfessor = `${assetPathPrefix}/4ded9.png`;

function PhoneCard({
  screenL,
  screenR,
}: {
  screenL: string;
  screenR: string;
}) {
  return (
    <div
      className="relative flex items-center justify-center overflow-hidden px-[8.36%] py-[6.22%] rounded-[10px] shadow-[0px_10px_9px_0px_rgba(0,0,0,0.25)] w-full"
      style={{ backgroundColor: colors.cardBg, aspectRatio: '550/402' }}
    >
      <div className="flex w-full">
        {/* left phone */}
        <div className="relative w-1/2" style={{ aspectRatio: '229/352.224' }}>
          <img src={imgPhoneFrame} alt="" className="absolute inset-0 size-full object-cover" />
          <div className="absolute overflow-hidden rounded-[10px]" style={{ width: '62.64%', height: '89.16%', left: '18.57%', top: '5.26%' }}>
            <img src={screenL} alt="" className="absolute max-w-none" style={{ height: '100.35%', left: '-0.07%', top: '-0.35%', width: '100.89%' }} />
          </div>
        </div>
        {/* right phone */}
        <div className="relative w-1/2" style={{ aspectRatio: '229/352.224' }}>
          <img src={imgPhoneFrame} alt="" className="absolute inset-0 size-full object-cover" />
          <div className="absolute overflow-hidden rounded-[10px]" style={{ width: '62.86%', height: '88.73%', left: '18.83%', top: '5.50%' }}>
            <img src={screenR} alt="" className="absolute max-w-none" style={{ height: '100.5%', left: '0', top: '-0.41%', width: '100.68%' }} />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#deded3]" style={{ width: '5.09%', height: '4.73%', left: '76.73%', top: '79.85%' }} />
    </div>
  );
}

function ClosetCard() {
  return (
    <div
      className="flex items-center justify-center overflow-hidden px-11 py-6 rounded-[10px] shadow-[0px_9px_10px_0px_rgba(0,0,0,0.25)] w-full"
      style={{ backgroundColor: colors.cardBg, aspectRatio: '549/400' }}
    >
      <div className="flex gap-2 origin-center transition-transform md:scale-[0.6] lg:scale-[0.75] xl:scale-[0.95]">
        {/* phone 1 */}
        <div className="inline-grid relative shrink-0" style={{ display: 'inline-grid', gridTemplateColumns: 'max-content', gridTemplateRows: 'max-content' }}>
          <img src={imgPhoneFrame} alt="" style={{ position: 'relative', width: 229, height: 352, objectFit: 'cover' }} />
          <div className="col-start-1 row-start-1 absolute rounded-[17px]" style={{ width: 147, height: 319, marginLeft: 40, marginTop: 19, overflow: 'hidden' }}>
            <img src={imgCloset1} alt="" className="absolute max-w-none" style={{ height: '101.27%', left: '-3.59%', top: '-0.84%', width: '104.93%' }} />
          </div>
        </div>
        {/* phone 2 */}
        <div className="inline-grid relative shrink-0" style={{ display: 'inline-grid', gridTemplateColumns: 'max-content', gridTemplateRows: 'max-content' }}>
          <img src={imgPhoneFrame} alt="" style={{ position: 'relative', width: 229, height: 352, objectFit: 'cover' }} />
          <div className="col-start-1 row-start-1 absolute rounded-[12px]" style={{ width: 145, height: 314, marginLeft: 41, marginTop: 19, overflow: 'hidden' }}>
            <img src={imgCloset2} alt="" className="absolute max-w-none" style={{ height: '101.12%', left: '-2.03%', top: '-0.86%', width: '102.06%' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    to: '/work/cultural-exchange',
    imgEl: (
      <div
        className="flex flex-col items-center justify-center overflow-hidden px-9 py-11 rounded-[10px] shadow-[0px_10px_9px_0px_rgba(0,0,0,0.25)] w-full"
        style={{ backgroundColor: colors.cardBg, aspectRatio: '549/400' }}
      >
        <div className="relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full max-w-[477px] overflow-hidden" style={{ aspectRatio: '477/311' }}>
          <img alt="Cultural Exchange Game" className="absolute inset-0 size-full object-cover rounded-[8px]" src={imgCulturalExchange} />
        </div>
      </div>
    ),
    title: 'Cultural Exchange Game - Case Study',
    description: 'Designed an international business learning game.',
    tags: ['Product Design', 'Frontend Dev', '2026'],
  },
  {
    to: '/work/coquito',
    imgEl: <PhoneCard screenL={imgCoquitoLeft} screenR={imgCoquitoRight} />,
    title: 'Coquito App - Showcase',
    description: 'Designed and developed a health app for people starting their exercise journey.',
    tags: ['Product Design', 'Frontend Dev', '2026'],
  },
  {
    to: '/work/closet-crush',
    imgEl: <ClosetCard />,
    title: 'Closet Crush App - Showcase',
    description: 'Design an app that will help people organize their closet.',
    tags: ['Product Design', '2026'],
  },
  {
    to: '/work/professor-onboarding',
    imgEl: (
      <div
        className="flex flex-col items-center justify-center overflow-hidden px-9 py-16 rounded-[10px] shadow-[0px_9px_10px_0px_rgba(0,0,0,0.25)] w-full"
        style={{ backgroundColor: colors.cardBg, aspectRatio: '549/400' }}
      >
        <div className="relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full max-w-[477px] overflow-hidden" style={{ aspectRatio: '477/272' }}>
          <img alt="Professor Onboarding" className="absolute inset-0 size-full object-cover rounded-[8px]" src={imgProfessor} />
        </div>
      </div>
    ),
    title: 'Professor onboarding - Case Study',
    description: 'Solution for professor onboarding process at GlobalHub portal.',
    tags: ['Product Design', '2026'],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full" style={{ backgroundColor: colors.pageBg }}>
      <Nav />
      <main className="flex flex-col gap-24 items-center px-6 md:px-16 xl:px-24 pt-12 pb-0 w-full max-w-[1440px] mx-auto">
        {/* Hero */}
        <div className="flex flex-col gap-7 items-start self-start w-full max-w-[782px]">
          <p
            className="text-[clamp(56px,9vw,128px)] leading-[0.97] w-full"
            style={{ fontFamily: fonts.mono, fontStyle: 'normal', fontWeight: fontWeights.regular, color: colors.heading }}
          >
            Stephanie Gil Vega
          </p>
          <p
            className="text-[clamp(18px,2vw,27px)]"
            style={{ fontFamily: fonts.mono, fontStyle: 'normal', fontWeight: fontWeights.regular, color: colors.black }}
          >
            Software Engineer &amp; Product Designer
          </p>
        </div>

        {/* Work grid */}
        <div id="work" className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
          {[projects[0], projects[3], projects[1], projects[2]].map(({ to, imgEl, title, description, tags }) => (
            <div key={title} className="flex flex-col gap-6 items-start group">
              {to ? (
                <Link to={to} className="w-full block hover:scale-[1.03] transition-transform duration-300 origin-center">
                  {imgEl}
                </Link>
              ) : (
                <div className="w-full hover:scale-[1.03] transition-transform duration-300 origin-center cursor-default">{imgEl}</div>
              )}
              <WorkDescription title={title} description={description} tags={tags} />
            </div>
          ))}
        </div>
      </main>
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}
