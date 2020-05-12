import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Maratona {
   @PrimaryGeneratedColumn('uuid')
   id: number;

   @Column('text')
   aula: string;
}