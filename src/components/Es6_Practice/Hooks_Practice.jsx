import React, { useState } from 'react'

const Hooks_Practice = (props) => {
    const {
        propFunction , 
        propHooks
    } = props

    const [hook , setHook] = useState('');
    propFunction(hook);
    propHooks(hook)
  return (
    <div>
     <input type="text" value={hook} onChange={(e) => setHook(e.target.value)} />
    </div>
  )
}

export default Hooks_Practice
