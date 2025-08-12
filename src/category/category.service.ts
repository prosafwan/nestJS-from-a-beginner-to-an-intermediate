import { Injectable } from '@nestjs/common';
import { Category } from './interfaces/category.interface';
import { CreateCategoryDto } from './dots/category.dto';

@Injectable()
export class CategoryService {
  private categories: Category[] = [];

  getAllCategories(): Category[] {
    return this.categories;
  }

  addCategory(createCategoryDto: CreateCategoryDto): Category {
    const newCategory: Category = {
      id: Date.now(),
      ...createCategoryDto,
      //   name: createCategoryDto.name,
      //   description: createCategoryDto.description,
    };
    this.categories.push(newCategory);
    return newCategory;
  }
}
