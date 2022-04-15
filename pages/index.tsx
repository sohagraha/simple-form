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
        <h1>Personal Information</h1>
        <input onChange={(e) => setInfo({ ...info, name: (e.target.value) })} type="text" placeholder='Name' />
        <input onChange={(e) => setInfo({ ...info, id: parseInt(e.target.value) })} type="number" placeholder='Id' />
        <input onChange={(e) => setInfo({ ...info, mobile: parseInt(e.target.value) })} type="number" placeholder='Mobile number' />
        <input onChange={(e) => setInfo({ ...info, address: (e.target.value) })} type="text" placeholder='Address' />
        <input onChange={(e) => setInfo({ ...info, batch: (e.target.value) })} type="text" placeholder='Batch Name' />
        <div className={styles.checkboxContainer}>
          <label><input onChange={(e) => {
            if (e.currentTarget.checked) {
              setInfo({ ...info, student: true })
            }
            else {
              setInfo({ ...info, student: false })
            }
          }} type="checkbox" />Student</label>
        </div>
        <button onClick={(e) => {
          e.preventDefault()
          console.log(info)
        }}>Submit Form</button>
      </main>
    </div>
  )
}

export default Home
