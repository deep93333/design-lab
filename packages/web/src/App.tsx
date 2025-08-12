import { Pill } from '@deep-design-lab/capture'
import { ArrowUpRightIcon, Button, EmailIcon, GithubIcon, XBrandIcon } from '@deep-design-lab/ui'
import { motion } from 'framer-motion'

function App() {

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(8px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)'
    }
  }

  const MotionButton = motion(Button)


  return (
    <div className='flex flex-col w-full h-full'>
      <div className="max-w-xl mx-auto flex flex-col items-start justify-start gap-16 my-16">
        <div className='flex flex-col items-start justify-start gap-4 w-full p-2'>

          <motion.div
            className="flex gap-1 flex-col items-start justify-start"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.6,
              ease: "easeOut"
            }}
          >
            <h1 className='text-sm text-foreground'>Deep Lakhani.</h1>
            <p className='text-xs text-zinc-500 font-mono tracking-widest'>DESIGN ENGINEER</p>
          </motion.div>
          <div className="w-full h-full flex flex-col items-start justify-start">
            <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{
              duration: 0.6,
              delay: 0.3,
              ease: "easeOut"
            }} className="text-sm text-zinc-500 leading-relaxed">
              I'm a design engineer focused on crafting enjoyable and delightful experiences. I love building products with careful attention to detail, thinking deeply about how interfaces look, feel and behave.

            </motion.p>
            <br />
            <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{
              duration: 0.6,
              delay: 0.6,
              ease: "easeOut"
            }} className="text-sm text-zinc-500 leading-relaxed">
              Previously, I worked at <a href="https://endex.com" className="text-foreground underline decoration-zinc-200 underline-offset-4 underline-w-full">Endex</a> and <a href="https://mintlify.com" className="text-foreground underline decoration-zinc-200 underline-offset-4 underline-w-full">Mintlify</a> as a design engineer.
            </motion.p>


          </div>
        </div>


        <div className='flex flex-col items-start justify-start gap-4 w-full p-2'>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{
            duration: 0.6,
            delay: 0.9,
            ease: "easeOut"
          }} className='text-xs text-zinc-500 font-mono tracking-widest'>
            RECENT EXPERIMENTS
          </motion.p>


          <div className='flex flex-col items-start justify-start gap-2 w-full'>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{
              duration: 0.6,
              delay: 1.2,
              ease: "easeOut"
            }} className='w-full relative aspect-[16/10] bg-brand flex flex-col items-start justify-start'>
              <Pill />
              <div className='border pointer-events-none border-foreground/5 absolute inset-0 flex flex-col items-start justify-start' />
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{
              duration: 0.6,
              delay: 1.2,
              ease: "easeOut"
            }} className='flex flex-col items-start justify-start gap-1 w-full'>
              <motion.p className='text-sm text-zinc-900 leading-relaxed'>Quick Capture
              </motion.p>

              <p className='text-sm text-zinc-500 leading-relaxed'>
                I was experimenting with quick capture, a tool that allows you to capture ideas and notes quickly and easily. Thinking about building this for Mac.
              </p>
            </motion.div>
          </div>
        </div>
        <div className='flex flex-col items-start justify-start w-full gap-2'>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{
            duration: 0.6,
            delay: 1.2,
            ease: "easeOut"
          }} className='text-xs text-zinc-500 font-mono tracking-widest p-2'>
            LET'S CONNECT
          </motion.p>

          <motion.div
            className='flex flex-col items-start justify-start gap-0 w-full'
            layout
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
              className='w-full relative'
            >
              <MotionButton variant="ghost" size="sm" className='w-full group' onClick={() => window.open('mailto:hello@deeplakhani.co', '_blank')}>
                <EmailIcon className='!size-4 text-zinc-400 group-hover:text-zinc-900 transition-colors duration-200' />
                <span>hello@deeplakhani.co</span>
                <div className='flex-1' />
                <ArrowUpRightIcon className='!size-3 text-zinc-400 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200' />
                <div className='absolute inset-0 -z-10 bg-zinc-100/0 group-hover:bg-zinc-100/50 transition-colors duration-300' />
              </MotionButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
              className='w-full relative'
            >
              <MotionButton variant="ghost" size="sm" className='w-full group' onClick={() => window.open('https://git.new/deep', '_blank')}>
                <GithubIcon className='!size-4 text-zinc-400 group-hover:text-zinc-900 transition-colors duration-200' />
                <span>git.new/deep</span>
                <div className='flex-1' />
                <ArrowUpRightIcon className='!size-3 text-zinc-400 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200' />
                <div className='absolute inset-0 -z-10 bg-zinc-100/0 group-hover:bg-zinc-100/50 transition-colors duration-300' />
              </MotionButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
              className='w-full relative'
            >
              <MotionButton layoutId='button' variant="ghost" size="sm" className='w-full group' onClick={() => window.open('https://x.com/deep_lakhani_', '_blank')}>
                <XBrandIcon className='!size-4 text-zinc-400 group-hover:text-zinc-900 transition-colors duration-200' />
                <span>deep_lakhani_</span>
                <div className='flex-1' />
                <ArrowUpRightIcon className='!size-3 text-zinc-400 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200' />
                <div className='absolute inset-0 -z-10 bg-zinc-100/0 group-hover:bg-zinc-100/50 transition-colors duration-300' />
              </MotionButton>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </div>
  )
}

export default App
