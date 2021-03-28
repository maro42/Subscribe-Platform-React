import Head from 'next/head'
import { useState } from 'react'

export default function Home() {

  const [text,setText] = useState<string>('하이하이');

  return (
    <div>
      <span>{text}</span>
    </div>
  )
}
