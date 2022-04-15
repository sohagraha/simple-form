import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  interface myType {
    name: string;
    id: number;
    mobile: number;
    address: string;
    batch: string;
    student: boolean;
    email?: string;
  }

  const [info, setInfo] = useState<myType>({
    name: "",
    id: 0,
    mobile: 0,
    address: "",
    batch: "",
    student: false,
  })

  return (
    <div className={styles.container}>
      <main className={styles.formBody}>
        <input onChange={(e) => setInfo({ ...info, name: (e.target.value) })} type="text" placeholder='name' />
        <input onChange={(e) => setInfo({ ...info, id: parseInt(e.target.value) })} type="number" placeholder='id' />
        <input onChange={(e) => setInfo({ ...info, mobile: parseInt(e.target.value) })} type="number" placeholder='Mobile number' />
        <input onChange={(e) => setInfo({ ...info, address: (e.target.value) })} type="text" placeholder='Address' />
        <input onChange={(e) => setInfo({ ...info, batch: (e.target.value) })} type="text" placeholder='Batch Name' />
        <div className={styles.checkboxContainer}>
          <label><input onChange={() => setInfo({ ...info, student: (true) })} type="checkbox" />Student</label>
        </div>
        <button onClick={() => {
          console.log(info)
        }}>Submit Form</button>
      </main>
    </div>
  )
}

export default Home
