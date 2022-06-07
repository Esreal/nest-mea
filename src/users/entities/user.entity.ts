import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'users',
    // synchronize: false,
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column({ type: 'varchar', length: 200, unique: true})
  email: string;

  @Column({ select: false})
  password: string;

  @Column({ default: 'member' })
  permission: string;
}