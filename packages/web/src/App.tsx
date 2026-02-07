import { FloatingActions } from "@deep-design-lab/bottom-menu-bar";
import { Book, Pill, SlidingTabs } from "@deep-design-lab/capture";
import { EmailIcon, GithubIcon, XBrandIcon } from "@deep-design-lab/ui";
import { motion } from "framer-motion";
import {
  ConnectButton,
  ContentBox,
  Experiment,
  Project,
  SectionLabel,
  Separator,
} from "./components";
import { fadeUp } from "./constants/animations";

function App() {
    return (
      <div className="relative bg-[#f9f9f9] flex flex-col w-screen antialiased ">
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
                  Previously, I worked at{" "}
                  <a
                    href="https://endex.ai"
                    className="text-foreground px-2 inline-flex items-center gap-1 underline decoration-foreground/20 underline-offset-4 underline-w-full"
                  >
                    <img src="https://www.google.com/s2/favicons?domain=endex.ai&sz=128" alt="Endex" className="w-3 h-3 object-cover" />
                    Endex
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://mintlify.com"
                    className="text-foreground px-1 inline-flex items-center gap-1 underline decoration-foreground/20 underline-offset-4 underline-w-full"
                  >
                    <img src="https://www.google.com/s2/favicons?domain=mintlify.com&sz=128" alt="Mintlify" className="w-3 h-3 object-cover" />
                    Mintlify
                  </a>{" "}
                  as a design engineer.
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
    );
  }

export default App;
