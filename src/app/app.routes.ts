import {RouterModule, Routes} from '@angular/router'
import {LoginComponent} from '../app/login/login.component'
import {HomeComponent} from '../app/home/home.component'

const rutas: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent}
];

export const APP_ROUTING = RouterModule.forRoot(rutas);

