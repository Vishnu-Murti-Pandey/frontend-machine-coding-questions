import React, { useState } from 'react'
import CreateHook from './CreateHook'

const WhyDidYouUpdateHook = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button type="button" onClick={() => setCount(count + 1)} >Click Me</button>
      <Example count={count} />
    </>
  )
}

const Example = (props) => {
  CreateHook("Example", props)
  return <div>{props.count}</div>
}

export default WhyDidYouUpdateHook