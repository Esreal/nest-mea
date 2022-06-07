import { Controller, Get, Param } from '@nestjs/common';
import { BlogsService } from './blogs.service';

// localhost:3000/api/v1/blogs
@Controller({
  version: '1',
  path: 'blogs',
})
export class BlogsController {

  constructor(private readonly blosService: BlogsService) {}

  // localhost:3000/api/v1/blogs/
  @Get()
  findAll() {
    return this.blosService.findAll();
  }

  // localhost:3000/api/v1/getdate/
  @Get('getdate')
  getSystemDate(){
    return this.blosService.getSystemDate();
  }

  // localhost:3000/api/v1/blogs/6
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { blog_id: id };
  }
}
