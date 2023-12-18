import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
{path:"",loadChildren:()=>import("./user/user.module").then(r=>r.UserModule)},
{path:"student", loadChildren:()=>import("./student/student.module").then(r=>r.StudentModule)},
{path:"admin",loadChildren:()=>import("./admin/admin.module").then(r=>r.AdminModule)},
{path:"employee",loadChildren:()=>import("./employee/employee.module").then(r=>r.EmployeeModule)},
{path:"member",loadChildren:()=>import("./member/member.module").then(r=>r.MemberModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
