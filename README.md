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
## Början av kodering
Använder clamp(1rem, 2rem, 2.5rem) på nav p för responsivitet. 1rem blir minsta storleken "hem" knappen kan vara

Använder grid och grid-area på main för att lättare sätta varsin sektion i sin egen plats

Använder div för att sätta tjänster i boxes 

I funktionen getTime variablerna som hämtat timmar, minuter och sekunder måste vara en string för att få padStart att funka, så jag läggde dem i en String().
padStart(2, "0") gör så att om det finns mindre tecken än 2 -> lägga till "0"
Samma för getDate

If satsen för isOpenedOrClosed kör så här "Om dagen är från 1-5 och tiden är från 7 till 18" -> Skriv över #open-close till open
"Om dagen är 6 och tiden är mellan 9 och 14 skriv över #open-close till open" Annars står det Ständgt. Ingen if sats för söndag eftersom tassen är ständgt 

