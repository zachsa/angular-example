import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

interface Node {
  entry: string
  entries?: Node[]
}

@Injectable({
  providedIn: 'root',
})
export class MnemosyneService {
  constructor(private http: HttpClient) {}

  getData(path: String = '/'): Observable<Node[]> {
    return this.http.get<Node[]>(`https://mnemosyne.somisana.ac.za${path}`, {
      headers: {
        Accept: 'Application/json',
      },
    })
  }
}
