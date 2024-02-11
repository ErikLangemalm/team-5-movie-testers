### Vad testar vi?
Vi testar följande features:
Ticket booking: Användaren kan boka biljetter med olika pris.
Movie trailers/Movie details: Användaren kan se trailers av filmer samt kortfattning av film. 
Booking and booking history: Inloggad användare kan se sina bokningar och bokningshistorik.
Unique Url: Att alla filmer har sina egna unika Url så att man kan skicka det vidare till sina vänner eller bokmärka och komma till samma film.
Booking Comfirmation: Användaren får en boknigsbekräftelse efter bokningen och kan även kollla på deras sida genom att logga in.
Prototyp: Som systemägare vill man gärna se en prototyp på hur sin produkt ser ut. I detta fall vill man se minst 5 filmer med 30 olika datum över 2 biosalonger.
* Berätta om feature A
  * Eventuellt beskriv scenarier kortfattat.
* Inloggning samt bli medlem.
  * Eventuellt beskriv scenarier kortfattat.
  * Scenarier relaterade till inloggningen omfattar skapa nytt konto samt testnning av inmatningsfälten för nya medlemmar.
* Berätta om feature C
  * Eventuellt beskriv scenarier kortfattat.

 ### Vad visar testerna på - finns det buggar/fel i produkten? 
 De flesta scenarier går igenom utan fel, dock visar följande scenarier på buggar/fel i produkten
Ticket booking feature/aktiva bookningar:
*När man loggar in och skriv E-post och lösenord och tryck "Enter" det går inte logga in(måste trycka på logga in knapp)
*När man ska boka och kommer till sista steget där man trycker in sin mail för att kunna få en bekräftelse kan man inte trycka på enter utan (man måste trycka på Boka knappen) 
*När boka man plats och kör test, det går och see booking bekräftelse. Men nästa gång test ska inte köras för att plats är redan bookade. Om jag avboka plats den visar fortfarande reserverad,då test will fail.
*Det visar inte mina aktiva bookningar.
*Webbsajten kraschar om clickar på login knapp utan "cy.wait".

 * Scenariobeskrivning... samt vilken fel bugg
 * scenariot angående ålders restriktioner på vissa filmer visar klart och tydligt att implementationen för att förhindra barn att se olämpliga filmer inte är där.
 Testet visar på att alternativet för barn fortfarande är där på filmer med åldersgräns. Manuell testning visar också att bokningen går att genomföra med barn upp till 12 samt enbart barn upp till 12 år kan boka och reservera platser för filmer som inte är lämpliga för barn.
* Eventuellt beskriv scenarier kortfattat.

### Saker vi inte hunnit testa
Movie trailer feature:
*Det var lite knepig för att hitta några elementer i iframe tex kunnde inte hitta "watch trailer on youtubue" elementen.
*Inte hunnit att testa negativa scenarier
*Inte kunnat testa scenarion med 30 olika filmer eftersom sidan är designat att visa de 4 första tillgängliga

  * Vi hade velat lägga till följande scenario... därför att.
* Under feature B:
  * Vi hade velat lägga till följande scenario... därför att.
