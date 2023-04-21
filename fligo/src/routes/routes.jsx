import LandingPage from '~/pages/LandingPage/LandingPage';
import SignUp from '~/pages/SignUp/SignUp';
import ResetPassword from '~/pages/ForgotPassword/ResetPassword';

const publicRoutes = [
    {path: '/', component: LandingPage},
    {path: '/signup', component: SignUp},
    {path: '/forgot-password', component: ResetPassword},
]

const privateRoutes = [
]

export { publicRoutes, privateRoutes }