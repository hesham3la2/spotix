import Image from 'next/image';
import React from 'react';
import { StarIcon } from '@heroicons/react/solid';

type Props = {
  isEng: boolean;
  lang: any;
  data: {
    desc: string;
    desc_ar: string;
    image: string;
    price: string;
    discount: string;
    review: string;
    percent: string;
  };
};

const replaceDigits = function (digit: string) {
  var map = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return digit.replace(/\d(?=[^<>]*(<|$))/g, function ($0: string) {
    const key = +$0;
    if (key > map.length - 1) return $0;
    return map[key];
  });
};

const Card = ({ isEng, data, lang }: Props) => {
  const { desc, desc_ar, review, image, price, discount, percent } = data;

  return (
    <div className="px-2 hover:rounded-md hover:shadow-md hover:shadow-slate-500 max-w-[20%]">
      <div className="w-[227] h-[180px] rounded-lg overflow-hidden">
        <Image
          src={`/categories/${image}.jpg`}
          width={754}
          height={960}
          objectFit="cover"
          alt="category"
        />
      </div>
      <div>
        <h3 className="font-semibold tracking-tighter mt-2">
          {isEng ? desc : desc_ar}
        </h3>
      </div>
      <div className={`flex ${!isEng && 'row-reverse'} gap-1 items-center`}>
        <div className="flex justify-start -gap-1 py-1 px-[1px]">
          <span className="h-4 w-4 -mx-[1px]">
            <StarIcon />
          </span>
          <span className="h-4 w-4 -mx-[1px]">
            <StarIcon />
          </span>
          <span className="h-4 w-4 -mx-[1px]">
            <StarIcon />
          </span>
          <span className="h-4 w-4 -mx-[1px]">
            <StarIcon />
          </span>
          <span className="h-4 w-4 -mx-[1px]">
            <StarIcon />
          </span>
        </div>
        <p className="text-slate-400 text-sm">
          ({isEng ? review : replaceDigits(review)})
        </p>
      </div>
      <div>
        <span className="font-serif font-bold text-sm">
          {isEng ? price : replaceDigits(price)}
          {' ' + lang.dollar}
        </span>
        <span className="text-xs mx-1 line-through text-green-700">
          {isEng ? discount : replaceDigits(discount)}
          {' ' + lang.dollar}
        </span>
        <span className="text-xs text-green-700">
          ({isEng ? percent : replaceDigits(percent)}% {lang.off})
        </span>
      </div>
    </div>
  );
};

export default Card;
