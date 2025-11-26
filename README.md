# tyomaestro-resursointi

Älykäs työmaan hallintasovellus, joka yhdistää resurssisuunnittelun, työajanseurannan ja sähköiset työmääräykset yhteen mobiili- ja web-ratkaisuun.

---

## Sisällysluettelo

- [Aloitus](#aloitus)
  - [Edellytykset](#edellytykset)
  - [Asennus](#asennus)
- [Käytettävissä olevat skriptit](#käytettävissä-olevat-skriptit)
- [Suositellut VS Code -laajennukset](#suositellut-vs-code--laajennukset)
- [Ympäristömuuttujat](#ympäristömuuttujat)
- [Docker-käyttö](#docker-käyttö)

---

## Teknologiapino

- Docker
- Mock Service Worker
- Next.js
- Shadcn/UI
- Tailwind CSS
- TypeScript

---

## Aloitus

Nämä ohjeet auttavat sinua saamaan projektin käyttövalmiiksi paikallista kehitystä varten.

### Edellytykset

Varmista, että seuraavat työkalut on asennettu koneellesi:

- [Node.js](https://nodejs.org/) (versio 18 tai uudempi)
- `npm` (asentuu yleensä Node.js:n mukana tai voidaan asentaa erikseen)
- Docker (jos käytät Docker-työnkulkua)

### Asennus

1.  **Kloonaa repositorio**

    ```bash
    git clone <repositoryn-url>
    cd tyomaestro-resursointi
    ```

2.  **Asenna riippuvuudet**

    ```bash
    npm install
    ```

3.  **Luo paikallinen ympäristötiedosto**
    Kopioi `.env.example`-tiedosto ja nimeä se `.env`:ksi. Täytä tarvittavat ympäristömuuttujat.
    ```bash
    cp .env.example .env
    ```

## Käytettävissä olevat skriptit

- `npm npm start`: Käynnistää sovelluksen kehitystilassa.
- `npm test`: Suorittaa projektin testit.
- `npm run lint`: Tarkistaa koodin laadun ESLint-sääntöjen mukaisesti.
- `npm run format`: Muotoilee koko projektin koodin Prettier-sääntöjen mukaisesti.
- `npm run build`: Rakentaa sovelluksen tuotantoversiota varten.
  | `dev` | `npm run dev` | Käynnistää kehityspalvelimen (esim. `npm run dev`). |
  | `build` | `npm run build` | Rakentaa sovelluksen tuotantoversioon. |
  | `lint` | `npm run lint` | Tarkistaa koodin laadun ESLintillä. |
  | `test` | `npm run test` | Suorittaa testit. |

## Suositellut VS Code -laajennukset

Tämä projekti sisältää listan suositelluista Visual Studio Code -laajennuksista, jotka parantavat kehityskokemusta. Kun avaat projektin ensimmäistä kertaa VS Codessa, editorin pitäisi automaattisesti ehdottaa niiden asentamista (`.vscode/extensions.json`).

Jos haluat asentaa ne manuaalisesti, avaa komentopaletti (`Ctrl+Shift+P` tai `Cmd+Shift+P`) ja suorita komento: `Extensions: Show Recommended Extensions`.

## Ympäristömuuttujat

Projekti käyttää ympäristömuuttujia konfiguraatioiden, kuten API-avainten ja tietokantayhteyksien, turvalliseen hallintaan. Luo `.env`-tiedosto projektin juureen `.env.example`-mallin pohjalta ja määritä tarvittavat arvot.

Tämä on kriittisen tärkeää tietoturvan kannalta, sillä se estää salaisten tietojen päätymisen versionhallintaan (Git). `.env`-tiedosto on oletuksena estetty `.gitignore`-tiedostossa.

Tässä on esimerkki siitä, miltä `.env`-tiedosto voisi näyttää:

```dotenv
# Tietokannan yhdistämis-URL (esim. PostgreSQL)
# ÄLÄ KOSKAAN kovakoodaa tätä suoraan koodiin!
DATABASE_URL="postgresql://user:password@host:port/database"

# Kolmannen osapuolen API-avain (esim. Sentry, Stripe, Google Maps)
SENTRY_DSN="https://your-sentry-dsn-url"

# NextAuth.js vaatimat salaisuudet
# Generoi salaisuus komennolla: openssl rand -base64 32
NEXTAUTH_SECRET="luo-tahan-pitka-satunnainen-merkkijono"
NEXTAUTH_URL="http://localhost:3000"

# Muuttuja, joka on saatavilla myös selaimessa (Next.js-spesifinen)
# Huomaa NEXT_PUBLIC_ -etuliite!
NEXT_PUBLIC_API_BASE_URL="http://localhost:3000/api"
```

## Docker-käyttö

Voit rakentaa ja käynnistää projektin Docker-kontissa käyttämällä Docker Composea. Tämä on suositeltu tapa varmistaa yhtenäinen ajoympäristö.

```bash
docker-compose up --build
```
