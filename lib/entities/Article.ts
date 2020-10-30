export interface ArticleImage{
    imageUrl:string,
    imageAlt:string
}
export interface Article{
    header:string,
    content:string,
    images:Array<ArticleImage>
    isVisible:boolean
}
