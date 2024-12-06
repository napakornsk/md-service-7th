import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from 'typeorm';
  
@Entity({ name: 'f1_e11' })
export class MrgF1E11 {
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true, comment: 'PK' })
    id: number;
  
    @Column({ type: 'varchar', length: 255, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_general_ci' })
    order_branch: string;
  
    @Column({ type: 'varchar', length: 255, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_general_ci' })
    type_of_maritime_transport_operator: string;
  
    @Column({ type: 'varchar', length: 255, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_general_ci' })
    company_name: string;
  
    @Column({ type: 'varchar', length: 255, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_general_ci' })
    address_head_office: string;
  
    @Column({ type: 'int', unsigned: true, nullable: true })
    province: number;
  
    @Column({ type: 'int', unsigned: true, nullable: true })
    district: number;
  
    @Column({ type: 'int', unsigned: true, nullable: true })
    sub_district: number;
  
    @Column({ type: 'varchar', length: 255, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_general_ci' })
    zip_code_head_office: string;
  
    @Column({ type: 'varchar', length: 255, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_general_ci' })
    phone_number: string;
  
    @Column({ type: 'varchar', length: 255, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_general_ci' })
    fax_number: string;
  
    @Column({ type: 'varchar', length: 255, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_general_ci' })
    email: string;
  
    @Column({ type: 'decimal', precision: 11, scale: 2, nullable: true })
    share_capital: number;
  
    @Column({ type: 'decimal', precision: 11, scale: 2, nullable: true })
    share_payed: number;
  
    @Column({ type: 'varchar', length: 255, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_general_ci' })
    address_current: string;
  
    @Column({ type: 'int', unsigned: true, nullable: true })
    prov_code: number;
  
    @Column({ type: 'int', unsigned: true, nullable: true })
    amphur_code: number;
  
    @Column({ type: 'int', unsigned: true, nullable: true })
    tambon_code: number;
  
    @Column({ type: 'varchar', length: 255, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_general_ci' })
    zip_code_current: string;
  
    @Column({ type: 'varchar', length: 255, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_general_ci' })
    branch_office_address: string;
  
    @Column({ type: 'date', nullable: true })
    start_appointment_mrg1: Date;
  
    @Column({ type: 'date', nullable: true })
    end_appointment_mrg1: Date;
  
    @Column({ type: 'varchar', length: 255, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_general_ci' })
    detail_appointment_mrg1: string;
  
    @Column({ type: 'varchar', length: 255, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_general_ci' })
    table_of_contents: string;
  
    @Column({ type: 'varchar', length: 255, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_general_ci' })
    result_detail_mrg1: string;
  
    @Column({ type: 'varchar', length: 255, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_general_ci' })
    result_detail_mrg1_1: string;
  
    @Column({ type: 'varchar', length: 255, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_general_ci' })
    remark_mrg_f1: string;

    @Column({ type: 'varchar', length: 150, nullable: true })
    mrg_number: string;
}
