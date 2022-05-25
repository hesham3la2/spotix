import type { NextPage } from 'next';
import Header from '@components/Header';
import RoundedCat from '@components/RoundedCat';
import Card from '@components/Card';

type Props = {
  lang: any;
  isEng: boolean;
};

const cards = [
  {
    desc: 'Custom Engraved Necklace \nPersonalized Best Friend...',
    desc_ar: 'ميدالية مصممة من أفضل خامات وتشكيلة الوان...',
    image: 'clock',
    review: '22,900',
    price: '14.00',
    discount: '35.00',
    percent: '60',
  },
  {
    desc: 'Custom Engraved Necklace \nPersonalized Best Friend...',
    desc_ar: 'ميدالية مصممة من أفضل خامات وتشكيلة الوان...',
    image: 'medal',
    review: '22,900',
    price: '14.00',
    discount: '35.00',
    percent: '60',
  },
  {
    desc: 'Custom Engraved Necklace \nPersonalized Best Friend...',
    desc_ar: 'ميدالية مصممة من أفضل خامات وتشكيلة الوان...',
    image: 'frame',
    review: '22,900',
    price: '14.00',
    discount: '35.00',
    percent: '60',
  },
  {
    desc: 'Custom Engraved Necklace \nPersonalized Best Friend...',
    desc_ar: 'ميدالية مصممة من أفضل خامات وتشكيلة الوان...',
    image: 'ramadan',
    review: '22,900',
    price: '14.00',
    discount: '35.00',
    percent: '60',
  },
  {
    desc: 'Custom Engraved Necklace \nPersonalized Best Friend...',
    desc_ar: 'ميدالية مصممة من أفضل خامات وتشكيلة الوان...',
    image: 'eidya',
    review: '22,900',
    price: '14.00',
    discount: '35.00',
    percent: '60',
  },
];

const Home: NextPage<Props> = ({ lang, isEng }) => {
  return (
    <div>
      <Header isEng={isEng} lang={lang} />
      <RoundedCat isEng={isEng} lang={lang} />
      <div className={`w-full h-[40vh] my-36 px-9 ${!isEng && 'text-right'}`}>
        <div>
          <h2 className="font-poppins font-medium text-3xl">
            {lang.card_title}
          </h2>
        </div>
        <div className="flex gap-5 mt-4 -mx-2">
          {cards.map((card, i) => (
            <Card key={i} data={card} isEng={isEng} lang={lang}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
