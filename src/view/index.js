import React, { useRef } from "react";
import Header from "./components/header";
import styles from '../index.module.scss';
import FirstPage from "./pages/fitstPage";
import SecondPage from './pages/secondPage'
import ThirdPage from "./pages/thirdPage";
import FouthPage from "./pages/fouthPage";
import Footer from "./components/footer";

const MainPage = () => {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  const onItemPress = (item) => {
    console.log(item, 'item');
    switch (item) {
      case 'Українці':
        firstRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      break;
      case 'Поляки':
          secondRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      break;
      case 'Євреї':
          thirdRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      break;
    }
  }

  return (
    <div className={styles.mainSection}>
        <Header scrollTo={onItemPress}/>
        <FirstPage />
        <SecondPage someRef={firstRef}/>
        <ThirdPage someRef={secondRef}/>
        <FouthPage someRef={thirdRef}/>
        <Footer />
    </div>
  );
};

export default MainPage;
