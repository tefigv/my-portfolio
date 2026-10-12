import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Tag from "../components/Tag"
import SectionTitle from "../components/SectionTitle"
import { colors, fonts, fontWeights } from "../styles/tokens"

const assetPathPrefix = "/assets"
const imgPhoneFrame = `${assetPathPrefix}/9e1d7.png`
const videoCoquitoDemo = `${assetPathPrefix}/coquito-demo.mp4`
const imgCoquitoPlanning = `${assetPathPrefix}/aed24.png`

const bodyText: React.CSSProperties = {
  fontFamily: fonts.semibold,
  fontWeight: fontWeights.semibold,
  color: colors.body,
  fontSize: 24,
}

const codeBlock: React.CSSProperties = {
  fontFamily: fonts.mono,
  fontStyle: "normal",
  fontWeight: fontWeights.regular,
  color: colors.body,
  fontSize: 18,
  whiteSpace: "pre-wrap",
}

export default function CoquitoCaseStudy() {
  return (
    <div
      className="flex flex-col min-h-screen w-full"
      style={{ backgroundColor: colors.pageBg }}
    >
      <Nav />
      <main className="flex flex-col gap-14 items-center px-6 md:px-16 xl:px-24 pt-12 pb-0 w-full max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-3 items-start w-full">
          <div className="flex flex-wrap gap-2">
            <Tag label="Product Design" />
            <Tag label="Frontend Dev" />
            <Tag label="2026" />
          </div>
          <p
            style={{
              fontFamily: fonts.semibold,
              fontWeight: fontWeights.semibold,
              color: colors.subheading,
              fontSize: 36,
            }}
          >
            Taking Coquito's design system into working code
          </p>
          <p
            style={{
              fontFamily: fonts.body,
              fontWeight: fontWeights.regular,
              color: colors.muted,
              fontSize: 20,
            }}
          >
            Designed onboarding process, consolidated design system, and
            implemented it
          </p>
        </div>

        {/* Stats bar */}
        <div
          className="border-t border-b flex flex-wrap gap-8 md:gap-0 items-center justify-between px-8 py-6 w-full"
          style={{ borderColor: colors.border }}
        >
          {[
            { label: "TEAM SIZE", value: "3 CS Major Students" },
            { label: "TIMELINE", value: "3 Months" },
            { label: "ROLE", value: "Frontend Designer & Engineer" },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col items-start">
              <p
                style={{
                  fontFamily: fonts.mono,
                  fontStyle: "normal",
                  fontWeight: fontWeights.regular,
                  color: colors.dark,
                  fontSize: 20,
                }}
              >
                {label}
              </p>
              <p
                style={{
                  fontFamily: fonts.body,
                  fontWeight: fontWeights.regular,
                  color: colors.dark,
                  fontSize: 16,
                }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* Hero image — phone with app */}
        <div
          className="flex flex-col items-center justify-center overflow-hidden rounded-[15px] w-full max-w-[900px]"
          style={{ backgroundColor: colors.quoteBg, aspectRatio: "900/886" }}
        >
          <div className="relative" style={{ width: 370, height: 806 }}>
            {/* Video clipped to the phone's screen area */}
            <div
              className="absolute overflow-hidden"
              style={{ left: 68, top: 145, width: 231, height: 510 }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="size-full object-cover object-center"
                src={videoCoquitoDemo}
              />
            </div>
            {/* Phone frame overlay */}
            <img
              src={imgPhoneFrame}
              alt="Coquito app"
              className="absolute inset-0 size-full object-contain"
              style={{ zIndex: 1 }}
            />
          </div>
        </div>

        {/* The project */}
        <div className="flex flex-col gap-14 items-start w-full">
          <SectionTitle overline="The project" title="The coquito app" />
          <div className="flex flex-wrap gap-8 items-center w-full">
            <p style={{ ...bodyText, maxWidth: 700 }}>
              Coquito is a flutter fitness app that guides starters with their
              wellness goals. This project was part of a computer science HCI
              class, CS 456. I worked in designing and implementing the frontend
              UI and the onboarding process. Among the tools we used for this
              project were Figma, Gemini API, Flutter, and SQLight.
            </p>
            <div
              className="-scale-y-100 rotate-180 flex-none"
              style={{ width: 248, height: 222 }}
            >
              <img
                src={imgCoquitoPlanning}
                alt=""
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Finding our vision statement */}
        <div className="flex flex-col gap-14 items-start w-full">
          <SectionTitle
            overline="Finding our vision statement"
            title="Our why"
          />
          <div
            className="flex flex-col gap-4 items-start max-w-[800px]"
            style={bodyText}
          >
            <p>
              Many people want to start being active but often don't know how to
              stay consistent, especially without accountability. This is where
              Coquito, your accountability buddy, comes in.
            </p>
            <p>
              This class was taught by the retired CTO and cofounder of the
              dating app Mutual, Bob Carroll. This made the class include a
              business focussed perspective. I liked that he highlighted the
              importance of having a clear vision statement stated before start
              building. Amazon runs on a version of this too: teams write a
              press release and FAQ document before writing code, specifically
              to force clarity on customer value first.
            </p>
            <p>We wrote ours before touching Flutter:</p>
          </div>

          {/* Quote */}
          <div
            className="flex items-center justify-center rounded-[15px] px-8 py-12 w-full"
            style={{ backgroundColor: colors.cardBg }}
          >
            <p
              className="text-center max-w-[820px]"
              style={{
                fontFamily: fonts.body,
                fontWeight: fontWeights.regular,
                fontSize: 40,
                color: "#000",
              }}
            >
              "To give those starting their health journey the opportunity to
              build active habits in a{" "}
              <span style={{ color: colors.red }}>healthy, guilt-free way</span>
              "
            </p>
          </div>

          <p style={{ ...bodyText, maxWidth: 800 }}>
            Everything downstream, the onboarding flow, the color system, the
            coach messaging, got checked against that line.
          </p>
        </div>

        {/* Project highlights */}
        <div className="flex flex-col gap-14 items-start w-full">
          <SectionTitle
            overline="Frontend development focused"
            title="Project highlights"
          />
          <div
            className="flex flex-col gap-4 items-start max-w-[800px]"
            style={bodyText}
          >
            <p>
              Colors were hardcoded per screen. Every button, card, and icon
              picked its own shade by hand, and contrast was checked visually,
              screen by screen.
            </p>
            <p>
              I replaced that with a semantic token system
              (AppColors.primary/secondary/tertiary/background) and a small
              contrast utility that reads a background's luminance and
              automatically picks black or off-white text on top of it. One
              rule, applied everywhere, instead of a judgment call on every
              screen.
            </p>
            <div
              className="rounded-lg px-5 py-4 w-full"
              style={{ backgroundColor: colors.cardBg }}
            >
              <pre
                style={codeBlock}
              >{`static Color _onColorFor(Color background) {
  final luminance = background.computeLuminance();
  return luminance > 0.5 ? Colors.black : Color.fromARGB(255, 235, 235, 235);
}`}</pre>
            </div>
          </div>
        </div>

        {/* Worth mentioning */}
        <div className="flex flex-col gap-14 items-start w-full">
          <p
            className="uppercase"
            style={{
              fontFamily: fonts.mono,
              fontStyle: "normal",
              fontWeight: fontWeights.regular,
              color: colors.dark,
              fontSize: 20,
            }}
          >
            Worth mentioning...
          </p>
          <div
            className="flex flex-col gap-4 items-start max-w-[800px]"
            style={bodyText}
          >
            <p>Two smaller decisions from the same pass:</p>
            <p>
              <span
                style={{ fontFamily: fonts.bold, fontWeight: fontWeights.bold }}
              >
                Shared navigation.
              </span>{" "}
              The bottom nav has a protruding center button, easy to get
              inconsistent if every screen built its own version. I pulled it
              into one BottomMenuBar component (plus a matching TopNavBar), so
              it looks and behaves the same everywhere.
            </p>
            <p>
              <span
                style={{ fontFamily: fonts.bold, fontWeight: fontWeights.bold }}
              >
                Responsive layout fix.{" "}
              </span>
              The coach-message bubbles (avatar plus speech bubble) were
              overflowing on narrow screens. I used LayoutBuilder to switch the
              layout from side-by-side to stacked below a width threshold. Same
              component, two layouts, no visual break.
            </p>
            <div
              className="rounded-lg px-5 py-4 w-full"
              style={{ backgroundColor: colors.cardBg }}
            >
              <pre
                style={codeBlock}
              >{`final isNarrow = constraints.maxWidth < 420;
if (isNarrow) {
  // stack vertically, tail points up/down
} else {
  // side-by-side, tail points left/right
}`}</pre>
            </div>
          </div>
        </div>

        {/* Reflections */}
        <div className="flex flex-col gap-14 items-start w-full">
          <SectionTitle
            overline="Reflections"
            title="The importance of having the vision present"
          />
          <p style={{ ...bodyText, maxWidth: 800 }}>
            This class helped me understand user first design, referencing the
            vision constantly is paramount to keep the user present in the
            design and building process. After this class I have pushed my team
            at work to make project vision statements.
          </p>
        </div>
      </main>
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  )
}
