function AboutSection() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-slate-600" id="about">
      <div className="container  mx-auto px-4">
        <article className="max-w-3xl  mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">About Me</h2>
          <div className="bg-white p-8 dark:bg-slate-800 dark:text-white rounded-lg shadow-md">
            <p className="mb-4">
              Hi, I&apos;m <strong>Kym Rhys Mallari</strong>, a passionate front-end and mobile developer with
              over 2 years of experience in creating beautiful, responsive, and
              user-friendly applications. My journey in tech started with a
              fascination for how digital products can impact people&apos;s lives,
              and it has evolved into a career dedicated to crafting exceptional
              user experiences.
            </p>
            <p className="mb-4">
              My approach to development is centered around three core
              principles:
            </p>
            <ul className="list-disc list-inside mb-4 duration-0">
              <li>
                User-Centric Design: Every line of code I write is with the
                end-user in mind.
              </li>
              <li>
                Clean and Maintainable Code: I believe in writing code that&apos;s
                not just functional, but also easy to understand and maintain.
              </li>
              <li>
                Continuous Learning: In the ever-evolving world of tech, I&apos;m
                committed to staying updated with the latest trends and best
                practices.
              </li>
            </ul>
            <p>
              When I&apos;m not coding, you can find me exploring new hiking trails,
              experimenting with new recipes in the kitchen, or contributing to
              open-source projects. I&apos;m always open to new challenges and
              opportunities to grow both as a developer and as a person.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default AboutSection;
