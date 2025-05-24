export function Links(){
    return(
<header className="text-white">
    <img alt="Alejandro Sánchez" src="../assets/Foto_Profesional_Squared.jpg"
      className="h-[50vh] object-cover mask-radial-at-center mask-radial-from-45% mask-radial-to-80% animate-pulse-fade-in"/>

    <div className="flex flex-col justify-center items-center mb-8 -mt-4">
      <span className="
        text-sky-400 text-xl
        font-mono px-3 py-1
        border border-sky-500/50 rounded-full flex items-center justify-center shadow-sm
        bg-black/65
        cursor-crosshair
        z-10
      ">
        @asperjasp
        <svg className="ml-1 w-5 h-5 text-sky-400 inline" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414L9 11.172l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd" />
        </svg>
      </span>

      <h1 className="text-3xl font-extrabold leading-tight mt-1 font-display">
        Alejandro Sánchez Poveda
      </h1>
    </div>

    <section className="flex gap-2 justify-center">

        {/* Twitch */}
      {/* <a className="bg-purple-100 social-button animate-slide-up-fade" href="https://twitch.tv/asperjasp" target="_blank"
        aria-label="Twitch" title="Ir a Twitch de @asperjasp">
        <svg width="28" height="28">
          <use xlinkHref="./assets/sprite.svg#twitch" />
        </svg>
      </a> */}

      <a className="bg-zinc-900 social-button animate-slide-up-fade animate-delay-100" href="https://github.com/asperjasp"
        target="_blank" aria-label="GitHub" title="Ir a GitHub de @asperjasp">
        <svg width="28" height="28">
          <use xlinkHref="./assets/sprite.svg#github" />
        </svg>
      </a>

      {/* <!-- Instagram --> */}
      <a className="bg-purple-100 p-4 size-12 flex items-center justify-center rounded-full" href="https://instragram.com/alejandrosanchezpoveda"
        target="_blank" aria-label="Instagram" title="Ir a Instagram de @asperjasp">
    <svg width="28" height="28"> 
        <use xlinkHref="./assets/sprite.svg#instagram" />
    </svg>
</a>

      {/* <!-- YouTube --> 
      <a className="bg-white social-button animate-slide-up-fade animate-delay-300" href="https://youtube.com/@asperjasp"
        target="_blank" aria-label="YouTube" title="Ir a YouTube de @asperjasp">
        <svg width="28" height="28">
          <use xlinkHref="./assets/sprite.svg#youtube" />
        </svg>
      </a>
*/}
      {/* <!-- X (Twitter) --> */}
      <a className="bg-black social-button animate-slide-up-fade animate-delay-400" href="https://x.com/asperjasp"
        target="_blank" aria-label="X" title="Ir a X de @asperjasp">
        <svg width="28" height="28">
          <use xlinkHref="./assets/sprite.svg#x" />
        </svg>
      </a>

      {/* <!-- LinkedIn --> */}
      <a className="bg-white social-button animate-slide-up-fade animate-delay-500" href="https://linkedin.com/in/asperjasp"
        target="_blank" aria-label="LinkedIn" title="Ir a LinkedIn de @asperjasp">
        <svg width="28" height="28">
          <use xlinkHref="./assets/sprite.svg#linkedin" />
        </svg>
      </a>
    </section>

    <p className="text-midu-lol text-center mt-4 text-sm px-4 text-balance">
      Divulgador de programación, streamer y creador de contenido. Enseñando JavaScript, React, Node.js de forma
      divertida
    </p>

    <main className="pt-4 px-4 pb-16">
      <div className="grid grid-cols-3 grid-rows-2 gap-2 w-full">
        <a href="https://cursoreact.dev" className="
          relative rounded-3xl overflow-hidden
          bg-gradient-to-br from-cyan-900 via-cyan-700 to-cyan-500
          border border-cyan-900
          flex flex-col items-start
          hover:scale-105 hover:contrast-125
          transition
          group
          col-span-2 p-7 min-h-[180px]
        ">
          <span
            className="absolute bottom-2 left-4 font-bold text-2xl group-hover:-translate-y-1 transition-transform">React.js</span>

          <svg
            className="absolute -right-4 -bottom-4 -rotate-6 size-28 group-hover:-rotate-12 group-hover:scale-125 transition-transform"
            width="100" height="100">
            <use xlinkHref="./assets/sprite.svg#react" />
          </svg>

          <span className="absolute top-2 left-4 text-xs border rounded-xl px-1 py-0.5">Curso de +14 clases</span>
        </a>

        <a href="https://midu.link/html" className="
          relative rounded-3xl overflow-hidden
          bg-gradient-to-br from-html via-orange-300 to-white
          border border-html
          flex flex-col items-start
          hover:scale-105 hover:contrast-125
          transition
          group
          col-span-1 p-7 min-h-[180px]
        ">
          <span
            className="absolute bottom-2 left-4 font-bold text-2xl group-hover:-translate-y-1 transition-transform">HTML</span>

          <svg
            className="absolute -right-4 -bottom-4 -rotate-6 size-28 group-hover:-rotate-12 group-hover:scale-125 transition-transform"
            width="100" height="100">
            <use xlinkHref="./assets/sprite.svg#html" />
          </svg>

          <span className="absolute top-2 left-4 text-xs border rounded-xl px-1 py-0.5">Para principiantes</span>
        </a>

        <a href="https://midu.link/html" className="
          relative rounded-3xl overflow-hidden
          bg-gradient-to-br from-[#663399] via-[#8e44ad] to-white
          border border-[#663399]
          flex flex-col items-start
          hover:scale-105 hover:contrast-125
          transition
          group
          col-span-1 p-7 min-h-[180px]
        ">
          <span
            className="absolute bottom-2 left-4 font-bold text-2xl group-hover:-translate-y-1 transition-transform">CSS</span>

          <svg
            className="absolute -right-4 -bottom-4 -rotate-6 size-28 group-hover:-rotate-12 group-hover:scale-125 transition-transform"
            width="100" height="100">
            <use xlinkHref="./assets/sprite.svg#css" />
          </svg>

          <span className="absolute top-2 left-4 text-xs border rounded-xl px-1 py-0.5">Para principiantes</span>
        </a>

        <a href="https://cursoreact.dev" className="
          relative rounded-3xl overflow-hidden
          bg-gradient-to-br from-[#215732] via-[#3C873A] to-[#8CC84B]
          border border-[#215732]
          flex flex-col items-start
          hover:scale-105 hover:contrast-125
          transition
          group
          col-span-2 p-7 min-h-[180px]
        ">
          <span
            className="absolute bottom-2 left-4 font-bold text-2xl group-hover:-translate-y-1 transition-transform">Node.js</span>

          <svg
            className="absolute -right-4 -bottom-4 -rotate-6 size-28 group-hover:-rotate-12 group-hover:scale-125 transition-transform"
            width="100" height="100">
            <use xlinkHref="./assets/sprite.svg#node" />
          </svg>

          <span className="absolute top-2 left-4 text-xs border rounded-xl px-1 py-0.5">Curso de +14 clases</span>
        </a>
      </div>
    </main>

  </header>

    )
}