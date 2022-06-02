import { HomeComponent } from "./home/home.component";
import { AuthComponent } from "./auth/auth.component";

const redirectoToUrl = '';

const routes= [
    {route: 'home', component: HomeComponent, pathMatch: 'full'},
    {route: 'auth', component: AuthComponent, pathMatch: 'full'},
    {route: '', redirectTo: 'auth', pathMatch: 'full'},
    {route: '*', redirectTo: 'auth', pathMatch: 'full'},
    {route: 'authorized', redirectTo: 'auth', pathMatch: 'full'},
    {route: 'login', redirectTo: redirectoToUrl, pathMatch: 'full'}
];

export default routes;