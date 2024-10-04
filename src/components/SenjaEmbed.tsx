import { useEffect } from 'react'

interface SenjaEmbedProps {
  widgetId: string
}

export default function SenjaEmbed({ widgetId }: Readonly<SenjaEmbedProps>) {
  const id = widgetId
  const lazy = false

  useEffect(() => {
    let script = document.querySelector<HTMLScriptElement>(
      `script[src="https://static.senja.io/dist/platform.js"]`
    )

    if (script) return

    script = document.createElement('script')
    script.src = 'https://static.senja.io/dist/platform.js'
    script.async = true
    script.type = 'text/javascript'
    document.body.append(script)
  }, [])

  return <div className='senja-embed' data-lazyload={lazy} data-id={id}></div>
}
