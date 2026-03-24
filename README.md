# sivui2 – Parturikampaamo Website

Responsiiviset nettisivut parturikampaamoyritykselle.

## Tech Stack

- **Backend:** C# / ASP.NET Core Web API (.NET 10)
- **Frontend:** React + JavaScript (Vite 5)

## Projektin rakenne

```
merinellis/
├── sivui2.Server/     # ASP.NET Core Web API
└── sivui2.client/     # React + Vite frontend
```

## Kehitysympäristön käynnistys

### Frontend (Vite dev server)

```bash
cd sivui2.client
npm install
npm run dev
```

Avaa selaimessa: http://localhost:5173

### Backend (ASP.NET Core)

```bash
cd sivui2.Server
dotnet run
```

### Tai käynnistä molemmat kerralla VS Codessa

Paina `Ctrl+Shift+B` → valitse **Start All**

## Muistiinpanot

- Yrityksen logo on placeholder — korvaa myöhemmin
- Yrityksen nimi on placeholder — korvaa myöhemmin
- Ajanvaraus-osio on placeholder — integroitavissa myöhemmin
- Tietosuojaseloste- ja omavalvontalinkit osoittavat placeholder-polkuihin (`/tietosuojaseloste`, `/omavalvonta`)
