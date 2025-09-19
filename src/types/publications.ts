export type BasePublication = {
    title: string;
    authors: string;
    year: number | string;
    pages?: string;
    doi?: string;
    url?: string;
    openaccess?: boolean;
    abstract?: string;
};

// Article type
export type ArticleData = BasePublication & {
    journal: string;
    volume?: string | number;
    issue?: string | number;
};

// Book chapter type
export type BookChapterData = BasePublication & {
    booktitle: string;
    editors: string;
    publisher?: string;
    isbn?: string;
};

// Book type
export type BookData = BasePublication & {
    publisher?: string;
    isbn?: string;
};