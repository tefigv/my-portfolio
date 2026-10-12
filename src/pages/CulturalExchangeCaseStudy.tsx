import { useState } from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Tag from "../components/Tag"
import SectionTitle from "../components/SectionTitle"
import { colors, fonts, fontWeights } from "../styles/tokens"

const assetPathPrefix = "/assets"

// Game background avatars
const avatarSrcs = {
  blue1: `${assetPathPrefix}/8091b.png`,
  blue2: `${assetPathPrefix}/97ac0.png`,
  blue3: `${assetPathPrefix}/feefb.png`,
  blue4: `${assetPathPrefix}/24fc8.png`,
  blue5: `${assetPathPrefix}/0ceb6.png`,
  blue6: `${assetPathPrefix}/55008.png`,
  green1: `${assetPathPrefix}/d3472.png`,
  green2: `${assetPathPrefix}/c6c26.png`,
  green3: `${assetPathPrefix}/d508b.png`,
  green4: `${assetPathPrefix}/08892.png`,
  green5: `${assetPathPrefix}/42935.png`,
  green6: `${assetPathPrefix}/beeab.png`,
}

// Process images
const imgCultureStudy1 = `${assetPathPrefix}/bf040.png`
const imgCultureStudy2 = `${assetPathPrefix}/d2c21.png`
const imgCultureStudy3 = `${assetPathPrefix}/d90a3.png`
const imgCultureStudy4 = `${assetPathPrefix}/df16b.png`
const imgIdeation1 = `${assetPathPrefix}/c00e3.png`
const imgIdeation2 = `${assetPathPrefix}/45323.png`
const imgIdeation3 = `${assetPathPrefix}/03a4c.png`
const imgIdeation4 = `${assetPathPrefix}/bf0cd.png`
const imgGameMidfi = `${assetPathPrefix}/3e093.png`
const imgFirstIteration = `${assetPathPrefix}/91d23.png`
const imgFinalIteration = `${assetPathPrefix}/77a11.png`
// UI Implementation images
const imgPersuasion1 = `${assetPathPrefix}/e7d77.png`
const imgPersuasion2 = `${assetPathPrefix}/c2411.png`
const imgDisagree1 = `${assetPathPrefix}/9bf86.png`
const imgDisagree2 = `${assetPathPrefix}/a5f1e.png`
const imgDisagree3 = `${assetPathPrefix}/397cb.png`
const imgDisagree4 = `${assetPathPrefix}/60b47.png`
const imgDeciding = `${assetPathPrefix}/797b4.png`
const imgEvalLeft = `${assetPathPrefix}/ef896.png`
const imgEvalRight = `${assetPathPrefix}/6abcf.png`
const imgArrow = `${assetPathPrefix}/8ff6d.svg`
const imgArrow2 = `${assetPathPrefix}/0edc4.svg`
const imgSticker = `${assetPathPrefix}/cd103.png`
const imgTestingRound2a = `${assetPathPrefix}/ed759.png`

const bodyText: React.CSSProperties = {
  fontFamily: fonts.semibold,
  fontWeight: fontWeights.semibold,
  color: colors.body,
  fontSize: 24,
}

function StatCard({
  label,
  n,
  total,
  caption,
}: {
  label: string
  n: string
  total: string
  caption: string
}) {
  return (
    <div
      className="flex flex-col gap-6 items-center px-9 py-4 rounded-[15px] w-full max-w-[349px]"
      style={{ backgroundColor: colors.cardBg }}
    >
      <p
        style={{
          fontFamily: fonts.semibold,
          fontWeight: fontWeights.semibold,
          color: colors.body,
          fontSize: 24,
          textAlign: "center",
        }}
      >
        {label}
      </p>
      <div className="flex flex-col gap-1 items-center w-full">
        <p
          style={{
            fontFamily: fonts.body,
            fontWeight: fontWeights.regular,
            color: colors.subheading,
            fontSize: 64,
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          {n}/{total}
        </p>
        <p
          style={{
            fontFamily: fonts.semibold,
            fontWeight: fontWeights.semibold,
            color: colors.body,
            fontSize: 24,
            textAlign: "center",
          }}
        >
          {caption}
        </p>
      </div>
    </div>
  )
}

function Arrow() {
  return (
    <p
      style={{
        fontFamily: fonts.black,
        fontWeight: fontWeights.black,
        color: colors.subheading,
        fontSize: 96,
        textAlign: "center",
        lineHeight: 1,
      }}
    >
      →
    </p>
  )
}

function IterationToggle() {
  const [active, setActive] = useState<"first" | "final">("first")
  return (
    <div className="flex flex-col items-start w-full shadow-[0px_4px_2px_rgba(0,0,0,0.25)]">
      <div className="flex">
        <button
          onClick={() => setActive("first")}
          className="border px-4 py-1 rounded-tl-[8px] text-base"
          style={{
            fontFamily: fonts.body,
            fontWeight: fontWeights.regular,
            backgroundColor: active === "first" ? colors.mauve : "transparent",
            color: active === "first" ? "#fffefe" : colors.mauve,
            borderColor: colors.mauve,
          }}
        >
          First Iteration
        </button>
        <button
          onClick={() => setActive("final")}
          className="border px-4 py-1 rounded-tr-[8px] text-base"
          style={{
            fontFamily: fonts.body,
            fontWeight: fontWeights.regular,
            backgroundColor: active === "final" ? colors.mauve : "transparent",
            color: active === "final" ? "#fffefe" : colors.mauve,
            borderColor: colors.mauve,
          }}
        >
          Final Iteration
        </button>
      </div>
      <div
        className="relative w-full overflow-hidden rounded-bl-[15px] rounded-br-[15px] rounded-tr-[15px]"
        style={{ aspectRatio: "1247/679" }}
      >
        <img
          alt={active === "first" ? "First iteration" : "Final iteration"}
          className="absolute inset-0 size-full object-cover"
          src={active === "first" ? imgFirstIteration : imgFinalIteration}
        />
      </div>
    </div>
  )
}

export default function CulturalExchangeCaseStudy() {
  return (
    <div
      className="flex flex-col min-h-screen w-full"
      style={{ backgroundColor: colors.pageBg }}
    >
      <Nav />
      <main className="flex flex-col gap-16 items-center px-6 md:px-16 xl:px-24 pt-12 pb-0 w-full max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-2 items-start w-full">
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
            Designed a multiplayer trading game that teaches business students
            to adapt when culture catches them off guard
          </p>
        </div>

        {/* Stats bar */}
        <div
          className="border-t border-b flex flex-wrap gap-8 items-start justify-between px-8 py-6 w-full"
          style={{ borderColor: colors.border }}
        >
          {[
            {
              label: "TEAM",
              lines: ["Product owner", "3 engineers", "Product Designer"],
            },
            {
              label: "ROLE",
              lines: [
                "Sole Product Designer",
                "Project Manager",
                "Light Frontend Dev",
              ],
            },
            { label: "TIMELINE", lines: ["January 2024 - Present"] },
          ].map(({ label, lines }) => (
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
              {lines.map((l) => (
                <p
                  key={l}
                  style={{
                    fontFamily: fonts.body,
                    fontWeight: fontWeights.regular,
                    color: colors.dark,
                    fontSize: 16,
                    whiteSpace: "nowrap",
                  }}
                >
                  {l}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Background & Problem */}
        <div className="flex flex-col gap-14 items-start w-full">
          <SectionTitle
            overline="Background and problem"
            title="Students have to experience cultural shock, not only read about it"
          />
          <div className="flex flex-col gap-3 max-w-[800px]" style={bodyText}>
            <p>
              Imagine being a business student learning international business.
              You know the theory of cultural difference{" "}
              <em
                style={{
                  fontFamily: fonts.mediumItalic,
                  fontWeight: fontWeights.medium,
                }}
              >
                but
              </em>{" "}
              you have never been caught off guard by it.
            </p>
            <p>
              Jim Oldroyd, the founder of GlobalHub, wanted students to feel
              that moment of surprise: trading with someone from a completely
              different culture, discovering their assumptions do not match
              yours, and having to adapt in real time.
            </p>
          </div>
          {/* HMW Quote */}
          <div
            className="flex items-center justify-center rounded-[15px] px-8 py-12 w-full"
            style={{ backgroundColor: colors.cardBg }}
          >
            <p
              className="text-center max-w-[937px]"
              style={{
                fontFamily: fonts.body,
                fontWeight: fontWeights.regular,
                fontSize: 40,
                color: "#000",
              }}
            >
              "How might we design a game where encountering an{" "}
              <em
                style={{
                  fontFamily: fonts.semiboldItalic,
                  fontWeight: fontWeights.semibold,
                  color: colors.red,
                }}
              >
                unfamiliar culture, and adapting to it
              </em>{" "}
              is unavoidable?"
            </p>
          </div>
        </div>

        {/* Impact */}
        <div className="flex flex-col gap-14 items-center w-full">
          <SectionTitle
            overline="Impact"
            title="Cultural surprise, met and adapted to"
          />
          <p style={{ ...bodyText, maxWidth: 800, alignSelf: "flex-start" }}>
            In our first round of testing, only 13 of 24 students traded
            successfully once they hit their counterpart's different cultural
            rules, the rest struggled. By testing round two 25 out 28 completed
            trades successfully. That same first classroom session also surfaced
            a separate usability problem, covered in the deep-dive below.
          </p>
          <div className="flex flex-col items-center gap-6 w-full">
            <p
              style={{
                fontFamily: fonts.mono,
                fontStyle: "normal",
                fontWeight: fontWeights.regular,
                color: colors.subheading,
                fontSize: 36,
                textAlign: "center",
                letterSpacing: "-3.6px",
              }}
            >
              Trading with counterpart culture success
            </p>
          </div>
        </div>

        {/* Process */}
        <div className="flex flex-col gap-14 items-start w-full">
          <SectionTitle overline="Process" title="But how did we get here?" />

          {/* Culture study photos grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {[
              imgCultureStudy1,
              imgCultureStudy2,
              imgCultureStudy3,
              imgCultureStudy4,
            ].map((src, i) => (
              <div
                key={i}
                className="relative rounded-[15px] overflow-hidden"
                style={{ aspectRatio: i % 2 === 0 ? "1954/1178" : "744/439" }}
              >
                <img
                  alt=""
                  className="absolute inset-0 size-full object-cover rounded-[15px]"
                  src={src}
                />
              </div>
            ))}
          </div>
          <p
            style={{
              fontFamily: fonts.mono,
              fontStyle: "normal",
              fontWeight: fontWeights.regular,
              color: colors.dark,
              fontSize: 24,
              textTransform: "uppercase",
            }}
          >
            Cultures Study: Finding cultural aspects to apply to the game
          </p>

          {/* Ideation sketches */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {[imgIdeation1, imgIdeation2, imgIdeation3, imgIdeation4].map(
              (src, i) => (
                <div
                  key={i}
                  className="relative rounded-[15px] overflow-hidden"
                  style={{ aspectRatio: "4/3" }}
                >
                  <img
                    alt=""
                    className="absolute inset-0 size-full object-cover rounded-[15px]"
                    src={src}
                  />
                </div>
              ),
            )}
          </div>
          <p
            style={{
              fontFamily: fonts.mono,
              fontStyle: "normal",
              fontWeight: fontWeights.regular,
              color: colors.dark,
              fontSize: 24,
              textTransform: "uppercase",
            }}
          >
            Ideation Sketches &amp; Lo-fi prototypes
          </p>

          {/* Cultural layers game preview */}
          <p style={{ ...bodyText, maxWidth: 800 }}>
            We narrowed our research down to two cultures, green (Grun Clan) and
            blue culture (Azul Clan) and started building from there.
          </p>
          <div
            className="relative rounded-[15px] overflow-hidden w-full max-w-[1015px]"
            style={{
              backgroundColor: "rgba(255,255,255,0.49)",
              aspectRatio: "1015/670",
            }}
          >
            {/* Center game screenshot */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <img
                alt=""
                className="absolute inset-0 size-full object-cover opacity-[0.49]"
                src="/assets/cultural-game-background.png"
              />
              <img
                alt="Grun Clan avatars"
                className="absolute right-[3%] top-[3%] z-10 w-[40%] object-contain"
                src="/assets/grun-clan-avatars.png"
              />
              <img
                alt="Azul Clan avatars"
                className="absolute bottom-[3%] left-[3%] z-10 w-[40%] object-contain"
                src="/assets/azul-clan-avatars.png"
              />
              <div
                className="relative z-20 rounded-[15px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                style={{ width: "55%", aspectRatio: "547/424" }}
              >
                <img
                  alt="Game mid-fi"
                  className="absolute inset-0 size-full object-cover rounded-[15px] opacity-100"
                  src={imgGameMidfi}
                />
              </div>
            </div>
          </div>
          <p
            style={{
              fontFamily: fonts.mono,
              fontStyle: "normal",
              fontWeight: fontWeights.regular,
              color: colors.dark,
              fontSize: 24,
              textTransform: "uppercase",
            }}
          >
            Adding cultural layers
          </p>
        </div>

        {/* Testing round 1 */}
        <div className="flex flex-col gap-14 items-start w-full">
          <SectionTitle
            overline="Testing round 1 - 24 student class"
            title="A fast paced game doesn't leave room for users to stop and open a modal…"
          />
          <div className="flex flex-col gap-4 max-w-[800px]" style={bodyText}>
            <p>
              In one of the first iterations of the clan village set up, with
              the intent to make the design uncluttered I had a build button
              that opened a modal that would let the users build in order to
              gain points.
            </p>
            <p>
              In the same first testing session with 24 students, we noticed
              another usability issue, students asking where they were supposed
              to upgrade their commodities.
            </p>
            <p
              className="italic text-center"
              style={{
                fontFamily: fonts.mediumItalic,
                fontWeight: fontWeights.medium,
              }}
            >
              "I was too busy choosing who I was going to trade with to click
              the build button"
            </p>
          </div>

          {/* First iteration screenshot in styled card */}
          <div
            className="relative rounded-[15px] overflow-hidden w-full max-w-[794px] border"
            style={{
              backgroundColor: colors.cardBg,
              borderColor: colors.mauve,
              aspectRatio: "794/487",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                alt="First iteration building costs interface"
                className="size-full object-cover rounded-[15px]"
                src="/assets/building-costs-first-iteration.png"
              />
            </div>
            <div className="absolute left-12 top-8">
            </div>
          </div>
        </div>

        {/* Solution */}
        <div className="flex flex-col gap-14 items-start w-full">
          <SectionTitle
            overline="Our solution"
            title="Prioritizing fast access"
          />
          <p style={{ ...bodyText, maxWidth: 800 }}>
            We realized that we needed to display the building costs feature
            directly in the village view. We had to let go of the background
            that we had grown attached to, but didn't need anymore. We also had
            to rethink the arrangement of the features we already had displayed
            in the village screen. It wasn't the smoothest transition, but it
            was functional and met our users' needs.
          </p>
          <IterationToggle />
        </div>

        {/* Outcome */}
        <div className="flex flex-col gap-14 items-center w-full">
          <div className="w-full">
            <SectionTitle
              overline="Outcome"
              title="Test results and research implementation"
            />
          </div>
          <div
            className="flex flex-col gap-4 max-w-[800px] self-start"
            style={bodyText}
          >
            <p>
              We have run two official classroom tests with international
              business students. In every test, students got into the game
              quickly and stayed competitive and engaged throughout. One student
              said,
            </p>
            <p
              className="italic text-center"
              style={{
                fontFamily: fonts.boldItalic,
                fontWeight: fontWeights.bold,
              }}
            >
              "Layout and overall design is nice."
            </p>
            <p>
              Every group finished all rounds without giving up, and understood
              the game as a whole. The clearest improvement came from the build
              button fix. In round one, 17 of 24 students could not find the
              building cost modal. In round two, the issue was not raised once,
              and we could see students using it correctly through their point
              totals at the end of each round.
            </p>
          </div>
          <div className="flex flex-wrap gap-12 items-center justify-center w-full">
            <img
              alt="Round 1: 17 of 24 students didn't find the build feature. Round 2: 28 of 28 students found the build feature."
              className="h-auto w-full max-w-[968px] object-contain"
              src="/assets/build-feature-success.png"
            />
          </div>
        </div>

        {/* Testing round 2 */}
        <div
          className="relative rounded-[15px] overflow-hidden w-full"
          style={{ backgroundColor: colors.quoteBg, minHeight: 400 }}
        >
          <div className="flex flex-col gap-6 items-start p-12">
            <div
              className="flex flex-col items-start"
              style={{ fontFamily: fonts.mono, fontStyle: "normal" }}
            >
              <p
                style={{
                  fontWeight: fontWeights.regular,
                  color: colors.dark,
                  fontSize: 16,
                  textTransform: "uppercase",
                }}
              >
                Testing round 2 - 28 student class
              </p>
              <p
                style={{
                  fontWeight: fontWeights.regular,
                  color: colors.subheading,
                  fontSize: 24,
                  letterSpacing: "-2.4px",
                }}
              >
                Less is more gone wrong
              </p>
            </div>
            <p style={{ ...bodyText, maxWidth: 800, fontSize: 20 }}>
              The game instructions testing also showed us some wrong
              assumptions. I call it "less is more gone wrong". We wanted to
              keep the instructions engaging, so instead of stating each
              player's role outright, we dropped clues throughout the game for
              players to figure it out. Testing showed the opposite, students
              wanted their role stated explicitly up front. The solution to this
              test is in the works still, and will be tested out in a class on
              Fall 2026 semester.
            </p>
            {/* Single annotated screenshot */}
            <div className="relative mt-4 w-full">
              <img
                alt="Game interface annotated with two clues for identifying the leader"
                className="h-auto w-full object-contain"
                src="/assets/leader-signifier.png"
              />
            </div>
          </div>
        </div>

        {/* UI Implementation gallery */}
        <div className="flex flex-col gap-10 items-center w-full">
          {/* Persuasion layer */}
          <div className="flex flex-wrap gap-4 items-center justify-center w-full">
            <div
              className="relative overflow-hidden rounded-lg flex-1 min-w-[280px]"
              style={{ aspectRatio: "730/397" }}
            >
              <img
                alt="Persuasion UI 1"
                className="absolute inset-0 size-full object-cover"
                src={imgPersuasion1}
              />
            </div>
            <div
              className="relative overflow-hidden rounded-lg flex-1 min-w-[280px]"
              style={{ aspectRatio: "730/396" }}
            >
              <img
                alt="Persuasion UI 2"
                className="absolute inset-0 size-full object-cover"
                src={imgPersuasion2}
              />
            </div>
          </div>
          <p
            style={{
              fontFamily: fonts.mono,
              fontStyle: "normal",
              fontWeight: fontWeights.regular,
              color: colors.dark,
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Implementation of persuasion layer in the UI
          </p>

          {/* Disagreement layer */}
          <div className="flex flex-wrap gap-4 items-end justify-center w-full">
            <div className="flex gap-2 items-center">
              <div
                className="relative rounded-[12px] overflow-hidden"
                style={{ width: 212, height: 243 }}
              >
                <img
                  alt=""
                  className="absolute inset-0 size-full object-cover"
                  src={imgDisagree1}
                />
              </div>
              <div
                className="relative overflow-hidden"
                style={{ width: 450, height: 561 }}
              >
                <img
                  alt=""
                  className="absolute inset-0 size-full object-cover"
                  src={imgDisagree2}
                />
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div
                className="relative overflow-hidden"
                style={{ width: 450, height: 560 }}
              >
                <img
                  alt=""
                  className="absolute inset-0 size-full object-cover"
                  src={imgDisagree3}
                />
              </div>
              <div
                className="relative rounded-[25px] overflow-hidden"
                style={{ width: 207, height: 307 }}
              >
                <img
                  alt=""
                  className="absolute inset-0 size-full object-cover"
                  src={imgDisagree4}
                />
              </div>
            </div>
          </div>
          <p
            style={{
              fontFamily: fonts.mono,
              fontStyle: "normal",
              fontWeight: fontWeights.regular,
              color: colors.dark,
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Implementation of disagreement layer in the UI
          </p>

          {/* Deciding & Evaluating */}
          <div className="flex flex-wrap gap-12 items-start justify-center w-full">
            <div className="flex flex-col gap-4 items-center">
              <div
                className="relative rounded-[11px] overflow-hidden"
                style={{ width: 352, height: 355 }}
              >
                <img
                  alt="Deciding UI"
                  className="absolute inset-0 size-full object-cover"
                  src={imgDeciding}
                />
              </div>
              <p
                style={{
                  fontFamily: fonts.mono,
                  fontStyle: "normal",
                  fontWeight: fontWeights.regular,
                  color: colors.dark,
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                Implementation of deciding layer in the UI
              </p>
            </div>
            <div className="flex flex-col gap-4 items-start">
              <div className="flex gap-3">
                <div
                  className="relative rounded-[15px] overflow-hidden"
                  style={{ width: 274, height: 393 }}
                >
                  <img
                    alt="Evaluating UI 1"
                    className="absolute inset-0 size-full object-cover"
                    src={imgEvalLeft}
                  />
                </div>
                <div
                  className="relative rounded-[15px] overflow-hidden"
                  style={{ width: 274, height: 392 }}
                >
                  <img
                    alt="Evaluating UI 2"
                    className="absolute inset-0 size-full object-cover"
                    src={imgEvalRight}
                  />
                </div>
              </div>
              <p
                style={{
                  fontFamily: fonts.mono,
                  fontStyle: "normal",
                  fontWeight: fontWeights.regular,
                  color: colors.dark,
                  fontSize: 16,
                }}
              >
                Implementation of evaluating layer in the UI
              </p>
            </div>
          </div>
        </div>

        {/* Reflections */}
        <div className="flex flex-col gap-12 items-start w-full">
          <p
            style={{
              fontFamily: fonts.mono,
              fontStyle: "normal",
              fontWeight: fontWeights.regular,
              color: colors.dark,
              fontSize: 20,
            }}
          >
            Reflections
          </p>
          <div className="flex flex-col gap-10 items-start w-full">
            <div className="flex flex-col gap-6 items-start">
              <p
                style={{
                  fontFamily: fonts.mono,
                  fontStyle: "normal",
                  fontWeight: fontWeights.regular,
                  color: colors.subheading,
                  fontSize: 40,
                  letterSpacing: "-4px",
                }}
              >
                Every decision needs a purpose
              </p>
              <p style={{ ...bodyText, maxWidth: 800 }}>
                This is something one of my developer teammates mentioned and it
                stuck with me. Now I ask myself the why behind every decision
                and I have found myself advising the same thing to fellow
                coworkers ever since.
              </p>
            </div>
            <div className="flex flex-col gap-6 items-start">
              <p
                style={{
                  fontFamily: fonts.mono,
                  fontStyle: "normal",
                  fontWeight: fontWeights.regular,
                  color: colors.subheading,
                  fontSize: 40,
                  letterSpacing: "-4px",
                }}
              >
                Asking the right questions makes a difference
              </p>
              <p style={{ ...bodyText, maxWidth: 800 }}>
                Whether I'm probing the product owner's assumptions or figuring
                out where users are actually struggling, asking the right
                question matters as much as finding the right answer. Through
                this project I started preparing a list of open-ended questions
                before any stakeholder or testing session, and I still do it on
                every project now.
              </p>
            </div>
          </div>
        </div>
      </main>
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  )
}
