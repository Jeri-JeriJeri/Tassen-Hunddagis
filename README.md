## Hunddagis Tassen

Sidan kommer ha 5 sektioner
- Tjänster
- Öppettider
- Omdömen
- Boka
- Kontakt

Tjänster kommer innebär
- Hunddagis heldag
- Hunddagis halvdag
- Pensionat ( hunden får sova över)
- Klippkort
- Hämting och lämning (inte säkert kanske kommer ändra den)

De kommer sitta i denna ordning. Jag kommer använda ankor länkar för att hoppa till sektionerna istället för att skapa ny webbsidan per sektion.

Jag kör med Spår A och ha Omdöme sektion. Mitt tanke är att ha en JSON fil där personens namn och text skrivs ut. Kanske lägga till rating t.ex 4.5/5 osv

Nav kommer vara display flex eftersom det blir lättare och enklare att få listan sitta på höger sidan medans home knappen sitter på vänster sidan

Header kommer ha position sticky. Så när man skrollar ner, knapparna finns alltid.

Sidan kommer vara mobile-first och sen kommer jag lägga till media queries för att få den se bättre ut för en tablet och dator (stor skärm)
# Början av kodering
Använder clamp(1rem, 2rem, 2.5rem) på nav p för responsivitet. 1rem blir minsta storleken "hem" knappen kan vara

Använder grid och grid-area på main för att lättare sätta varsin sektion i sin egen plats

Använder div för att sätta tjänster i boxes 

I funktionen getTime variablerna som hämtat timmar, minuter och sekunder måste vara en string för att få padStart att funka, så jag läggde dem i en String().
padStart(2, "0") gör så att om det finns mindre tecken än 2 -> lägga till "0"
Samma för getDate

If satsen för isOpenedOrClosed kör så här "Om dagen är från 1-5 och tiden är från 7 till 18" -> Skriv över #open-close till open
"Om dagen är 6 och tiden är mellan 9 och 14 skriv över #open-close till open" Annars står det Ständgt. Ingen if sats för söndag eftersom tassen är ständgt 

# Bokningsförfrågan 
Bokningsförfrågan kommer vara en form. Javascript kommer hämta hundens namn och datumet och spara den via localStorage.

## addLocalStorage:
 Först hämtar datan från de 2 inputs. Sen sparas de i ett objekt (bokning) och de läggs till arrayen bokningar via .push(). Efter det sparas arrayen till localStorage och använde jag JSON.stringify() så att man kan läsa det som sparades. Sedan körs loadLocalStorage() så att listan uppdateras i real-time. 

## loadLocalStorage: 
Skapade varibeln sparadeBokningar som hämtar sparade items. If satsen kör om nånting finns i variabeln. Om ja skickas localStorage items som ett objekt

Annars listan kommer vara tomt

## forEach 
För varje bokningar item skapas en li element med value av hundensNamn och Datumet. Och sist läggs li elementet som barn till ul elementet


Jag använde DOMContentLoaded och loadLocalStorage() på document.addEventListener för att visa items som är sparade i localStorage när sidan laddas. 

## Ta bort knappen
li.remove och btn remove raderar själva boxen direkt när man trycker på avboka knappen, annars skulle man behöva refresha för att se dem borta.
Knapp eventlistener: filterar bort de som har samma index. Så om en bokning för exempel har indexen 3. 3 !== 3 är = false; så den filteras bort och raderas. Sen sparas arrayen igen via localStorage.setItem efter bokningen har raderas

# .start
Jag använde position relative så att jag kan sätta position absolute på videon. Och position absoloute med hjälp av z-index hjälper mig sätta videon som bakgrund. Och för att få texten och rubriken att visas, körde jag z-index 1 på dem. Och sist object-fit: cover; för att få den exakt bredd och lång som .start

## Recensioner
Recensionerna sitter i ett array som innehåller objekt.
Jag använde event listener som kollar på variabeln i. Varje gång man trycker, i.värden skrivs ut i HTML och sen kör +1 i arrayen för att hoppa till nästa person. Och det finns 3 i.värde som är namn, recension och rating
### AI använding:
Jag använde ai för object-cover

Också får att generera namn, recension och omdöme på omdöme sektionen. Bara texten