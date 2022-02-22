import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('accounts')
export class Accounts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  name: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: true })
  secret: string;

  @Column({ nullable: false, default: 1 })
  type: number;

  @Column({ nullable: false, default: 0 })
  premium_ends_at: number;

  @Column({ nullable: false, default: '' })
  email: string;

  @Column({ nullable: false, default: 0 })
  creation: number;
}
