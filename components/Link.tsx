import Link from 'next/link'

const assetPrefix = process.env.ASSET_PREFIX

// Fixes links by prepending linkPrefix when in deployed on Github
export default ({ href, as = href, children }) => (
  <Link href={href} as={`${assetPrefix}${as}`}>
    {children}
  </Link>
)
