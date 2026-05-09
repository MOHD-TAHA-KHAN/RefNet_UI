# RefNet - India's #1 Referral Network for Freshers

RefNet is a modern job referral platform that connects freshers with IT professionals at top companies. Our platform helps job seekers get referrals, track application status, and land their dream jobs faster.

## 🚀 Features

- **🔍 Job Discovery**: Browse thousands of openings at top IT companies
- **🤝 Referral Matching**: Get matched with professionals who work at your target companies
- **📊 Application Tracking**: Monitor your referral status from pending to offer letter
- **💬 Direct Messaging**: Connect with referrers and get insights about companies
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **🔐 Secure Authentication**: Protected routes and user authentication
- **⚡ Modern Tech Stack**: Built with React, TypeScript, and Vite

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Zustand** - Lightweight state management
- **Axios** - HTTP client for API calls

### Development Tools
- **ESLint** - Code linting and formatting
- **CSS3** - Modern styling with animations
- **Motion** - Smooth animations and transitions

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher) or **yarn** (v1.22 or higher)
- **Git** for version control

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd RefNet_UI/react-Design file/react
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173`

### 4. Open in Browser

Navigate to `http://localhost:5173` in your browser to see the application.

## 📁 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── Button.tsx          # Custom button component
│   ├── Card.tsx            # Card component
│   ├── Layout.tsx          # Main layout wrapper
│   ├── Navigation.tsx      # Navigation bar
│   ├── ProtectedRoute.tsx  # Authentication guard
│   └── index.ts            # Component exports
├── pages/                  # Page components
│   ├── LandingPage.tsx     # Home page
│   ├── LoginPage.tsx       # Login page
│   ├── SignUpPage.tsx      # Sign up page
│   ├── Dashboard.tsx       # User dashboard
│   ├── Profile.tsx         # User profile
│   ├── JobListings.tsx     # Browse jobs
│   ├── JobDetails.tsx      # Individual job details
│   ├── Chat.tsx            # Messaging interface
│   └── SettingsPage.tsx    # User settings
├── router/                 # Routing configuration
├── store/                  # State management
├── services/               # API services
└── styles/                 # Global styles
```

## 🎯 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 🌐 Available Routes

| Path | Component | Description | Protected |
|------|------------|-------------|-----------|
| `/` | LandingPage | Home page with navigation | No |
| `/login` | LoginPage | User authentication | No |
| `/signup` | SignUpPage | User registration | No |
| `/dashboard` | Dashboard | User dashboard | Yes |
| `/profile` | Profile | User profile management | Yes |
| `/jobs` | JobListings | Browse job opportunities | Yes |
| `/jobs/:id` | JobDetails | Individual job details | Yes |
| `/chat` | Chat | Messaging interface | Yes |
| `/settings` | SettingsPage | User settings | Yes |
| `/about` | AboutPage | About RefNet | No |
| `/contact` | ContactPage | Contact information | No |
| `/onboarding` | OnboardingPage | User onboarding | Yes |

## 🔧 Development

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3001/api
VITE_APP_NAME=RefNet
```

### Code Style

This project uses ESLint for code formatting. Run the linter before committing:

```bash
npm run lint
```

### Component Development

1. Create new components in `src/components/`
2. Export them in `src/components/index.ts`
3. Follow the existing naming conventions
4. Use TypeScript for type safety

### Adding New Pages

1. Create page component in `src/pages/`
2. Add route configuration in `src/router/routes.ts`
3. Update navigation if needed

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deploy to Static Hosting

#### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

#### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

#### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to GitHub Pages
```

## 🔄 CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Build
      run: npm run build
    
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed information
3. Join our [Discord community](link-to-discord)

## 📊 Project Status

- ✅ Basic navigation system
- ✅ Authentication flow
- ✅ Responsive design
- ✅ Component library
- ✅ State management
- 🔄 API integration (in progress)
- 🔄 Real-time messaging (planned)
- 🔄 Mobile app (planned)

---

**Built with ❤️ for the Indian tech community**
