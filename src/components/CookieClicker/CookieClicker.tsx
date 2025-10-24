import { useState,useEffect } from "react"



export default function CookieClicker() {

const [cookies, setCookies] = useState(0);
const icreaseCookies = () => {
    setCookies(cookies+1)
}

useEffect(() => {
    document.title = cookies+""
}, [cookies])

  return (
    <>
    
    <button onClick={icreaseCookies}>click</button>
    <p>cookies: {cookies}</p>
    
    
    </>
  )
}
