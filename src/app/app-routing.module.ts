import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersPageComponent } from './pages/careers-page/careers-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { JobDetailsPageComponent } from './pages/job-details-page/job-details-page.component';

// manages all URL endpoints the app will respond to
const routes: Routes = [
    { path: "home", component: HomePageComponent },
    { path: "careers", component: CareersPageComponent },
    { path: "jobs/:id", component: JobDetailsPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
