import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root'})
export class ApiService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = 'http://localhost:8080/off-the-charts';

    get<T>(endpoint: string): Observable<T> {
        return this.http.get<T>(`${this.baseUrl}/${endpoint}`);
    }
}