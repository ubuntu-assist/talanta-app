import { useState } from 'react'
import useLRUCache from '../designSystem/hooks/use-lru-cache'

interface TabContent {
  id: number
  text: string
}

const DynamicContentLoader = () => {
  const [content, setContent] = useState<TabContent[]>([])
  const { get, put } = useLRUCache(3)

  const loadContent = async (id: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const loadedContent = {
      id,
      text: `Tab ${id} Data`,
    }

    put(id, loadedContent)
    setContent((prevData) => [...prevData, loadedContent])
  }

  const handleButtonClick = (id: number) => {
    const cachedContent = get(id)
    if (cachedContent) {
      console.log(`Content ${id} loaded from cache`)
      setContent((prevData) => [...prevData, cachedContent])
    } else {
      console.log(`Loading content ${id}`)
      loadContent(id)
    }
  }

  return (
    <div>
      <h2>Dynamic Content Loader with LRU Cache</h2>

      <button onClick={() => handleButtonClick(1)}>Tab 1</button>
      <button onClick={() => handleButtonClick(2)}>Tab 2</button>
      <button onClick={() => handleButtonClick(3)}>Tab 3</button>
      <button onClick={() => handleButtonClick(4)}>Tab 4</button>
      <button onClick={() => handleButtonClick(5)}>Tab 5</button>

      <div>
        <h3>Loaded Content</h3>
        <ul>
          {content.map((item: TabContent, i: number) => (
            <li key={`${item.id}${i}`}>{item.text}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default DynamicContentLoader
