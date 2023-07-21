import Image from 'next/image';

const WhyUsCard: React.FC<{ image: any; copy: string }> = (props) => {
  return (
    <div className="bg-white rounded-lg p-4 w-1/6 max-lg:w-full max-lg:flex text-center grid items-center justify-items-center text-blue-900 font-bold max-lg:mb-2 max-lg:text-sm">
      {/* <Image src={props.image} alt="" className="max-lg:pr-2" width={20} height={10}></Image> */}
      <p className="color-blue">{props.copy}</p>
    </div>
  );
};

export default WhyUsCard;
