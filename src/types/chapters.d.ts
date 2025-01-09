export interface Chapter {
    id:         string;
    slug:       string;
    body:       string;
    collection: string;
    data:       Data;
}

export interface Data {
    id:       number;
    title:    string;
    subtitle: string;
    date:     Date;
    url:      string;
    nextUrl:  string;
}