import { Controller, Get } from '@nestjs/common';

@Controller('blogs')
export class BlogsController {
  // localhost:3000/blogs
  @Get()
  findAll() {
    return { message: 'Hello Blogs' };
  }
}
