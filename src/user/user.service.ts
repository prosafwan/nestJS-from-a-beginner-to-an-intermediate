import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    {
      id: 1,
      name: 'Safwan Alamgir',
      age: 25,
      phone: '01711111111',
      email: 'safwan@example.com',
    },
    {
      id: 2,
      name: 'Sumon Shekh',
      age: 30,
      phone: '01722222222',
      email: 'sumon@example.com',
    },
    {
      id: 3,
      name: 'Kamrul Hasan',
      age: 28,
      phone: '01733333333',
      email: 'kamrul@example.com',
    },
    {
      id: 4,
      name: 'Asa Rahman',
      age: 35,
      phone: '01744444444',
      email: 'asa@example.com',
    },
  ];
  getUsers() {
    return this.users;
  }
  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
  getUserByIdAndAge(id: number, age: number) {
    return this.users.find((user) => user.id === id && user.age === age);
  }
  getUserByIdPhoneEmail(id: number, phone: string, email: string) {
    return this.users.find(
      (user) => user.id === id && user.phone === phone && user.email === email,
    );
  }
  getUsersByFilter(filter: { age?: number; phone?: string; email?: string }) {
    return this.users.filter((user) => {
      return (
        (filter.age === undefined || user.age === filter.age) &&
        (filter.phone === undefined || user.phone === filter.phone) &&
        (filter.email === undefined || user.email === filter.email)
      );
    });
  }
}
