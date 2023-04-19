import LandingPage from '~/pages/LandingPage/LandingPage';
import SignUp from '~/pages/SignUp/SignUp';
import ForgotPassword from '~/pages/ForgotPassword/ForgotPassword';

const publicRoutes = [
    {path: '/', component: LandingPage},
    {path: '/signup', component: SignUp},
    {path: '/forgot-password', component: ForgotPassword},
]

const privateRoutes = [
]

export { publicRoutes, privateRoutes }