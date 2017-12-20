import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';


// export class FishbioService{

// getImage(imageUrl: string): Observable<File> {
//     return this.http
//         .get(imageUrl, { responseType: ResponseType.blob })
//         .map((res: Response) => res.blob());
// }
// }