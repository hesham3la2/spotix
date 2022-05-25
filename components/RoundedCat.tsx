import React from 'react';
import Image from 'next/image';

type Props = {
  isEng: boolean;
  lang: any;
};
const RoundedCat = ({ isEng, lang }: Props) => {
  const catImgs: [string, string][] = [
    ['clock', lang.cat_names.clock],
    ['medal', lang.cat_names.medal],
    ['trophies', lang.cat_names.trophies],
    ['ramadan', lang.cat_names.ramadan],
    ['frame', lang.cat_names.frame],
    ['eidya', lang.cat_names.eidya],
  ];

  return (
    <div className="bg-[#DDEBE3] w-full text-center relative h-[31vh]">
      <div className="mt-7 p-5">
        <h1
          className={`font-medium ${
            isEng ? 'font-sans text-4xl' : 'font-Vibes text-5xl text-bold'
          } `}
        >
          {lang.cat_sec_title}
        </h1>
      </div>
      <div className="absolute -bottom-[40%] left-[50%] translate-x-[-50%]">
        <div className="flex justify-center gap-14">
          {catImgs.map((img, i) => (
            <div
              key={i}
              className={`group ${
                isEng ? 'font-poppins' : 'font-rakkas'
              } text-xl`}
            >
              <div className="rounded-full overflow-hidden w-28 h-28 group-hover:animate-scale-shadow ">
                <Image
                  src={`/categories/${img[0]}.jpg`}
                  width={500}
                  height={500}
                  alt="category"
                />
              </div>
              <div className="mt-3 font-rakkas border-b-transparent border-b-2 group-hover:border-b-[#595959] group-hover:border-b-2 group-hover:text-[#595959] pb-[6px] text-[#222222]">
                {img[1]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoundedCat;
