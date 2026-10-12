import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Tag from '../components/Tag';
import { colors, fonts, fontWeights } from '../styles/tokens';

const assetPathPrefix = '/assets';
const imgPhoneFrame = `${assetPathPrefix}/9e1d7.png`;
const imgClosetScreen = `${assetPathPrefix}/6c0bd.png`;

const bodyText: React.CSSProperties = {
  color: colors.body,
  fontFamily: fonts.semibold,
  fontSize: 24,
  fontWeight: fontWeights.semibold,
};

function ProjectDetail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-start">
      <p
        className="text-xl"
        style={{
          color: colors.dark,
          fontFamily: fonts.mono,
          fontStyle: 'normal',
          fontWeight: fontWeights.regular,
        }}
      >
        {label}
      </p>
      <div
        className="text-base"
        style={{
          color: colors.dark,
          fontFamily: fonts.body,
          fontWeight: fontWeights.regular,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function ClosetPhone() {
  return (
    <div className="relative w-[52%] max-w-[403px] md:w-[45%]" style={{ aspectRatio: '229/352.224' }}>
      <img alt="" className="absolute inset-0 size-full object-cover" src={imgPhoneFrame} />
      <div
        className="absolute overflow-hidden rounded-[4.3%]"
        style={{ height: '90.57%', left: '17.47%', top: '5.39%', width: '64.19%' }}
      >
        <img
          alt="Closet Crush outfit planning screen"
          className="absolute max-w-none"
          src={imgClosetScreen}
          style={{ height: '101.27%', left: '-3.59%', top: '-0.84%', width: '104.93%' }}
        />
      </div>
    </div>
  );
}

export default function ClosetCrushCaseStudy() {
  return (
    <div className="flex min-h-screen w-full flex-col" style={{ backgroundColor: colors.pageBg }}>
      <Nav />
      <main className="mx-auto flex w-full max-w-[1335px] flex-col items-center gap-[55px] px-6 pt-[55px] md:px-16 xl:px-24">
        <div className="flex w-full max-w-[1143px] flex-col items-start gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Tag label="Product Design" />
            <Tag label="2026" />
          </div>
          <h1
            className="text-[clamp(28px,3vw,36px)]"
            style={{
              color: colors.subheading,
              fontFamily: fonts.semibold,
              fontWeight: fontWeights.semibold,
            }}
          >
            Testing an assumption in three classes
          </h1>
        </div>

        <div
          className="grid w-full max-w-[1143px] grid-cols-1 gap-8 border-y px-0 py-[26px] sm:grid-cols-3 md:px-[31px] md:gap-12 xl:gap-[207px]"
          style={{ borderColor: colors.border }}
        >
          <ProjectDetail label="TEAM SIZE">
            <p>1 Computer Science Major</p>
            <p>2 Business Majors</p>
          </ProjectDetail>
          <ProjectDetail label="TIMELINE">
            <p>3 two hour classes</p>
          </ProjectDetail>
          <ProjectDetail label="ROLE">
            <p>Designer</p>
          </ProjectDetail>
        </div>

        <div
          className="flex w-full max-w-[900px] items-center justify-center overflow-hidden rounded-[15px]"
          style={{ aspectRatio: '900/886', backgroundColor: colors.quoteBg }}
        >
          <ClosetPhone />
        </div>

        <div className="flex w-full max-w-[1053px] flex-col gap-[15px] py-[15px]" style={bodyText}>
          <p>
            Built in a 3-class entrepreneurship bootcamp. We started as a team of four, then one teammate had to withdraw
            from the class, so Audrey, Jonathan, and I finished it as a team of three, smaller than most teams in the
            bootcamp. We had to bring a business idea and run it through the design thinking process, validate, test,
            prototype, in that short window.
          </p>
          <p>
            Audrey pitched an app to help people build outfits, based on the decision fatigue she and her friends felt
            every morning. We added closet upload, outfit planning, and a sustainability angle, tracking what you wear and
            pointing you to donation centers.
          </p>
          <div>
            <p>
              We surveyed 123 people to test it. The data did not confirm what we assumed. Decision fatigue was real for
              some people, 41.5% said they struggled &quot;often&quot; or &quot;all the time,&quot; but 70% spent under 5
              minutes choosing an outfit. The donation feature, which we thought was a differentiator, was picked by only
              5.7% of respondents, last out of 7.
            </p>
            <p>
              What the data confirmed instead was something we did not expect to be the strongest signal: 88.4% forget
              clothes they own because they are out of sight, and 91.4% currently use no system at all to decide what to
              wear. That is the real gap, and 66.7% said they would download an app that solved it.
            </p>
          </div>
          <p>I now separate what a survey actually tested from what I want it to have tested.</p>
          <p>
            My professor liked the prototype enough to ask to use it as an example in future classes. Most student
            prototypes in that bootcamp did not go much past a sketch. In three classes, with one person down, we shipped
            something she thought was worth showing to others.
          </p>
        </div>
      </main>
      <div className="mt-[55px]">
        <Footer />
      </div>
    </div>
  );
}
