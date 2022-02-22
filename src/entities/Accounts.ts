import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('accounts')
export class Accounts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  password: string;

  @Column()
  secret: string;

  @Column()
  type: number;

  @Column()
  premium_ends_at: number;

  @Column()
  email: string;

  @Column()
  creation: number;
}
