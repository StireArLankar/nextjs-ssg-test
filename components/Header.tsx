import Link from 'next/link'
import { useState } from 'react'
import { AnimatedDivs } from './AnimatedDivs'

const linkStyle = {
  marginRight: 15,
}

export default () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <header>
      <div>
        <Link href='/'>
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href='/about'>
          <a style={linkStyle}>About</a>
        </Link>
        <Link href='/batman'>
          <a style={linkStyle}>Batman</a>
        </Link>
      </div>

      <AnimatedDivs active={isHovered} toggle={() => setIsHovered((prev) => !prev)} />
    </header>
  )
}
