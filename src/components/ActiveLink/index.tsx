import {cloneElement, ReactElement} from 'react'
import Link, {LinkProps} from 'next/link'
import {useRouter} from 'next/router'


interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  activeClassName: string
}

export function ActiveLink({children, activeClassName, ...rest}: ActiveLinkProps) {
  const {asPath} = useRouter()

  const className = rest.href == asPath ? activeClassName : ''

  
  return (
    <Link {...rest}>
      {cloneElement(children, {
        className
      })}
    </Link>
  )
}