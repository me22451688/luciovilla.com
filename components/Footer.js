import React from 'react'

export default function Footer() {
  const ExternalLink = ({ href, children }) => (
    <a className="" target="_blank" rel="noopener noreferrer" href={href}>
      {children}
    </a>
  )
  return (
    <footer className="max-w-4xl mx-auto w-full mb-8 text-center">
      <hr className="w-full border-1 border-gray-200 mb-8" />
      <div className="w-full pb-16 text-gray-500 hover:text-gray-600 transition">
        Site built with Next.js and Tailwind CSS. View{' '}
        <a
          href="https://github.com/luciovilla/luciovilla.com"
          className="underline text-gray-500 hover:text-gray-600 transition"
          target="_blank"
          rel="noopener"
        >
          source
        </a>
        .
      </div>
    </footer>
  )
}
