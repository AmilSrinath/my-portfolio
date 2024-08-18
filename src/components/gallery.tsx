import './gallery.css';
import CloseIcon from '@mui/icons-material/Close';
import Img1 from '../assets/img/6BC9FDD9-A7CC-4603-9928-B0DB2ED10D41.png';
import Img2 from '../assets/img/9AF0774B-8E8E-4612-B638-516890A53E4E_1_105_c.jpeg';
import Img3 from '../assets/img/9D5ADF44-7CE4-4628-8C76-3C4D3B0E4D33.png';
import Img4 from '../assets/img/66AD64BA-6CEC-4637-9D23-750C29D52A57_1_105_c.jpeg';
import Img5 from '../assets/img/534BA7F9-51C9-432B-94A4-43D21EFF760C_1_105_c.jpeg';
import Img6 from '../assets/img/2459B771-29EB-42AF-892B-E513BDA67462.jpeg';
import Img7 from '../assets/img/298898E8-A862-40C1-BDE4-21622711A169_1_105_c.jpeg';
import Img8 from '../assets/img/7590947F-4C34-488B-A4F7-32DFB7757805.png';
import Img9 from '../assets/img/A1F457D7-7F84-47F9-8E38-3331E4AA5201.jpeg';
import Img10 from '../assets/img/D0157019-DE73-4718-8963-9390C6F17C46_1_105_c.jpeg';
import Img11 from '../assets/img/E3D652D8-1C6C-4D84-AEB8-86CE454EF668_1_105_c.jpeg';
import Img12 from '../assets/img/7BC2AA09-0757-4D15-8CB5-8B84A0A5D1F1_1_105_c.jpeg';
import { useState } from 'react';
import {motion} from "framer-motion";
import {textVariant} from "../utils/motion.ts";
import {styles} from "../styles.ts";
import {SectionWrapper} from "../hoc";

// Define a type for the image data
interface ImageData {
  id: number;
  imgSrc: string;
}

export default function Gallery() {
  const data: ImageData[] = [
    { id: 1, imgSrc: Img1 },
    { id: 2, imgSrc: Img2 },
    { id: 3, imgSrc: Img3 },
    { id: 4, imgSrc: Img4 },
    { id: 5, imgSrc: Img5 },
    { id: 6, imgSrc: Img6 },
    { id: 7, imgSrc: Img7 },
    { id: 8, imgSrc: Img8 },
    { id: 9, imgSrc: Img9 },
    { id: 10, imgSrc: Img10 },
    { id: 11, imgSrc: Img11 },
    { id: 12, imgSrc: Img12 },
  ];

  // Define state types
  const [model, setModel] = useState<boolean>(false);
  const [tempimgSrc, setTempimgSrc] = useState<string>('');

  const getImg = (imgSrc: string) => {
    setTempimgSrc(imgSrc);
    setModel(true);
  }

  return (
      <SectionWrapper>
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My</p>
          <h2 className={styles.sectionHeadText}>Gallery.</h2>
        </motion.div>

        <div className={model ? "model open" : "model"}>
          <img src={tempimgSrc} alt="Enlarged view" />
          <CloseIcon onClick={() => setModel(false)} />
        </div>

        <div className="gallery">
          {data.map((item) => (
              <div className="pics" key={item.id} onClick={() => getImg(item.imgSrc)}>
                <img src={item.imgSrc} alt={`Gallery image ${item.id}`} style={{ width: '100%' }} />
              </div>
          ))}
        </div>
      </>
      </SectionWrapper>
  );
}
