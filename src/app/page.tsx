export default function Home() {
  return (
    <main className="container">
      <div className="card">
        <h1 className="title">Tervetuloa uuteen projektiisi!</h1>

        <p className="subtitle">
          Projekti on luotu onnistuneesti. Voit aloittaa muokkaamalla tätä
          tiedostoa: <code>src/app/page.tsx</code>
        </p>

        <div className="grid">
          <a
            href="https://github.com/your-repo/pyjs-create-javascriptproject"
            className="grid-item"
          >
            <h2>Dokumentaatio &rarr;</h2>
            <p>
              Tutustu työkalun komentoihin ja ominaisuuksiin ajamalla{" "}
              <code>--info</code>.
            </p>
          </a>

          <a
            href="#"
            className="grid-item"
            onClick={(e) => {
              e.preventDefault();
              alert("Suorita komento terminaalissa!");
            }}
          >
            <h2>Lisää ominaisuuksia &rarr;</h2>
            <p>
              Lisää uusia kirjastoja ja työkaluja interaktiivisesti komennolla{" "}
              <code>add</code>.
            </p>
          </a>

          <a
            href="#"
            className="grid-item"
            onClick={(e) => {
              e.preventDefault();
              alert("Suorita komento terminaalissa!");
            }}
          >
            <h2>Tarkista projektin tila &rarr;</h2>
            <p>
              Analysoi projektisi terveys ja laatu komennolla{" "}
              <code>doctor</code>.
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
