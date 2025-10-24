# Stage 1: Build React app
FROM node:18 AS build

WORKDIR /app

# Set environment variable for backend URL
ENV REACT_APP_BACKEND_URL=http://bookstore-backend:8080

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Copy built React app to nginx directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
