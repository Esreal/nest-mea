import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogsService {

    findAll() {
        return { message: 'All Blogs' };
    }

    getSystemDate() {
        return new Date().toLocaleDateString();
    }

}
