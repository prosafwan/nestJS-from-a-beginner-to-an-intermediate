import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'Safwan', class: 7, section: 'A', roll: 1 },
    { id: 2, name: 'Sumon', class: 7, section: 'A', roll: 2 },
    { id: 3, name: 'Kamrul', class: 7, section: 'A', roll: 3 },
    { id: 4, name: 'Asa', class: 7, section: 'A', roll: 4 },
    { id: 5, name: 'Rafi', class: 7, section: 'A', roll: 5 },
  ];

  getAllStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    const student = this.students.find((s) => s.id === id);
    if (!student)
      throw new NotFoundException(`Student with ID ${id} not found`);
    return student;
  }

  createStudent(data: {
    name: string;
    class: number;
    section: string;
    roll: number;
  }) {
    const newStudent = {
      id: this.students.length + 1,
      ...data,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(
    id: number,
    data: { name?: string; class?: number; section?: string; roll?: number },
  ) {
    const studentIndex = this.students.findIndex((s) => s.id === id);
    // console.log(studentIndex);
    if (studentIndex === -1)
      throw new NotFoundException(`Student with ID ${id} not found`);
    const updatedStudent = {
      ...this.students[studentIndex],
      ...data,
    };
    this.students[studentIndex] = updatedStudent;
    return updatedStudent;
  }

  patchStudent(
    id: number,
    data: Partial<{
      name: string;
      class: number;
      section: string;
      roll: number;
    }>,
  ) {
    const student = this.getStudentById(id);
    Object.assign(student, data);
    return student;
  }

  deleteStudent(id: number) {
    const studentIndex = this.students.findIndex((s) => s.id === id);
    if (studentIndex === -1)
      throw new NotFoundException(`Student with ID ${id} not found`);
    const deletedStudent = this.students.splice(studentIndex, 1);
    return {
      message: `Student with ID ${id} deleted successfully`,
      student: deletedStudent[0],
    };
  }
}
