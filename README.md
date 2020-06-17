# Protractor Sandbox

This project is used for quickly standing up a Protractor environment as a debugging aid.

## Structure

| File             | Purpose                      |
| ---------------- | ---------------------------- |
| `test/config.js` | Protractor configuration     |
| `test/index.js`  | Test spec                    |
| `web/nginx.conf` | Configuration for web server |

## How to Use

```bash
# Install dependencies (one time)
npm install

# Start Selenium and web server
npm start

# Run tests
npm t
```

## Other Commands

| Command       | Purpose                   |
| ------------- | ------------------------- |
| `npm restart` | Restart Docker containers |
| `npm stop`    | Stop Docker containers    |
