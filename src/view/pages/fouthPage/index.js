import React from "react";
import styles from './styles.module.scss';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {any} from 'prop-types';
import img1 from '../../../assets/jud1.jpeg'
import img2 from '../../../assets/jud2.jpeg'


const slideImages = [
  {
    url: img1,
    descr: 'Школа Абрахама Кона. Львів. Сучасний вигляд.'
  },
  {
    url: img2,
    descr: 'Реформістська синагога " Темпль" у Львові на площі Старий Ринок. Фото 1863 року.'
  },
];


const SecondPage = (props) => {
    return (
        <div className={styles.container} ref={props.someRef}>
          <div className={styles.headerTitle}>
            <h2 className={styles.title}>Культурні особливості єврейського народу в другій половині ХІХ століття</h2>
          </div>
          <div className={styles.contentBox}>
            <div>
            <p className={styles.text}>Історія становлення єврейської громади розпочалася з другої половини XVIII ст., коли Львів приєднався до Австрійської імперії. Саме тоді, євреям було заборонено селитись у місті. 
Після цього, влада хотіла втілити ідею асиміляції єврейського населення в німецькій культурі. З цього і розпочалася боротьба єврейської громади проти австрійської влади та тих, хто діє разом із нею. 
Євреї будували синагоги, школи, ставили єврейські вистави тощо. В центрі міста ще досі зберіг свою красу єврейський квартал та його пам’ятки.</p> 
            </div>
            <div className={styles.imgBox}>
            <Fade duration={2000} autoplay arrows={false} className={styles.carusel}>
            {slideImages.map((fadeImage, index) => (
              <div className={styles.fade} key={index}>
                <div className={styles.imageContainer}>
                  <img className={styles.img} src={fadeImage.url} />
                </div>
                <p className={styles.descr}>{fadeImage.descr}</p>
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