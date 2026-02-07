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
import { LiveClock } from "./components/LiveClock";

function App() {
  // Prefetch company screenshots on page load
  const screenshotUrls = Object.values(companyData)
    .map((company) => company.ogImage)
    .filter(Boolean)
    .map((url) => getCompanyScreenshotUrl(url!));

  return (
      <SharedPopoverProvider>
      <div className="relative bg-[#FEFEFD] flex flex-col w-full antialiased">
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
        <div className="px-0 md:px-4 mx-auto max-w-full md:max-w-2xl overflow-hidden">
          <div className="ring-[0.6px] ring-foreground/10 flex flex-col items-start justify-start overflow-hidden">
            <Separator />
            <ContentBox className="flex flex-col items-start justify-start gap-4 w-full py-8 md:py-12">

              <motion.div
                className="flex gap-1 flex-col items-start justify-start px-6 md:px-8"
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
                <p className="text-sm text-foreground/60 inline-flex items-center mb-4 gap-1.5">
                  Design Engineer
                
                </p>
              
              </motion.div>
              <div className="w-full h-full flex flex-col gap-3 items-start justify-center px-6 md:px-8">
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
                  Focused on crafting enjoyable and delightful experiences
                  with careful attention to detail, thinking deeply about
                  how interfaces look, feel and behave.
                </motion.p>

                <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{
                    duration: 0.6,
                    delay: 2.6,
                    ease: "easeOut",
                  }} className="text-sm text-foreground/60 inline-flex items-center gap-1.5">
                 Based in
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 32 32" className="inline-block"><path fill="#fff" d="M8 4H24V28H8z"/><path d="M5,4h4V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" fill="#c53a28"/><path d="M27,4h4V28h-4c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" transform="rotate(180 27 16)" fill="#c53a28"/><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"/><path d="M16.275,22.167l-.138-2.641c-.007-.16,.117-.296,.277-.304,.021,0,.042,0,.063,.004l2.629,.462-.355-.979c-.03-.08-.005-.17,.061-.223l2.88-2.332-.649-.303c-.091-.043-.135-.146-.104-.242l.569-1.751-1.659,.352c-.093,.019-.186-.029-.223-.116l-.321-.756-1.295,1.389c-.076,.08-.201,.083-.281,.007-.049-.047-.071-.115-.058-.182l.624-3.22-1.001,.578c-.095,.056-.217,.024-.272-.071-.002-.004-.004-.008-.006-.012l-1.016-1.995-1.016,1.995c-.049,.098-.169,.138-.267,.089-.004-.002-.008-.004-.012-.006l-1.001-.578,.624,3.22c.021,.108-.05,.212-.158,.233-.067,.013-.135-.009-.182-.058l-1.295-1.389-.321,.756c-.037,.087-.131,.136-.223,.116l-1.659-.352,.569,1.751c.031,.095-.013,.199-.104,.242l-.649,.303,2.88,2.332c.066,.054,.091,.144,.061,.223l-.355,.979,2.629-.462c.158-.027,.309,.079,.336,.237,.004,.021,.005,.042,.004,.063l-.138,2.641h.551Z" fill="#c53a28"/><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"/></svg>
                  Montréal, Canada
                </motion.p>
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.6,
                    delay: 2.6,
                    ease: "easeOut",
                  }}
                  className="text-sm flex flex-wrap items-center text-foreground/60 leading-[2]"
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
              <SectionLabel label="Projects" delay={0.5} />
              <div className="flex flex-col w-full divide-y divide-foreground/5 [&:hover>a]:opacity-40 [&:hover>a:hover]:opacity-100">
                <Project
                  index={0}
                  year="2024"
                  title="LLM Chat"
                  description="Open source multi model AI chat"
                  href="https://git.new/llmchat"
                  ogImage="https://llmchat.co"
                />
                <Project
                  index={1}
                  year="2025"
                  title="Resurf"
                  description="Local-first personal library"
                  href="https://resurf.so"
                  ogImage="https://resurf.so"
                />
              </div>
            </ContentBox>

            <Separator />

            <ContentBox className="flex flex-col items-start justify-start w-full py-4 md:py-8">
              <SectionLabel label="Recent Experiments" delay={0.4} />
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
              <SectionLabel label="Let's Connect" delay={0.5} />

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
            <ContentBox className="flex px-6 md:px-8 flex-col items-start justify-start w-full py-2 md:py-4">
            <LiveClock />

            </ContentBox>
          </div>

        
        </div>
      </div>
      </SharedPopoverProvider>
    );
  }

export default App;
