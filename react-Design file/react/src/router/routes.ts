import LandingPage from "@/pages/LandingPage";
import LoginPage from "@/pages/LoginPage";
import SignUpPage from "@/pages/SignUpPage";
import Dashboard from "@/pages/Dashboard";
import Profile from "@/pages/Profile";
import JobListings from "@/pages/JobListings";
import JobDetails from "@/pages/JobDetails";
import Chat from "@/pages/Chat";
import SettingsPage from "@/pages/SettingsPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import OnboardingPage from "@/pages/OnboardingPage";

export interface RouteConfig {
  path: string;
  component: React.ComponentType;
  name: string;
  protected?: boolean;
  showNavigation?: boolean;
}

export const routes: RouteConfig[] = [{
          path: "/",
          component: LandingPage,
          name: "LandingPage",
          showNavigation: false,
        },
{
          path: "/login",
          component: LoginPage,
          name: "LoginPage",
          showNavigation: false,
        },
{
          path: "/signup",
          component: SignUpPage,
          name: "SignUpPage",
          showNavigation: false,
        },
{
          path: "/dashboard",
          component: Dashboard,
          name: "Dashboard",
          protected: true,
          showNavigation: true,
        },
{
          path: "/profile",
          component: Profile,
          name: "Profile",
          protected: true,
          showNavigation: true,
        },
{
          path: "/jobs",
          component: JobListings,
          name: "JobListings",
          protected: true,
          showNavigation: true,
        },
{
          path: "/jobs/:id",
          component: JobDetails,
          name: "JobDetails",
          protected: true,
          showNavigation: true,
        },
{
          path: "/chat",
          component: Chat,
          name: "Chat",
          protected: true,
          showNavigation: true,
        },
{
          path: "/settings",
          component: SettingsPage,
          name: "SettingsPage",
          protected: true,
          showNavigation: true,
        },
{
          path: "/about",
          component: AboutPage,
          name: "AboutPage",
          showNavigation: true,
        },
{
          path: "/contact",
          component: ContactPage,
          name: "ContactPage",
          showNavigation: true,
        },
{
          path: "/onboarding",
          component: OnboardingPage,
          name: "OnboardingPage",
          protected: true,
          showNavigation: false,
        }];


