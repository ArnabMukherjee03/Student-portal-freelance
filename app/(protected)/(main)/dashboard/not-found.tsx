import Link from 'next/link';
import { BsEmojiSmileUpsideDown } from "react-icons/bs";
 
export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <BsEmojiSmileUpsideDown className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the Emoployee Details</p>
    </main>
  );
}