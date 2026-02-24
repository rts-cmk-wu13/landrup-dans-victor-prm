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
**Framework** <br>
Nextjs er et komponent-baseret Javascript framework. Jeg har valgt Nextjs, fordi jeg finder mig godt tilpas i en React-baseret kontekst, men også godt kan lide at der taget en række strukturelle valg på forhånd - fx. synes jeg godt om, at Nextjs bliver leveret med router som default, og jeg synes filbaseret routing giver god mening ift. projektets arkitektur og skalering ifm. dette. Desuden giver next mulighed for at afvikle kode og komponenter på serveren, hvilket åbner op for mange fordele, bl.a. ift. sikkerhed, caching og loading-tider. Nextjs er en moderne industristandard, som er søgt på arbejdsmarkedet. Det er nemt at bygge oven på, både med egen kode og de store antal af biblioteker der lavet af store brede community af adopters. Frameworket udførligt dokumenteret til et virvar af use-cases, og selv hvor docs ikke rammer plet, er det ofte nemt at finde løsninger på problemer mange andre også har stået i tidligere, fx. på stackoverflow og lignende fora.

**Struktur:** <br>
Projektet er bygget i en klassisk Nextjs-struktur, der næsten følger standardinsdtillingerne når man skaber et nyt next project med ```create next-app@latest```. Det eneste jeg har valgt anderledes, er at undlade at bruge typescript, som jeg ellers er fan af funktionelt.

Projektet gør stor brug af genbrugelige komponenter. Alt lige fra hjælpekomponenter som Page Containers og Sektioner med overskrifter *MERE OM DETTE* 
Helt basalt er projektet opbygget efter konventionen i NextJS hvor hvert route har et mappenavn (som ender med at blive navnet på routen i browseren), med en page.jsx i hver mappe. Ligeledes er komponenter opbygget på en måde hvor mappens navn beskriver hvad komponentet er til for, og hver mappe har en index.jsx i sig, der indholder koden til at rendere det. I visse tilfælde ligger der også andre filer i disse komponentmapper. Det kan fx. være hvis en server action hører til et komponent, eller hvis ét komponent består af flere relaterede underkomponenter.

Projektets "dashboard"-views er beskyttet af en ``proxy.js``, der navigerer brugeren til auth-logic hvis ikke de er logget ind. Jeg har valgt at tilføje ``/activities``-routen ind under denne proxy, selvom det på opgave-beskrivelsen måske kunne lyde som om denne route kunne være offentlig (mest fordi denne route var en del af footeren i disse views og ikke andre).


**Libraries:** <br>
Til flere af hjemmesidens features, har jeg valgt at bruge libraries. Bl.a. har jeg brugt SplideJS til testimonial-karrusellen på forsiden, og React Toastify til fx. at give brugeren besked om at en form er sendt succesfuldt afsted (nyhedsbrev/kontaktformular). 

Selvom disse elementer ikke ville have været svære at kode selv, synes jeg det værd at overveje at stå på skuldrene af andre. Ved at vælge libraries får jeg en masse ting foræret out-of-the-box, som jeg nok ikke ville have prioriteret hvis jeg havde kodet det fra bunden selv. Bl.a. er det out-of-the-box muligt at dragge/swipe i min testimonial-karrusel, og det var også supernemt at tilføje en progress-bar, der viser hvor lang til der går før slidet automatisk skifter. 

Brugen af libraries gør det på mange måde nemmere for udviklere at blive introduceret eller genintroduceret til projektet. Alt der er inkluderet er vedligeholdt og godt dokumenteret, hvilket sparer tid ift. til at introducere andre til ens selvskrevne kode alle steder. Der er selvfølgelig også potentielle ulemper, da man ligesom gør sig selv afhængig af andres kode. Vi må holde øje med at bibliotekerne ikke uddør/breaker vores kode, og ikke er mål for sikkerhedsangreb/brud. Alt dette er ikke rigtig et problem i vores lille opgave-miljø, men jeg vil tilføje at det tog mig lidt længere end normalt, lige at sætte mig ind i hvordan mine slides/toasts kunne styles, når man skulle overskrive normal-indstillingerne.

Projektets ensartede struktur, den udbredte brug af komponenter og hjælpefunktioner, samt inklusionen af libraries er med til at gøre appen skalérbar. Det tog en smule længere til at komme fra start, men så snart en god handfuld komponenter var lavet, begyndte det at tage fart, og især de sidste dage op til aflevering var det nemt at være produktiv. I projektets nuværende stand, vil jeg vove at påstå at det skulle være meget ligetil at tilføje nye views/pages/komponenter herfra, samt meget nemmere at lave yderligere interaktioner API'et.

## Ekstraopgave
Jeg har løst ekstra opgave C - forblive logget ind med cookies <br>

NB! Der er en bug der kan ske i min UserContext efter man er logget ind. Hvis man navigerer tilbage på /home routen, får man en error jeg ikke nåede at løse. Tror det noget med et redirect der går galt. Normalt kan man bare genindlæse siden, og så kan man bruge appen igen.

## Kodeeksempel
Jeg synes selv det er smart løst hvordan vi i koden tilmelder/framelder brugere. Vi her deler jeg både noget frontendkode (``details-header/index.jsx``), og noget backend-kode i form at den action der tilhører dette component (``details-header/action.js``).

[Details Hero](./next-app/app/_components/views/home/details-hero/index.jsx)

```javascript
export default function DetailsHero({ activity, img }) {
    //Get current profile data to compare against activity data
    const {refresh, activities, age, id } = useProfileContext();
    const [state, formAction, isPending] = useActionState(addRemoveUser, {});

    useEffect(() => {
        if (state?.success) {
            toast.success(
                userIsEnrolled
                    ? "Du er nu frameldt!"
                    : "Du er nu tilmeldt!"
            );
             refresh();
        }
    }, [state]);

    //Check if user is already enrolled to class
    const userIsEnrolled = activities.some(act => act.id === Number(activity.id));
    //Check that user is within target group for class
    const userIsOfAge = (age >= activity.minAge && age <= activity.maxAge)

    return (
        ...
            <form className="justify-self-end place-self-end m-8 absolute" action={formAction}>
                {/* Three hidden inputs to pass userId, activityId and isEnrolled to formData Object*/}
                <input type="hidden" name="userId" value={id} />
                <input type="hidden" name="activityId" value={activity.id} />
                <input
                    type="hidden"
                    name="isEnrolled"
                    value={userIsEnrolled}
                />
                <ButtonPrimary
                    {/* Three-way fork of label results*/}
                    label={userIsOfAge ?
                        (!userIsEnrolled ? "Tilmeld" : "Frameld") :
                        "Du er ude af aldersgruppen"}
                    className={"ml-auto px-8"}
                    {/* Disable button if user is not within target group */}
                    disabled={!userIsOfAge}
                />
            </form>
        ...
    )
}
```

[Details Action](./next-app/app/_components/views/home/details-hero/action.js)

```javascript
"use server"
import z from "zod";
import { addRemoveUserSchema } from "@/app/_lib/schemas";
import { fetchFromAPI } from "@/app/_lib/dal"; //General purpose fetch helper function
import { revalidatePath } from "next/cache";

export default async function addRemoveUser(prevState, formData) {
    const values = {
        activityId: formData.get("activityId"),
        userId: formData.get("userId"),
        isEnrolled: formData.get("isEnrolled") === "true",
    };

    const validate = addRemoveUserSchema.safeParse(values);
    if (!validate.success) {
        return {
            values,
            errors: z.flattenError(validate.error).fieldErrors,
        };
    }

    /* Since endpoint is the same for both add/remove users to class, 
    we can simply change the http method by looking at isEnrolled */
    const method = values.isEnrolled ? "DELETE" : "POST";

    const result = await fetchFromAPI(
        method,
        `/api/v1/users/${values.userId}/activities/${values.activityId}`,
        null,
        true // token is passed to headers in fetchFromAPI-helper funciton if this argument is true
    );

    // Revalidate paths
    revalidatePath("/home/activities");
    revalidatePath(`/home/activities/${values.activityId}`);
    revalidatePath("/home/profile");

    return {
        //use success signal to send toast/refresh page
        success: true,
        object: result
    }

}
```

