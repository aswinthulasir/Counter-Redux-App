import React , {useState} from 'react'

const Code = ({pam}) => {
    const [count, setCount] = useState(0)
  return (
    <>
    <h1>Play Button</h1>
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        Click to increment
      </button>

      <button onClick={() => setCount((count) => count - 1)}>
        Click to decrement 
      </button>

      <h2>The value is {count}</h2>
      
    </div>
    </>
  )
}

export default Code