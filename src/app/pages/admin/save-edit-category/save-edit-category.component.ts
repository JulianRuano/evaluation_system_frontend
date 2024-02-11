import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { JsonPipe, NgFor } from '@angular/common';
import { NavSidebarComponent } from '../nav-sidebar/nav-sidebar.component';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../services/category/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save-edit-category',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, JsonPipe,NavSidebarComponent],
  templateUrl: './save-edit-category.component.html',
  styleUrl: './save-edit-category.component.css'
})
export class SaveEditCategoryComponent {
  id: number = this.route.snapshot.params['id'];
  isEdit: boolean = false;

  dataForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.id != null) {
      this.isEdit = true;
      this.loadCategory();
    }
  }

  onSubmit() {
    //validar con dataForm
    if (this.dataForm.invalid) {
      console.log("Error en el formulario");
      return;
    }

    if (this.isEdit) {
      this.updateCategory();
    } else {
      this.saveCategory();
    }
  }

  saveCategory() {
    this.categoryService.saveCategory(this.dataForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/categories']);
      },
      error: (error) => {
        console.log(error);
      }
    });
    }

  updateCategory() {
    this.categoryService.updateCategory(this.id, this.dataForm.value).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      }
    });
    }

  loadCategory() {
    this.categoryService.getCategoryById(this.id).subscribe({
      next: (data:any) => {
        this.dataForm.setValue({
          name: data.name,
          description: data.description
        });
      },
      error: (error) => {
        console.log(error);
      }
    });
    }
}





