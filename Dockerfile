# Stage 0: Kehitysympäristö (development)
# Tämä vaihe asentaa kaikki riippuvuudet ja käynnistää kehityspalvelimen.
# Tätä vaihetta käytetään `docker-compose.yml`-tiedoston kautta.
FROM node:20-alpine AS development
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000

# Stage 1: Asennetaan vain tuotantoriippuvuudet
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

# Stage 2: Rakennetaan sovellus
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Stage 3: Tuotanto-image
FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 appgroup && adduser --system --uid 1001 --ingroup appgroup --no-create-home --disabled-password appuser

COPY --from=builder /app/public ./public
COPY --from=builder --chown=appuser:appgroup /app/.next/standalone/node_modules ./node_modules
COPY --from=builder --chown=appuser:appgroup /app/.next/standalone ./
COPY --from=builder --chown=appuser:appgroup /app/.next/static ./.next/static

USER appuser
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (res) => process.exit(res.statusCode === 200 ? 0 : 1)).on('error', () => process.exit(1))"

CMD ["node", "server.js"]

# --- Uusi, korjattu kehitysvaihe ---
FROM deps AS development
WORKDIR /app
COPY . .
ENV PATH /app/node_modules/.bin:$PATH
CMD ["/app/node_modules/.bin/next", "dev"]
