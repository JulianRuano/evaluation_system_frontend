import { Component } from '@angular/core';
import { NavSidebarComponent } from '../nav-sidebar/nav-sidebar.component';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../../services/category/category.service';
import { Router } from '@angular/router';
import { AlertService } from '../../../services/helpers/alerts/alert.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NavSidebarComponent, CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css', '../../../../assets/styles/table.css']
})
export class CategoriesComponent {

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private alertService: AlertService
    ) { }

  categories: any[] = [];
  size: number = 10;
  page: number = 0;
  totalPages: number = 0;
  totalElements: number = 0;
  totalPagesArray: number[] = [];

  getAllCategories() {
    this.categoryService.getAllCategories(this.page, this.size).subscribe({
      next: (data: any) => {
        this.categories = data.content;
        this.totalPages = data.totalPages;
        this.totalElements = data.totalElements;
        this.totalPagesArray = new Array<number>(this.totalPages);
      },
      error: error => console.log(error)
    });
  }

  nextPage() {
    if (this.page < this.totalPages - 1){
      this.page++;
      this.getAllCategories();
    }
  }

  changePage(i: number) {
    this.page = i;
    this.getAllCategories();
  }

  previousPage() {
    if (this.page > 0){
      this.page--;
      this.getAllCategories();
    }
  }

  ngOnInit() {
    this.getAllCategories();
  }

  createCategory() {
    this.router.navigate(['/addcategory']);
  }

  editCategory(id: number) {
    this.router.navigate(['/addcategory', id]);
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe({
      next: (data: any) => {
        this.alertService.showAlertSuccess('Category deleted successfully');
        this.getAllCategories();
      },
      error: error => console.log(error)
    });
  }



}
