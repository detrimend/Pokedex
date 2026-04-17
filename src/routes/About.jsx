import "./About.css"

export default function About() {
  return (
    <section className="about-page">
      <div className="about-card">
        <h1>About</h1>
        <p>
          <b>Currently a work in progress</b>
        </p>
        <p>
          This project is based on the requirements from{" "}
          <a
            href="https://github.com/KasperKnop/WEB2/tree/main/08%20Assignment%202"
            target="_blank"
            rel="noreferrer"
          >
            WEB2 assignment 2
          </a>
          . <br />
          The goal is to build a static website, which is deployed on Github
          Pages, and which uses a public API to display information about
          something - in this case, Pokemon within a Pokedex.
        </p>
        <p>
          The website is built using React and Vite, and the source code can be found in{" "}
          <a
            href="https://github.com/detrimend/Pokedex"
            target="_blank"
            rel="noreferrer"
          >
            this Github repository
          </a>
        </p>
      </div>
    </section>
  )
}
