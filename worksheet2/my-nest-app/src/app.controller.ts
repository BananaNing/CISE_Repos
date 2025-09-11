import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ARTICLES } from './dummydata/articles';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api/articles')
  getAllArticles() {
    return ARTICLES; // Return the dummy articles array
  }

  @Get('api/articles/:id') // ":id" is a dynamic parameter
  getSingleArticle(@Param('id') id: string) {
    console.log('Requested Article ID:', id); // Logs ID to terminal
    // Use Array.find() to match the article's _id with the URL parameter
    return ARTICLES.find(article => article._id === id);
  }
}
