### Vad testar vi?
Vi testar följande features:
Ticket booking: Användaren kan boka biljetter med olika pris.
Movie trailers/Movie details: Användaren kan se trailers av filmer samt kortfattning av film. 
Booking and booking history: Inloggad användare kan se sina bokningar och bokningshistorik.
* Berätta om feature B
  * Eventuellt beskriv scenarier kortfattat.
* Berätta om feature C
  * Eventuellt beskriv scenarier kortfattat.

 ### Vad visar testerna på - finns det buggar/fel i produkten? 
 De flesta scenarier går igenom utan fel, dock visar följande scenarier på buggar/fel i produkten
Ticket booking feature/aktiva bookningar:
*När man loggar in och skriv E-post och lösenord och tryck "Enter" det går inte logga in(måste trycka på logga in knapp)
*När boka man plats och kör test, det går och see booking bekräftelse. Men nästa gång test ska inte köras för att plats är redan bookade. Om jag avboka plats den visar fortfarande reserverad,då test will fail.
*Det visar inte mina aktiva bookningar.
*Webbsajten kraschar om clickar på login knapp utan "cy.wait".

* Eventuellt beskriv scenarier kortfattat.

### Saker vi inte hunnit testa
Movie trailer feature:
*Det var lite knepig för att hitta några elementer i iframe tex kunnde inte hitta "watch trailer on youtubue" elementen.
*Inte hunnit att testa negativa scenarier

  * Vi hade velat lägga till följande scenario... därför att.
* Under feature B:
  * Vi hade velat lägga till följande scenario... därför att.
