import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({
    name: "USERS"
})
export class User {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email:string;

    @Column()
    passwordHash:string;

    @Column()
    passwordSalt:string;

    @Column({nullable: true})       
    pictureUrl: string;

    @Column({default: false})
    isAdmin: boolean;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp'})
    lastUpdatedAt: Date;

}