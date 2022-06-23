import React from "react";
import styles from './styles.module.scss';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {any} from 'prop-types';
import img1 from '../../../assets/pol1.jpeg'
import img2 from '../../../assets/pol2.webp'


const slideImages = [
  {
    url: img1,
    descr: 'Музей графа Дідушицького. Львівський Природознавчий музей. Вул. Театральна 8. Фото 1870 року.'
  },
  {
    url: img2,
    descr: 'Школа св. Марії Магдалини у Львові. Фото кінця ХІХ століття.'
  },
];


const SecondPage = (props) => {
    return (
        <div className={styles.container} ref={props.someRef}>
          <div className={styles.headerTitle}>
            <h2 className={styles.title}>Культурні особливості польського народу в другій половині ХІХ століття</h2>
          </div>
          <div className={styles.contentBox}>
            <div>
            <p className={styles.text}>Ще в кінці XVIII ст. польське населення міста Львова намагалося показати свою індивідуальність серед інших народів. Результатом цього, вони створювали різноманітні організації, товариства, будували школи, ставили театральні вистави, відкривали музеї тощо. 
Перевага поляків над українським та єврейським населенням була в тому, що вони мали свободу слова і мови. Через те, що поляки мали кращі відносин з австрійською владою ніж інші громади, вони змогли частково провести політику полонізації українського населення. Поляки виступали за автономію Галичини та проведення реформ. 
Вже пізніше, коли австрійська влада зрозуміла, що поляки та українці – це не один народ, була проголошена ідея розділити Галичину на східну та західну. 
</p> 
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