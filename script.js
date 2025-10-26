// GLOBAL VARIABLES
let currentTest = null;
let currentQuestion = 0;
let score = 0;
let questions = [];
let selectedGerman = null;
let selectedEnglish = null;
let currentThemes = [];
let isPlayingAll = false;
let currentAudioIndex = 0;
let speechRate = 0.8; // Default speech rate
let currentWords = [];

const wordbankData = [
 
  {
    "German": "Bordkarte",
    "English": "boarding pass",
    "theme": "Airport"
  },
  {
    "German": "abheben",
    "English": "to take off",
    "theme": "Airport"
  },
  {
    "German": "an Bord gehen",
    "English": "to board",
    "theme": "Airport"
  },
  {
    "German": "annullieren",
    "English": "to cancel",
    "theme": "Airport"
  },
  {
    "German": "buchen",
    "English": "to book",
    "theme": "Airport"
  },
  {
    "German": "das Fenster",
    "English": "window",
    "theme": "Airport"
  },
  {
    "German": "das Fliegen",
    "English": "flying",
    "theme": "Airport"
  },
  {
    "German": "das Flugzeug",
    "English": "airplane",
    "theme": "Airport"
  },
  {
    "German": "das Gewicht",
    "English": "weight",
    "theme": "Airport"
  },
  {
    "German": "das Personal",
    "English": "officer",
    "theme": "Airport"
  },
  {
    "German": "das Rad",
    "English": "wheel",
    "theme": "Airport"
  },
  {
    "German": "das Tablett",
    "English": "tray",
    "theme": "Airport"
  },
  {
    "German": "das Ticket",
    "English": "ticket",
    "theme": "Airport"
  },
  {
    "German": "das Ziel",
    "English": "destination",
    "theme": "Airport"
  },
  {
    "German": "der Abflug",
    "English": "departure",
    "theme": "Airport"
  },
  {
    "German": "der Anschluss",
    "English": "connection",
    "theme": "Airport"
  },
  {
    "German": "der Boden",
    "English": "land",
    "theme": "Airport"
  },
  {
    "German": "der Fahrkartenverkäufer",
    "English": "ticket agent",
    "theme": "Airport"
  },
  {
    "German": "der Flugbegleiter",
    "English": "air hostess",
    "theme": "Airport"
  },
  {
    "German": "der Flügel",
    "English": "wing",
    "theme": "Airport"
  },
  {
    "German": "der Flug",
    "English": "flight",
    "theme": "Airport"
  },
  {
    "German": "der Flughafen",
    "English": "airport",
    "theme": "Airport"
  },
  {
    "German": "der Flugsteig",
    "English": "gate",
    "theme": "Airport"
  },
  {
    "German": "der Gang",
    "English": "gangway",
    "theme": "Airport"
  },
  {
    "German": "der Handkoffer",
    "English": "suitcase",
    "theme": "Airport"
  },
  {
    "German": "der Hangar",
    "English": "hangar",
    "theme": "Airport"
  },
  {
    "German": "der Hubschrauber",
    "English": "helicopter",
    "theme": "Airport"
  },
  {
    "German": "der Hubschrauberlandeplatz",
    "English": "helipad",
    "theme": "Airport"
  },
  {
    "German": "der Kopfhörer",
    "English": "headphones",
    "theme": "Airport"
  },
  {
    "German": "der Kopilot",
    "English": "copilot",
    "theme": "Airport"
  },
  {
    "German": "der Metalldetektor",
    "English": "metal detector",
    "theme": "Airport"
  },
  {
    "German": "der Notfall",
    "English": "emergency",
    "theme": "Airport"
  },
  {
    "German": "der Passagier",
    "English": "passenger",
    "theme": "Airport"
  },
  {
    "German": "der Rucksack",
    "English": "rucksack",
    "theme": "Airport"
  },
  {
    "German": "der Sauerstoff",
    "English": "oxygen",
    "theme": "Airport"
  },
  {
    "German": "der Sitz",
    "English": "seat",
    "theme": "Airport"
  },
  {
    "German": "der Start",
    "English": "take off",
    "theme": "Airport"
  },
  {
    "German": "die Ankunft",
    "English": "arrival",
    "theme": "Airport"
  },
  {
    "German": "die Auskunft",
    "English": "information",
    "theme": "Airport"
  },
  {
    "German": "die Besatzung",
    "English": "crew",
    "theme": "Airport"
  },
  {
    "German": "die einfaches Flugticket",
    "English": "single ticket",
    "theme": "Airport"
  },
  {
    "German": "die Kabine",
    "English": "cabin",
    "theme": "Airport"
  },
  {
    "German": "die Reiseagentur",
    "English": "travel agency",
    "theme": "Airport"
  },
  {
    "German": "die Rettungsweste",
    "English": "life preserver",
    "theme": "Airport"
  },
  {
    "German": "die Sicherheitskontrolle",
    "English": "security",
    "theme": "Airport"
  },
  {
    "German": "die Start  und Landebahn",
    "English": "runway",
    "theme": "Airport"
  },
  {
    "German": "die Turbulenzen",
    "English": "turbulence",
    "theme": "Airport"
  },
  {
    "German": "direkt",
    "English": "direct",
    "theme": "Airport"
  },
  {
    "German": "direkt",
    "English": "nonstop",
    "theme": "Airport"
  },
  {
    "German": "erste Klasse",
    "English": "first class",
    "theme": "Airport"
  },
  {
    "German": "fliegen",
    "English": "to fly",
    "theme": "Airport"
  },
  {
    "German": "früh",
    "English": "early",
    "theme": "Airport"
  },
  {
    "German": "Hin und Rückfahrkarte",
    "English": "round trip ticket",
    "theme": "Airport"
  },
  {
    "German": "Höhe",
    "English": "altitude",
    "theme": "Airport"
  },
  {
    "German": "inländisch",
    "English": "domestic",
    "theme": "Airport"
  },
  {
    "German": "international",
    "English": "international",
    "theme": "Airport"
  },
  {
    "German": "kontrollieren",
    "English": "to check bags",
    "theme": "Airport"
  },
  {
    "German": "landen",
    "English": "to land",
    "theme": "Airport"
  },
  {
    "German": "Platz nehmen",
    "English": "to sit down",
    "theme": "Airport"
  },
  {
    "German": "spät",
    "English": "late",
    "theme": "Airport"
  },
  {
    "German": "Stewardess",
    "English": "stewardess",
    "theme": "Airport"
  },
  {
    "German": "Touristenklasse",
    "English": "economy class",
    "theme": "Airport"
  },
  {
    "German": "tragen",
    "English": "to carry",
    "theme": "Airport"
  },
  {
    "German": "verzollen",
    "English": "to declare",
    "theme": "Airport"
  },
  {
    "German": "zollfrei",
    "English": "duty free",
    "theme": "Airport"
  },
  {
    "German": "das Eichhörnchen",
    "English": "squirrel",
    "theme": "Animals,Birds"
  },
  {
    "German": "das Kamel",
    "English": "camel",
    "theme": "Animals,Birds"
  },
  {
    "German": "das Kaninchen",
    "English": "rabbit",
    "theme": "Animals,Birds"
  },
  {
    "German": "das Krokodil",
    "English": "crocodile",
    "theme": "Animals,Birds"
  },
  {
    "German": "das Lama",
    "English": "llama",
    "theme": "Animals,Birds"
  },
  {
    "German": "das Lamm",
    "English": "lamb (animal)",
    "theme": "Animals,Birds"
  },
  {
    "German": "das Pferd",
    "English": "horse",
    "theme": "Animals,Birds"
  },
  {
    "German": "das Reh",
    "English": "deer",
    "theme": "Animals,Birds"
  },
  {
    "German": "das Schaf",
    "English": "sheep",
    "theme": "Animals,Birds"
  },
  {
    "German": "das Schwein",
    "English": "pig",
    "theme": "Animals,Birds"
  },
  {
    "German": "das Stachelschwein",
    "English": "porcupine",
    "theme": "Animals,Birds"
  },
  {
    "German": "das Streifenhörnchen",
    "English": "chipmunk",
    "theme": "Animals,Birds"
  },
  {
    "German": "der Adler",
    "English": "eagle",
    "theme": "Animals,Birds"
  },
  {
    "German": "der Biber",
    "English": "beaver",
    "theme": "Animals,Birds"
  },
  {
    "German": "der Büffel",
    "English": "buffalo",
    "theme": "Animals,Birds"
  },
  {
    "German": "der Dachs",
    "English": "badger",
    "theme": "Animals,Birds"
  },
  {
    "German": "der Esel",
    "English": "donkey",
    "theme": "Animals,Birds"
  },
  {
    "German": "der Falke",
    "English": "hawk",
    "theme": "Animals,Birds"
  },
  {
    "German": "der Fasan",
    "English": "pheasant",
    "theme": "Animals,Birds"
  },
  {
    "German": "der Flamingo",
    "English": "flamingo",
    "theme": "Animals,Birds"
  },
  {
    "German": "der Frosch",
    "English": "frog",
    "theme": "Animals,Birds"
  },
  {
    "German": "der Geier",
    "English": "vulture",
    "theme": "Animals,Birds"
  },
  {
    "German": "der Hahn",
    "English": "rooster",
    "theme": "Animals,Birds"
  },
  {
    "German": "der Hund",
    "English": "dog",
    "theme": "Animals,Birds"
  },
  {
    "German": "der Luchs",
    "English": "lynx",
    "theme": "Animals,Birds"
  },
  {
    "German": "der Maulesel",
    "English": "mule",
    "theme": "Animals,Birds"
  },
  {
    "German": "der Papagei",
    "English": "parrot",
    "theme": "Animals,Birds"
  },
  {
    "German": "der Pelikan",
    "English": "pelican",
    "theme": "Animals,Birds"
  },
  {
    "German": "der Reiher",
    "English": "heron",
    "theme": "Animals,Birds"
  },
  {
    "German": "der Rotluchs",
    "English": "bobcat",
    "theme": "Animals,Birds"
  },
  {
    "German": "der Schwan",
    "English": "swan",
    "theme": "Animals,Birds"
  },
  {
    "German": "der Spatz",
    "English": "sparrow",
    "theme": "Animals,Birds"
  },
  {
    "German": "der Stier",
    "English": "bull",
    "theme": "Animals,Birds"
  },
  {
    "German": "der Storch",
    "English": "stork",
    "theme": "Animals,Birds"
  },
  {
    "German": "der Strauß",
    "English": "ostrich",
    "theme": "Animals,Birds"
  },
  {
    "German": "der Vogel",
    "English": "bird",
    "theme": "Animals,Birds"
  },
  {
    "German": "die Ente",
    "English": "duck",
    "theme": "Animals,Birds"
  },
  {
    "German": "die Eule",
    "English": "owl",
    "theme": "Animals,Birds"
  },
  {
    "German": "die Gans",
    "English": "goose",
    "theme": "Animals,Birds"
  },
  {
    "German": "die Henne",
    "English": "hen",
    "theme": "Animals,Birds"
  },
  {
    "German": "die Katze",
    "English": "cat",
    "theme": "Animals,Birds"
  },
  {
    "German": "die Krähe",
    "English": "crow",
    "theme": "Animals,Birds"
  },
  {
    "German": "die Kröte",
    "English": "toad",
    "theme": "Animals,Birds"
  },
  {
    "German": "die Kuh",
    "English": "cow",
    "theme": "Animals,Birds"
  },
  {
    "German": "die Möwe",
    "English": "seagull",
    "theme": "Animals,Birds"
  },
  {
    "German": "die Nachtigall",
    "English": "nightingale",
    "theme": "Animals,Birds"
  },
  {
    "German": "die Ratte",
    "English": "rat",
    "theme": "Animals,Birds"
  },
  {
    "German": "die Schildkröte",
    "English": "tortoise",
    "theme": "Animals,Birds"
  },
  {
    "German": "die Schlange",
    "English": "snake",
    "theme": "Animals,Birds"
  },
  {
    "German": "die Taube",
    "English": "dove",
    "theme": "Animals,Birds"
  },
  {
    "German": "die Taube",
    "English": "pigeon",
    "theme": "Animals,Birds"
  },
  {
    "German": "die Ziege",
    "English": "goat",
    "theme": "Animals,Birds"
  },
  {
    "German": "das Bettlaken",
    "English": "sheet",
    "theme": "Around the House"
  },
  {
    "German": "das Bild",
    "English": "picture",
    "theme": "Around the House"
  },
  {
    "German": "das Dach",
    "English": "roof",
    "theme": "Around the House"
  },
  {
    "German": "das Gemälde",
    "English": "painting",
    "theme": "Around the House"
  },
  {
    "German": "das Glas",
    "English": "drinking glass",
    "theme": "Around the House"
  },
  {
    "German": "das Haus",
    "English": "house",
    "theme": "Around the House"
  },
  {
    "German": "das Möbel",
    "English": "furniture",
    "theme": "Around the House"
  },
  {
    "German": "das Radio",
    "English": "radio",
    "theme": "Around the House"
  },
  {
    "German": "das Sofa",
    "English": "couch",
    "theme": "Around the House"
  },
  {
    "German": "das Telefon",
    "English": "telephone",
    "theme": "Around the House"
  },
  {
    "German": "das Vbild",
    "English": "image",
    "theme": "Around the House"
  },
  {
    "German": "der Aktenschrank",
    "English": "cabinet",
    "theme": "Around the House"
  },
  {
    "German": "der Besen",
    "English": "broom",
    "theme": "Around the House"
  },
  {
    "German": "der Bücherschrank",
    "English": "bookcase",
    "theme": "Around the House"
  },
  {
    "German": "der Duschvorhang",
    "English": "shower curtain",
    "theme": "Around the House"
  },
  {
    "German": "der Eimer",
    "English": "pail",
    "theme": "Around the House"
  },
  {
    "German": "der Fernseher",
    "English": "television",
    "theme": "Around the House"
  },
  {
    "German": "der Herd",
    "English": "stove",
    "theme": "Around the House"
  },
  {
    "German": "der Kessel",
    "English": "kettle",
    "theme": "Around the House"
  },
  {
    "German": "der Kochtopf",
    "English": "pot",
    "theme": "Around the House"
  },
  {
    "German": "der Kühlschrank",
    "English": "refrigerator",
    "theme": "Around the House"
  },
  {
    "German": "der Mixer",
    "English": "mixer",
    "theme": "Around the House"
  },
  {
    "German": "der Mülleimer",
    "English": "rubbish can",
    "theme": "Around the House"
  },
  {
    "German": "der Schalter",
    "English": "switch",
    "theme": "Around the House"
  },
  {
    "German": "der Schlafsack",
    "English": "sleeping bag",
    "theme": "Around the House"
  },
  {
    "German": "der Spiegel",
    "English": "mirror",
    "theme": "Around the House"
  },
  {
    "German": "der Staubsauger",
    "English": "hoover",
    "theme": "Around the House"
  },
  {
    "German": "der Teller",
    "English": "plate",
    "theme": "Around the House"
  },
  {
    "German": "der Tiefkühler",
    "English": "freezer",
    "theme": "Around the House"
  },
  {
    "German": "der Toaster",
    "English": "toaster",
    "theme": "Around the House"
  },
  {
    "German": "der Trockner",
    "English": "clothes dryer",
    "theme": "Around the House"
  },
  {
    "German": "der Wasserhahn",
    "English": "tap",
    "theme": "Around the House"
  },
  {
    "German": "der Wecker",
    "English": "alarm clock",
    "theme": "Around the House"
  },
  {
    "German": "die Bratpfanne",
    "English": "frying pan",
    "theme": "Around the House"
  },
  {
    "German": "die Brieftasche",
    "English": "wallet",
    "theme": "Around the House"
  },
  {
    "German": "die Dose",
    "English": "tin",
    "theme": "Around the House"
  },
  {
    "German": "die Dusche",
    "English": "shower",
    "theme": "Around the House"
  },
  {
    "German": "die Flasche",
    "English": "bottle",
    "theme": "Around the House"
  },
  {
    "German": "die Garderobe",
    "English": "wardrobe",
    "theme": "Around the House"
  },
  {
    "German": "die Gardine",
    "English": "curtain",
    "theme": "Around the House"
  },
  {
    "German": "die Geschirrspülmaschine",
    "English": "dishwasher",
    "theme": "Around the House"
  },
  {
    "German": "die Handtasche",
    "English": "handbag",
    "theme": "Around the House"
  },
  {
    "German": "die Handtasche",
    "English": "purse",
    "theme": "Around the House"
  },
  {
    "German": "die Kaffeekanne",
    "English": "coffee pot",
    "theme": "Around the House"
  },
  {
    "German": "die Kommode",
    "English": "dresser",
    "theme": "Around the House"
  },
  {
    "German": "die Küche",
    "English": "kitchen",
    "theme": "Around the House"
  },
  {
    "German": "die Lampe",
    "English": "lamp",
    "theme": "Around the House"
  },
  {
    "German": "die Mülltüte",
    "English": "rubbish bag",
    "theme": "Around the House"
  },
  {
    "German": "die Schublade",
    "English": "drawer",
    "theme": "Around the House"
  },
  {
    "German": "die Seife",
    "English": "soap",
    "theme": "Around the House"
  },
  {
    "German": "die Toilette",
    "English": "toilet",
    "theme": "Around the House"
  },
  {
    "German": "die Tür",
    "English": "door",
    "theme": "Around the House"
  },
  {
    "German": "die Uhr",
    "English": "clock",
    "theme": "Around the House"
  },
  {
    "German": "die Vase",
    "English": "vase",
    "theme": "Around the House"
  },
  {
    "German": "die Wand",
    "English": "wall",
    "theme": "Around the House"
  },
  {
    "German": "die Waschmaschine",
    "English": "washing machine",
    "theme": "Around the House"
  },
  {
    "German": "die Zimmerdecke",
    "English": "ceiling",
    "theme": "Around the House"
  },
  {
    "German": "dieTaschenlampe",
    "English": "torch (flashlight)",
    "theme": "Around the House"
  },
  {
    "German": "ground Stockwerk",
    "English": "floor (ground)",
    "theme": "Around the House"
  },
  {
    "German": "Badewanne",
    "English": "bath (tub)",
    "theme": "Around the House"
  },
  {
    "German": "abheben",
    "English": "to withdraw",
    "theme": "Bank"
  },
  {
    "German": "das Bargeld",
    "English": "cash",
    "theme": "Bank"
  },
  {
    "German": "das Darlehen",
    "English": "loan",
    "theme": "Bank"
  },
  {
    "German": "das Geld",
    "English": "money",
    "theme": "Bank"
  },
  {
    "German": "das Girokonto",
    "English": "current account",
    "theme": "Bank"
  },
  {
    "German": "das Kapital",
    "English": "capital",
    "theme": "Bank"
  },
  {
    "German": "das Konto",
    "English": "account",
    "theme": "Bank"
  },
  {
    "German": "das Konto",
    "English": "bank account",
    "theme": "Bank"
  },
  {
    "German": "das Scheckheft",
    "English": "chequebook",
    "theme": "Bank"
  },
  {
    "German": "das Schließfach",
    "English": "safe deposit box",
    "theme": "Bank"
  },
  {
    "German": "das Soll",
    "English": "debt",
    "theme": "Bank"
  },
  {
    "German": "das Sparkonto",
    "English": "savings account",
    "theme": "Bank"
  },
  {
    "German": "das Wechselgeld",
    "English": "change",
    "theme": "Bank"
  },
  {
    "German": "der Alarm",
    "English": "alarm",
    "theme": "Bank"
  },
  {
    "German": "der Anteil",
    "English": "share",
    "theme": "Bank"
  },
  {
    "German": "der Betrag",
    "English": "amount",
    "theme": "Bank"
  },
  {
    "German": "der Einzahlungsbeleg",
    "English": "deposit slip",
    "theme": "Bank"
  },
  {
    "German": "der Geldautomat",
    "English": "ATM",
    "theme": "Bank"
  },
  {
    "German": "der Kassierer",
    "English": "cashier",
    "theme": "Bank"
  },
  {
    "German": "der Kassierer",
    "English": "teller",
    "theme": "Bank"
  },
  {
    "German": "der Käufer",
    "English": "customer",
    "theme": "Bank"
  },
  {
    "German": "der Kauf",
    "English": "purchase",
    "theme": "Bank"
  },
  {
    "German": "der Kontoauszug",
    "English": "bank statement",
    "theme": "Bank"
  },
  {
    "German": "der Kredit",
    "English": "credit",
    "theme": "Bank"
  },
  {
    "German": "der Profit",
    "English": "profit",
    "theme": "Bank"
  },
  {
    "German": "der Reisescheck",
    "English": "travellers cheque",
    "theme": "Bank"
  },
  {
    "German": "der Saldo",
    "English": "account balance",
    "theme": "Bank"
  },
  {
    "German": "der Scheck",
    "English": "cheque",
    "theme": "Bank"
  },
  {
    "German": "der Tresorraum",
    "English": "vault",
    "theme": "Bank"
  },
  {
    "German": "der Tresor",
    "English": "safe",
    "theme": "Bank"
  },
  {
    "German": "der Verlust",
    "English": "loss",
    "theme": "Bank"
  },
  {
    "German": "der Vertrag",
    "English": "contract",
    "theme": "Bank"
  },
  {
    "German": "der Wachmann",
    "English": "guard",
    "theme": "Bank"
  },
  {
    "German": "der Wechselkurs",
    "English": "exchange rate",
    "theme": "Bank"
  },
  {
    "German": "der Wert",
    "English": "value",
    "theme": "Bank"
  },
  {
    "German": "der Zins",
    "English": "interest",
    "theme": "Bank"
  },
  {
    "German": "die Abhebung",
    "English": "withdrawal",
    "theme": "Bank"
  },
  {
    "German": "die Bank",
    "English": "bank",
    "theme": "Bank"
  },
  {
    "German": "die Bilanz",
    "English": "balance",
    "theme": "Bank"
  },
  {
    "German": "die Debitkarte",
    "English": "debit card",
    "theme": "Bank"
  },
  {
    "German": "die Dollar",
    "English": "dollars",
    "theme": "Bank"
  },
  {
    "German": "die Einzahlung",
    "English": "deposit",
    "theme": "Bank"
  },
  {
    "German": "die Ersparnisse",
    "English": "savings",
    "theme": "Bank"
  },
  {
    "German": "die Euros",
    "English": "euros",
    "theme": "Bank"
  },
  {
    "German": "die Gebühr",
    "English": "fee",
    "theme": "Bank"
  },
  {
    "German": "die Hypothek",
    "English": "mortgage",
    "theme": "Bank"
  },
  {
    "German": "die Kreditkarte",
    "English": "credit card",
    "theme": "Bank"
  },
  {
    "German": "die Münze",
    "English": "coin",
    "theme": "Bank"
  },
  {
    "German": "die Rechnung",
    "English": "invoice",
    "theme": "Bank"
  },
  {
    "German": "die Transaktionen",
    "English": "transactions",
    "theme": "Bank"
  },
  {
    "German": "die Überweisung",
    "English": "funds transfer",
    "theme": "Bank"
  },
  {
    "German": "die Unkosten",
    "English": "expenses",
    "theme": "Bank"
  },
  {
    "German": "die Währung",
    "English": "currency",
    "theme": "Bank"
  },
  {
    "German": "die Wechselstube",
    "English": "money exchanger",
    "theme": "Bank"
  },
  {
    "German": "die Zahlung",
    "English": "payment",
    "theme": "Bank"
  },
  {
    "German": "einlösen",
    "English": "to cash",
    "theme": "Bank"
  },
  {
    "German": "einzahlen",
    "English": "to deposit",
    "theme": "Bank"
  },
  {
    "German": "leihen",
    "English": "to borrow",
    "theme": "Bank"
  },
  {
    "German": "leihen",
    "English": "to lend",
    "theme": "Bank"
  },
  {
    "German": "überweisen",
    "English": "to transfer",
    "theme": "Bank"
  },
  {
    "German": "unterzeichnen",
    "English": "to sign",
    "theme": "Bank"
  },
  {
    "German": "wechseln",
    "English": "to change",
    "theme": "Bank"
  },
  {
    "German": "das Bier",
    "English": "beer",
    "theme": "Bevarages"
  },
  {
    "German": "das Mineralwasser",
    "English": "mineral water",
    "theme": "Bevarages"
  },
  {
    "German": "das Tonic Water",
    "English": "tonic water",
    "theme": "Bevarages"
  },
  {
    "German": "das Wasser",
    "English": "water",
    "theme": "Bevarages"
  },
  {
    "German": "der Ananassaft",
    "English": "pineapple juice",
    "theme": "Bevarages"
  },
  {
    "German": "der Apfelmost",
    "English": "cider",
    "theme": "Bevarages"
  },
  {
    "German": "der Apfelsaft",
    "English": "apple juice",
    "theme": "Bevarages"
  },
  {
    "German": "der Eistee",
    "English": "iced tea",
    "theme": "Bevarages"
  },
  {
    "German": "der Fruchtsaft",
    "English": "fruit juice",
    "theme": "Bevarages"
  },
  {
    "German": "der Kaffee",
    "English": "coffee",
    "theme": "Bevarages"
  },
  {
    "German": "der Milchshake",
    "English": "milkshake",
    "theme": "Bevarages"
  },
  {
    "German": "der Orangensaft",
    "English": "orange juice",
    "theme": "Bevarages"
  },
  {
    "German": "der Rotwein",
    "English": "red wine",
    "theme": "Bevarages"
  },
  {
    "German": "der Tee",
    "English": "tea",
    "theme": "Bevarages"
  },
  {
    "German": "der Tomatensaft",
    "English": "tomato juice",
    "theme": "Bevarages"
  },
  {
    "German": "der Wein",
    "English": "wine",
    "theme": "Bevarages"
  },
  {
    "German": "der Weißwein",
    "English": "white wine",
    "theme": "Bevarages"
  },
  {
    "German": "der Wodka",
    "English": "vodka",
    "theme": "Bevarages"
  },
  {
    "German": "die Limonade",
    "English": "lemonade",
    "theme": "Bevarages"
  },
  {
    "German": "die Limonade",
    "English": "soda",
    "theme": "Bevarages"
  },
  {
    "German": "die Milch",
    "English": "milk",
    "theme": "Bevarages"
  },
  {
    "German": "heiße Schokolade",
    "English": "hot chocolate",
    "theme": "Bevarages"
  },
  {
    "German": "das Halstuch",
    "English": "scarf",
    "theme": "Clothing"
  },
  {
    "German": "das Hemd",
    "English": "shirt",
    "theme": "Clothing"
  },
  {
    "German": "das Kleid",
    "English": "dress",
    "theme": "Clothing"
  },
  {
    "German": "das Korsett",
    "English": "corset",
    "theme": "Clothing"
  },
  {
    "German": "das shirt",
    "English": "T-Shirt-T",
    "theme": "Clothing"
  },
  {
    "German": "das Sweatshirt",
    "English": "sweatshirt",
    "theme": "Clothing"
  },
  {
    "German": "das Taschentuch",
    "English": "handkerchief",
    "theme": "Clothing"
  },
  {
    "German": "das Trikot",
    "English": "tights",
    "theme": "Clothing"
  },
  {
    "German": "der Anzug",
    "English": "suit",
    "theme": "Clothing"
  },
  {
    "German": "der Badeanzug",
    "English": "bathing suit",
    "theme": "Clothing"
  },
  {
    "German": "der Bademantel",
    "English": "dressing gown",
    "theme": "Clothing"
  },
  {
    "German": "der BH",
    "English": "bra",
    "theme": "Clothing"
  },
  {
    "German": "der Bikini",
    "English": "bikini",
    "theme": "Clothing"
  },
  {
    "German": "der Gürtel",
    "English": "belt",
    "theme": "Clothing"
  },
  {
    "German": "der Handschuh",
    "English": "glove",
    "theme": "Clothing"
  },
  {
    "German": "der Hut",
    "English": "hat",
    "theme": "Clothing"
  },
  {
    "German": "der Mantel",
    "English": "coat",
    "theme": "Clothing"
  },
  {
    "German": "der Mantel",
    "English": "overcoat",
    "theme": "Clothing"
  },
  {
    "German": "der Overall",
    "English": "overalls",
    "theme": "Clothing"
  },
  {
    "German": "der Pullover",
    "English": "jumper",
    "theme": "Clothing"
  },
  {
    "German": "der Regenschirm",
    "English": "umbrella",
    "theme": "Clothing"
  },
  {
    "German": "der Reißverschluss",
    "English": "zip",
    "theme": "Clothing"
  },
  {
    "German": "der Rock",
    "English": "skirt",
    "theme": "Clothing"
  },
  {
    "German": "der Schlafanzug",
    "English": "pyjamas",
    "theme": "Clothing"
  },
  {
    "German": "der Schlüpfer",
    "English": "knickers",
    "theme": "Clothing"
  },
  {
    "German": "der Strampelanzug",
    "English": "jumpsuit",
    "theme": "Clothing"
  },
  {
    "German": "die Bluse",
    "English": "blouse",
    "theme": "Clothing"
  },
  {
    "German": "die Fliege",
    "English": "bow tie",
    "theme": "Clothing"
  },
  {
    "German": "die Größe",
    "English": "size",
    "theme": "Clothing"
  },
  {
    "German": "die Handschuhe",
    "English": "gloves",
    "theme": "Clothing"
  },
  {
    "German": "die Hose",
    "English": "trousers",
    "theme": "Clothing"
  },
  {
    "German": "die Jacke",
    "English": "jacket",
    "theme": "Clothing"
  },
  {
    "German": "die Jeans",
    "English": "jeans",
    "theme": "Clothing"
  },
  {
    "German": "die Kleidung",
    "English": "clothes",
    "theme": "Clothing"
  },
  {
    "German": "die Krawatte",
    "English": "necktie",
    "theme": "Clothing"
  },
  {
    "German": "die Mütze",
    "English": "cap",
    "theme": "Clothing"
  },
  {
    "German": "die Pantoffeln",
    "English": "slippers",
    "theme": "Clothing"
  },
  {
    "German": "die Sandalen",
    "English": "sandals",
    "theme": "Clothing"
  },
  {
    "German": "die Socken",
    "English": "socks",
    "theme": "Clothing"
  },
  {
    "German": "die Strickjacke",
    "English": "cardigan",
    "theme": "Clothing"
  },
  {
    "German": "die Strümpfe",
    "English": "stockings",
    "theme": "Clothing"
  },
  {
    "German": "die Turnschuhe",
    "English": "running shoes",
    "theme": "Clothing"
  },
  {
    "German": "die Unterhose",
    "English": "briefs",
    "theme": "Clothing"
  },
  {
    "German": "die Wanderschuhe",
    "English": "hiking boots",
    "theme": "Clothing"
  },
  {
    "German": "die Weste",
    "English": "waistcoat",
    "theme": "Clothing"
  },
  {
    "German": "beige",
    "English": "beige",
    "theme": "Colours"
  },
  {
    "German": "blau",
    "English": "blue",
    "theme": "Colours"
  },
  {
    "German": "blond",
    "English": "blond",
    "theme": "Colours"
  },
  {
    "German": "braun",
    "English": "brown",
    "theme": "Colours"
  },
  {
    "German": "die Apfelsine",
    "English": "orange",
    "theme": "Colours"
  },
  {
    "German": "die Farbe",
    "English": "colour",
    "theme": "Colours"
  },
  {
    "German": "dunkel",
    "English": "dark",
    "theme": "Colours"
  },
  {
    "German": "gelb",
    "English": "yellow",
    "theme": "Colours"
  },
  {
    "German": "grau",
    "English": "grey",
    "theme": "Colours"
  },
  {
    "German": "grün",
    "English": "green",
    "theme": "Colours"
  },
  {
    "German": "hell",
    "English": "bright",
    "theme": "Colours"
  },
  {
    "German": "orange",
    "English": "orange",
    "theme": "Colours"
  },
  {
    "German": "rosa",
    "English": "pink",
    "theme": "Colours"
  },
  {
    "German": "rotbraun",
    "English": "maroon",
    "theme": "Colours"
  },
  {
    "German": "rot",
    "English": "red",
    "theme": "Colours"
  },
  {
    "German": "schwarz",
    "English": "black",
    "theme": "Colours"
  },
  {
    "German": "violett",
    "English": "purple",
    "theme": "Colours"
  },
  {
    "German": "weiß",
    "English": "white",
    "theme": "Colours"
  },
  {
    "German": "der Dienstag",
    "English": "Tuesday",
    "theme": "Days"
  },
  {
    "German": "der Donnerstag",
    "English": "Thursday",
    "theme": "Days"
  },
  {
    "German": "der Freitag",
    "English": "Friday",
    "theme": "Days"
  },
  {
    "German": "der Mittwoch",
    "English": "Wednesday",
    "theme": "Days"
  },
  {
    "German": "der Montag",
    "English": "Monday",
    "theme": "Days"
  },
  {
    "German": "der Samstag",
    "English": "Saturday",
    "theme": "Days"
  },
  {
    "German": "der Sonntag",
    "English": "Sunday",
    "theme": "Days"
  },
  {
    "German": "der Tag",
    "English": "day",
    "theme": "Days"
  },
  {
    "German": "das Elternteil",
    "English": "parent",
    "theme": "Family"
  },
  {
    "German": "das Enkelkind",
    "English": "grandchild",
    "theme": "Family"
  },
  {
    "German": "der Bruder",
    "English": "brother",
    "theme": "Family"
  },
  {
    "German": "der Cousin",
    "English": "cousin",
    "theme": "Family"
  },
  {
    "German": "der Ehemann",
    "English": "husband",
    "theme": "Family"
  },
  {
    "German": "der Großvater",
    "English": "grandfather",
    "theme": "Family"
  },
  {
    "German": "der Neffe",
    "English": "nephew",
    "theme": "Family"
  },
  {
    "German": "der Onkel",
    "English": "uncle",
    "theme": "Family"
  },
  {
    "German": "der Papa",
    "English": "dad",
    "theme": "Family"
  },
  {
    "German": "der Sohn",
    "English": "son",
    "theme": "Family"
  },
  {
    "German": "der Stiefbruder",
    "English": "stepbrother",
    "theme": "Family"
  },
  {
    "German": "der Stiefsohn",
    "English": "stepson",
    "theme": "Family"
  },
  {
    "German": "der Stiefvater",
    "English": "stepfather",
    "theme": "Family"
  },
  {
    "German": "der Vater",
    "English": "father",
    "theme": "Family"
  },
  {
    "German": "der Verwandter",
    "English": "relative",
    "theme": "Family"
  },
  {
    "German": "die Braut",
    "English": "bride",
    "theme": "Family"
  },
  {
    "German": "die Ehefrau",
    "English": "wife",
    "theme": "Family"
  },
  {
    "German": "die Eltern",
    "English": "parents",
    "theme": "Family"
  },
  {
    "German": "die Großmutter",
    "English": "grandmother",
    "theme": "Family"
  },
  {
    "German": "die Mama",
    "English": "mum",
    "theme": "Family"
  },
  {
    "German": "die Mutter",
    "English": "mother",
    "theme": "Family"
  },
  {
    "German": "die Nichte",
    "English": "niece",
    "theme": "Family"
  },
  {
    "German": "die Schwester",
    "English": "sister",
    "theme": "Family"
  },
  {
    "German": "die Stiefmutter",
    "English": "stepmother",
    "theme": "Family"
  },
  {
    "German": "die Stiefschwester",
    "English": "stepsister",
    "theme": "Family"
  },
  {
    "German": "die Stieftochter",
    "English": "stepdaughter",
    "theme": "Family"
  },
  {
    "German": "die Tante",
    "English": "aunt",
    "theme": "Family"
  },
  {
    "German": "die Tochter",
    "English": "daughter",
    "theme": "Family"
  },
  {
    "German": "die Verwandte",
    "English": "relatives",
    "theme": "Family"
  },
  {
    "German": "Familie",
    "English": "family",
    "theme": "Family"
  },
  {
    "German": "Bassstimme",
    "English": "bass",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "das Brot",
    "English": "bread",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "das Ei",
    "English": "egg",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "das Essen",
    "English": "food",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "das Fleisch",
    "English": "meat",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "das Gebäck",
    "English": "pastry",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "das Kalbfleisch",
    "English": "veal",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "das Kotelett",
    "English": "cutlet",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "das Olivenöl",
    "English": "olive oil",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "das Rindfleisch",
    "English": "beef",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "das Rippenstück",
    "English": "loin",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "das Salz",
    "English": "salt",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "das Schweinefleisch",
    "English": "pork",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "das Steak",
    "English": "steak",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "das Würstchen",
    "English": "frankfurter",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Aal",
    "English": "eel",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Barsch",
    "English": "perch",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Braten",
    "English": "roast",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Essig",
    "English": "vinegar",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Fische",
    "English": "fish",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Hammel",
    "English": "mutton",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Hering",
    "English": "herring",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Hummer",
    "English": "lobster",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Joghurt",
    "English": "yoghurt",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Kabeljau",
    "English": "cod",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Karpfen",
    "English": "carp",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Käse",
    "English": "cheese",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Keks",
    "English": "cookie",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Kräcker",
    "English": "cracker",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Krebs",
    "English": "crayfish",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Kuchen",
    "English": "cake",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Lachs",
    "English": "salmon",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Oktopus",
    "English": "octopus",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Rinderbraten",
    "English": "roast beef",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Salat",
    "English": "salad",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Schinken",
    "English": "ham",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Schwertfisch",
    "English": "swordfish",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Seeigel",
    "English": "sea urchin",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Senf",
    "English": "mustard",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Speck",
    "English": "bacon",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Stör",
    "English": "sturgeon",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Thunfisch",
    "English": "tuna",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Tintenfisch",
    "English": "squid",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "der Zucker",
    "English": "sugar",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "die Austern",
    "English": "oysters",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "die Butter",
    "English": "butter",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "die Forelle",
    "English": "trout",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "die Frikadellenbällchen",
    "English": "meatballs",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "die Garnelen",
    "English": "prawns",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "die Garnele",
    "English": "shrimp",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "die Gemüsesuppe",
    "English": "vegetable soup",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "die Jakobsmuscheln",
    "English": "scallops",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "die Krabbe",
    "English": "crab",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "die Kutteln",
    "English": "tripe",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "die Makrele",
    "English": "mackerel",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "die Meeresfrüchte",
    "English": "seafood",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "die Miesmuschel",
    "English": "mussels",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "die Muschel",
    "English": "clam",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "die Rippe",
    "English": "rib roast",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "die Salami",
    "English": "salami",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "die Sardellen",
    "English": "anchovies",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "die Sardine",
    "English": "sardine",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "die Schokoladentafel",
    "English": "chocolate bar",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "die Scholle",
    "English": "plaice",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "die Seezunge",
    "English": "sole",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "die Wurst",
    "English": "sausage",
    "theme": "Food, Meat, Seafood"
  },
  {
    "German": "das Gemüse",
    "English": "vegetable",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "das Radieschen",
    "English": "radish",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "der Apfel",
    "English": "apple",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "der Blumenkohl",
    "English": "cauliflower",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "der Brokkoli",
    "English": "broccoli",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "der Fenchel",
    "English": "fennel",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "der Knoblauch",
    "English": "garlic",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "der Kohl",
    "English": "cabbage",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "der Kopfsalat",
    "English": "lettuce",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "der Kürbis",
    "English": "pumpkin",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "der Mais",
    "English": "corn",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "der Pfeffer",
    "English": "pepper",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "der Pfirsich",
    "English": "peach",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "der Pilz",
    "English": "mushroom",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "der Rhabarber",
    "English": "rhubarb",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "der Sellerie",
    "English": "celery",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "der Spargel",
    "English": "asparagus",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "der Spinat",
    "English": "spinach",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "der Zucchini",
    "English": "zucchini",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Ananas",
    "English": "pineapple",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Aprikose",
    "English": "apricot",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Artischocke",
    "English": "artichoke",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Aubergine",
    "English": "aubergine",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Backpflaume",
    "English": "prune",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Banane",
    "English": "banana",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Birne",
    "English": "pear",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Bohnen",
    "English": "beans",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Brombeere",
    "English": "blackberry",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Dattel",
    "English": "date",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Erbsen",
    "English": "peas",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Erdbeere",
    "English": "strawberry",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Erdnuss",
    "English": "peanut",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Feige",
    "English": "fig",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Frucht",
    "English": "fruit",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Gewürzgurken",
    "English": "gherkins",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Grapefruit",
    "English": "grapefruit",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Gurke",
    "English": "cucumber",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Haselnuss",
    "English": "hazelnut",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Heidelbeere",
    "English": "blueberry",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Himbeere",
    "English": "raspberry",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Kartoffel",
    "English": "potato",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Kastanie",
    "English": "chestnut",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Kichererbsen",
    "English": "chickpeas",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Kirsche",
    "English": "cherry",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Kokosnuss",
    "English": "coconut",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Limette",
    "English": "lime",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Mandarine",
    "English": "tangerine",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Mandel",
    "English": "almond",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Melone",
    "English": "melon",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Mohrrübe",
    "English": "carrot",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Petersilie",
    "English": "parsley",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Pflaume",
    "English": "plum",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Rosine",
    "English": "raisin",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Rübe",
    "English": "beet",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Tomate",
    "English": "tomato",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Traube",
    "English": "grape",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Walnuss",
    "English": "walnut",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Wassermelone",
    "English": "watermelon",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Zitrone",
    "English": "lemon",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "die Zwiebel",
    "English": "onion",
    "theme": "Fruits,vegetables"
  },
  {
    "German": "das Badezimmer",
    "English": "loo",
    "theme": "Hotel"
  },
  {
    "German": "das Bett",
    "English": "bed",
    "theme": "Hotel"
  },
  {
    "German": "das Eis",
    "English": "ice",
    "theme": "Hotel"
  },
  {
    "German": "das Erdgeschoss",
    "English": "ground floor",
    "theme": "Hotel"
  },
  {
    "German": "das Esszimmer",
    "English": "dining room",
    "theme": "Hotel"
  },
  {
    "German": "das Frühstück",
    "English": "breakfast",
    "theme": "Hotel"
  },
  {
    "German": "das Gepäck",
    "English": "luggage",
    "theme": "Hotel"
  },
  {
    "German": "das Hotel",
    "English": "hotel",
    "theme": "Hotel"
  },
  {
    "German": "das Internet",
    "English": "internet",
    "theme": "Hotel"
  },
  {
    "German": "das Kissen",
    "English": "pillow",
    "theme": "Hotel"
  },
  {
    "German": "das Wohnzimmer",
    "English": "living room",
    "theme": "Hotel"
  },
  {
    "German": "das Zimmermädchen",
    "English": "maid",
    "theme": "Hotel"
  },
  {
    "German": "der Ausgang",
    "English": "exit",
    "theme": "Hotel"
  },
  {
    "German": "der Balkon",
    "English": "balcony",
    "theme": "Hotel"
  },
  {
    "German": "der Eingang",
    "English": "entrance",
    "theme": "Hotel"
  },
  {
    "German": "der Fahrstuhl",
    "English": "lift",
    "theme": "Hotel"
  },
  {
    "German": "der Hotelpage",
    "English": "bellboy",
    "theme": "Hotel"
  },
  {
    "German": "der in",
    "English": "Schalter-check",
    "theme": "Hotel"
  },
  {
    "German": "der Leiter",
    "English": "manager",
    "theme": "Hotel"
  },
  {
    "German": "der Pass",
    "English": "passport",
    "theme": "Hotel"
  },
  {
    "German": "der Portier",
    "English": "doorman",
    "theme": "Hotel"
  },
  {
    "German": "der Preis",
    "English": "price",
    "theme": "Hotel"
  },
  {
    "German": "der Schlüssel",
    "English": "key",
    "theme": "Hotel"
  },
  {
    "German": "der Stuhl",
    "English": "chair",
    "theme": "Hotel"
  },
  {
    "German": "der Teppich",
    "English": "carpet",
    "theme": "Hotel"
  },
  {
    "German": "die Bettdecke",
    "English": "blanket",
    "theme": "Hotel"
  },
  {
    "German": "die Garage",
    "English": "garage",
    "theme": "Hotel"
  },
  {
    "German": "die Kasse",
    "English": "checkout",
    "theme": "Hotel"
  },
  {
    "German": "die Klage",
    "English": "complaint",
    "theme": "Hotel"
  },
  {
    "German": "die Klimaanlage",
    "English": "air conditioning",
    "theme": "Hotel"
  },
  {
    "German": "die Nachricht",
    "English": "message",
    "theme": "Hotel"
  },
  {
    "German": "die Quittung",
    "English": "receipt",
    "theme": "Hotel"
  },
  {
    "German": "die Rechnung",
    "English": "bill",
    "theme": "Hotel"
  },
  {
    "German": "die Reservierung",
    "English": "booking",
    "theme": "Hotel"
  },
  {
    "German": "die Vorhalle",
    "English": "lobby",
    "theme": "Hotel"
  },
  {
    "German": "storey Stockwerk",
    "English": "floor (storey)",
    "theme": "Hotel"
  },
  {
    "German": "bezahlen",
    "English": "to pay",
    "theme": "Hotel"
  },
  {
    "German": "das Prozent",
    "English": "",
    "theme": "Hotel"
  },
  {
    "German": "das Schwimmbad",
    "English": "swimming pool",
    "theme": "Hotel"
  },
  {
    "German": "das Taxi",
    "English": "taxi",
    "theme": "Hotel"
  },
  {
    "German": "das Zimmer",
    "English": "room",
    "theme": "Hotel"
  },
  {
    "German": "der Empfang",
    "English": "reception desk",
    "theme": "Hotel"
  },
  {
    "German": "der Tisch",
    "English": "table",
    "theme": "Hotel"
  },
  {
    "German": "der Zimmerservice",
    "English": "room service",
    "theme": "Hotel"
  },
  {
    "German": "die cream",
    "English": "Eis-ice",
    "theme": "Hotel"
  },
  {
    "German": "die Empfangsdame",
    "English": "receptionist",
    "theme": "Hotel"
  },
  {
    "German": "die Erholung",
    "English": "recreation",
    "theme": "Hotel"
  },
  {
    "German": "die Sicht",
    "English": "view",
    "theme": "Hotel"
  },
  {
    "German": "die Suite",
    "English": "suite",
    "theme": "Hotel"
  },
  {
    "German": "die Treppe",
    "English": "staircase",
    "theme": "Hotel"
  },
  {
    "German": "der April",
    "English": "April",
    "theme": "Months"
  },
  {
    "German": "der August",
    "English": "August",
    "theme": "Months"
  },
  {
    "German": "der Dezember",
    "English": "December",
    "theme": "Months"
  },
  {
    "German": "der Februar",
    "English": "February",
    "theme": "Months"
  },
  {
    "German": "der Januar",
    "English": "January",
    "theme": "Months"
  },
  {
    "German": "der Juli",
    "English": "July",
    "theme": "Months"
  },
  {
    "German": "der Juni",
    "English": "June",
    "theme": "Months"
  },
  {
    "German": "der Mai",
    "English": "May",
    "theme": "Months"
  },
  {
    "German": "der März",
    "English": "March",
    "theme": "Months"
  },
  {
    "German": "der Monat",
    "English": "month",
    "theme": "Months"
  },
  {
    "German": "der November",
    "English": "November",
    "theme": "Months"
  },
  {
    "German": "der Oktober",
    "English": "October",
    "theme": "Months"
  },
  {
    "German": "der September",
    "English": "September",
    "theme": "Months"
  },
  {
    "German": "acht",
    "English": "eight",
    "theme": "Numbers"
  },
  {
    "German": "achthundert",
    "English": "eight hundred",
    "theme": "Numbers"
  },
  {
    "German": "achtzehn",
    "English": "eighteen",
    "theme": "Numbers"
  },
  {
    "German": "achtzig",
    "English": "eighty",
    "theme": "Numbers"
  },
  {
    "German": "die Milliarde",
    "English": "one billion",
    "theme": "Numbers"
  },
  {
    "German": "die Million",
    "English": "one million",
    "theme": "Numbers"
  },
  {
    "German": "die Null",
    "English": "zero",
    "theme": "Numbers"
  },
  {
    "German": "die Zahl",
    "English": "number",
    "theme": "Numbers"
  },
  {
    "German": "dreihundert",
    "English": "three hundred",
    "theme": "Numbers"
  },
  {
    "German": "dreißig",
    "English": "thirty",
    "theme": "Numbers"
  },
  {
    "German": "drei",
    "English": "three",
    "theme": "Numbers"
  },
  {
    "German": "dreizehn",
    "English": "thirteen",
    "theme": "Numbers"
  },
  {
    "German": "eins",
    "English": "one",
    "theme": "Numbers"
  },
  {
    "German": "elf",
    "English": "eleven",
    "theme": "Numbers"
  },
  {
    "German": "funf",
    "English": "five",
    "theme": "Numbers"
  },
  {
    "German": "fünfhundert",
    "English": "five hundred",
    "theme": "Numbers"
  },
  {
    "German": "fünfzehn",
    "English": "fifteen",
    "theme": "Numbers"
  },
  {
    "German": "fünfzig",
    "English": "fifty",
    "theme": "Numbers"
  },
  {
    "German": "hundert",
    "English": "one hundred",
    "theme": "Numbers"
  },
  {
    "German": "neunhundert",
    "English": "nine hundred",
    "theme": "Numbers"
  },
  {
    "German": "neun",
    "English": "nine",
    "theme": "Numbers"
  },
  {
    "German": "neunzehn",
    "English": "nineteen",
    "theme": "Numbers"
  },
  {
    "German": "neunzig",
    "English": "ninety",
    "theme": "Numbers"
  },
  {
    "German": "sechshundert",
    "English": "six hundred",
    "theme": "Numbers"
  },
  {
    "German": "sechs",
    "English": "six",
    "theme": "Numbers"
  },
  {
    "German": "sechzehn",
    "English": "sixteen",
    "theme": "Numbers"
  },
  {
    "German": "sechzig",
    "English": "sixty",
    "theme": "Numbers"
  },
  {
    "German": "siebenhundert",
    "English": "seven hundred",
    "theme": "Numbers"
  },
  {
    "German": "sieben",
    "English": "seven",
    "theme": "Numbers"
  },
  {
    "German": "siebzehn",
    "English": "seventeen",
    "theme": "Numbers"
  },
  {
    "German": "siebzig",
    "English": "seventy",
    "theme": "Numbers"
  },
  {
    "German": "tausend",
    "English": "one thousand",
    "theme": "Numbers"
  },
  {
    "German": "vier",
    "English": "four",
    "theme": "Numbers"
  },
  {
    "German": "vierhundert",
    "English": "four hundred",
    "theme": "Numbers"
  },
  {
    "German": "vierzig",
    "English": "forty",
    "theme": "Numbers"
  },
  {
    "German": "zehn",
    "English": "ten",
    "theme": "Numbers"
  },
  {
    "German": "zwanzig",
    "English": "twenty",
    "theme": "Numbers"
  },
  {
    "German": "zweihundert",
    "English": "two hundred",
    "theme": "Numbers"
  },
  {
    "German": "zwei",
    "English": "two",
    "theme": "Numbers"
  },
  {
    "German": "zwölf",
    "English": "twelve",
    "theme": "Numbers"
  },
  {
    "German": "das Auge",
    "English": "eye",
    "theme": "Parts of the Body"
  },
  {
    "German": "das Augenlid",
    "English": "eyelid",
    "theme": "Parts of the Body"
  },
  {
    "German": "das Bein",
    "English": "leg",
    "theme": "Parts of the Body"
  },
  {
    "German": "das Blut",
    "English": "blood",
    "theme": "Parts of the Body"
  },
  {
    "German": "das Gehirn",
    "English": "brain",
    "theme": "Parts of the Body"
  },
  {
    "German": "das Gelenk",
    "English": "joint",
    "theme": "Parts of the Body"
  },
  {
    "German": "das Gesicht",
    "English": "face",
    "theme": "Parts of the Body"
  },
  {
    "German": "das Handgelenk",
    "English": "wrist",
    "theme": "Parts of the Body"
  },
  {
    "German": "das Herz",
    "English": "heart",
    "theme": "Parts of the Body"
  },
  {
    "German": "das Kinn",
    "English": "chin",
    "theme": "Parts of the Body"
  },
  {
    "German": "das Knie",
    "English": "knee",
    "theme": "Parts of the Body"
  },
  {
    "German": "das Ohr",
    "English": "ear",
    "theme": "Parts of the Body"
  },
  {
    "German": "der Arm",
    "English": "arm",
    "theme": "Parts of the Body"
  },
  {
    "German": "der Bart",
    "English": "beard",
    "theme": "Parts of the Body"
  },
  {
    "German": "der Bauch",
    "English": "belly",
    "theme": "Parts of the Body"
  },
  {
    "German": "der Blinddarm",
    "English": "appendix",
    "theme": "Parts of the Body"
  },
  {
    "German": "der Daumen",
    "English": "thumb",
    "theme": "Parts of the Body"
  },
  {
    "German": "der Ellbogen",
    "English": "elbow",
    "theme": "Parts of the Body"
  },
  {
    "German": "der Finger",
    "English": "finger",
    "theme": "Parts of the Body"
  },
  {
    "German": "der Fingernagel",
    "English": "fingernail",
    "theme": "Parts of the Body"
  },
  {
    "German": "der Fuß",
    "English": "foot",
    "theme": "Parts of the Body"
  },
  {
    "German": "der Fußknöchel",
    "English": "ankle",
    "theme": "Parts of the Body"
  },
  {
    "German": "der Hals",
    "English": "neck",
    "theme": "Parts of the Body"
  },
  {
    "German": "der Kiefer",
    "English": "jaw",
    "theme": "Parts of the Body"
  },
  {
    "German": "der Knöchel",
    "English": "knuckle",
    "theme": "Parts of the Body"
  },
  {
    "German": "der Knochen",
    "English": "bone",
    "theme": "Parts of the Body"
  },
  {
    "German": "der Kopf",
    "English": "head",
    "theme": "Parts of the Body"
  },
  {
    "German": "der Körper",
    "English": "body",
    "theme": "Parts of the Body"
  },
  {
    "German": "der Magen",
    "English": "stomach",
    "theme": "Parts of the Body"
  },
  {
    "German": "der Mund",
    "English": "mouth",
    "theme": "Parts of the Body"
  },
  {
    "German": "der Muskel",
    "English": "muscle",
    "theme": "Parts of the Body"
  },
  {
    "German": "der Nerv",
    "English": "nerve",
    "theme": "Parts of the Body"
  },
  {
    "German": "der Rücken",
    "English": "back",
    "theme": "Parts of the Body"
  },
  {
    "German": "der Schenkel",
    "English": "thigh",
    "theme": "Parts of the Body"
  },
  {
    "German": "der Schnurrbart",
    "English": "moustache",
    "theme": "Parts of the Body"
  },
  {
    "German": "der Zahn",
    "English": "tooth",
    "theme": "Parts of the Body"
  },
  {
    "German": "der Zeh",
    "English": "toe",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Arterie",
    "English": "artery",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Augenbraue",
    "English": "eyebrow",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Blase",
    "English": "bladder",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Brust",
    "English": "breast",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Drüse",
    "English": "gland",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Faust",
    "English": "fist",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Füße",
    "English": "feet",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Haare",
    "English": "hair",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Hand",
    "English": "hand",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Haut",
    "English": "skin",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Hüfte",
    "English": "hip",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Iris",
    "English": "iris",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Kehle",
    "English": "throat",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Körperteile",
    "English": "parts of the body",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Leber",
    "English": "liver",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Lippe",
    "English": "lip",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Lunge",
    "English": "lung",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Mandeln",
    "English": "tonsils",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Nase",
    "English": "nose",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Niere",
    "English": "kidney",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Rippe",
    "English": "rib",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Schulter",
    "English": "shoulder",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Sehne",
    "English": "tendon",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Sommersprossen",
    "English": "freckles",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Stirn",
    "English": "forehead",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Taille",
    "English": "waist",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Vene",
    "English": "vein",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Wange",
    "English": "cheek",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Wimper",
    "English": "eyelash",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Wirbelsäule",
    "English": "backbone",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Zähne",
    "English": "teeth",
    "theme": "Parts of the Body"
  },
  {
    "German": "die Zunge",
    "English": "tongue",
    "theme": "Parts of the Body"
  },
  {
    "German": "das Abführmittel",
    "English": "laxative",
    "theme": "Pharmacy"
  },
  {
    "German": "das Antibiotika",
    "English": "antibiotic",
    "theme": "Pharmacy"
  },
  {
    "German": "das Aspirin",
    "English": "aspirin",
    "theme": "Pharmacy"
  },
  {
    "German": "das Cortison",
    "English": "cortisone",
    "theme": "Pharmacy"
  },
  {
    "German": "das Insulin",
    "English": "insulin",
    "theme": "Pharmacy"
  },
  {
    "German": "das Jod",
    "English": "iodine",
    "theme": "Pharmacy"
  },
  {
    "German": "das Penizillin",
    "English": "penicillin",
    "theme": "Pharmacy"
  },
  {
    "German": "das Thermometer",
    "English": "thermometer",
    "theme": "Pharmacy"
  },
  {
    "German": "das Vitamin",
    "English": "vitamin",
    "theme": "Pharmacy"
  },
  {
    "German": "der Apotheker",
    "English": "pharmacist",
    "theme": "Pharmacy"
  },
  {
    "German": "der Sirup",
    "English": "syrup",
    "theme": "Pharmacy"
  },
  {
    "German": "der Verband",
    "English": "bandage",
    "theme": "Pharmacy"
  },
  {
    "German": "die Apotheke",
    "English": "pharmacy",
    "theme": "Pharmacy"
  },
  {
    "German": "die Injektion",
    "English": "injection",
    "theme": "Pharmacy"
  },
  {
    "German": "die Medizin",
    "English": "medicine",
    "theme": "Pharmacy"
  },
  {
    "German": "die Pille",
    "English": "pill",
    "theme": "Pharmacy"
  },
  {
    "German": "die Salbe",
    "English": "ointment",
    "theme": "Pharmacy"
  },
  {
    "German": "die Tablette",
    "English": "tablet",
    "theme": "Pharmacy"
  },
  {
    "German": "die Verschreibung",
    "English": "prescription",
    "theme": "Pharmacy"
  },
  {
    "German": "die Zahnseide",
    "English": "dental floss",
    "theme": "Pharmacy"
  },
  {
    "German": "das Afrika",
    "English": "Africa",
    "theme": "Places"
  },
  {
    "German": "das Algerien",
    "English": "Algeria",
    "theme": "Places"
  },
  {
    "German": "das Asien",
    "English": "Asia",
    "theme": "Places"
  },
  {
    "German": "das Australien",
    "English": "Australia",
    "theme": "Places"
  },
  {
    "German": "das Belgien",
    "English": "Belgium",
    "theme": "Places"
  },
  {
    "German": "das China",
    "English": "China",
    "theme": "Places"
  },
  {
    "German": "das Dänemark",
    "English": "Denmark",
    "theme": "Places"
  },
  {
    "German": "das Deutschland",
    "English": "Germany",
    "theme": "Places"
  },
  {
    "German": "das England",
    "English": "England",
    "theme": "Places"
  },
  {
    "German": "das Europa",
    "English": "Europe",
    "theme": "Places"
  },
  {
    "German": "das Finnland",
    "English": "Finland",
    "theme": "Places"
  },
  {
    "German": "das Frankreich",
    "English": "France",
    "theme": "Places"
  },
  {
    "German": "das Griechenland",
    "English": "Greece",
    "theme": "Places"
  },
  {
    "German": "das Großbritannien",
    "English": "Great Britain",
    "theme": "Places"
  },
  {
    "German": "das Indien",
    "English": "India",
    "theme": "Places"
  },
  {
    "German": "das Irland",
    "English": "Ireland",
    "theme": "Places"
  },
  {
    "German": "das Israel",
    "English": "Israel",
    "theme": "Places"
  },
  {
    "German": "das Italien",
    "English": "Italy",
    "theme": "Places"
  },
  {
    "German": "das Japan",
    "English": "Japan",
    "theme": "Places"
  },
  {
    "German": "das Jugoslawien",
    "English": "Yugoslavia",
    "theme": "Places"
  },
  {
    "German": "das Kanada",
    "English": "Canada",
    "theme": "Places"
  },
  {
    "German": "das Luxemburg",
    "English": "Luxembourg",
    "theme": "Places"
  },
  {
    "German": "das Marokko",
    "English": "Morocco",
    "theme": "Places"
  },
  {
    "German": "das Neuseeland",
    "English": "New Zealand",
    "theme": "Places"
  },
  {
    "German": "das Nordamerika",
    "English": "North America",
    "theme": "Places"
  },
  {
    "German": "das Norwegen",
    "English": "Norway",
    "theme": "Places"
  },
  {
    "German": "das Österreich",
    "English": "Austria",
    "theme": "Places"
  },
  {
    "German": "das Portugal",
    "English": "Portugal",
    "theme": "Places"
  },
  {
    "German": "das Russland",
    "English": "Russia",
    "theme": "Places"
  },
  {
    "German": "das Schottland",
    "English": "Scotland",
    "theme": "Places"
  },
  {
    "German": "das Schweden",
    "English": "Sweden",
    "theme": "Places"
  },
  {
    "German": "das Slowenien",
    "English": "Slovenia",
    "theme": "Places"
  },
  {
    "German": "das Spanien",
    "English": "Spain",
    "theme": "Places"
  },
  {
    "German": "das Südafrika",
    "English": "South Africa",
    "theme": "Places"
  },
  {
    "German": "das Südamerika",
    "English": "South America",
    "theme": "Places"
  },
  {
    "German": "das Tunesien",
    "English": "Tunisia",
    "theme": "Places"
  },
  {
    "German": "das Wales",
    "English": "Wales",
    "theme": "Places"
  },
  {
    "German": "die Niederlanden",
    "English": "Netherlands",
    "theme": "Places"
  },
  {
    "German": "die Schweiz",
    "English": "Switzerland",
    "theme": "Places"
  },
  {
    "German": "die Türkei",
    "English": "Turkey",
    "theme": "Places"
  },
  {
    "German": "die Vereinigten Staaten",
    "English": "United States",
    "theme": "Places"
  },
  {
    "German": "der Truthahn",
    "English": "turkey",
    "theme": "Places"
  },
  {
    "German": "das Einschreiben",
    "English": "registered letter",
    "theme": "Postal"
  },
  {
    "German": "das Paket",
    "English": "package",
    "theme": "Postal"
  },
  {
    "German": "der Absender",
    "English": "sender",
    "theme": "Postal"
  },
  {
    "German": "der Briefkasten",
    "English": "letterbox",
    "theme": "Postal"
  },
  {
    "German": "der Brief",
    "English": "letter",
    "theme": "Postal"
  },
  {
    "German": "der Briefträger",
    "English": "postman",
    "theme": "Postal"
  },
  {
    "German": "der Briefumschlag",
    "English": "envelope",
    "theme": "Postal"
  },
  {
    "German": "der Eilbote",
    "English": "courier",
    "theme": "Postal"
  },
  {
    "German": "der Export",
    "English": "export",
    "theme": "Postal"
  },
  {
    "German": "der Import",
    "English": "import",
    "theme": "Postal"
  },
  {
    "German": "der Postanweisung",
    "English": "money order",
    "theme": "Postal"
  },
  {
    "German": "der Schalterbeamte",
    "English": "clerk",
    "theme": "Postal"
  },
  {
    "German": "die Adresse",
    "English": "address",
    "theme": "Postal"
  },
  {
    "German": "die Antwort",
    "English": "reply",
    "theme": "Postal"
  },
  {
    "German": "die Briefmarke",
    "English": "postage stamp",
    "theme": "Postal"
  },
  {
    "German": "die Drucksache",
    "English": "printed item",
    "theme": "Postal"
  },
  {
    "German": "die Luftpost",
    "English": "airmail",
    "theme": "Postal"
  },
  {
    "German": "die Notiz",
    "English": "note",
    "theme": "Postal"
  },
  {
    "German": "die Post",
    "English": "post",
    "theme": "Postal"
  },
  {
    "German": "die Post",
    "English": "post office",
    "theme": "Postal"
  },
  {
    "German": "schicken",
    "English": "to post",
    "theme": "Postal"
  },
  {
    "German": "schreiben",
    "English": "to write",
    "theme": "Postal"
  },
  {
    "German": "senden",
    "English": "to send",
    "theme": "Postal"
  },
  {
    "German": "warten",
    "English": "to wait",
    "theme": "Postal"
  },
  {
    "German": "bestellen",
    "English": "to order",
    "theme": "Restaurant"
  },
  {
    "German": "das Abendessen",
    "English": "dinner",
    "theme": "Restaurant"
  },
  {
    "German": "das Dessert",
    "English": "dessert",
    "theme": "Restaurant"
  },
  {
    "German": "das Getränk",
    "English": "beverage",
    "theme": "Restaurant"
  },
  {
    "German": "das Glas",
    "English": "glass",
    "theme": "Restaurant"
  },
  {
    "German": "das Messer",
    "English": "knife",
    "theme": "Restaurant"
  },
  {
    "German": "das Mittagessen",
    "English": "lunch",
    "theme": "Restaurant"
  },
  {
    "German": "das Restaurant",
    "English": "restaurant",
    "theme": "Restaurant"
  },
  {
    "German": "der Aschenbecher",
    "English": "ashtray",
    "theme": "Restaurant"
  },
  {
    "German": "der Kellner",
    "English": "waiter",
    "theme": "Restaurant"
  },
  {
    "German": "der Löffel",
    "English": "spoon",
    "theme": "Restaurant"
  },
  {
    "German": "der Suppenlöffel",
    "English": "soup spoon",
    "theme": "Restaurant"
  },
  {
    "German": "der Teller",
    "English": "dish",
    "theme": "Restaurant"
  },
  {
    "German": "die Gabel",
    "English": "fork",
    "theme": "Restaurant"
  },
  {
    "German": "die Kellnerin",
    "English": "waitress",
    "theme": "Restaurant"
  },
  {
    "German": "die Mahlzeit",
    "English": "meal",
    "theme": "Restaurant"
  },
  {
    "German": "die Salatgabel",
    "English": "salad fork",
    "theme": "Restaurant"
  },
  {
    "German": "die Salatschüssel",
    "English": "salad bowl",
    "theme": "Restaurant"
  },
  {
    "German": "die Schüssel",
    "English": "bowl",
    "theme": "Restaurant"
  },
  {
    "German": "die Serviette",
    "English": "napkin",
    "theme": "Restaurant"
  },
  {
    "German": "die Speisekarte",
    "English": "menu",
    "theme": "Restaurant"
  },
  {
    "German": "die Suppenschüssel",
    "English": "soup bowl",
    "theme": "Restaurant"
  },
  {
    "German": "die Tasse",
    "English": "cup",
    "theme": "Restaurant"
  },
  {
    "German": "die Tischdecke",
    "English": "tablecloth",
    "theme": "Restaurant"
  },
  {
    "German": "die Vorspeise",
    "English": "main course",
    "theme": "Restaurant"
  },
  {
    "German": "die Weinliste",
    "English": "wine list",
    "theme": "Restaurant"
  },
  {
    "German": "durstig",
    "English": "thirsty",
    "theme": "Restaurant"
  },
  {
    "German": "essen",
    "English": "to eat",
    "theme": "Restaurant"
  },
  {
    "German": "hungrig",
    "English": "hungry",
    "theme": "Restaurant"
  },
  {
    "German": "preiswert",
    "English": "cheap",
    "theme": "Restaurant"
  },
  {
    "German": "reservieren",
    "English": "to reserve",
    "theme": "Restaurant"
  },
  {
    "German": "teuer",
    "English": "expensive",
    "theme": "Restaurant"
  },
  {
    "German": "trinken",
    "English": "to drink",
    "theme": "Restaurant"
  },
  {
    "German": "das Geschäft",
    "English": "shop",
    "theme": "Shopping"
  },
  {
    "German": "das Gramm",
    "English": "gram",
    "theme": "Shopping"
  },
  {
    "German": "das Kilogramm",
    "English": "kilogram",
    "theme": "Shopping"
  },
  {
    "German": "das Regal",
    "English": "counter",
    "theme": "Shopping"
  },
  {
    "German": "das Regal",
    "English": "shelf",
    "theme": "Shopping"
  },
  {
    "German": "das Sonderangebot",
    "English": "sale",
    "theme": "Shopping"
  },
  {
    "German": "der Artikel",
    "English": "item",
    "theme": "Shopping"
  },
  {
    "German": "der Eimer",
    "English": "bin",
    "theme": "Shopping"
  },
  {
    "German": "der Einkauf",
    "English": "shopping",
    "theme": "Shopping"
  },
  {
    "German": "der Einkaufswagen",
    "English": "trolley",
    "theme": "Shopping"
  },
  {
    "German": "der Liter",
    "English": "litre",
    "theme": "Shopping"
  },
  {
    "German": "der Markt",
    "English": "market",
    "theme": "Shopping"
  },
  {
    "German": "der Preis",
    "English": "cost",
    "theme": "Shopping"
  },
  {
    "German": "der Supermarkt",
    "English": "supermarket",
    "theme": "Shopping"
  },
  {
    "German": "die Marke",
    "English": "label",
    "theme": "Shopping"
  },
  {
    "German": "die Schachtel",
    "English": "box",
    "theme": "Shopping"
  },
  {
    "German": "die Tasche",
    "English": "bag",
    "theme": "Shopping"
  },
  {
    "German": "Einkäufe",
    "English": "groceries",
    "theme": "Shopping"
  },
  {
    "German": "frisch",
    "English": "fresh",
    "theme": "Shopping"
  },
  {
    "German": "reif",
    "English": "ripe",
    "theme": "Shopping"
  },
  {
    "German": "das Erdbeben",
    "English": "earthquake",
    "theme": "Sight seeing"
  },
  {
    "German": "das Feld",
    "English": "field",
    "theme": "Sight seeing"
  },
  {
    "German": "das Gras",
    "English": "grass",
    "theme": "Sight seeing"
  },
  {
    "German": "das Kap",
    "English": "cape",
    "theme": "Sight seeing"
  },
  {
    "German": "das Land",
    "English": "countryside",
    "theme": "Sight seeing"
  },
  {
    "German": "das Meer",
    "English": "sea",
    "theme": "Sight seeing"
  },
  {
    "German": "das Meer",
    "English": "tide",
    "theme": "Sight seeing"
  },
  {
    "German": "das Ozean",
    "English": "ocean",
    "theme": "Sight seeing"
  },
  {
    "German": "der Berg",
    "English": "mountain",
    "theme": "Sight seeing"
  },
  {
    "German": "der Damm",
    "English": "dam",
    "theme": "Sight seeing"
  },
  {
    "German": "der Dschungel",
    "English": "jungle",
    "theme": "Sight seeing"
  },
  {
    "German": "der Felsen",
    "English": "rock",
    "theme": "Sight seeing"
  },
  {
    "German": "der Fluss",
    "English": "river",
    "theme": "Sight seeing"
  },
  {
    "German": "der Golf",
    "English": "gulf",
    "theme": "Sight seeing"
  },
  {
    "German": "der Hügel",
    "English": "hill",
    "theme": "Sight seeing"
  },
  {
    "German": "der Kanal",
    "English": "canal",
    "theme": "Sight seeing"
  },
  {
    "German": "der Sand",
    "English": "sand",
    "theme": "Sight seeing"
  },
  {
    "German": "der See",
    "English": "lake",
    "theme": "Sight seeing"
  },
  {
    "German": "der Stein",
    "English": "stone",
    "theme": "Sight seeing"
  },
  {
    "German": "der Strand",
    "English": "beach",
    "theme": "Sight seeing"
  },
  {
    "German": "der Sumpf",
    "English": "marsh",
    "theme": "Sight seeing"
  },
  {
    "German": "der Teich",
    "English": "pond",
    "theme": "Sight seeing"
  },
  {
    "German": "der Wald",
    "English": "forest",
    "theme": "Sight seeing"
  },
  {
    "German": "die Bucht",
    "English": "bay",
    "theme": "Sight seeing"
  },
  {
    "German": "die Ebene",
    "English": "plain",
    "theme": "Sight seeing"
  },
  {
    "German": "die Halbinsel",
    "English": "peninsula",
    "theme": "Sight seeing"
  },
  {
    "German": "die Höhle",
    "English": "cave",
    "theme": "Sight seeing"
  },
  {
    "German": "die Insel",
    "English": "island",
    "theme": "Sight seeing"
  },
  {
    "German": "die Küste",
    "English": "coast",
    "theme": "Sight seeing"
  },
  {
    "German": "die Landschaft",
    "English": "landscape",
    "theme": "Sight seeing"
  },
  {
    "German": "die Natur",
    "English": "nature",
    "theme": "Sight seeing"
  },
  {
    "German": "die Umwelt",
    "English": "environment",
    "theme": "Sight seeing"
  },
  {
    "German": "die Wiese",
    "English": "meadow",
    "theme": "Sight seeing"
  },
  {
    "German": "die Wüste",
    "English": "desert",
    "theme": "Sight seeing"
  },
  {
    "German": "die Atmosphäre",
    "English": "atmosphere",
    "theme": "Sight seeing"
  },
  {
    "German": "aquatisch",
    "English": "aquatic",
    "theme": "zoo"
  },
  {
    "German": "baumartig",
    "English": "arboreal",
    "theme": "zoo"
  },
  {
    "German": "das Affenhaus",
    "English": "monkey house",
    "theme": "zoo"
  },
  {
    "German": "das Aquarium",
    "English": "aquarium",
    "theme": "zoo"
  },
  {
    "German": "das Elefantenhaus",
    "English": "elephant house",
    "theme": "zoo"
  },
  {
    "German": "das Erdferkel",
    "English": "aardvark",
    "theme": "zoo"
  },
  {
    "German": "das Giraffenhaus",
    "English": "giraffe house",
    "theme": "zoo"
  },
  {
    "German": "das Gürteltier",
    "English": "armadillo",
    "theme": "zoo"
  },
  {
    "German": "das Känguru",
    "English": "kangaroo",
    "theme": "zoo"
  },
  {
    "German": "das Nashorn",
    "English": "rhinoceros",
    "theme": "zoo"
  },
  {
    "German": "das Nilpferd",
    "English": "hippopotamus",
    "theme": "zoo"
  },
  {
    "German": "das Reptil",
    "English": "reptile",
    "theme": "zoo"
  },
  {
    "German": "das Säugetier",
    "English": "mammal",
    "theme": "zoo"
  },
  {
    "German": "das Tier",
    "English": "animal",
    "theme": "zoo"
  },
  {
    "German": "das Wirbeltier",
    "English": "vertebrate",
    "theme": "zoo"
  },
  {
    "German": "das Zebra",
    "English": "zebra",
    "theme": "zoo"
  },
  {
    "German": "der Affe",
    "English": "monkey",
    "theme": "zoo"
  },
  {
    "German": "der Alligator",
    "English": "alligator",
    "theme": "zoo"
  },
  {
    "German": "der Ameisenbär",
    "English": "anteater",
    "theme": "zoo"
  },
  {
    "German": "der Außenkäfig",
    "English": "outside cage",
    "theme": "zoo"
  },
  {
    "German": "der Bär",
    "English": "bear",
    "theme": "zoo"
  },
  {
    "German": "der Berglöwe",
    "English": "cougar",
    "theme": "zoo"
  },
  {
    "German": "der Eingang",
    "English": "admission",
    "theme": "zoo"
  },
  {
    "German": "der Elefant",
    "English": "elephant",
    "theme": "zoo"
  },
  {
    "German": "der Fleischfresser",
    "English": "carnivore",
    "theme": "zoo"
  },
  {
    "German": "der Fuchs",
    "English": "fox",
    "theme": "zoo"
  },
  {
    "German": "der Gehegezaun",
    "English": "enclosing wall",
    "theme": "zoo"
  },
  {
    "German": "der Gepard",
    "English": "cheetah",
    "theme": "zoo"
  },
  {
    "German": "der Gorilla",
    "English": "gorilla",
    "theme": "zoo"
  },
  {
    "German": "der irdisch",
    "English": "terrestrial",
    "theme": "zoo"
  },
  {
    "German": "der Jaguar",
    "English": "jaguar",
    "theme": "zoo"
  },
  {
    "German": "der Koala",
    "English": "koala",
    "theme": "zoo"
  },
  {
    "German": "der Leopard",
    "English": "leopard",
    "theme": "zoo"
  },
  {
    "German": "der Löwe",
    "English": "lion",
    "theme": "zoo"
  },
  {
    "German": "der Panda",
    "English": "panda",
    "theme": "zoo"
  },
  {
    "German": "der Panther",
    "English": "panther",
    "theme": "zoo"
  },
  {
    "German": "der Pavian",
    "English": "baboon",
    "theme": "zoo"
  },
  {
    "German": "der Pflanzenfresser",
    "English": "herbivore",
    "theme": "zoo"
  },
  {
    "German": "der Tierpfleger",
    "English": "zookeeper",
    "theme": "zoo"
  },
  {
    "German": "der Tiger",
    "English": "tiger",
    "theme": "zoo"
  },
  {
    "German": "der Wolf",
    "English": "wolf",
    "theme": "zoo"
  },
  {
    "German": "der Zoobesucher",
    "English": "zoo visitor",
    "theme": "zoo"
  },
  {
    "German": "der Zoo",
    "English": "zoo",
    "theme": "zoo"
  },
  {
    "German": "die Amphibie",
    "English": "amphibian",
    "theme": "zoo"
  },
  {
    "German": "die Elefantenanlage",
    "English": "elephant enclosure",
    "theme": "zoo"
  },
  {
    "German": "die Gazelle",
    "English": "gazelle",
    "theme": "zoo"
  },
  {
    "German": "die Giraffe",
    "English": "giraffe",
    "theme": "zoo"
  },
  {
    "German": "die Hyäne",
    "English": "hyena",
    "theme": "zoo"
  },
  {
    "German": "die Reptilienanlage",
    "English": "reptile enclosure",
    "theme": "zoo"
  },
  {
    "German": "die Spezies",
    "English": "species",
    "theme": "zoo"
  },
  {
    "German": "die Vitrine",
    "English": "glass case",
    "theme": "zoo"
  },
  {
    "German": "die Voliere",
    "English": "aviary",
    "theme": "zoo"
  },
  {
    "German": "gefährlich",
    "English": "dangerous",
    "theme": "zoo"
  },
  {
    "German": "giftig",
    "English": "poisonous",
    "theme": "zoo"
  },
  {
    "German": "nachtaktiv",
    "English": "nocturnal",
    "theme": "zoo"
  },
  {
    "German": "tagaktiv",
    "English": "diurnal",
    "theme": "zoo"
  },
  {
    "German": "wild",
    "English": "fierce",
    "theme": "zoo"
  },
  {
    "German": "die Maus",
    "English": "mouse",
    "theme": "zoo"
  }

];

// Group words by theme
const wordbank = {};
wordbankData.forEach(word => {
  const themeKey = word.theme.toLowerCase().replace(/\s+/g, '_');
  if (!wordbank[themeKey]) wordbank[themeKey] = [];
  wordbank[themeKey].push({ german: word.German, english: word.English });
});

// Helper function to render to either the modal or the main container
function renderToTestContent(html) {
  const tContent = document.getElementById('test-content');
  if (tContent && document.getElementById('testbank-modal').style.display === "block") {
    tContent.innerHTML = html;
  } else {
    document.getElementById('test-container').innerHTML = html;
  }
}

// AUDIO FUNCTIONS
function speakGerman(word) {
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'de-DE';
    utterance.rate = speechRate;
    utterance.volume = 1;
    speechSynthesis.speak(utterance);
    return utterance;
  }
  return null;
}

function speakEnglish(word) {
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.volume = 1;
    speechSynthesis.speak(utterance);
    return utterance;
  }
  return null;
}

// Play all German and English words in selected themes
function playAllAudio(startIndex = 0) {
  if (isPlayingAll || currentWords.length === 0) return;
  isPlayingAll = true;
  document.querySelector('.play-all-btn').style.display = 'none';
  document.querySelector('.stop-btn').style.display = 'inline-block';

  function playNext(index, isGerman = true) {
    if (!isPlayingAll || index >= currentWords.length) {
      if (isPlayingAll) {
        // Loop back to start
        currentAudioIndex = 0;
        playNext(currentAudioIndex, true);
      }
      return;
    }

    const word = isGerman ? currentWords[index].german : currentWords[index].english;
    const row = document.querySelector(`#word-table-body tr[data-index="${index}"]`);
    if (row) row.classList.add('playing');

    const utterance = isGerman ? speakGerman(word) : speakEnglish(word);
    if (utterance) {
      utterance.onend = () => {
        if (row) row.classList.remove('playing');
        if (isPlayingAll) {
          if (isGerman) {
            // After German, play English for the same word
            playNext(index, false);
          } else {
            // After English, move to the next word's German
            currentAudioIndex = index + 1;
            playNext(currentAudioIndex, true);
          }
        }
      };
      utterance.onerror = (error) => {
        console.error('TTS error:', error);
        if (row) row.classList.remove('playing');
        if (isPlayingAll) {
          if (isGerman) {
            playNext(index, false);
          } else {
            currentAudioIndex = index + 1;
            playNext(currentAudioIndex, true);
          }
        }
      };
    } else {
      if (row) row.classList.remove('playing');
      if (isPlayingAll) {
        if (isGerman) {
          playNext(index, false);
        } else {
          currentAudioIndex = index + 1;
          playNext(currentAudioIndex, true);
        }
      }
    }
  }

  currentAudioIndex = startIndex;
  playNext(currentAudioIndex, true);
}

// Stop audio playback
function stopAudio() {
  if (!isPlayingAll) return;
  isPlayingAll = false;
  speechSynthesis.cancel();
  document.querySelectorAll('#word-table-body tr').forEach(row => {
    row.classList.remove('playing');
  });
  document.querySelector('.play-all-btn').style.display = 'inline-block';
  document.querySelector('.stop-btn').style.display = 'none';
}

// Settings modal
function openSettingsModal() {
  document.getElementById('settings-modal').style.display = 'block';
}

document.getElementById('close-settings').addEventListener('click', () => {
  document.getElementById('settings-modal').style.display = 'none';
});

function saveSettings() {
  speechRate = parseFloat(document.getElementById('speech-rate').value);
  document.getElementById('settings-modal').style.display = 'none';
}

// UTILITY FUNCTIONS
function getRandomItems(arr, n) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(n, arr.length));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// CREATE AUDIO BUTTONS
function createAudioButton(word, language = 'de') {
  const cleanWord = word.replace(/[\s🔊]/g, '');
  return `<button class="audio-btn" onclick="playSingleAudio('${cleanWord}', ${language === 'de' ? 'true' : 'false'}, ${language === 'de' ? 'null' : 'null'})" aria-label="Play ${language === 'de' ? 'German' : 'English'} audio for ${cleanWord}">🔊</button>`;
}

// Play single audio
function playSingleAudio(word, isGerman, index) {
  stopAudio();
  const row = document.querySelector(`#word-table-body tr[data-index="${index}"]`);
  if (row) row.classList.add('playing');
  const utterance = isGerman ? speakGerman(word) : speakEnglish(word);
  if (utterance) {
    utterance.onend = () => {
      if (row) row.classList.remove('playing');
    };
    utterance.onerror = () => {
      if (row) row.classList.remove('playing');
    };
  }
}

// WORDBANK: Show/hide modal
document.getElementById('wordbank-btn').addEventListener('click', function() {
  document.getElementById('wordbank-modal').style.display = 'block';
  document.getElementById('theme-buttons').style.display = 'block';
  document.getElementById('word-table-container').style.display = 'none';
  document.getElementById('show-words-btn').style.display = document.querySelectorAll('.theme-checkbox-input:checked').length > 0 ? 'block' : 'none';
});

document.getElementById('close-wordbank').addEventListener('click', function() {
  document.getElementById('wordbank-modal').style.display = 'none';
  stopAudio();
});

document.getElementById('show-words-btn').addEventListener('click', () => {
  const selectedThemes = Array.from(document.querySelectorAll('.theme-checkbox-input:checked')).map(input => input.value);
  if (selectedThemes.length > 0) {
    showWordTable(selectedThemes);
  }
});

function showWordTable(themes) {
  currentThemes = Array.isArray(themes) ? themes : [themes];
  document.getElementById('theme-buttons').style.display = 'none';
  document.getElementById('show-words-btn').style.display = 'none';
  document.getElementById('word-table-container').style.display = 'block';
  const displayName = currentThemes.map(theme => theme.charAt(0).toUpperCase() + theme.slice(1).replace('_', ' & ')).join(', ');
  document.getElementById('theme-title').textContent = `Themes: ${displayName}`;

  // Combine words from selected themes
  currentWords = [];
  currentThemes.forEach(theme => {
    if (wordbank[theme]) {
      currentWords.push(...wordbank[theme]);
    }
  });

  const tableBody = document.getElementById('word-table-body');
  tableBody.innerHTML = '';
  currentWords.forEach((word, index) => {
    const row = document.createElement('tr');
    row.classList.add('clickable');
    row.setAttribute('data-index', index);
    row.innerHTML = `
      <td>${word.german}</td>
      <td>${word.english}</td>
      <td>${createAudioButton(word.german, 'de')}</td>
      <td>${createAudioButton(word.english, 'en')}</td>
    `;
    row.addEventListener('click', () => {
      if (!isPlayingAll) {
        playAllAudio(index); // Start Play All from clicked word
      }
    });
    tableBody.appendChild(row);
  });
}

function backToThemes(modal) {
  if (modal === 'wordbank') {
    stopAudio();
    document.getElementById('theme-buttons').style.display = 'block';
    document.getElementById('show-words-btn').style.display = document.querySelectorAll('.theme-checkbox-input:checked').length > 0 ? 'block' : 'none';
    document.getElementById('word-table-container').style.display = 'none';
  } else {
    document.getElementById('test-theme-buttons').style.display = 'block';
    document.getElementById('test-options-container').style.display = 'none';
    if (document.getElementById('test-content')) {
      document.getElementById('test-content').innerHTML = '';
    }
    initApp();
  }
}

// TESTBANK: Show/hide modal
document.getElementById('testbank-btn').addEventListener('click', function() {
  document.getElementById('testbank-modal').style.display = 'block';
  document.getElementById('test-theme-buttons').style.display = 'block';
  document.getElementById('test-options-container').style.display = 'none';
  if (document.getElementById('test-content')) {
    document.getElementById('test-content').innerHTML = '';
  }
});

document.getElementById('close-testbank').addEventListener('click', function() {
  document.getElementById('testbank-modal').style.display = 'none';
  if (document.getElementById('test-content')) {
    document.getElementById('test-content').innerHTML = '';
  }
  initApp();
});

window.onclick = function(event) {
  const wordbankModal = document.getElementById('wordbank-modal');
  const testbankModal = document.getElementById('testbank-modal');
  const settingsModal = document.getElementById('settings-modal');
  if (event.target === wordbankModal) {
    wordbankModal.style.display = 'none';
    stopAudio();
  }
  if (event.target === testbankModal) {
    testbankModal.style.display = 'none';
    if (document.getElementById('test-content')) {
      document.getElementById('test-content').innerHTML = '';
    }
    initApp();
  }
  if (event.target === settingsModal) {
    settingsModal.style.display = 'none';
  }
};

function showTestOptions(theme) {
  currentThemes = [theme];
  document.getElementById('test-theme-buttons').style.display = 'none';
  document.getElementById('test-options-container').style.display = 'block';
  document.getElementById('test-theme-title').textContent = `Theme: ${theme.charAt(0).toUpperCase() + theme.slice(1).replace('_', ' & ')}`;
}

// INITIALIZE APP
function initApp() {
  document.getElementById('test-container').innerHTML = `
    <h1>German Vocabulary Learner with Audio</h1>
    <div class="buttons">
      <button onclick="startMeaningsTest()" aria-label="Meanings Test">🎵 Meanings Test</button>
      <button onclick="startSpellingTest(false)" aria-label="Spelling Test German">✏️ Spelling Test (German)</button>
      <button onclick="startSpellingTest(true)" aria-label="English to German Spelling Test">🌍 English to German</button>
      <button onclick="startMatchingTest()" aria-label="Matching Test">🔗 Matching Test</button>
    </div>
  `;

  // Generate theme checkboxes
  const themeButtonsContainer = document.getElementById('theme-buttons');
  const testThemeButtonsContainer = document.getElementById('test-theme-buttons');
  const themes = Object.keys(wordbank);

  if (themeButtonsContainer && testThemeButtonsContainer) {
    themeButtonsContainer.innerHTML = '';
    testThemeButtonsContainer.innerHTML = '';
    themes.forEach(theme => {
      const displayName = theme.charAt(0).toUpperCase() + theme.slice(1).replace('_', ' & ');
      themeButtonsContainer.innerHTML += `
        <label class="theme-checkbox">
          <input type="checkbox" class="theme-checkbox-input" value="${theme}" aria-label="Select ${displayName} theme">
          ${displayName}
        </label>
      `;
      testThemeButtonsContainer.innerHTML += `
        <button onclick="showTestOptions('${theme}')" class="theme-btn" aria-label="Select ${displayName} test theme">${displayName}</button>
      `;
    });
  }

  setTimeout(() => speakGerman('Hallo Willkommen'), 500);
}

// Show "Show Selected Themes" button when at least one theme is selected
document.addEventListener('change', (e) => {
  if (e.target.classList.contains('theme-checkbox-input')) {
    const selectedCheckboxes = document.querySelectorAll('.theme-checkbox-input:checked');
    const showWordsBtn = document.getElementById('show-words-btn');
    if (showWordsBtn) {
      showWordsBtn.style.display = selectedCheckboxes.length > 0 ? 'block' : 'none';
    }
  }
});

// MEANINGS TEST
function startMeaningsTest() {
  currentTest = 'meanings';
  currentQuestion = 0;
  score = 0;
  questions = getRandomItems(wordbank[currentThemes[0]] || wordbank[Object.keys(wordbank)[0]], 10);
  renderMeaningsQuestion();
}

function renderMeaningsQuestion() {
  if (currentQuestion >= questions.length) {
    renderToTestContent(`
      <div id="score">🎉 Final Score: ${score}/${questions.length} (${Math.round(score/questions.length*100)}%)</div>
      <div class="controls">
        <button onclick="startMeaningsTest()">🔄 Restart</button>
        <button onclick="backToThemes('testbank')">🏠 Home</button>
      </div>
    `);
    return;
  }

  const word = questions[currentQuestion].german;
  const correct = questions[currentQuestion].english;
  const wrongOptions = getRandomItems(wordbank[currentThemes[0]].filter(v => v.english !== correct), 3).map(v => v.english);
  const options = [...wrongOptions, correct].sort(() => 0.5 - Math.random());
  let html = `
    <div class="question">
      <div class="controls">
        <button onclick="speakGerman('${word}')">🔊 Listen (German)</button>
      </div>
      <div class="word-display">${word}</div>
      <h3>What does this mean?</h3>
      <div class="options">
  `;

  options.forEach(opt => {
    html += `
      <div class="option" onclick="checkMeaningsAnswer('${opt}', '${correct}')">
        ${opt} ${createAudioButton(opt, 'en')}
      </div>
    `;
  });

  html += `
      </div>
    </div>
    <div id="score">Score: ${score}/${currentQuestion}</div>
  `;
  renderToTestContent(html);
}

function checkMeaningsAnswer(selected, correct) {
  const options = document.querySelectorAll('.option');
  options.forEach(opt => {
    const text = opt.textContent.trim().split(' ')[0];
    opt.style.pointerEvents = 'none';
    if (text === correct) {
      opt.classList.add('correct');
    } else if (text === selected) {
      opt.classList.add('incorrect');
    }
  });

  if (selected === correct) {
    score++;
    speakEnglish(correct);
  }

  setTimeout(() => {
    currentQuestion++;
    renderMeaningsQuestion();
  }, 1500);
}

// SPELLING TEST
function startSpellingTest(reverse = false) {
  currentTest = 'spelling';
  currentQuestion = 0;
  score = 0;
  questions = getRandomItems(wordbank[currentThemes[0]] || wordbank[Object.keys(wordbank)[0]], 10);
  renderSpellingQuestion(reverse);
}

function renderSpellingQuestion(reverse) {
  if (currentQuestion >= questions.length) {
    renderToTestContent(`
      <div id="score">🎉 Final Score: ${score}/${questions.length} (${Math.round(score/questions.length*100)}%)</div>
      <div class="controls">
        <button onclick="startSpellingTest(${reverse})">🔄 Restart</button>
        <button onclick="backToThemes('testbank')">🏠 Home</button>
      </div>
    `);
    return;
  }

  const item = questions[currentQuestion];
  const promptWord = reverse ? item.english : item.german;
  const targetWord = reverse ? item.german : item.english;

  let html;
  if (reverse) {
    html = `
      <div class="question">
        <div class="controls">
          <button onclick="speakEnglish('${promptWord}')">🔊 Listen (English)</button>
        </div>
        <div class="word-display">${promptWord}</div>
        <h3>Translate to German:</h3>
        <input type="text" id="spelling-input" placeholder="Type German word" autocomplete="off">
        <br><button onclick="checkSpellingAnswer('${targetWord}')">✅ Submit</button>
        <div id="feedback"></div>
      </div>
      <div id="score">Score: ${score}/${currentQuestion}</div>
    `;
  } else {
    const len = promptWord.length;
    const numBlanks = Math.max(2, Math.floor(len * 0.3));
    const blankPositions = new Set();
    while (blankPositions.size < numBlanks) {
      blankPositions.add(getRandomInt(0, len - 1));
    }
    let blanked = '';
    for (let i = 0; i < len; i++) {
      blanked += blankPositions.has(i) ? '_' : promptWord[i];
    }

    html = `
      <div class="question">
        <div class="controls">
          <button onclick="speakGerman('${promptWord}')">🔊 Listen (German)</button>
        </div>
        <div class="word-display">${blanked}</div>
        <p>English meaning: ${targetWord}</p>
        <h3>Type the complete German word:</h3>
        <input type="text" id="spelling-input" placeholder="Type full German word" autocomplete="off">
        <br><button onclick="checkSpellingAnswer('${promptWord}')">✅ Submit</button>
        <div id="feedback"></div>
      </div>
      <div id="score">Score: ${score}/${currentQuestion}</div>
    `;
  }

  renderToTestContent(html);
  document.getElementById('spelling-input').focus();
}

function checkSpellingAnswer(correct) {
  const input = document.getElementById('spelling-input').value.trim().toLowerCase();
  const feedback = document.getElementById('feedback');

  if (input === correct.toLowerCase()) {
    feedback.innerHTML = '✅ <strong>CORRECT!</strong>';
    feedback.style.color = 'green';
    score++;
    speakGerman(correct);
  } else {
    feedback.innerHTML = `❌ Wrong! Correct: <strong>${correct}</strong> ${createAudioButton(correct, 'de')}`;
    feedback.style.color = 'red';
  }

  setTimeout(() => {
    currentQuestion++;
    const reverse = document.getElementById('test-content').innerHTML.includes('Translate to German');
    renderSpellingQuestion(reverse);
  }, 2000);
}

// MATCHING TEST
function startMatchingTest() {
  currentTest = 'matching';
  score = 0;
  questions = getRandomItems(wordbank[currentThemes[0]] || wordbank[Object.keys(wordbank)[0]], 10);

  const englishWords = [...questions.map(q => q.english)].sort(() => 0.5 - Math.random());
  let html = `
    <h2>🔗 Matching Test - Match German to English</h2>
    <div class="matching-container">
      <div class="column">
        <h3>German Words</h3>
  `;

  questions.forEach((item) => {
    html += `
      <div class="match-item german" data-correct="${item.english}" onclick="selectGerman(this, '${item.german}')">
        ${item.german} ${createAudioButton(item.german, 'de')}
      </div>
    `;
  });

  html += `</div>
      <div class="column">
        <h3>English Words</h3>
  `;

  englishWords.forEach((engWord) => {
    const germanMatch = questions.find(q => q.english === engWord)?.german;
    html += `
      <div class="match-item english" data-german="${germanMatch}" onclick="selectEnglish(this, '${engWord}')">
        ${engWord} ${createAudioButton(engWord, 'en')}
      </div>
    `;
  });

  html += `
      </div>
    </div>
    <div id="score">Score: ${score}/${questions.length}</div>
    <div class="controls">
      <button onclick="startMatchingTest()" id="restart-btn" style="display:none;">🔄 Restart</button>
      <button onclick="backToThemes('testbank')">🏠 Home</button>
    </div>
  `;

  renderToTestContent(html);
  selectedGerman = null;
  selectedEnglish = null;
}

function selectGerman(element, germanWord) {
  if (element.classList.contains('matched-correct') || element.classList.contains('matched-incorrect')) return;

  document.querySelectorAll('.match-item').forEach(el => el.classList.remove('selected'));

  element.classList.add('selected');
  selectedGerman = element;
  selectedEnglish = null;

  speakGerman(germanWord);
}

function selectEnglish(element, englishWord) {
  if (element.classList.contains('matched-correct') || element.classList.contains('matched-incorrect')) return;

  document.querySelectorAll('.english').forEach(el => el.classList.remove('selected'));

  if (!selectedGerman) {
    element.classList.add('selected');
    selectedEnglish = element;
    speakEnglish(englishWord);
    return;
  }

  element.classList.add('selected');
  selectedEnglish = element;

  setTimeout(checkMatch, 100);
}

function checkMatch() {
  if (!selectedGerman || !selectedEnglish) return;

  const germanElement = selectedGerman;
  const englishElement = selectedEnglish;
  const germanWord = germanElement.getAttribute('onclick').match(/'([^']+)'/)[1];
  const englishWord = englishElement.getAttribute('onclick').match(/'([^']+)'/)[1];

  const correctEnglish = germanElement.getAttribute('data-correct');

  if (englishWord === correctEnglish) {
    germanElement.classList.add('matched-correct');
    englishElement.classList.add('matched-correct');
    score++;

    speakGerman(germanWord);
    setTimeout(() => speakEnglish(englishWord), 500);

    document.getElementById('score').textContent = `Score: ${score}/${questions.length}`;
  } else {
    germanElement.classList.add('matched-incorrect');
    englishElement.classList.add('matched-incorrect');

    setTimeout(() => {
      const correctEngElement = document.querySelector(`[data-german="${germanWord}"]`);
      if (correctEngElement) speakEnglish(correctEngElement.getAttribute('onclick').match(/'([^']+)'/)[1]);
    }, 500);
  }

  selectedGerman = null;
  selectedEnglish = null;

  const remaining = document.querySelectorAll('.match-item:not(.matched-correct):not(.matched-incorrect)').length;
  if (remaining === 0) {
    document.getElementById('restart-btn').style.display = 'inline-block';
  }
}

// ENTER KEY SUPPORT FOR SPELLING
document.addEventListener('keypress', function(e) {
  if (e.key === 'Enter' && document.getElementById('spelling-input')) {
    checkSpellingAnswer(document.getElementById('spelling-input').value.trim());
  }
});

// START THE APP
initApp();