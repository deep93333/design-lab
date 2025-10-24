  import { FloatingActions } from "@deep-design-lab/bottom-menu-bar";
  import { Book, cn, Pill } from "@deep-design-lab/capture";
  import {
    ArrowUpRightIcon,
    Button,
    EmailIcon,
    GithubIcon,
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
    XBrandIcon,
  } from "@deep-design-lab/ui";
  import { motion } from "framer-motion";
  import { useHoverSound } from "./hooks/useHoverSound";

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
  };

  function App() {
    return (
      <div className="relative bg-[#f9f9f9] flex flex-col w-screen h-screen">
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
                <h1 className="text-sm text-foreground/90">Deep Lakhani.</h1>
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
                    href="https://endex.app"
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
                  title="Capture App"
                  description="Mac app to capture thoughts, images, voice, links and notes."
                  icon="./captureapp.png"
                  href=""
                  comingSoon={true}
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
                  <div className="w-full h-full scale-75 md:scale-100 gap-8 flex items-center justify-center">
                  <Book />
                  <Book color="rgb(186.68, 1.2749, 57.73)" />
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

  export const Separator = () => {
    return (
      <StripePattern className="!h-[32px] !bg-[#ffffff]" stripeSpacing={"2px"} />
    );
  };

  export const ConnectButton = ({
    label,
    href,
    icon,
    delay,
  }: {
    label: string;
    href: string;
    icon: React.ElementType;
    delay: number;
  }) => {
    const MotionButton = motion(Button);
    const Icon = icon;
    const { playHoverSound } = useHoverSound();

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
        className="w-full relative"
      >
        <MotionButton
          variant="ghost"
          size="lg"
          className="w-full group px-4 md:px-8 py-2 rounded-none"
          onClick={() => window.open(href, "_blank")}
          onMouseEnter={playHoverSound}
        >
          <Icon className="!size-5 text-zinc-400 group-hover:text-foreground/90 transition-colors duration-200" />
          <span>{label}</span>
          <div className="flex-1" />
          <ArrowUpRightIcon className="!size-4 text-zinc-400 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200" />
          <div className="absolute inset-0 -z-10 bg-foreground/10 group-hover:bg-foreground/10 transition-colors duration-300" />
        </MotionButton>
      </motion.div>
    );
  };

  export const SectionLabel = ({
    label,
    delay,
  }: {
    label: string;
    delay: number;
  }) => {
    return (
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.6,
          delay: delay,
          ease: "easeOut",
        }}
        className="text-xs px-4 md:px-8 py-4 text-foreground/60 font-mono tracking-widest"
      >
        {label}
      </motion.p>
    );
  };

  export const Experiment = ({
    title,
    description,
    component,
    className,
  }: {
    title: string;
    description: string;
    component: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div
        className={cn(
          "flex px-4 md:px-8  flex-col items-start justify-start w-full",
          className,
        )}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.6,
            delay: 3.5,
            ease: "easeOut",
          }}
          className="w-full overflow-hidden bg-[#f1f1f1] relative aspect-[16/10] flex flex-col items-start justify-start"
        >
          {component}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.6,
            delay: 2.9,
            ease: "easeOut",
          }}
          className="flex pt-4 pb-8 flex-col items-start justify-start gap-1 w-full"
        >
          <motion.p className="text-sm text-foreground/90 leading-relaxed">
            {title}
          </motion.p>
          <p className="text-sm text-foreground/60 leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    );
  };

  export const StripePattern = ({
    width = "100%",
    height = "200px",
    stripeColor = "#e1e1e1",
    backgroundColor = "#ffffff",
    stripeWidth = "1px",
    stripeSpacing = "20px",
    angle = 45,
    className,
  }: {
    width?: string | number;
    height?: string | number;
    stripeColor?: string;
    backgroundColor?: string;
    stripeWidth?: string | number;
    stripeSpacing?: string | number;
    angle?: number;
    className?: string;
  }) => {
    const stripePattern = {
      backgroundImage: `repeating-linear-gradient(
        ${angle}deg,
        ${backgroundColor} 0px,
        ${backgroundColor} ${stripeSpacing},
        ${stripeColor} ${stripeSpacing},
        ${stripeColor} calc(${stripeSpacing} + ${stripeWidth}),
        ${backgroundColor} calc(${stripeSpacing} + ${stripeWidth}),
        ${backgroundColor} calc(${stripeSpacing} * 2)
      )`,
    };

    return (

      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 0.6,
          delay: 1,
          ease: "easeOut",
        }}
        style={{
          width,
          height,
          ...stripePattern,
        }}
        className={cn("relative ring-[0.65px] ring-foreground/10", className)}
      />

    );
  };

  export const ContentBox = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    const initial = { opacity: 0 };
    const animate = { opacity: 1 };
    return (
      <div className={cn("relative flex flex-col items-start justify-start w-full py-4 md:py-8", className)}>
        <motion.div className="w-1.5 h-1.5 border-l border-l-foreground/30 border-t border-t-foreground/30 absolute left-0 bg-transparent top-0 " initial={initial} animate={animate} transition={{ delay: 1 }}></motion.div>
        <motion.div className="w-1.5 h-1.5 border-l border-l-foreground/30 border-b border-b-foreground/30 absolute left-0 bg-transparent bottom-0" initial={initial} animate={animate} transition={{ delay: 1 }}></motion.div>
        {children}
        <motion.div className="w-1.5 h-1.5 border-r border-r-foreground/30 border-t border-t-foreground/30 absolute right-0 bg-transparent top-0" initial={initial} animate={animate} transition={{ delay: 1 }}></motion.div>
        <motion.div className="w-1.5 h-1.5 border-r border-r-foreground/30 border-b border-b-foreground/30 absolute right-0 bg-transparent bottom-0" initial={initial} animate={animate} transition={{ delay: 1 }}></motion.div>
      </div>
    );
  };

  export const Project = ({
    title,
    description,
    icon,
    href,
    comingSoon,
  }: {
    title: string;
    description: string;
    icon: string;
    href: string;
    comingSoon?: boolean;
  }) => {
    const { playHoverSound } = useHoverSound();

    return (
      <button
        className="flex py-4 px-4 md:px-8 relative group hover:bg-[#f1f1f1]  cursor-pointer flex-row items-start justify-start gap-3 w-full text-left"
        onClick={() => {
          window.open(href, "_blank");
        }}
        onMouseEnter={playHoverSound}
        type="button"
      >

        <motion.div className="flex items-center justify-center !w-10 !h-10 shrink-0 relative"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.6,
            delay: 2.9,
            ease: "easeOut",
          }}
        >
          <img src={icon} alt={title} className="w-full h-full rounded-lg" />
          <div className="absolute inset-0 rounded-lg ring-[0.65px] ring-foreground/10 ring-inset" />
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.6,
            delay: 2.9,
            ease: "easeOut",
          }}
          className="flex flex-col items-start justify-center gap-0 w-full"
        >
          <div className="flex flex-row items-center gap-2">
            <motion.p className="text-sm text-foreground/90 leading-relaxed">
              {title}
            </motion.p>
            {comingSoon && (
              <span className="text-[10px] font-mono bg-foreground/10 text-zinc-600 tracking-widest text-cyan-500 leading-relaxed px-1.5 py-0.5 rounded-md">
                COMING SOON
              </span>
            )}
          </div>
          <p className="text-sm text-foreground/60 leading-relaxed">
            {description}
          </p>
          <div className="flex-1" />
        </motion.div>
        <ArrowUpRightIcon className="!size-5 text-zinc-400 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200" />
      </button>
    );
  };

  export const HoverPopover = ({
    children,
    content,
  }: {
    children: React.ReactNode;
    content: React.ReactNode;
  }) => {
    return (
      <HoverCard>
        <HoverCardTrigger>{children}</HoverCardTrigger>
        <HoverCardContent>{content}</HoverCardContent>
      </HoverCard>
    );
  };

  export default App;
