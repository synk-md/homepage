import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import App from './App'
import Roadmap from './Roadmap'

describe('marketing pages', () => {
  it('renders the homepage with an app link and a working skip target', () => {
    const html = renderToStaticMarkup(<App />)

    expect(html).toContain('href="https://app.synk.md"')
    expect(html).toContain('href="#main"')
    expect(html).toContain('<main id="main">')
    expect(html).toContain('href="/roadmap/"')
  })

  it('renders the roadmap with its status columns and active navigation', () => {
    const html = renderToStaticMarkup(<Roadmap />)

    expect(html).toContain('Where Synk is headed.')
    for (const status of ['Shipped', 'In progress', 'Planned']) {
      expect(html).toContain(`>${status}</span>`)
    }
    expect(html).toContain('class="nav-link nav-link--active"')
    expect(html).toContain('href="/"')
  })
})
