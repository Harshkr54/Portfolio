import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";

const projects = [

  {
    title: "A sleek portfolio built with React and Tailwind CSS ",
    description:
      "A sleek portfolio built with React and Tailwind CSS to showcase your skills, projects, and experience in a modern design.",
    src: "tree.jpg",
    link: "https://i.postimg.cc/J75CKyrs/Annotation-2025-04-01-203959.png",
    color: "#8f89ff",
    githubLink: "https://github.com/seraprogrammer/portfolio",
    liveLink: "https://codervai.vercel.app",
  },


  {
    title: "Interactive Music Player Web App 🎵",
    description:
      "This Music Player Web Application is a feature-rich and responsive audio streaming platform developed using HTML, CSS, and JavaScript. It allows users to browse a playlist, play/pause tracks, skip songs, and adjust volume seamlessly. The app displays dynamic song information including cover images, titles, artists, and descriptions. It features an interactive UI with real-time seek bar updates, a playlist view, and animated play controls. The project also utilizes localStorage (optional enhancement) for settings retention and supports responsive design for optimal experience across devices.",
    src: "tree.jpg",
    link: "https://private-user-images.githubusercontent.com/143226354/433693284-11fac768-8177-4665-b089-db99c4188a6a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDUwMzYwMzAsIm5iZiI6MTc0NTAzNTczMCwicGF0aCI6Ii8xNDMyMjYzNTQvNDMzNjkzMjg0LTExZmFjNzY4LTgxNzctNDY2NS1iMDg5LWRiOTljNDE4OGE2YS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxOVQwNDA4NTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mNmZlZGNiMzc5ZGNiNThlOTdkYzVmNjhmMzkxZDNhMDFiNjE3YzgwYWM4M2M5ZjJkYmVmNDhkNjIzMzE5NGU3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Lwudue8I8T9BNZNVFuIBxNSqTbFuY9n_abN74fUymdI",
    color: "#8f89ff",
    githubLink: "https://github.com/Harshkr54/Spotify_clone",

  },




  {
    title: "🎮 Stump Game – A Fun Web Game",
    description: `- Classic Bat-Ball-Stump game like Rock-Paper-Scissors.
  - Built with HTML, CSS, and JavaScript.
  - Simple UI with responsive design.
  - Scoreboard to track wins, losses & ties.
  - Random computer choice with game logic.
  - Reset option & result display with emojis.`,
    src: "Stump_Game.png",
    link: "https://github.com/Harshkr54/Stump-Game/blob/main/Stump_Game.png?raw=true",
    color: "#5196fd",
    githubLink: "https://github.com/Harshkr54/Stump-Game/tree/main"
  },
  
  
  {
    title: "🚀 Smart To-Do List Web App with Dark Mode",
    description:
      "🚀 This To-Do List Web Application is a dynamic and interactive productivity tool built with HTML, CSS, and JavaScript. It helps users manage their daily tasks efficiently by allowing them to add, edit, delete, and track tasks. The application uses localStorage to persist data and includes a Dark Mode toggle for better user experience and accessibility. 💻✨",
    src: "TodoList.png",
    link: "https://private-user-images.githubusercontent.com/143226354/433710022-56c31cc7-26e0-41f7-afe9-f6964a633c45.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDUwMzgwOTQsIm5iZiI6MTc0NTAzNzc5NCwicGF0aCI6Ii8xNDMyMjYzNTQvNDMzNzEwMDIyLTU2YzMxY2M3LTI2ZTAtNDFmNy1hZmU5LWY2OTY0YTYzM2M0NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxOVQwNDQzMTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zOWE0OGVkZjJiM2RmMjNlMzM2ZGYxMjg0ZmE5OTYxMmVmNTJmOWUyNmVhZTQ5ZDM4NDRlZTUyODI1Yzc2Y2YzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.VZpPxlZ9NG3zHfBT1oLM7t94gvYdPwILqft2h9bb52I",
    color: "#fff",
    githubLink: "https://github.com/Harshkr54/Todo-List/tree/main",
    
  },


  {
    title: "Interactive Digital Clock with Google Calendar Holiday Integration 🔥",
    description:
      "This interactive digital clock displays both analog and digital time with smooth animations while automatically showing holidays and special occasions. It integrates with Google Calendar's public holiday API to fetch real-time festival data for India, with a fallback to locally stored celebrations when offline. The project features a clean, responsive design that works across devices, with special handling for Valentine's Week celebrations. Built with vanilla HTML, CSS, and JavaScript, the clock showcases API integration, CSS animations, and efficient timekeeping logic. The solution includes smart caching to minimize API calls while maintaining accuracy. Developers can easily customize the holiday list, styling, or integrate different country calendars by modifying the configuration. 💻✨",
    src: "clock.jpg",
    link: "https://private-user-images.githubusercontent.com/143226354/435357051-51fdf961-a5da-44ba-91f4-9292065ea653.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDUwMzc5NzYsIm5iZiI6MTc0NTAzNzY3NiwicGF0aCI6Ii8xNDMyMjYzNTQvNDM1MzU3MDUxLTUxZmRmOTYxLWE1ZGEtNDRiYS05MWY0LTkyOTIwNjVlYTY1My5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxOVQwNDQxMTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wYTFmNjdkNTEzMWNiOTA1MzUzZmFlZTY4MWY5OTBkOTg1MTg1Mjk4NzdjZDhiNmUxNzcxMmExOGNjOTE4OGM3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.iLBIuyWkSWHMlw3DURNAmjAhMLWBNo6sfMxHYZyN0z0",
    color: "#ed649e",
    githubLink: "https://github.com/Harshkr54/Clock/tree/main",
    
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
              
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Code
                  </span>
                </motion.a>

               
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
