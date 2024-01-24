import { useState, useEffect } from "react"

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key)
    try{
      if (jsonValue != null){
      return JSON.parse(jsonValue)
    }
  }catch(e){console.log('error:' ,e.message)}

    if (typeof defaultValue === "function") {
      return defaultValue()
    } else {
      return defaultValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}