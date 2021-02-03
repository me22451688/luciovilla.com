import React from 'react'

export default function Topper() {
  return (
    <div className="relative pt-16 pb-32 flex items-center w-full min-h-80">
      <div className="container mx-auto px-4 w-full md:w-4/5">
        <div className="flex flex-wrap ">
          <div className="w-full px-4">
            <span className="font-semibold text-xl text-gray-400">Hola,</span>
            <h1 className="mt-1">
              <span className="font-semibold text-5xl">I'm Lucio</span>
              <p className="mt-1 text-lg text-gray-700 max-w-md">
                – a designer who codes. Passionate about telling engaging stories online. Currently
                a Design Editor at The Washington Post helping the News Design team advance in
                digital storytelling, mentoring designers and fostering collaboration across the
                newsroom.
              </p>
            </h1>

            <div className="flex mt-3 w-full">
              <div className="text-sm text-gra">
                <a className="underline" href="mailto:contact@luciovilla.com">
                  {' '}
                  Email
                </a>{' '}
                |{' '}
                <a className="underline" href="https://github.com/luciovilla">
                  Github
                </a>{' '}
                |{' '}
                <a className="underline" href="https://twitter.com/luciovilla">
                  Twitter
                </a>{' '}
                |{' '}
                <a className="underline" href="https://www.linkedin.com/in/luciovilla">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
