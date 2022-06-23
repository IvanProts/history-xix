import React from "react";
// import styles from '../index.module.scss';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styles from '../fitstPage/styles.module.scss';
import img1 from '../../../assets/background_image_1.webp';
import img2 from '../../../assets/background_image_2.webp';
import img3 from '../../../assets/background_image_3.jpeg';

const slideImages = [
    {
      url: img1,
    },
    {
      url: img2,
    },
    {
      url: img3,
    },
  ];

const FirstPage = () => {
    return (
        <div className={styles.sliderContainer}>
          <Fade duration={2000} Easing='ease' autoplay arrows={false} className={styles.carusel}>
            {slideImages.map((fadeImage, index) => (
              <div className={styles.fade} key={index}>
                <p className={styles.text}>Сьогодні, місто Львів - це культурна столиця України, з багатою історією, яка об’єднує представників різних націй, народів і культур. 
На початку XIX століття населення Львова збільшилося вдвічі. Тож місто стало більш привабливішим і комфортнішим для життя у ньому. Протягом цього століття творилась цікава історична пам’ять, яка до сьогодні пронизує вулиці, будинки і парки нового Львова. 
На одній із видатних  частин нашої української землі, проживали 3 основні народи, що творили тут свою історію і розвивали культуру. Такими були українці, поляки та євреї. Вони часто ворогували між собою, адже кожен з них хотів бути унікальним, розвивати свою ідентичність, творити свою націю. В цьому їх стримувала, і одночасно стимулювала влада, представником якої була Австрійська імперія. В неї були свої плани на кожну із громад, але не всі із них були втілені. 
Не дивлячись на це, українці та їхні сусіди домоглися деяких прав та свобод на землі, яку населяли. Поштовхом до цього, стала знаменита “Весна народів” 1848 року.
</p>
                <div className={styles.imageContainer}>
                  <img className={styles.img} src={fadeImage.url} />
                </div>
              </div>
            ))}
          </Fade>
        </div>
      )
};

export default FirstPage;