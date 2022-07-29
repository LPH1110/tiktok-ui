import { Home, Following, Profile, Upload, Feedback, Coin, Setting } from '~/pages';
import { DefaultLayout, HeaderOnly } from '~/components/Layouts';
import routes from '~/config/routes';

const publicRoutes = [
    { path: routes.home, component: Home, layout: DefaultLayout },
    { path: routes.following, component: Following, layout: DefaultLayout },
    { path: routes.profile, component: Profile, layout: HeaderOnly },
    { path: routes.upload, component: Upload, layout: HeaderOnly },
    { path: routes.feedback, component: Feedback, layout: HeaderOnly },
    { path: routes.getCoin, component: Coin, layout: HeaderOnly },
    { path: routes.settings, component: Setting, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
