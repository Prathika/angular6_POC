import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

getEmployees() {
    return this.http.get('http://ec2-18-212-52-174.compute-1.amazonaws.com:8080/search?q=Matrix')
  }
}
