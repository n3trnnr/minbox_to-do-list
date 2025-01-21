import { useState } from 'react';
import styles from './App.module.scss'
import Header from './components/Header/Header';
import ItemsList from './components/ItemsList/ItemsList';

export type TId = number | string;

interface ITodo {
  id: TId,
  text: string,
  isCompleted: boolean
}

interface List {
  id: TId,
  todos: ITodo[]
}

function App() {
  const [data, setData] = useState<List[]>([])

  return (
    <>
      <Header />
      <main className={styles['main']}>
        <ItemsList />
      </main>
    </>
  )
}

export default App
