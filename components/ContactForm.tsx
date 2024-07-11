'use client';

import { sendEmail } from '@/utils/send-email';
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export interface FormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}
const Contact = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  async function onSubmit(data: FormData) {
    setIsSubmitting(true);
    await sendEmail(data, reset);
    setIsSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-4 w-full lg:w-3/4">
      <h2 className="text-center antialiased font-mono font-semibold text-4xl mb-3">
        Let&apos;s{" "}
        <span className="text-cyan-300">
          work
        </span>{" "}
        together
      </h2>
      <input
        type="text"
        placeholder="Name"
        className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:border-white bg-black-200 text-white"
        required
        {...register('name')}
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:border-white bg-black-200 text-white"
        required
        {...register('email')}
      />
      <input
        type="text"
        placeholder="Subject"
        className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:border-white bg-black-200 text-white"
        {...register('subject')}
      />
      <textarea
        cols={10}
        rows={5}
        placeholder="Message"
        className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:border-white bg-black-200 text-white"
        required
        {...register('message')}
      ></textarea>
      <div className="w-full">
        <MagicButton
          title={isSubmitting ? "Sending..." : "Send"}
          icon={!isSubmitting && <FaLocationArrow />}
          position="right"
          otherClasses='transform active:scale-105 transition-colors transition-transform duration-150 hover:bg-gradient-to-r from-[#E2CBFF] via-[#393BB2] to-[#E2CBFF]'
        />
      </div>
    </form>
  );
};

export default Contact;
