import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('../Components/home/home.component').then((m) => m.HomeComponent) },
  {
    path: 'about',
    loadComponent: () => import('../Components/about/about.component').then((m) => m.AboutComponent) ,
    children: [
        { path: 'rating', loadComponent: () => import('../Components/rating/rating.component').then((m) => m.RatingComponent)},
        { path: 'feedback', loadComponent: () => import('../Components/feedback/feedback.component').then((m) => m.FeedbackComponent)}
    ]
  },
    { path: 'services', loadComponent: () => import('../Components/services/services.component').then((m) => m.ServicesComponent)},
    { path: 'form', loadComponent: () => import('../Components/template-form1/template-form1.component').then((m) => m.TemplateForm1Component)},
    { path: 'rform', loadComponent: () => import('../Components/reactive-form1/reactive-form1.component').then((m) => m.ReactiveForm1Component)}
];
