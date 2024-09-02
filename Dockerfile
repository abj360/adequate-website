# Use an official Nginx image as a base image
FROM nginx:alpine

# Copy the contents of the dist directory to Nginx's default html directory
COPY dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

