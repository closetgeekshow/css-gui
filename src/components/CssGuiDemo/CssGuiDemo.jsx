import { useState } from 'react'
import { Editor, styled } from '@compai/css-gui'

export default function CssGuiDemo() {
  const [styles, setStyles] = useState({
    backgroundColor: '#e0e0e0',
    padding: {
      value: 20,
      unit: 'px'
    },
    borderRadius: {
      value: 8,
      unit: 'px'  
    },
    fontSize: {
      value: 16,
      unit: 'px'
    }
  })

  return (
    <div>
      <Editor styles={styles} onChange={setStyles} />
      <styled.div styles={styles}>
        <h1>CSS GUI Demo</h1>
        <p>Try editing the styles using the controls above!</p>
      </styled.div>
    </div>
  )
}
