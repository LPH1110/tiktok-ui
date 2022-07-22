import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Feedback from '~/pages/Feedback';
import Upload from '~/pages/Upload';
import Coin from '~/pages/Coin';
import Setting from '~/pages/Setting';
import { DefaultLayout, HeaderOnly } from '~/components/Layouts';

const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/following', component: Following, layout: DefaultLayout },
    { path: '/profile', component: Profile, layout: HeaderOnly },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/feedback', component: Feedback, layout: HeaderOnly },
    { path: '/get_coin', component: Coin, layout: HeaderOnly },
    { path: '/settings', component: Setting, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
