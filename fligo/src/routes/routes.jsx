import LandingPage from '~/pages/LandingPage/LandingPage';
import SignUp from '~/pages/SignUp/SignUp';
import ResetPassword from '~/pages/ForgotPassword/ResetPassword';
import Home from '~/pages/Home/Home';
import Order from '~/pages/Order/Order';
import InfoBooking from '~/pages/InfoBooking/InfoBooking';
import ConfirmInfo from '~/pages/ConfirmInfo/ConfirmInfo';
import Payment from '~/pages/Payment/Payment';
import SuccessPayment from '~/pages/SuccessPayment/SuccessPayment';
import SuccessBooking from '~/pages/SuccessBooking/SuccessBooking';
import History from '~/pages/History/History';
import { SecondaryLayout } from '~/components/Layout/layout';
import BookSeat from '~/pages/BookSeat/BookSeat';

const publicRoutes = [
    {path: '/', component: LandingPage},
    {path: '/signup', component: SignUp},
    {path: '/forgot-password', component: ResetPassword},
]

const privateRoutes = [
    {path:'/home', component:Home, layout: SecondaryLayout},
    {path:'/order', component: Order, layout: SecondaryLayout},
    {path:'/info-booking', component:InfoBooking},
    {path:'/confirm-info', component: ConfirmInfo},
    {path:'/payment', component: Payment},
    {path:'/success-payment', component: SuccessPayment},
    {path:'/success-booking', component: SuccessBooking},
    {path:'/history', component: History},
    {path:'/book-seat', component: BookSeat}
]

export { publicRoutes, privateRoutes }