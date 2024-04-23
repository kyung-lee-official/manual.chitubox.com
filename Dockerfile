FROM node:lts-slim AS base
RUN npm i -g pnpm
WORKDIR /app
COPY . ./

# Install dependencies based on the preferred package manager
FROM base AS deps
RUN pnpm i

# Rebuild the source code
FROM deps AS build
RUN pnpm preload
RUN pnpm build

# Production image, run NextJS
FROM build
# CMD ["ls", "-la"]
CMD ["pnpm", "start"]
