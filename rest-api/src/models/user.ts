import { CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({
    name: "USERS"
})
export class User {
    
    @PrimaryGeneratedColumn()
    id: number;


    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp'})
    lastUpdatedAt: Date;

}