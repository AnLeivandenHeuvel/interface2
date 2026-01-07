import express from 'express';
import 'dotenv/config';
// 2. Pas je poort variabele aan
// process.env bevat nu jouw variabelen uit het .env bestand
// De || (OF) operator zorgt voor een fallback als het bestand mist
const port = process.env.PORT || 3000;

const app = express(); // Dit is jouw server applicatie

// Alles in de map 'public' is nu bereikbaar voor de browser
app.use(express.static('public'));

// Route voor Home ('/')
app.get('/', (req, res) => {
    // res.send stuurt direct tekst of HTML terug.
    // Express regelt zelf de headers (envelop)!
    res.send('<h1>Welkom Home!</h1>');
    });
    // Route voor About ('/about')
    app.get('/about', (req, res) => {
    res.send('<h1>Over Ons</h1><p>Met Express gaat dit veel sneller.</p>');

        // Route voor JSON API ('/api/users')
app.get('/api/users', (req, res) => {
    const users = [
    { id: 1, name: 'Piet' },
    { id: 2, name: 'Jan' }
    ];
    // Stuur de data terug als JSON
    res.json(users);
    });

    // 404 Afhandeling (Als geen enkele route hierboven matcht)
app.use((req, res) => {
    res.status(404).send('Oeps, 404! Pagina niet gevonden.');
    });
    // Zet de server aan
    app.listen(port, () => {
    console.log(`Express server draait op http://localhost:${port}`);
    });
    });

