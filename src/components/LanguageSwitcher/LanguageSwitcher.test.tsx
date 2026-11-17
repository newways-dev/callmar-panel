import { act, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import i18n from '../../i18n'
import { Sidebar } from '../../layout/Sidebar/Sidebar'
import { LanguageSwitcher } from './LanguageSwitcher'

const renderApp = () =>
  render(
    <MemoryRouter>
      <LanguageSwitcher />
      <Sidebar />
    </MemoryRouter>
  )

describe('LanguageSwitcher', () => {
  beforeEach(async () => {
    window.localStorage.clear()
    await act(async () => {
      await i18n.changeLanguage('en')
    })
  })

  it('shows English by default', () => {
    renderApp()

    expect(screen.getByText('Calls')).toBeInTheDocument()
    expect(screen.getByText('Widgets')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'EN' })).toHaveAttribute(
      'aria-pressed',
      'true'
    )
  })

  it('switches the interface to Russian and back', async () => {
    renderApp()

    fireEvent.click(screen.getByRole('button', { name: 'RU' }))

    expect(await screen.findByText('Звонки')).toBeInTheDocument()
    expect(screen.queryByText('Calls')).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'EN' }))

    expect(await screen.findByText('Calls')).toBeInTheDocument()
  })

  it('remembers the choice and updates the document language', async () => {
    renderApp()

    fireEvent.click(screen.getByRole('button', { name: 'RU' }))
    await screen.findByText('Звонки')

    expect(window.localStorage.getItem('callmar-language')).toBe('ru')
    expect(document.documentElement.lang).toBe('ru')
  })
})
