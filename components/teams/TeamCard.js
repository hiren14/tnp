

import Image from 'next/image';
import {  FaLinkedin } from 'react-icons/fa';
import Style from './Team.module.css';

const ICON_SIZE = 28;

function TeamCard({name, pos, url, imageSrc, lazyImageSrc }) {
  return (
    <div className={Style.card}>
      <div className="z-10 w-full text-center h-2/3 mb-18 mt-4 overflow-hidden rounded-lg">
        <Image
          className="z-10 rounded-lg object-cover object-top"
          src={imageSrc}
          width={'100'}
          height={'100'}
          alt={name}
          quality={100}
          placeholder="blur"
          blurDataURL={lazyImageSrc}
        />
      </div>
      <div className="z-10 text-center my-5">
        <h3 className="text-xl">{name}</h3>
        <h4>{pos}</h4>
       
      </div>
      <div className={Style.socials}>
        

        
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={url}
              >
                <FaLinkedin size={ICON_SIZE} />
              </a>
          
          
       
      </div>
    </div>
  );
}

export default TeamCard;
