# -- Build Stage --

FROM node:22-slim AS builder

LABEL maintainer="valdivia.carla@gmail.com"

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./

RUN npm install --frozen-lockfile || npm install 

COPY . .

RUN npm run build

RUN npm prune --omit=dev && npm cache clean --force


# -- Production Stage -- 

FROM node:22-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]