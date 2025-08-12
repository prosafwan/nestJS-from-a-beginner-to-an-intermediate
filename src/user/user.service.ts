import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    { id: 1, name: 'Safwan Alamgir', price: 100 },
    { id: 2, name: 'Sumon Shekh', price: 200 },
    { id: 3, name: 'Kamrul Hasan', price: 300 },
    { id: 4, name: 'Asa Rahman', price: 400 },
  ];
  getUsers() {
    return this.users;
  }
  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
