### Vad testar vi?
Vi testar följande features:
Ticket booking: Användaren kan boka biljetter med olika pris.
Movie trailers/Movie details: Användaren kan se trailers av filmer samt kortfattning av film. 
Booking and booking history: Inloggad användare kan se sina bokningar och bokningshistorik.
* Berätta om feature A
  * Eventuellt beskriv scenarier kortfattat.
* Inloggning samt bli medlem.
  * Eventuellt beskriv scenarier kortfattat.
  * Scenarier relaterade till inloggningen omfattar skapa nytt konto samt testning av inmatningsfälten för nya medlemmar.
* newAccount feature:
  Scenario testar att skapa ett nytt konto, försöka skapa ett konto som redan existerar samt ifall epost adressen följer rätt format.
* SeatBooking:
  Test scenarierna testar funktionaliteten kring biljett bokning både att det går att boka ett säta samt att inte kunna boka fler platser än vad som finns i salongen
* ageRestriction feature:
  Test scenarierna kollar ifall alternativet att boka biljett för barn på åldersbegränsade filmer finns eller ej.

* availablePlats (US_3): I det här scenariot testas förekomsten av tillgängliga platser så att personen kan välja den plats av intresse

* seatsBooking  (US_6): I scenariot ser man att reserverade platser inte kan väljas, vilket eliminerar möjligheten för mer än en person som köper biljetten med samma platsnummer

* livePlats   (US_14): Här testas tittarens möjlighet att direkt se det totala antalet ledig platser.

 ### Vad visar testerna på - finns det buggar/fel i produkten? 
 De flesta scenarier går igenom utan fel, dock visar följande scenarier på buggar/fel i produkten
Ticket booking feature/aktiva bookningar:
*När man loggar in och skriv E-post och lösenord och tryck "Enter" det går inte logga in(måste trycka på logga in knapp)
*När boka man plats och kör test, det går och see booking bekräftelse. Men nästa gång test ska inte köras för att plats är redan bookade. Om jag avboka plats den visar fortfarande reserverad,då test will fail.
*Det visar inte mina aktiva bookningar.
*Webbsajten kraschar om clickar på login knapp utan "cy.wait".

 * Scenariobeskrivning... samt vilken fel bugg
 * scenariot angående ålders restriktioner på vissa filmer visar klart och tydligt att implementationen för att förhindra barn att se olämpliga filmer inte är där.
 Testet visar på att alternativet för barn fortfarande är där på filmer med åldersgräns. Manuell testning visar också att bokningen går att genomföra med barn upp till 12 samt enbart barn upp till 12 år kan boka och reservera platser för filmer som inte är lämpliga för barn.
 * 


### Saker vi inte hunnit testa
Movie trailer feature:
  * Det var lite knepig för att hitta några elementer i iframe tex kunnde inte hitta "watch trailer on youtubue" elementen.
  * Inte hunnit att testa negativa scenarier

  * Vi hade velat lägga till följande scenario... därför att.
newAccount feature:
  * newAccount feature var ganska svår att implementera då tidigare inputs i fälten sparas och kommer med på senare tester.
  Därför skulle vi gärna velat lägga till fler tester som testar input fälten när man skapar konto samt loggar in

  * 