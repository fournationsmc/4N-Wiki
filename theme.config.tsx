import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
    logo: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://avatars.githubusercontent.com/u/81100152?s=200&v=4" style={{ width: '10%', marginRight: '8px' }} alt="Four Nations MC Logo" />
          <span>Four Nations MC</span>
        </div>
      ),
    chat: {
    link: 'https://discord.gg/four-nations-minecraft-636003244719603723',
  },
  footer: {
    text: 'Four Nations MC, no official affiliation with Avatar Studios',
  },
}

export default config
