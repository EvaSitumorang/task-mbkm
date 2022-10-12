import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import AddItem from '../components/AddItem';
import Items from '../components/Items';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [cartItems, setCartItems] = useState([]);

  const handleOnItemAdded = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className={styles.container}>
      <h1>OUR POS</h1>

      <AddItem onAdd={handleOnItemAdded} />

      <Items items={cartItems} />
    </div>
  );
}
