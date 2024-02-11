### Vad testar vi?
Vi testar följande features:
Filmsortrting: kunna se tillgängliga filmer på ett viss datum 
Inloggning feature: Kunna ta del av avbokningssystem samt bokningshistorik 
Avbokningssystem: Kunna avboka filmer flera dagar inna eventuell datum 
Ticket booking: Användaren kan boka biljetter med olika pris.
Movie trailers/Movie details: Användaren kan se trailers av filmer samt kortfattning av film. 
Booking and booking history: Inloggad användare kan se sina bokningar och bokningshistorik.
* Berätta om feature A
  * Eventuellt beskriv scenarier kortfattat.
* Inloggning samt bli medlem.
  * Eventuellt beskriv scenarier kortfattat.
  * Scenarier relaterade till inloggningen omfattar skapa nytt konto samt testning av inmatningsfälten för nya medlemmar.
* Berätta om feature B
* Berätta om feature C
  * Eventuellt beskriv scenarier kortfattat.

 ### Vad visar testerna på - finns det buggar/fel i produkten? 
 De flesta scenarier går igenom utan fel, dock visar följande scenarier på buggar/fel i produkten
Ticket booking feature/aktiva bookningar:
*När man loggar in och skriv E-post och lösenord och tryck "Enter" det går inte logga in(måste trycka på logga in knapp)
*När boka man plats och kör test, det går och see booking bekräftelse. Men nästa gång test ska inte köras för att plats är redan bookade. Om jag avboka plats den visar fortfarande reserverad,då test will fail.
*Det visar inte mina aktiva bookningar.
*Webbsajten kraschar om clickar på login knapp utan "cy.wait".
*Man kan inte använda sig avboknings systemet då det är för få filmer under vissa datum då tyder det att man inte har tillgång till avbokningsystem beroende på hur nära datumet är, så då kommer avbokningstestet faila då det finns för få filmer att avboka och allt hamnar i bokningshistorik istället 
Sidan har ingen sortering när det kommer till själva bokningshistorik det är lite huller om buller.

 * Scenariobeskrivning... samt vilken fel bugg
 * scenariot angående ålders restriktioner på vissa filmer visar klart och tydligt att implementationen för att förhindra barn att se olämpliga filmer inte är där.
 Testet visar på att alternativet för barn fortfarande är där på filmer med åldersgräns. Manuell testning visar också att bokningen går att genomföra med barn upp till 12 samt enbart barn upp till 12 år kan boka och reservera platser för filmer som inte är lämpliga för barn.


### Saker vi inte hunnit testa
Movie trailer feature:
  * Det var lite knepig för att hitta några elementer i iframe tex kunnde inte hitta "watch trailer on youtubue" elementen.
  * Inte hunnit att testa negativa scenarier

Avbokning feature: 
  * Det var svårt att tänka ut hur jag skulle lösa avbokninsproblemet då det inte fanns så många filmer framåt så då hade man inte tid på sig att kunna avboka 

  * Vi hade velat lägga till följande scenario... därför att.
newAccount feature:
  * newAccount feature var ganska svår att implementera då tidigare inputs i fälten sparas och kommer med på senare tester.
  Därför skulle vi gärna velat lägga till fler tester som testar input fälten när man skapar konto samt loggar in
