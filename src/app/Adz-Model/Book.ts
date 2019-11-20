export class Book {
    id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    categories:string[];
    description: string;
    publisher: string;
    publishDate: string;
   
    averageRating: number;
    
    imageLinks: {
      thumbnail: string;
      smallThumbnail: string;
    };
  };
}