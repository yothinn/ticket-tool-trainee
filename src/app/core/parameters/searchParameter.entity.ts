import { HttpParams } from '@angular/common/http';

export class SearchParameter {
    public pageNo?: number;
    public pageSize?: number;
    public search?: string;

    // use field name
    public orderBy?: string;
    // value: "asc" or "desc" , default is desc
    public orderType?: string;

    constructor() {
        this.pageNo = 1;
        this.pageSize = 10;
    }

    public toHttpParams(): HttpParams {
        const k = Object.keys(this);
        let httpParam = new HttpParams();

        k.forEach((key: string) => {

            const value: any = this[key as keyof this];
            // Beware :  value has boolean, it can true or  false
            // console.log(value);
            if (value !== null && value !== undefined) {
                if (value instanceof Date) {
                    httpParam = httpParam.set(key, value.toISOString());
                } else {
                    httpParam = httpParam.set(key, value);
                }
            }
        });

        // console.log(httpParam.toString());

        return httpParam;
    }
}
