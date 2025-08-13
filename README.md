# Company Forms Application

A React-based forms application with routing and Kubernetes deployment.

## Features

- 📝 Multiple forms accessible via routes (e.g., `/contact`, `/feedback`)
- 🎨 Tailwind CSS styling
- 🚀 Automatic CI/CD deployment to DigitalOcean Kubernetes
- 📱 Responsive design
- 🔗 Easy form management and expansion

## Available Forms

- **Contact Form** - `/contact` - General contact and inquiry form
- **Feedback Form** - `/feedback` - (Coming soon)
- **Registration Form** - `/registration` - (Coming soon)

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

Visit `http://localhost:3000` to see the application.

## Adding New Forms

1. Create new form component in `src/components/forms/YourForm/YourForm.js`
2. Export it in `src/components/forms/index.js`
3. Add route in `src/App.js`
4. Add form card to homepage

## Deployment

### GitHub Secrets Required

- `DIGITALOCEAN_ACCESS_TOKEN` - Your DigitalOcean API token
- `CLUSTER_NAME` - Your Kubernetes cluster name

### Automatic Deployment

Push to `main` branch triggers automatic deployment:

```bash
git add .
git commit -m "Deploy new form"
git push origin main
```

### Manual Kubernetes Deployment

```bash
# Apply Kubernetes manifests
kubectl apply -f k8s-deployment.yaml

# Check deployment status
kubectl get pods
kubectl get services
```

## URLs

- **Homepage**: `company.com/`
- **Contact Form**: `company.com/contact`
- **Future Forms**: `company.com/formname`

## Project Structure

```
src/
├── components/
│   └── forms/
│       ├── ContactForm/
│       │   └── ContactForm.js
│       └── index.js
├── App.js
├── index.js
└── index.css
```

## Technologies

- React 18
- React Router
- Tailwind CSS
- Docker
- Kubernetes
- GitHub Actions