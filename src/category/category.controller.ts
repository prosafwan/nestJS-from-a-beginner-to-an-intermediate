import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dots/category.dto';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getAllCategories() {
    return this.categoryService.getAllCategories();
  }

  @Post()
  addCategory(
    @Body('name', UppercasePipe) name: string,
    @Body() createCategoryDto: CreateCategoryDto,
  ) {
    createCategoryDto.name = name;
    // createCategoryDto.name = createCategoryDto.name.toUpperCase();
    return this.categoryService.addCategory(createCategoryDto);
  }
}
