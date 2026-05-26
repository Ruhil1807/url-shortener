# URL Shortener

A premium, production-ready URL shortening service built with Node.js, TypeScript, and Docker.

## Features

✨ Create short, memorable links  
🚀 RESTful API with TypeScript  
🐳 Containerized with Docker  
💾 PostgreSQL database  
⚡ Redis caching  
📊 Beautiful dashboard included  

## Quick Start

```bash
docker-compose up
```

Then open: `http://localhost:3000/health`

## Tech Stack

- **Backend**: Node.js + TypeScript + Express
- **Database**: PostgreSQL
- **Cache**: Redis
- **Containerization**: Docker & Docker Compose
- **Frontend**: Modern HTML/CSS Dashboard

## API Endpoints

### Create Short URL
```bash
POST /api/urls/shorten
Content-Type: application/json

{
  "original_url": "https://github.com"
}
```

Response:
```json
{
  "success": true,
  "short_code": "abc123",
  "short_url": "http://localhost:3000/abc123",
  "original_url": "https://github.com",
  "created_at": "2024-01-15T10:30:00Z"
}
```

### Health Check
```bash
GET /health
```

## Dashboard

Open `dashboard-luxury.html` in your browser for the premium UI.

## Project Structure

url-shortener/
├── docker-compose.yml
├── dashboard-luxury.html
├── README.md
└── backend/
├── package.json
├── tsconfig.json
├── Dockerfile
└── src/
├── index.ts
├── routes/
├── services/
└── utils/

## Future Improvements

- PostgreSQL integration for persistence
- Redis caching for performance
- Analytics dashboard
- Custom alias support
- QR code generation
- Link expiration

## License

MIT

## Author

RUHIL PATEL - https://github.com/Ruhil1807