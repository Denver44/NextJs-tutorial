import Image from 'next/image';

const Loading = () => {
  return (
    <div>
      <Image
        src="/Infinity.svg"
        alt="Loading Spinner"
        width={100}
        height={100}
      />
    </div>
  );
};

export default Loading;
