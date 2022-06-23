import React from "react";
import styles from './styles.module.scss';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {any} from 'prop-types';
import img1 from '../../../assets/ukr1.jpeg'
import img2 from '../../../assets/ukr2.jpeg'
import img3 from '../../../assets/ukr3.jpeg'


const slideImages = [
  {
    url: img1,
    descr: 'Будівля Народного дому. Театр "Руська бесіда". Львів. Фото 1864 року.'
  },
  {
    url: img2,
    descr: 'Газета "Зоря Галицька" 1848 року.'
  },
  {
    url: img3,
    descr: 'Газета "Діло" 1888 року.'
  },
];


const SecondPage = (props) => {
    return (
        <div className={styles.container} ref={props.someRef}>
          <div className={styles.headerTitle}>
            <h2 className={styles.title}>Культурні особливості українського народу в другій половині ХІХ століття</h2>
          </div>
          <div className={styles.contentBox}>
            <div>
            <p className={styles.text}>В другій половині XIX ст. українське населення (за тогочасною термінологією – русинське) утворювало одну із найбільших громад міста Львова. Завдяки прагненням українського народу до національного самовизначення, до кінця XIX ст. українська громада зуміла відстояти себе у політичному та культурному плані. 
            Поштовхом до цього, стала політика Австрійської імперії, яка за підтримки польської громади стримувала розвиток української  культури. Відповідно до цього, польська громада не бачила українців-русинів окремим народом. Тому, українській громаді потрібно було відстоювати права на свою політичну незалежність, мову та культуру. 
            Протягом XIX ст. боротьби за свою ідентичність серед інших громад, що населяли Львів, українці-русини домоглися:</p>
            <ul className={styles.text}>
            <ol className={styles.item}>• прав політично організуватися;</ol>
            <ol className={styles.item}>• прав на викладання українською мовою в освітніх закладах;</ol>
            <ol className={styles.item}>• прав на друк українською мовою;</ol>
            <ol className={styles.item}>• прав на власну культуру;</ol>
            </ul>
            <p className={styles.text}>На відміну від інших громад, українська громада за пів століття стала не просто сільськогосподарським народом, який проживав на Галичині, а українською нацією, багатою на культуру в усіх її проявах.</p> 
            </div>
            <div className={styles.imgBox}>
            <Fade duration={2000} autoplay arrows={false} className={styles.carusel}>
            {slideImages.map((fadeImage, index) => (
              <div className={styles.fade} key={index}>
                <div className={styles.imageContainer}>
                  <img className={styles.img} src={fadeImage.url} />
                  <p className={styles.descr}>{fadeImage.descr}</p>
                </div>
              </div>
            ))}
          </Fade>
            </div>
          </div>
        </div>
      )
};

SecondPage.propTypes = {
  someRef: any,
}

export default SecondPage;