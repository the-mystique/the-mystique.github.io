function Home() {
  return (
    <main className="home">

      <div className="hero">

        <div className="badge">
          Personal Website
        </div>

        <h1>
          Doer Myst
        </h1>

        <h2>
          Builder.
          <br />
          Product thinker.
          <br />
          Experimenter.
        </h2>

        <p>
          Exploring technology, products, systems,
          and ideas that improve how humans work and live.
        </p>

        <div className="actions">
          <button>
            Explore my work
          </button>

          <button className="secondary">
            Contact me
          </button>
        </div>

      </div>


      <div className="profile-card">

        <div className="avatar">
          DM
        </div>

        <div>
          <h3>
            Currently
          </h3>

          <p>
            Building ideas,
            learning systems,
            and creating experiments.
          </p>
        </div>

      </div>

    </main>
  )
}

export default Home
