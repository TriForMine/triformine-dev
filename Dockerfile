FROM imbios/bun-node:20-slim AS deps
ARG DEBIAN_FRONTEND=noninteractive

# I use Asia/Jakarta as my timezone, you can change it to your timezone
RUN apt-get -y update && \
  apt-get install -yq openssl git ca-certificates tzdata && \
  ln -fs /usr/share/zoneinfo/Asia/Jakarta /etc/localtime && \
  dpkg-reconfigure -f noninteractive tzdata
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json ./
RUN bun install

# Build the app
FROM deps AS builder
WORKDIR /app
COPY . .

RUN bun run build


# Production image, copy all the files and run next
FROM node:20-slim AS runner
WORKDIR /app

# Install wget and curl it's required for the healthcheck
RUN apt-get -y update && apt-get install -y wget curl

COPY .env /app/.env
ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder  /app/.next/standalone ./
COPY --from=builder  /app/.next/static ./.next/static
COPY --from=builder  /app/public ./public

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]