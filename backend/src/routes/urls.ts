import { Router, Request, Response } from 'express';

const router = Router();

router.post('/shorten', (req: Request, res: Response) => {
  const { original_url } = req.body;

  if (!original_url) {
    return res.status(400).json({ error: 'original_url is required' });
  }

  const shortCode = Math.random().toString(36).substring(2, 8);

  res.status(201).json({
    success: true,
    short_code: shortCode,
    short_url: `http://localhost:3000/${shortCode}`,
    original_url: original_url,
    created_at: new Date().toISOString()
  });
});

export default router;
