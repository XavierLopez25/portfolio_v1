import Link from 'next/link';
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiSpotifyFill,
  RiTwitterXFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href="https://www.youtube.com/channel/UCcrqfSQQBxFzZ29Jot2VG2g"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all transition-300"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href="https://www.instagram.com/nathan_nugget/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all transition-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href="https://open.spotify.com/playlist/4dNEmKQs6zm2Frp7zrNqwB?si=a09052b636ec4ec7"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all transition-300"
      >
        <RiSpotifyFill />
      </Link>
      <Link
        href="https://twitter.com/XLopezN8"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all transition-300"
      >
        <RiTwitterXFill />
      </Link>
      <Link
        href="https://github.com/XavierLopez25"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all transition-300"
      >
        <RiGithubFill />
      </Link>
      <Link
        href="https://www.linkedin.com/in/xavierlopezn8/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all transition-300"
      >
        <RiLinkedinBoxFill />
      </Link>
    </div>
  );
};

export default Socials;
