# Landrup Dans
Victor Permild, WU13

## Tech stack
- **Nextjs** som frontend framework (JS, ikke TS)
- **API** som datakilde (Express/SQL-baseret)
- **Tailwind** til styling
- Diverse dependencies/libraries
    - **Zod** til datavalidering
    - **SplideJS** til slider/karrusel
    - **React Toastify** til toast beskeder
    - **React Icons** til ikoner
    - **lodash** til hjælpefunktioner (fx. sammenligning af objekter)

## Projektets struktur og perspektivering heraf

**Nextjs** er et Javascript framework, som er komponent-baseret. Jeg har valgt Nextjs, fordi jeg finder mig godt tilpas i en React-baseret kontekst, men også godt kan lide at der taget en række strukturelle valg på forhånd - fx. synes jeg godt om, at Nextjs bliver leveret med router som default, og jeg synes filbaseret routing giver god mening ift. projektets arkitektur og skalering ifm. dette. Desuden giver next mulighed for at afvikle kode og komponenter på serveren, hvilket åbner op for mange fordele, bl.a. ift. sikkerhed, caching og loading-tider. Nextjs er en moderne industristandard, som er søgt på arbejdsmarkedet. Det er nemt at bygge oven på, både med egen kode og de store antal af biblioteker der lavet af store brede community af adopters. Frameworket udførligt dokumenteret til et virvar af use-cases, og selv hvor docs ikke rammer plet, er det ofte nemt at finde løsninger på problemer mange andre også har stået i tidligere, fx. på stackoverflow og lignende fora.

**Struktur:**
Projektet er bygget i en klassisk Nextjs-struktur, der næsten følger standardinsdtillingerne når man skaber et nyt next project med ```create next-app@latest```. Det eneste jeg har valgt anderledes, er at undlade at bruge typescript, som jeg ellers er fan af funktionelt.
Projektet gør stor brug af genbrugelige komponenter. Alt lige fra hjælpekomponenter som Page Containers og Sektioner med overskrifter *MERE OM DETTE* 
Helt basalt er projektet opbygget efter konventionen i NextJS hvor hvert route har et mappenavn (som ender med at blive navnet på routen i browseren), med en page.jsx i hver mappe. Ligeledes er komponenter opbygget på en måde hvor mappens navn beskriver hvad komponentet er til for, og hver mappe har en index.jsx i sig, der indholder koden til at rendere det. I visse tilfælde ligger der også andre filer i disse komponentmapper. Det kan fx. være hvis en server action hører til et komponent, eller hvis ét komponent består af flere relaterede underkomponenter.

Alt under /home er beskyttet af proxy
Noget med at det gør det nemt at tilføje nye vires/elementer + Skalering
Astro/Svelte

**Libraries:** Til flere af hjemmesidens features, har jeg valgt at bruge libraries. Bl.a. har jeg brugt SplideJS til testimonial-karrusellen på forsiden, og React Toastify til fx. at give brugeren besked om at en form er sendt succesfuldt afsted (nyhedsbrev/kontaktformular). 

Selvom disse elementer ikke ville have været svære at kode selv, synes jeg det værd at overveje at stå på skuldrene af andre. Ved at vælge libraries får jeg en masse ting foræret out-of-the-box, som jeg nok ikke ville have prioriteret hvis jeg havde kodet det fra bunden selv. Bl.a. er det out-of-the-box muligt at dragge/swipe i min testimonial-karrusel, og det var også supernemt at tilføje en progress-bar, der viser hvor lang til der går før slidet automatisk skifter. 

Brugen af libraries gør det på mange måde nemmere for udviklere at blive introduceret eller genintroduceret til projektet. Alt der er inkluderet er vedligeholdt og godt dokumenteret, hvilket sparer tid ift. til at introducere andre til ens selvskrevne kode alle steder. Der er selvfølgelig også potentielle ulemper, da man ligesom gør sig selv afhængig af andres kode. Vi må holde øje med at bibliotekerne ikke uddør/breaker vores kode, og ikke er mål for sikkerhedsangreb/brud. Alt dette er ikke rigtig et problem i vores lille opgave-miljø, men jeg vil tilføje at det tog mig lidt længere end normalt, lige at sætte mig ind i hvordan mine slides/toasts kunne styles, når man skulle overskrive normal-indstillingerne.



## Kodeeksempel

[dal.js](./src/lib/dal.js)
```javascript
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getAllEvents() {
  const cookieStore = await cookies();
  // guard clause
  if(!cookieStore.has('accessToken')) return redirect("/no-access");

  const response = await fetch("http://localhost:4000/events");
  const data = await response.json();
  return data;
}
```

(Hvad er det?)
Jeg har lavet en funktion, som er en server action.
(Hvad er formålet?)
Formålet er at hente data fra et API og returnere dataen.
(Hvordan sker det?)
Jeg bruger `fetch`-APIet til at lave en HTTP Request til web-APIet og jeg har lavet en guard clause i toppen af funktionen, som tjekker om `accessToken`-cookien findes.

(gå meget i detaljer med et enkelt element fra eksemplet)

## Perspektivering
