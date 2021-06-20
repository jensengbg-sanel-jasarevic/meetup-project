#### URL
https://meet-up-tdd.herokuapp.com/

### Github repo
https://github.com/jensengbg-sanel-jasarevic/meetup-tdd-assignment

### Berätta vilken molntjänst du använt för att publicera. Länk till den publicerade appen - alltså en länk som man kan klicka på för att köra appen
Jag har använt Heroku som molntjänst där jag publicerar en Docker container med appen.

### Berätta vilka level ups du har implementerat
API/databas<br/> 
Jag använde Web Storage API för att spara data lokalt i webbläsaren. Exempel mär man anmäler sig till events i appen sparas event i local storage.

Systemtester och integrationstester<br/>
Jag har testat routing, om man klickar på en knapp så kontrollera att man kommer till rätt sida.

Acceptanstester<br/>
Om man vill lämna en kommentar i appen testar att först skriva text i textfältet sedan kontrollera om datan har sparats i komponent.

### Demonstrera att du kan resonera och reflektera kring kursinnehållet, genom att berätta vad du tycker är det viktigaste kursen har handlat om.
Allting har varit viktigt och jag kommer ha nytta av det i framtiden. Men det som jag mest lärt mig och använt mest under kursen är att jobba med versionshantering (git) och göra enhetstester för programkod. Det har varit enklare om man jobbar med bransch i git, när man vill lägga till något i en app kan man skapa en branch och jobba i den, sedan när man är färdig kan man inkludera den i dev/main branch. Det som git mest underlättar med är om man jobbar med flera personer, man bygger tillsammans en app genom att jobba i egna branch. Under projektet gör man merge av sina bransch till dev/main om det blir problem med att inkludera dem kan man lösa det genom att ta bort den programkod som det är konflikt med.

Genom TDD har jag fått mer inblick i hur exempel Vue fungerar genom använda mig av metoden red, green, refactor i TDD. Man testar mycket i appen, förstår och blir mer säker att koden är stabil när tester är gröna. Det har varit lättare att lägga till ny funktion i efterhand i komponenter eftersom om man testat viktiga delar så får man upp de fel direkt och kan åtgärda. Ibland flyttar man vissa funktioner från en komponent till in en annan för att enhetstesterna ska vara säkrare.  Om man tänker först vad man vill testa i en komponent blir det lättare att bygga den sedan. Man gör mindre komponenter som inte är komplicerade i Vue, det blir enklare att skriva testerna och bygga appen.
TDD har man mycket nytta av, man blir bättre på att skriva kod och även om man bygger en app med andra personer så kan de lättare förstå vad appen gör, den blir mer underhållsbar. Man kan säga att om en app blir större blir det mer viktigt med TDD.

### Om du vill - skriv upp stegen du går igenom för att bygga en Docker container och publicera appen
1. Inkluderar Dockerfile & heroku.yml i projektet<br/>
2. Bygger Docker image i heroku.yml <br/>
3. Gör "Dockerize Vue.js App" genom demo exempel som finns på Vue<br/>
4. Installerar npm http-server till dependencies i package.json<br/>
5. Tar bort "-g http-server" från RUN npm install på Dockerfile<br/>
6. Lägger till "start": "http-server /app/dist" i package.json<br/>
7. Skapa en app på Heroku<br/>
8. Lägger Github som Deployment method & gör connect med den repository från Github som jag vill ha för appen<br/>
9. Sist gör Deploy Branch<br/>
