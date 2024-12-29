import { useState } from 'react'
import { Editor, styled, codegen, Inputs } from '@compai/css-gui'
import './CssGuiDemo.css'

export const CssGuiDemo = () => {
  const [styles, setStyles] = useState({
    fontSize: { value: 16, unit: 'px' },
    lineHeight: { value: 1.4, unit: 'number' },
    color: 'tomato',
  })

  return (
    <>
      <Editor styles={styles} onChange={setStyles}>
        <div>
          <h3>Typography</h3>
          <Inputs.FontSize />
          <Inputs.LineHeight />
          <Inputs.TextAlign />
          <Inputs.FontStretch />
          <Inputs.Margin />
          <Inputs.FontFamily />
          <h3>Colors</h3>
          <Inputs.Color />
          <Inputs.BackgroundColor />
          <h3>Size</h3>
          <Inputs.Width />
          <Inputs.MaxWidth />
          <Inputs.Height />
        </div>
      </Editor>
      <styled.p styles={styles}>Hello, world!</styled.p>
      <textarea value={codegen.css(styles)} readOnly></textarea>
    </>
  )
}