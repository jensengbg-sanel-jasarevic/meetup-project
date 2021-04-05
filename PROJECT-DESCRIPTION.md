# Individuellt projekt: TDD och Docker
## Byggverktyg

1. [Introduktion](#1-introduktion)
1. [Uppdragsbeskrivning](#2-uppdragsbeskrivning)
1. [Level ups](#3-level-ups)
1. [Inlämning](#4-inlämning)
1. [Bedömning](#5-bedömning)
1. [Appendix: förslag till projektplan](#6-appendix-förslag-till-projektplan)


---
### 1. Introduktion
> *Meetup is about connecting people with something in common. While the connections begin online, the real memories are made at events. Meetup events are real-life gatherings where members and organizers get together to connect, discuss, and practice activities related to their shared interests.*

Du ska bygga en Vue-app för meetups och publicera den i en Docker-container med valfri molntjänst. Användare ska kunna:
+ se kommande meetups,
+ anmäla sig till meetups,
+ recensera en meetup man har varit på.

Se https://www.meetup.com/ för inspiration.


---
### 2. Uppdragsbeskrivning
*Fråga läraren om du vill använda andra tekniker än de som står här.*
#### Vue-app
Du ska bygga en Vue-app med Vue CLI. Exempel på Vue-app med Dockerfile i https://github.com/Jensen-frontend-fwk19g/docker-vue-demo. Appen kan ha datan direkt i Vue, eller hämta den från exempelvis localStorage eller lowdb. Det finns API:er som kan simulera en enkel databas: https://jsonbin.org/, https://jsonbin.io/. Appen ska vara användarvänlig och användbar.


#### TDD
Du ska använda TDD när du utvecklar Vue-appen: red, green, refactor. Skriv enhetstester för varje komponent. Tänk på att mocka eventuell AJAX eller databasanrop.

*Tips! Testa inte allt, utan välj ut det som är viktigast att testa. En tumregel är att testa sådant som man bryr sig om. Exempel: bryr jag mig om vilken text det är på en specifik rubrik? Bryr jag mig om att appen visar rätt antal anmälda på en meetup?*


#### Docker image
Bygg en image som innehåller appen. Observera att du behöver inkludera en webbserver i `Dockerfile` för att appen ska kunna köras. (exempelvis http-server eller nginx)


#### Deploy online
Publicera appen i en Docker container med valfri molntjänst, till exempel Heroku.

[Publicering, miniguide](deploy.md)

*Tips! Vänta inte med deploy till sista dagen. Skriv upp de kommandon du använder för att bygga en image. (Du kommer behöva göra det flera gånger.) Gör en MVP (minimum viable product) och publicera den. Sedan jobbar du vidare tills du är klar med appen.*

---
### 3. Level ups
Implementera level ups för att få högre betyg och lära dig mer.

**Planera event** - användare kan lägga till egna events.

**API/databas** - appen använder en databas eller ett API för att spara events.

**Systemtester och integrationstester** - testa hur komponenter fungerar tillsammans. Till exempel routing: om man klickar på en länk ska en viss komponent visas.

**Acceptanstester** - testa att de övergripande kraven är uppfyllda. Exempelvis kan man testa inloggning genom ett längre test: först skriva in text i textfälten för användare och lösenord &rarr; sedan klicka på knappen &rarr; sedan kontrollera att appen visar att man är inloggad.

**Sortera/filtrera** - använda ett sökfält för att begränsa vilka events som visas.

**Environment** - lägg "hemligheter" i Environment variables i stället för att ha dem direkt i koden. Skriv om det i README.md


---
### 4. Inlämning
Ändra i din README.md-fil enligt nedan. När du är klar laddar du ner repot från GitHub som en zip-fil och laddar upp på LearnPoint.

1. Lägg till ditt namn
1. Länk till ditt GitHub-repo (kontrollera att repot är publikt)
2. Berätta vilken molntjänst du använt för att publicera. Länk till den publicerade appen - alltså en länk som man kan klicka på för att köra appen.
4. Berätta vilka level ups du har implementerat
5. Demonstrera att du kan resonera och reflektera kring kursinnehållet, genom att berätta vad du tycker är det viktigaste kursen har handlat om.
6. Om du vill - skriv upp stegen du går igenom för att bygga en Docker container och publicera appen

*OBS! Testa appen både lokalt och online innan du lämnar in!*


---
### 5. Bedömning
**För godkänt** på projektet ska du
+ lösa uppgiften enligt beskrivningen ovan

**För väl godkänt** på projektet ska du
+ implementera level ups
+ demonstrera att du behärskar kursens innehåll, genom att resonera och reflektera kring kursinnehållet

---
### 6. Appendix: förslag till projektplan
Ett förslag på hur du kan strukturera ditt projekt:
1. börja med en skiss i Figma
2. skapa en tom Vue-app och en Dockerfile
3. välj en molntjänst och publicera appen; skriv upp stegen du gick igenom i Readme (så blir det lätt att göra om dem)
4. börja implementera Vue-appen med hjälp av TDD
5. när du börjar bli färdig: skriv klart readme-filen
6. merge till master, push till gitHub, publicera Docker container i molnet och lämna in

*Lycka till!*

[Toppen av sidan](#1-introduktion)
