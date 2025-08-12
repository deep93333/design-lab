import { Pill } from '@deep-design-lab/capture'
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


  return (
    <div className='flex flex-col w-full h-full'>
      <div className="max-w-xl mx-auto flex flex-col items-start justify-start gap-8 mt-16">
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



        <div className='flex flex-col items-start justify-start gap-4 w-full'>
          <p className='text-xs text-zinc-500 font-mono tracking-widest'>
            RECENT EXPERIMENTS
          </p>


          <div className='flex flex-col items-start justify-start gap-2 w-full'>

            <div className='w-full relative aspect-[16/10] bg-brand flex flex-col items-start justify-start'>
              <Pill />
              <div className='border pointer-events-none border-foreground/5 absolute inset-0 flex flex-col items-start justify-start' />
            </div>
            <div className='flex flex-col items-start justify-start gap-1 w-full'>
              <p className='text-sm text-zinc-900 leading-relaxed'>Quick Capture
              </p>

              <p className='text-sm text-zinc-500 leading-relaxed'>
                I was experimenting with quick capture, a tool that allows you to capture ideas and notes quickly and easily. Thinking about building this for Mac.
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-start justify-start gap-4 w-full'>
          <p className='text-xs text-zinc-500 font-mono tracking-widest'>
            LET'S BUILD SOMETHING
          </p>


          <div className='flex flex-col items-start justify-start gap-2 w-full'>

            <div className='w-full relative aspect-[16/10] bg-brand flex flex-col items-start justify-start'>
              <Pill />
              <div className='border pointer-events-none border-foreground/5 absolute inset-0 flex flex-col items-start justify-start' />
            </div>
            <div className='flex flex-col items-start justify-start gap-1 w-full'>
              <p className='text-sm text-zinc-900 leading-relaxed'>Quick Capture
              </p>

              <p className='text-sm text-zinc-500 leading-relaxed'>
                I was experimenting with quick capture, a tool that allows you to capture ideas and notes quickly and easily. Thinking about building this for Mac.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
