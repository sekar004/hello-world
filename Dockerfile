# Use lightweight Nginx alpine base image
FROM nginx:alpine

# Copy static frontend files to Nginx default html folder
COPY index.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html/styles.css
COPY script.js /usr/share/nginx/html/script.js

# Expose HTTP port 80
EXPOSE 80

# Start Nginx web server in foreground
CMD ["nginx", "-g", "daemon off;"]
