import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@Entity()
export class User {
  @Column({ type: "varchar", length: 255, unique: true, nullable: false })
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100, default: 1 })
  status: number;

  @Column({ type: "varchar", length: 100, unique: false, nullable: false })
  email: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  first_name: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  last_name: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  password: string;

  @CreateDateColumn({ type: "timestamp", nullable: true })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", nullable: true })
  updated_at: Date;

  @DeleteDateColumn({ type: "timestamp", nullable: true })
  deleted_at: Date;
}
