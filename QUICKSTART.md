# Quick Start Guide

## Step 1: Extract ZIP
```bash
unzip url-shortener-clean.zip
cd url-shortener-clean
```

## Step 2: Start Docker
```bash
docker-compose up
```

Wait until you see:
```
🚀 API running on http://localhost:3000
```

## Step 3: Test API (New Terminal)
```bash
curl http://localhost:3000/health
```

## Step 4: Create Short URL
```bash
curl -X POST http://localhost:3000/api/urls/shorten \
  -H "Content-Type: application/json" \
  -d '{"original_url": "https://github.com"}'
```

Response:
```json
{
  "success": true,
  "short_code": "a1b2c3",
  "short_url": "http://localhost:3000/a1b2c3",
  "original_url": "https://github.com",
  "created_at": "2024-01-15T10:30:00Z"
}
```

## Stop Services
```bash
docker-compose down
```

## Troubleshooting

### Port 3000 in use?
```bash
lsof -i :3000
kill -9 <PID>
```

### Docker won't start?
```bash
docker-compose down
docker-compose up --build
```

Good luck! 🚀
