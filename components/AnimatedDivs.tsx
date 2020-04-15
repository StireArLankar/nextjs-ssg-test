import { motion } from 'framer-motion'
import { FC } from 'react'
import { animated, useSpring } from 'react-spring'
import { useApp } from '../overmind'

const variants = {
  visible: {
    opacity: 1,
    transition: { duration: 2 },
  },
  hidden: {
    opacity: 0.5,
    transition: { duration: 2 },
  },
}

interface Props {
  active: boolean
  toggle: () => void
}

export const AnimatedDivs: FC<Props> = ({ active, toggle }) => {
  const spring = useSpring({ opacity: active ? 0.5 : 1, config: { friction: 100 } })
  useApp()

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ margin: 10 }}>
        <animated.div
          style={{ width: 100, height: 100, borderRadius: 10, background: 'red', ...spring }}
          onClick={() => toggle()}
        />
      </div>

      <div style={{ margin: 10 }}>
        <motion.div
          initial={active ? 'hidden' : 'visible'}
          variants={variants}
          animate={active ? 'hidden' : 'visible'}
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
            background: 'red',
          }}
          whileHover={{ scale: 0.8, borderRadius: 100 }}
        />
      </div>
    </div>
  )
}
