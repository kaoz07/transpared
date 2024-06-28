import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  // {
  //   path: 'states',
  //   loadChildren: () => import('./states/states.module').then(m => m.StatesPageModule)
  // },
  {
    path: 'zacatecas',
    loadChildren: () => import('./states/zacatecas/zacatecas.module').then(m => m.ZacatecasPageModule)
  },
  {
    path: 'educacion',
    loadChildren: () => import('./divisions/educacion/educacion.module').then( m => m.EducacionPageModule)
  },
  {
    path: 'superior',
    loadChildren: () => import('./educacion/superior/superior.module').then( m => m.SuperiorPageModule)
  },
  {
    path: 'utzac',
    loadChildren: () => import('./superior/utzac/utzac.module').then( m => m.UtzacPageModule)
  },
  {
    path: 'sueldos',
    loadChildren: () => import('./utzac/sueldos/sueldos.module').then( m => m.SueldosPageModule)
  },
  {
    path: 'prestaciones',
    loadChildren: () => import('./utzac/prestaciones/prestaciones.module').then( m => m.PrestacionesPageModule)
  },
  {
    path: 'presupuesto',
    loadChildren: () => import('./utzac/presupuesto/presupuesto.module').then( m => m.PresupuestoPageModule)
  },
  {
    path: 'salario',
    loadChildren: () => import('./prestaciones/salario/salario.module').then( m => m.SalarioPageModule)
  },
  {
    path: 'no-salario',
    loadChildren: () => import('./prestaciones/no-salario/no-salario.module').then( m => m.NoSalarioPageModule)
  },
  {
    path: 'socio',
    loadChildren: () => import('./prestaciones/socio/socio.module').then( m => m.SocioPageModule)
  },
  {
    path: 'mandos',
    loadChildren: () => import('./sueldos/mandos/mandos.module').then( m => m.MandosPageModule)
  },
  {
    path: 'academico',
    loadChildren: () => import('./sueldos/academico/academico.module').then( m => m.AcademicoPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./sueldos/admin/admin.module').then( m => m.AdminPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
