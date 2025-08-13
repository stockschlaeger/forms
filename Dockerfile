FROM nginx:alpine

# Copy the build files to nginx html directory
COPY build/ /usr/share/nginx/html/

# Copy nginx configuration for React Router
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]