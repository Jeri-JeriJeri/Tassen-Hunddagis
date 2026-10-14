# Hunddagis Tassen

### Utvecklare:
Bojan (Jeri-JeriJeri)

### Instruktioner:
Starta index.html med live server

# Idéen innan jag börjar koda
Sidan kommer ha 5 sektioner
- Öppettider
- Tjänster
- Omdömen
- Boka
- Kontakt 

Tjänster kommer innebär
- Hunddagis heldag
- Hunddagis halvdag
- Pensionat ( hunden får sova över)
- Klippkort
- Hämting och lämning
  
Jag kommer använda anchor länkar för att hoppa till sektionerna istället för att skapa ny webbsida per sektion.

Jag kör med Spår A och ha Omdöme sektion. Mitt tanke är att ha en .js fil där jag kan exportera personens namn och text. Kanske lägga till rating t.ex 4.5/5 osv

Nav kommer vara display flex eftersom det blir lättare och enklare att få listan sitta på höger sidan medans home knappen sitter på vänster sidan

Header kommer ha position sticky. Så när man skrollar ner, knapparna finns alltid.

Sidan kommer vara mobile-first och sen kommer jag lägga till media queries för att få den se bättre ut för en tablet och dator 

# Början av kodering
Använder grid och grid-area på main för att lättare sätta varsin sektion i sin egen plats 

# body
Hittade font på google fonts, kopierade deras <link> kod och klistrade in i <header> och sen bytte hela dokumentets font-family till denna font (Oswald)

# .start
Jag använde position relative så att jag kan sätta position absolute på videon. Och position absoloute med hjälp av z-index hjälper mig sätta videon som bakgrund. Och för att få texten och rubriken att visas, körde jag z-index 1 på dem. Och sist object-fit: cover använde jag för att få den exakt bredd och lång som .start

### header
Jag behövde lägga till z-index: 2 till header eftersom den försvinner när jag skrollar ner på grund av z-indexen som är på videon. 

# Open
I funktionen getTime variablerna som hämtar timmar, minuter och sekunder måste vara en string för att få padStart att funka, så jag läggde dem i en String().
padStart(2, "0") gör så att om det finns mindre tecken än 2 -> lägga till "0" (Om klockan är mindre än 10).
Samma för getDate

If satsen för isOpenedOrClosed kör så här "Om dagen är från 1-5 (mån -> fre) och tiden är från 7 till 18" -> Skriv över #open-close till open
"Om dagen är 6 (lör) och tiden är mellan 9 och 14 skriv över #open-close till open" Annars står det Ständgt. Ingen if sats för söndag eftersom tassen är stängd

# Öppettider
För öppettider valde jag att skapa 2 tabeller. th elementen sitter till vänster medan td elementen sitter till höger

# Tjänster
Varje tjänst sitter i sitt egen article, men alla har samma klass. På mobil skärm sitter de i kolumn, men på större skärmar finns det 3 rader (2 tjänster per rad)

# Omdöme
Jag skapade jsonRecensioner.js och skrev arrayen med objekterna inne eftersom det blir mycket text och det är lättare om man inte ser stora strängar i koden. 
Exporterade arrayen (jsonRecensioner) och importerade den i app.js. När man klickar på knappen finns det 4 p element som skrivs över via DOM. 

### jsonRecensioner
Jag skapade variabeln i så att jag kan hoppa mellan array indexen. i = 0 så när man klickar första gången kommer deT första objektet skrivas ut på HTML dokumentet jsonRecensioner[0] och när man klickar igen blir det jsonRecensioner[1] då texten från den andra recensionen skrivs ut på HTML dokumentet

# Bokningsförfrågan 
Bokningsförfrågan kommer vara en form. Javascript kommer hämta hundens namn och datumet och spara de i localStorage.

### addLocalStorage:
 Först hämtar datan från de 2 inputs. Sen sparas de i ett objekt (bokning) som har 2 properties för både namn och datumet.
De läggs till arrayen bokningar via .push(). Efter det sparas arrayen till localStorage och använde jag JSON.stringify() så att man kan läsa det som sparades. Sedan körs loadLocalStorage() så att listan uppdateras i real-time. 

### loadLocalStorage: 
Skapade varibeln sparadeBokningar som hämtar sparade items. If satsen kollar om nånting finns i variabeln (om du har sparat nånting förut). 
Annars listan kommer vara tomt

### forEach 
För varje "bokningar" item skapas en li element med value av hundensNamn och Datumet. Och sist läggs li elementet som barn till ul elementet
Jag använde DOMContentLoaded och loadLocalStorage() på document.addEventListener för att visa items som är sparade i localStorage när sidan laddas. 

### Form
Form har e.preventDefualt gör så att webbsidan laddas inte om när man trycker på knappen "Boka"

### Ta bort knappen
li.remove och btn remove raderar själva boxen direkt när man trycker på avboka knappen, annars skulle man behöva refresha för att se dem borta.

Knapp eventlistener: filterar bort de som har samma index. Så om en bokning för exempel har indexen 3: 3 !== 3 är = false; så den filteras bort och raderas. Sen sparas arrayen igen via localStorage.setItem efter bokningen har raderas

# Footer
Vanlig grid. Sektionen kontakt innebär ett h2 element och div som är flexbox och delar 3 articles med space-evenly. E-post länken öppnar mail appen direkt eftersom jag använde href="mailto:"

# media queries
Skapade media queries för både tablet skärm och dator skärm

# AI använding:
Jag använde ai för object-cover. Jag kunde inte få utseenden som jag ville utan att använda video, så frågade jag hur kan jag ha <video> som ett bakgrund. 
Också får att generera namn, recension och omdöme på omdöme sektionen. Bara texten
