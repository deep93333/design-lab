import { FloatingActions } from "@deep-design-lab/bottom-menu-bar";
import { Book, Pill, SlidingTabs } from "@deep-design-lab/capture";
import { EmailIcon, GithubIcon, XBrandIcon } from "@deep-design-lab/ui";
import { motion } from "framer-motion";
import {
  CompanyLinkWithSharedPopover,
  ConnectButton,
  ContentBox,
  Experiment,
  PrefetchImages,
  Project,
  SectionLabel,
  Separator,
  SharedPopoverProvider,
} from "./components";
import { fadeUp } from "./constants/animations";
import { companyData } from "./constants/companies";
import { getCompanyScreenshotUrl } from "./utils/screenshot";

function App() {
  // Prefetch company screenshots on page load
  const screenshotUrls = Object.values(companyData)
    .map((company) => company.ogImage)
    .filter(Boolean)
    .map((url) => getCompanyScreenshotUrl(url!));

  return (
      <SharedPopoverProvider>
      <div className="relative bg-[#FEFEFD] flex flex-col w-screen antialiased ">
        <PrefetchImages urls={screenshotUrls} />
        {/* <motion.div
          className="px-4 md:px-0 pointer-events-none bg-[#f5f5f5]"
          initial={{
            // background:
            //   "radial-gradient(circle at top center, rgb(255, 140, 182) 0%, oklch(98% 0 283.051) 0%)",
            filter: "blur(0px)",
            width: "100%",
            height: "50%",
            top: "0%",
            left: "50%",
            transform: "translate(-50%, 0%)",
            borderBottomLeftRadius: "50%",
            borderBottomRightRadius: "50%",
          }}
          animate={{
            // background:
            //   "radial-gradient(circle at top center, rgba(255, 140, 182, 0.2) 0%, oklch(98% 0 283.051) 100%)",
            filter: "blur(100px)",
            width: "100%",
            height: "100%",
            top: "0%",
            left: "0%",
            transform: "translate(0%, 0%)",
            borderRadius: "0%",
          }}
          style={{
            position: "absolute",
            zIndex: -1,
            pointerEvents: "none",
          }}
          transition={{
            delay: 1,
            duration: 1,
            ease: "easeOut",
          }}
        /> */}
        <div className="px-4 overflow-x-hidden mx-auto max-w-full  md:max-w-2xl">
          <div className=" ring-[0.6px] ring-foreground/10 flex flex-col items-start justify-start">
            <Separator />
            <ContentBox className="flex flex-col items-start justify-start gap-4 w-full py-6 md:py-12">

              <motion.div
                className="flex gap-1 flex-col items-start justify-start px-4 md:px-8"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.6,
                  delay: 2,
                  ease: "easeOut",
                }}
              >
                <h1 className="text-sm font-medium text-foreground/90">Deep Lakhani.</h1>
                <p className="text-xs text-foreground/60 font-mono tracking-widest">
                  DESIGN ENGINEER
                </p>
              </motion.div>
              <div className="w-full h-full flex flex-col items-start justify-center px-4 md:px-8">
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.6,
                    delay: 2.3,
                    ease: "easeOut",
                  }}
                  className="text-sm text-foreground/60 leading-relaxed"
                >
                  I'm a design engineer focused on crafting enjoyable and delightful
                  experiences. I love building products with careful attention to
                  detail, thinking deeply about how interfaces look, feel and
                  behave.
                </motion.p>
                <br />
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.6,
                    delay: 2.6,
                    ease: "easeOut",
                  }}
                  className="text-sm flex flex-wrap items-center text-foreground/60 leading-relaxed"
                >
                  Currently working at{" "}
                  <CompanyLinkWithSharedPopover
                    name={companyData.profound.name}
                    url={companyData.profound.url}
                    ogImage={companyData.profound.ogImage}
                    inlineIcon={
                      <div className="w-3 h-3 rounded-sm bg-black flex items-center justify-center p-0.5">
                        <svg
                          width="66"
                          height="68"
                          viewBox="0 0 66 68"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-full text-white"
                          role="img"
                          aria-label="Profound logo"
                        >
                          <title>Profound</title>
                          <path
                            d="M0.0673828 45.1145V26.5568C0.0673828 23.8272 1.38269 21.2643 3.60129 19.6709L27.6112 2.42687C29.1549 1.31814 31.0081 0.72168 32.9094 0.72168H32.9851C34.9592 0.72168 36.8685 1.33602 38.4593 2.47874C43.7448 6.2754 56.2521 15.2574 62.3985 19.6713C64.6172 21.2646 65.9323 23.8272 65.9323 26.5568V41.4429C65.9323 44.1725 64.6165 46.7349 62.3971 48.3273L38.41 65.5383C36.8333 66.6695 34.941 67.2781 32.9998 67.2781C31.0515 67.2781 29.1528 66.6685 27.5695 65.5345C24.4301 63.286 19.382 59.6608 19.382 59.6608V36.7552C19.382 36.454 19.7233 36.2792 19.9682 36.455L32.7838 45.6581C32.9128 45.7508 33.0868 45.7508 33.2159 45.6581L49.0324 34.3001C49.2378 34.1525 49.2378 33.8472 49.0324 33.6997L33.2159 22.3417C33.0868 22.2489 32.9128 22.2489 32.7838 22.3417L0.653597 45.4147C0.408749 45.5906 0.0673828 45.4158 0.0673828 45.1145Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    }
                  >
                    Profound
                  </CompanyLinkWithSharedPopover>
                  Previously at{" "}
                  <CompanyLinkWithSharedPopover
                    name={companyData.endex.name}
                    url={companyData.endex.url}
                    ogImage={companyData.endex.ogImage}
                    inlineIcon={
                      <img
                        src="https://www.google.com/s2/favicons?domain=endex.ai&sz=128"
                        alt="Endex"
                        className="w-3 h-3 object-cover"
                      />
                    }
                  >
                    Endex
                  </CompanyLinkWithSharedPopover>{" "}
                  and{" "}
                  <CompanyLinkWithSharedPopover
                    name={companyData.mintlify.name}
                    url={companyData.mintlify.url}
                    ogImage={companyData.mintlify.ogImage}
                    inlineIcon={
                      <img
                        src="https://www.google.com/s2/favicons?domain=mintlify.com&sz=128"
                        alt="Mintlify"
                        className="w-3 h-3 object-cover"
                      />
                    }
                  >
                    Mintlify
                  </CompanyLinkWithSharedPopover>
                  .
                </motion.p>
              </div>
            </ContentBox>

            <Separator />

            <ContentBox className="flex flex-col items-start justify-start w-full py-4 md:py-8">
              <SectionLabel label="PROJECTS" delay={2} />
              <div className="flex flex-col gap-1 w-full">
                <Project
                  title="LLM Chat"
                  description="Open source multi model AI chat interface."
                  icon="./newllmchat.png"
                  href="https://git.new/llmchat"
                />
                <Project
                  title="Resurf"
                  description="A local-first personal library and quick capture tool"
                  icon="./resurf.png"
                  href="https://resurf.so"
                />
              </div>
            </ContentBox>

            <Separator />

            <ContentBox className="flex flex-col items-start justify-start w-full py-4 md:py-8">
              <SectionLabel label="RECENT EXPERIMENTS" delay={2.3} />
              <div className="flex flex-col divide-y divide-foreground/5 w-full">
                <Experiment
                  title="Quick Capture"
                  description="I was experimenting with quick capture, a tool that allows you to capture ideas and notes quickly and easily. Thinking about building this for Mac."
                  component={<Pill />}
                />

                <Experiment
                  className="pt-8"
                  title="Floating Actions"
                  description="This is better way to show actions always visible, accessible and easy to use."
                  component={<FloatingActions />}
                />

                <Experiment
                  className="pt-8"
                  title="Book"
                  description="Created this book UI for my capture app spaces"
                  component={
                  <div className="w-full h-full scale-85 md:scale-100 gap-4 flex items-center justify-center">
                  <Book />
                  <Book color="rgb(186.68, 1.2749, 57.73)" />
                  </div>
                  
                  }
                />
                 <Experiment
                  className="pt-8"
                  title="Sliding Tabs"
                  description="A sliding tabs component for navigation."
                  component={
                    <div className="w-full h-full flex items-center justify-center">
                  <SlidingTabs/>
                  </div>
                  
                  }
                />
              </div>
            </ContentBox>
            <Separator />

            <ContentBox className="flex flex-col items-start justify-start w-full py-4 md:py-8">
              <SectionLabel label="LET'S CONNECT" delay={3.2} />

              <motion.div
                className="flex flex-col items-start justify-start gap-0 w-full"
                layout
              >
                <ConnectButton
                  label="hello@deeplakhani.co"
                  href="mailto:hello@deeplakhani.co"
                  icon={EmailIcon}
                  delay={4.1}
                />

                <ConnectButton
                  label="deep_lakhani_"
                  href="https://x.com/deep_lakhani_"
                  icon={XBrandIcon}
                  delay={4.1}
                />
                <ConnectButton
                  label="git.new/deep"
                  href="https://git.new/deep"
                  icon={GithubIcon}
                  delay={4.1}
                />
              </motion.div>
            </ContentBox>
            <Separator />
          </div>
        </div>
      </div>
      </SharedPopoverProvider>
    );
  }

export default App;
