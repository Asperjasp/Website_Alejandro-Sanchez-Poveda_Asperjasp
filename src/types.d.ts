export interface ArticleData{
    id: string;
    title: string;
    content: string;
    image: string;
    date: string;
    type: 'long' | 'medium' | 'small';
}