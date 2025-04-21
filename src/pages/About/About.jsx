import HeroImg from "@/assets/images/hero.png";
import GlBajajLogo from "@/assets/images/image.png"; 

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Passionate Developer | Problem Solver | Fast Learner
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="Harsh Raj profile"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white text-justify">
                Hello! I'm Harsh Raj, a recent Computer Science graduate from GL BAJAJ College of Technology and Management. {" "}
                <span className="font-bold text-white">
                  With expertise in Java, JavaScript, Android development, and modern web technologies
                </span>
                , I bring strong technical foundations and a passion for creating efficient digital solutions.
              </p>
              <p className="text-white text-justify">
                Through my academic projects, I've developed:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Interactive Android applications with Java</li>
                  <li>Responsive web applications using JavaScript and React</li>
                  <li>Backend systems with Java</li>
                  
                </ul>
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white text-justify">
                    What sets me apart is my commitment to continuous learning and problem-solving approach. 
                    I've independently mastered multiple technologies through online courses and hands-on projects, 
                    demonstrating my ability to quickly adapt to new challenges. My academic projects showcase 
                    my attention to detail, clean coding practices, and ability to deliver complete solutions.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Key Strengths:
                    </cite>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-sm rounded-full bg-blue-900/50 text-blue-300">Quick Learner</span>
                      <span className="px-3 py-1 text-sm rounded-full bg-purple-900/50 text-purple-300">Problem Solver</span>
                      <span className="px-3 py-1 text-sm rounded-full bg-green-900/50 text-green-300">Clean Coder</span>
                      <span className="px-3 py-1 text-sm rounded-full bg-amber-900/50 text-amber-300">Team Player</span>
                    </div>
                    <div className="flex items-center gap-2 pt-3">
                      <img
                        className="h-5 w-fit"
                        src={GlBajajLogo}
                        alt="GL BAJAJ Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">GL BAJAJ College of Technology and Management</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}