import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-950 text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row px-4">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">BlazeAt</h2>
          <p className="mt-2 text-sm text-neutral-400">
            Automate Your Work Efficiently
          </p>
        </div>
        <div className="flex flex-col items-center mt-4 md:mt-0 md:flex-row gap-6">
          <a href="/about" className="text-neutral-400 hover:text-white transition">About Us</a>
          <a href="/contact" className="text-neutral-400 hover:text-white transition">Contact</a>
          <a href="/privacy" className="text-neutral-400 hover:text-white transition">Privacy Policy</a>
        </div>
        <div className="flex mt-4 md:mt-0 gap-6">
          <a href="https://github.com/vsvishalsharma/blazeAt" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/vsvishalsharma777/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition">
            <FaLinkedin size={24} />
          </a>
          <a href="https://x.com/vishal_shrmaa" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
      <div className="text-center text-sm text-neutral-400 mt-4">
        &copy; {new Date().getFullYear()} BlazeAt. All rights reserved.
      </div>
    </footer>
  );
}
