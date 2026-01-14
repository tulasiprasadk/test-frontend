# Frontend Testing Guide

## 🚀 Quick Start

### 1. Install Dependencies (if not done)
```bash
cd D:\cursor\frontend
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The frontend will start on **http://localhost:5173**

### 3. Backend Configuration

For local testing, the frontend expects the backend to be running on:
- **http://localhost:3000**

If your backend is running on a different port, create a `.env` file:
```env
VITE_API_BASE=http://localhost:YOUR_PORT
```

## ✅ What to Test

### 1. **Homepage Loading**
- Open http://localhost:5173
- Check browser console for API configuration log
- Verify categories load (should show default categories immediately)
- Check if products section shows loading state
- Verify connection status indicator (bottom-right corner)

### 2. **Connection Status Indicator**
- Should show connection status (green = connected, red = disconnected)
- Click it to manually check connection
- Should auto-check every 30 seconds

### 3. **Error Handling**
- If backend is not running:
  - Categories should show default categories
  - Products should show error message with "Try Again" button
  - Connection status should show "Disconnected"

### 4. **Loading States**
- Products section should show "Loading products..." while fetching
- Categories should show immediately (with defaults)

### 5. **Browser Console**
- Check for API configuration log: `🔧 API Configuration:`
- Should show which API endpoint is being used
- No errors should appear

## 🔍 Expected Behavior

### With Backend Running:
- ✅ Categories load from backend
- ✅ Products load and display
- ✅ Connection status shows "Connected" (green)
- ✅ No error messages

### Without Backend:
- ✅ Default categories still show
- ✅ Products show error with retry button
- ✅ Connection status shows "Disconnected" (red)
- ✅ App still functions (graceful degradation)

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is busy:
```bash
# Kill process on port 5173 (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

### Backend Connection Issues
1. Check if backend is running on port 3000
2. Check browser console for CORS errors
3. Verify `VITE_API_BASE` in `.env` file (if using custom port)

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📝 Notes

- The frontend uses Vite's proxy for `/api` routes in development
- All API calls go through `/api` prefix
- Connection status only shows in dev mode or when disconnected
- Default categories ensure UI never breaks completely
