import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";

@Injectable()
export class undefinedToNullInterceptor implements NestInterceptor {
    intercept(
        context: ExecutionContext,
        next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        
        
        return next
        .handle()
        .pipe(map((data) => (data === undefined ? null : data))); //JSON undefined는 명시가 되지 않기 때문에 null로 명시되도록하는 인터셉터
    }
}