import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none relative overflow-hidden gradient-mask-b-90">
      <Image
        src={'/avatar.png'}
        width={737}
        height={678}
        alt="Avatar"
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
