import { fireEvent, render, screen } from '@testing-library/react'
import { Input } from './Input'

describe('Input', () => {
  // Regression: onChange used to be dropped for the text, email and password variants
  it.each(['text', 'email', 'password', 'phone', 'main'] as const)(
    'passes onChange through for the "%s" variant',
    (variant) => {
      const onChange = jest.fn()
      const { container } = render(
        <Input type={variant} placeholder="Field" onChange={onChange} />
      )

      fireEvent.change(container.querySelector('input') as HTMLInputElement, {
        target: { value: 'hello' },
      })

      expect(onChange).toHaveBeenCalledTimes(1)
    }
  )

  it('uses the matching native input type', () => {
    const { container } = render(<Input type="email" placeholder="Email" />)

    expect(container.querySelector('input')).toHaveAttribute('type', 'email')
    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it('renders a checkbox', () => {
    const { container } = render(<Input type="checkbox" />)

    expect(container.querySelector('input')).toHaveAttribute('type', 'checkbox')
  })
})
