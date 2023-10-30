import Footer from "./Footer";

const About = () => {
  return (
    <section className="bg-[#2D112B] absolute top-[99%] inset-x-0 min-h-screen z-10 ">
      <div className="flex max-sm:flex-col items-end max-sm:justify-center justify-between gap-8 py-40 px-24 max-sm:px-8">
        <div className="sm:w-2/3 flex flex-col">
          <span className="bg-[#0e050d] rounded-lg w-fit text-5xl font-['Bebas_Neue'] underline decoration-[5px] text-[#E4AEA7]">
            <h1 className="bg-[#2D112B] rounded-t-lg border border-b-0 border-[#E4AEA7] flex items-center px-4 py-2 -translate-x-2 -translate-y-2">
              About me
            </h1>
          </span>
          <div className="rounded-lg bg-[#0e050d] w-fit">
            <span className="bg-[#2D112B] rounded-b-lg rounded-tr-lg border border-[#E4AEA7] flex flex-col items-center px-4 py-2 -translate-x-2 -translate-y-2 gap-2">
              <p className="text-[#E4AEA7] text-lg">
                Enter the dynamic world of Asrullah, a true modern Renaissance
                soul who masterfully navigates multiple domains. As a runner, he
                sprints towards his goals with relentless determination,
                conquering both the solitude of early morning jogs and the
                fierce competition of races. His commitment to the sport is a
                testament to discipline and perseverance, inspiring others to
                chase their dreams.
              </p>
              <p className="text-[#E4AEA7] text-lg">
                Beyond the track, Asrullah transforms into an engineering
                virtuoso. He approaches complex challenges with the precision
                and innovation of a seasoned problem-solver, constantly pushing
                the boundaries of what's possible. Simultaneously, he's a gifted
                graphic designer, breathing life into ideas through his artistic
                flair. Whether it's crafting mesmerizing visuals or shaping
                compelling narratives, Asrullah's creative prowess knows no
                bounds. His journey is a vivid illustration of the limitless
                power of passion, leaving an indelible mark in every endeavor he
                undertakes, proving that one can excel in diverse spheres and
                inspire others to do the same.
              </p>
            </span>
          </div>
        </div>
        <div className="max-sm:-order-1 rounded-lg bg-[#0e050d] max-sm:w-full">
          <span className="bg-[#2D112B] rounded-lg border border-[#E4AEA7] flex justify-center items-center p-4 -translate-x-2 -translate-y-2">
            <img
              className="rounded-full"
              src="https://picsum.photos/300"
              alt=""
            />
          </span>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
