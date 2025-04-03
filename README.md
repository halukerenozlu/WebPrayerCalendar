# Samsun Prayer Times App

This project is a simple web application that displays the daily prayer times for Samsun, Turkey, by fetching data from a public API.

## 🚀 Features

- Fetches real-time prayer times from `ezanvakti.emushaf.net` API
- Displays a table with date, imsak, sunrise, noon, afternoon, evening, and night prayer times
- Includes a Node.js proxy server to bypass CORS restrictions
- Serves static HTML, CSS, and JavaScript files via Express

---

## 🛠 Installation & Usage

Make sure you have [Node.js](https://nodejs.org) installed.

### 1. Clone the repository:

```bash
git clone https://github.com/halukerenozlu/WebPrayerCalendar.git
cd WebPrayerCalendar
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Start the server:

```bash
node server.js
```

## API Reference

- API: ezanvakti.emushaf.net
- City ID: 9819 corresponds to Samsun

## 📸 Preview

![App Screenshot](samsun_namaz_vakitleri.png)
