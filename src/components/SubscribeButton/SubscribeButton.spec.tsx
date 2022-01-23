import {render, screen, fireEvent} from '@testing-library/react'
import {useSession, signIn} from 'next-auth/client'
import {mocked} from 'ts-jest/utils'
import {SubscribeButton} from './SubscribeButton'

jest.mock('next-auth/client', () => {
  return {
    useSession() {
      return [null, false]
    },
    signIn: jest.fn(),
  }
})

describe('SubscribeButton component', () => {
  it('renders correctly', () => {
    // const useSessionMocked = mocked(useSession)

    // useSessionMocked.mockReturnValueOnce([null, false])

    render(<SubscribeButton />)
  
    expect(screen.getByText('Subscribe now')).toBeInTheDocument()
  })

  it('redirects user to signin when not authenticated', () => {
    const signInMocked = mocked(signIn)

    

    render(<SubscribeButton />)

    const subscribeButton = screen.getByText('Subscribe now')

    fireEvent.click(subscribeButton)

    expect(signInMocked).toHaveBeenCalled()
  })
}) 
