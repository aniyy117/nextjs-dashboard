'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-5rem)] flex-col justify-center text-center">
      <h1 className="mb-4 text-5xl font-semibold text-blue-600 md:text-8xl lg:text-9xl">
        404
      </h1>
      <p className="mb-4 text-xl text-gray-600 md:text-3xl lg:text-3xl">
        {"Oops! Looks like you're lost."}
      </p>
      <div className="animate-bounce">
        <svg
          className="mx-auto h-16 w-16 text-blue-600 lg:h-20 lg:w-20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </div>
      <p className="mt-4 text-gray-600">
        {"Let's get you back"}{' '}
        <Link href="/" className="text-blue-500">
          home
        </Link>
        .
      </p>
    </div>
  );
}
