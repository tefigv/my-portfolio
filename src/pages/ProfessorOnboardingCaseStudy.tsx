import { useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import SectionTitle from '../components/SectionTitle';
import Tag from '../components/Tag';
import { colors, fonts, fontWeights } from '../styles/tokens';

const assetPathPrefix = '/assets';
const imgTeamSketch = `${assetPathPrefix}/professor-team-sketch.png`;
const imgRoughPrototypeModal = `${assetPathPrefix}/professor-rough-prototype-modal.png`;
const imgRoughPrototypeLabs = `${assetPathPrefix}/professor-rough-prototype-labs.png`;
const imgFinalPrototypeModal = `${assetPathPrefix}/professor-final-prototype-modal.png`;
const imgFinalPrototypeDashboard = `${assetPathPrefix}/professor-final-prototype-dashboard.png`;
const imgStudentSummaryAfter = `${assetPathPrefix}/professor-student-summary-after.png`;
const videoProfessorOnboarding = `${assetPathPrefix}/professor-onboarding.mp4`;

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

function Caption({ children, italic = false }: { children: React.ReactNode; italic?: boolean }) {
  return (
    <p
      className="text-base md:text-2xl"
      style={{
        color: colors.body,
        fontFamily: italic ? fonts.boldItalic : fonts.semibold,
        fontStyle: italic ? 'italic' : 'normal',
        fontWeight: italic ? fontWeights.bold : fontWeights.semibold,
      }}
    >
      {children}
    </p>
  );
}

function BeforeStudentTable() {
  return (
    <div
      className="flex h-full min-h-[280px] overflow-hidden rounded-[15px] bg-white text-[7px] sm:text-[10px] lg:text-xs"
      style={{ color: colors.dark, fontFamily: fonts.body }}
    >
      <div className="w-[17%] shrink-0 bg-[#1760cc] p-[3%] text-white">
        <p className="mb-[7%] font-semibold opacity-60">MY CLASSES</p>
        <div className="rounded-[6px] bg-white/20 p-[8%]">
          <p className="font-bold">Mcom 320</p>
          <p className="opacity-80">Section 1 · Spring 2026</p>
        </div>
        <div className="p-[8%]">
          <p className="font-bold">IB 100</p>
          <p className="opacity-80">Section 1 · Spring 2026</p>
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between border-b p-[4%]">
          <div>
            <p className="text-[2.2em] font-bold leading-none text-black">Mcom 320 - Section 1</p>
            <p className="mt-[4%] text-[1.1em]">Spring 2026</p>
          </div>
          <div className="rounded-[5px] border border-[#1760cc] px-[3%] py-[1.5%] text-[#1760cc]">
            Share Class Link
          </div>
        </div>
        <div className="flex gap-[4%] border-b px-[4%] py-[2.5%]">
          {['Dashboard', 'Students', 'Grades Summary', 'Student View', 'Tutorials', 'Class Settings'].map((item) => (
            <p key={item} className={item === 'Students' ? 'border-b border-black font-bold' : ''}>
              {item}
            </p>
          ))}
        </div>
        <div className="p-[4%]">
          <div className="mb-[3%] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <p className="font-bold">Student List</p>
              <p className="rounded-full bg-[#1760cc] px-3 py-1 font-bold text-white">Edit List</p>
            </div>
            <p>Search Student:　▢</p>
          </div>
          <div className="grid grid-cols-[1fr_1.35fr_2.3fr_0.5fr] gap-2 border-b py-[2%] font-bold">
            <p>Name</p>
            <p>Student ID</p>
            <p>Email</p>
            <p>Status</p>
          </div>
          {[
            ['Doe, Jane', '12345', 'Jane.Doe@byu.edu'],
            ['Doe, John', '67890', 'JohnDoe@byu.edu'],
          ].map(([name, id, email]) => (
            <div key={id} className="grid grid-cols-[1fr_1.35fr_2.3fr_0.5fr] gap-2 border-b py-[2%]">
              <p>{name}</p>
              <p>{id}</p>
              <p>{email}</p>
              <p />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProfessorOnboardingCaseStudy() {
  const prototypeVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = prototypeVideoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col" style={{ backgroundColor: colors.pageBg }}>
      <Nav />
      <main className="mx-auto flex w-full max-w-[1510px] flex-col items-center gap-[55px] px-6 pt-[55px] md:px-16 xl:px-24">
        <div className="flex w-full max-w-[1143px] flex-col items-start gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Tag label="Product Design" />
            <Tag label="Project Management" />
            <Tag label="Frontend Dev" />
            <Tag label="2026" />
          </div>
          <p
            className="text-[clamp(28px,3vw,36px)]"
            style={{
              color: colors.subheading,
              fontFamily: fonts.semibold,
              fontWeight: fontWeights.semibold,
            }}
          >
            Professors should be able to set up a class without calling us
          </p>
        </div>

        <div
          className="grid w-full max-w-[1143px] grid-cols-1 gap-8 border-y px-0 py-[26px] sm:grid-cols-3 md:px-[31px] md:gap-12 xl:gap-[207px]"
          style={{ borderColor: colors.border }}
        >
          <ProjectDetail label="TEAM SIZE">
            <p>1 Team Lead</p>
            <p>2 Interns</p>
          </ProjectDetail>
          <ProjectDetail label="TIMELINE">
            <p>JAN - MAY 2026</p>
          </ProjectDetail>
          <ProjectDetail label="ROLE">
            <p>Project Manager and Lead Designer</p>
          </ProjectDetail>
        </div>

        <section className="flex w-full max-w-[1053px] flex-col gap-[55px]">
          <SectionTitle overline="The problem" title="19 out of 34 emails were about setup issues" />
          <div className="flex max-w-[800px] flex-col gap-[15px]" style={bodyText}>
            <p>Every new professor needed a demo call to learn how to create a class code.</p>
            <p style={{ fontFamily: fonts.boldItalic, fontStyle: 'italic', textAlign: 'center' }}>
              “I am writing to see if someone from Team iLabz could help me learn how to use the mini-simulations.”
              <br />
              Professor, by email, November 12, 2025
            </p>
            <p>
              After that, students still wrote to support because they could not create an account or reach their lab. I
              reviewed our support emails from June to December 2025. More than half were about access or account setup.
            </p>
          </div>
        </section>

        <section className="flex w-full max-w-[1053px] flex-col gap-[55px]">
          <SectionTitle overline="The process" title="From paper sketches to a prototype we could test" />
          <p className="max-w-[800px]" style={bodyText}>
            I led two interns through the design process. We interviewed three professors, built personas, and wrote our
            question:
          </p>
          <div
            className="flex w-full items-center justify-center rounded-[15px] px-6 py-7 md:px-14"
            style={{ backgroundColor: colors.cardBg }}
          >
            <p
              className="max-w-[937px] text-center text-[clamp(25px,3vw,40px)]"
              style={{ color: colors.black, fontFamily: fonts.body, fontWeight: fontWeights.regular }}
            >
              How might we help professors get <span style={{ color: colors.red }}>set up</span> and feel{' '}
              <span style={{ color: colors.red }}>confident</span> on their own, without needing a demo call?
            </p>
          </div>
          <p className="max-w-[800px]" style={bodyText}>
            We sketched the flows on paper and made lo-fi mocks in Figma. Then we gave those mocks and the iLabz design
            system to Figma Make to build a working prototype we could test. We aligned the look to the new iLabz
            marketing website so the product and the site read as one brand. The interns tested creating a class, adding
            a student, and adding or removing a lab. I tested and finished grading, the Students tab, and sending the
            class link.
          </p>
        </section>

        <section className="grid w-full grid-cols-1 items-center gap-[55px] xl:grid-cols-[1.64fr_1fr]">
          <div className="flex flex-col gap-[10px]">
            <div className="overflow-hidden rounded-[15px] shadow-sm" style={{ aspectRatio: '853/666' }}>
              <img alt="Team final paper sketch" className="size-full object-cover" src={imgTeamSketch} />
            </div>
            <Caption>Team final sketch</Caption>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="overflow-hidden rounded-[15px]" style={{ aspectRatio: '520/339' }}>
              <img alt="Rough prototype lab selection modal" className="size-full object-cover" src={imgRoughPrototypeModal} />
            </div>
            <div className="overflow-hidden rounded-[15px]" style={{ aspectRatio: '520/339' }}>
              <img alt="Rough prototype labs screen" className="size-full object-cover" src={imgRoughPrototypeLabs} />
            </div>
            <Caption>Figma rough prototype</Caption>
          </div>
        </section>

        <section className="flex w-full flex-col items-center gap-[10px]">
          <div className="grid w-full grid-cols-1 items-center gap-[55px] md:grid-cols-[0.75fr_1fr]">
            <div className="overflow-hidden rounded-[15px]" style={{ aspectRatio: '605/434' }}>
              <img
                alt="Final prototype lab selection modal"
                className="size-full object-cover"
                src={imgFinalPrototypeModal}
              />
            </div>
            <div className="overflow-hidden rounded-[15px]" style={{ aspectRatio: '810/525' }}>
              <img
                alt="Final prototype class dashboard"
                className="size-full object-cover"
                src={imgFinalPrototypeDashboard}
              />
            </div>
          </div>
          <Caption>Final Figma Make prototype with new design system applied</Caption>
        </section>

        <section
          className="flex w-full max-w-[1262px] flex-col gap-[30px] rounded-[15px] p-4 md:p-[29px]"
          style={{ backgroundColor: colors.quoteBg }}
        >
          <video
            className="w-full rounded-[15px] object-cover"
            controls
            loop
            muted
            playsInline
            preload="metadata"
            ref={prototypeVideoRef}
            style={{ aspectRatio: '1204/847' }}
          >
            <source src={videoProfessorOnboarding} type="video/mp4" />
            Your browser does not support the video element.
          </video>
          <div className="text-center">
            <Caption italic>Working prototype: a professor creating a class.</Caption>
          </div>
        </section>

        <section className="flex w-full max-w-[1053px] flex-col gap-[55px]">
          <SectionTitle overline="What testing changed" title="Two tabs for one question" />
          <div className="flex max-w-[800px] flex-col gap-[15px]" style={bodyText}>
            <p>
              We first designed a Grades page and a separate Students tab. We assumed professors think of the roster and
              the grades as different tasks.
            </p>
            <p>
              We tested the prototype with three professors. One asked what the Students tab was for, because he saw the
              same names on both tabs. I asked him what he thought it could be for. He did not have an answer. Another did
              not comment on the tabs. The third professor suggested merging the two tabs into one.
            </p>
            <p style={{ fontFamily: fonts.boldItalic, fontStyle: 'italic', textAlign: 'center' }}>
              “For the labs, I only need students’ names, emails, and grades. I don’t need their IDs.”
            </p>
            <p>
              The Students tab did not have its own purpose. It repeated the names and only added student IDs. We merged
              both into one table. Each row is a student and each lab is a column. We left the student ID column out. We
              walked the CEO and CMO through the change before we kept it.
            </p>
          </div>
        </section>

        <section className="grid w-full grid-cols-1 items-start gap-5 md:grid-cols-[1.18fr_1fr]">
          <div className="flex flex-col gap-5">
            <div className="overflow-hidden rounded-[15px]" style={{ aspectRatio: '839/472' }}>
              <video
                aria-label="Student list before the grades and student information were merged"
                autoPlay
                className="size-full object-cover"
                loop
                muted
                playsInline
                preload="auto"
                src="/assets/professor-before-loop.mp4"
              />
            </div>
            <Caption italic>Before</Caption>
          </div>
          <div className="flex flex-col gap-5">
            <div className="overflow-hidden rounded-[15px]" style={{ aspectRatio: '711/472' }}>
              <img
                alt="Student summary after merging grades and student information"
                className="size-full object-cover"
                src={imgStudentSummaryAfter}
              />
            </div>
            <Caption italic>After</Caption>
          </div>
        </section>

        <section className="flex w-full max-w-[1053px] flex-col gap-5">
          <p
            className="w-full text-xl uppercase"
            style={{
              color: colors.dark,
              fontFamily: fonts.mono,
              fontStyle: 'normal',
              fontWeight: fontWeights.regular,
            }}
          >
            What is next
          </p>
          <p className="max-w-[800px]" style={bodyText}>
            I wrote the implementation spec for the first release and I am building it in Vue with one developer. I will
            add results here once professors use the new flow.
          </p>
        </section>
      </main>
      <div className="mt-[55px]">
        <Footer />
      </div>
    </div>
  );
}
