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